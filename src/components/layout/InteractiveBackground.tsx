'use client';

import { useEffect, useRef } from 'react';

/**
 * "Midnight Aurora" background.
 *
 * Three cheap layers, none of which touch WebGL:
 *   1. CSS aurora blobs      - radial gradients drifting with transform only
 *   2. CSS grid + vignette   - static, rasterised once
 *   3. A 2D canvas particle network that reacts to the pointer, clicks and scroll
 *
 * Maths used (all frame-rate independent, so 60 Hz and 144 Hz feel identical):
 *   - Exponential smoothing   p += (target - p) * (1 - e^(-dt * k))
 *   - Pointer force           F = (1 - d / R)^2   (soft falloff, zero at the edge)
 *   - Link opacity            a = (1 - d / L)^2 * 0.28
 *   - Scroll parallax         y' = (y - scroll * depth * 0.12) mod H
 *
 * Performance rules: DPR capped at 1.5, particle count scales with screen area,
 * loop pauses when the tab is hidden, and reduced-motion users get one static frame.
 */

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  bvx: number; // base drift velocity the particle relaxes back to
  bvy: number;
  r: number;
  depth: number; // 0.3 - 1, used for parallax
  fill: string;
  glow: string;
};

type Ring = { x: number; y: number; t: number };

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

const LINK_DIST = 150;
const POINTER_RADIUS = 190;
const POINTER_PUSH = 520; // px/s^2 at the centre of the pointer field
const SWIRL = 0.55; // sideways component of the pointer force (gives a "fluid" feel)
const RELAX = 1.8; // 1/s - how fast velocity returns to the base drift
const LEVELS = 5; // line opacity buckets (one stroke per bucket instead of per line)

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    const particles: Particle[] = [];
    let raf = 0;
    let last = 0;
    let running = false;

    const pointer = { x: 0, y: 0, sx: 0, sy: 0, active: false };
    let scrollTarget = window.scrollY;
    let scrollSmooth = scrollTarget;
    let lastScrollY = scrollTarget;
    let warp = 0; // smoothed scroll velocity, -1..1 (+ = scrolling down)
    let prog = 0; // page progress 0..1, tints the whole field
    const par = { x: 0, y: 0 }; // smoothed pointer position, -1..1, for aurora parallax
    const rings: Ring[] = [];
    const root = canvas.parentElement as HTMLElement | null;
    let lastSy = -1;

    // Reused every frame (the old code allocated two Float32Arrays per frame).
    const px = new Float32Array(128);
    const py = new Float32Array(128);

    // Adaptive quality: exponential moving average of frame time.
    let ema = 16.7;
    let slowMs = 0;
    let downgrades = 0;

    // Preallocated line buckets: [x1, y1, x2, y2, ...] per opacity level.
    const buckets: number[][] = Array.from({ length: LEVELS }, () => []);

    const targetCount = () => {
      const base = (w * h) / 13000;
      const scaled = coarse ? base * 0.6 : base;
      return Math.round(Math.min(110, Math.max(30, scaled)));
    };

    const makeParticle = (x?: number, y?: number): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 6 + Math.random() * 14; // px/s, slow ambient drift
      const bvx = Math.cos(angle) * speed;
      const bvy = Math.sin(angle) * speed;
      // Hue slides from cyan (190) to violet (265) so the field matches the aurora.
      const hue = 190 + Math.random() * 75;
      return {
        x: x ?? Math.random() * w,
        y: y ?? Math.random() * h,
        vx: bvx,
        vy: bvy,
        bvx,
        bvy,
        r: 1.1 + Math.random() * 1.9,
        depth: 0.3 + Math.random() * 0.7,
        fill: `hsla(${hue.toFixed(0)}, 95%, 75%, 0.95)`,
        glow: `hsla(${hue.toFixed(0)}, 95%, 65%, 0.16)`,
      };
    };

    const resize = () => {
      const nextW = window.innerWidth;
      const nextH = window.innerHeight;
      // Mobile browsers fire resize when the URL bar collapses; ignore tiny height changes.
      if (w && Math.abs(nextW - w) < 1 && Math.abs(nextH - h) < 120) return;

      const prevW = w || nextW;
      const prevH = h || nextH;
      w = nextW;
      h = nextH;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Keep existing particles (scaled to the new size) instead of re-rolling them.
      for (const p of particles) {
        p.x = (p.x / prevW) * w;
        p.y = (p.y / prevH) * h;
      }
      const want = targetCount();
      if (particles.length > want) particles.length = want;
      while (particles.length < want) particles.push(makeParticle());

      if (!running) draw(); // keep the static / paused frame correct
    };

    const step = (dt: number) => {
      const relax = 1 - Math.exp(-dt * RELAX);
      const follow = 1 - Math.exp(-dt * 14);
      pointer.sx += (pointer.x - pointer.sx) * follow;
      pointer.sy += (pointer.y - pointer.sy) * follow;
      scrollSmooth += (scrollTarget - scrollSmooth) * (1 - Math.exp(-dt * 8));

      // Scroll velocity -> "warp" (exponentially smoothed, so it eases in and out)
      const vel = (scrollTarget - lastScrollY) / Math.max(dt, 0.001);
      lastScrollY = scrollTarget;
      warp += (clamp(vel / 1800, -1, 1) - warp) * (1 - Math.exp(-dt * 6));

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      prog = maxScroll > 0 ? clamp(scrollSmooth / maxScroll, 0, 1) : 0;

      // Share scroll + pointer with the CSS aurora layers (only when they changed)
      par.x += ((pointer.active ? (pointer.x / w) * 2 - 1 : 0) - par.x) * (1 - Math.exp(-dt * 3));
      par.y += ((pointer.active ? (pointer.y / h) * 2 - 1 : 0) - par.y) * (1 - Math.exp(-dt * 3));
      if (root && (Math.abs(scrollSmooth - lastSy) > 0.5 || Math.abs(par.x) > 0.001 || Math.abs(par.y) > 0.001)) {
        lastSy = scrollSmooth;
        root.style.setProperty('--sy', scrollSmooth.toFixed(1));
        root.style.setProperty('--px', par.x.toFixed(3));
        root.style.setProperty('--py', par.y.toFixed(3));
      }

      for (let i = rings.length - 1; i >= 0; i--) {
        rings[i].t += dt / 0.9;
        if (rings[i].t >= 1) rings.splice(i, 1);
      }

      const margin = 20;
      for (const p of particles) {
        // Ease velocity back toward the ambient drift.
        p.vx += (p.bvx - p.vx) * relax;
        p.vy += (p.bvy - p.vy) * relax;
        p.vy -= warp * 700 * p.depth * dt; // scrolling pulls the field along

        if (pointer.active) {
          const dx = p.x - pointer.sx;
          const dy = p.y - (pointer.sy + scrollSmooth * p.depth * 0.12);
          const d = Math.hypot(dx, dy);
          if (d < POINTER_RADIUS && d > 0.001) {
            const t = 1 - d / POINTER_RADIUS;
            const f = t * t * POINTER_PUSH * dt;
            const nx = dx / d;
            const ny = dy / d;
            p.vx += (nx - ny * SWIRL) * f;
            p.vy += (ny + nx * SWIRL) * f;
          }
        }

        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (p.x < -margin) p.x = w + margin;
        else if (p.x > w + margin) p.x = -margin;
        if (p.y < -margin) p.y = h + margin;
        else if (p.y > h + margin) p.y = -margin;
      }
    };

    const wrapY = (y: number) => ((y % h) + h) % h;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const n = particles.length;
      for (let i = 0; i < n; i++) {
        const p = particles[i];
        px[i] = p.x;
        py[i] = wrapY(p.y - scrollSmooth * p.depth * 0.12);
      }

      // Soft glow under the pointer.
      if (pointer.active) {
        const hue = 190 + prog * 80; // cyan at the top of the page -> violet at the bottom
        const g = ctx.createRadialGradient(pointer.sx, pointer.sy, 0, pointer.sx, pointer.sy, 280);
        g.addColorStop(0, `hsla(${hue.toFixed(0)}, 95%, 65%, 0.2)`);
        g.addColorStop(1, `hsla(${hue.toFixed(0)}, 95%, 65%, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(pointer.sx - 280, pointer.sy - 280, 560, 560);
      }

      // Particle-to-particle links, bucketed by opacity.
      for (const b of buckets) b.length = 0;
      const L2 = LINK_DIST * LINK_DIST;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const dx = px[i] - px[j];
          const dy = py[i] - py[j];
          const d2 = dx * dx + dy * dy;
          if (d2 < L2) {
            const k = 1 - Math.sqrt(d2) / LINK_DIST;
            const level = Math.min(LEVELS - 1, Math.floor(k * k * LEVELS * 1.4));
            buckets[level].push(px[i], py[i], px[j], py[j]);
          }
        }
      }
      ctx.lineWidth = 1;
      for (let lv = 0; lv < LEVELS; lv++) {
        const b = buckets[lv];
        if (!b.length) continue;
        ctx.strokeStyle = `hsla(${(215 + prog * 60).toFixed(0)}, 95%, 75%, ${(0.09 + (lv / (LEVELS - 1)) * 0.34).toFixed(3)})`;
        ctx.beginPath();
        for (let i = 0; i < b.length; i += 4) {
          ctx.moveTo(b[i], b[i + 1]);
          ctx.lineTo(b[i + 2], b[i + 3]);
        }
        ctx.stroke();
      }

      // Links from the pointer to nearby particles.
      if (pointer.active) {
        ctx.lineWidth = 1;
        for (let i = 0; i < n; i++) {
          const dx = px[i] - pointer.sx;
          const dy = py[i] - pointer.sy;
          const d = Math.hypot(dx, dy);
          if (d < POINTER_RADIUS) {
            const t = 1 - d / POINTER_RADIUS;
            ctx.strokeStyle = `hsla(${(190 + prog * 80).toFixed(0)}, 95%, 70%, ${(t * t * 0.7).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(pointer.sx, pointer.sy);
            ctx.lineTo(px[i], py[i]);
            ctx.stroke();
          }
        }
      }

      // Click shock-wave rings
      for (const r of rings) {
        const e = 1 - Math.pow(1 - r.t, 3); // ease-out cubic
        ctx.strokeStyle = `rgba(150, 190, 255, ${((1 - r.t) * 0.55).toFixed(3)})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(r.x, r.y, e * 240, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Soft halo behind each dot, then the dot itself
      for (let i = 0; i < n; i++) {
        const p = particles[i];
        ctx.fillStyle = p.glow;
        ctx.beginPath();
        ctx.arc(px[i], py[i], p.r * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = p.fill;
        ctx.beginPath();
        ctx.arc(px[i], py[i], p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Scroll "warp": short streaks behind the dots while you scroll fast
      if (Math.abs(warp) > 0.04) {
        ctx.lineWidth = 1.3;
        ctx.strokeStyle = `rgba(180, 205, 255, ${(Math.min(1, Math.abs(warp)) * 0.45).toFixed(3)})`;
        ctx.beginPath();
        for (let i = 0; i < n; i++) {
          ctx.moveTo(px[i], py[i]);
          ctx.lineTo(px[i], py[i] + warp * 70 * particles[i].depth);
        }
        ctx.stroke();
      }
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const raw = now - last;
      const dt = Math.min(raw / 1000, 0.05); // clamp after tab switches
      last = now;

      // If the device cannot hold ~40 fps for 1.5 s, shed 20% of the particles
      // (at most 3 times). Fewer particles also means O(n^2) fewer link tests.
      if (raw < 250) {
        ema += (raw - ema) * 0.06;
        slowMs = ema > 25 ? slowMs + raw : 0;
        if (slowMs > 1500 && downgrades < 3 && particles.length > 20) {
          particles.length = Math.max(20, Math.round(particles.length * 0.8));
          downgrades++;
          slowMs = 0;
        }
      }
      step(dt);
      draw();
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!pointer.active) {
        pointer.sx = e.clientX; // snap on entry so the glow doesn't fly across the screen
        pointer.sy = e.clientY;
      }
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const onPointerLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) pointer.active = false;
    };

    // A click sends a radial shock-wave through nearby particles.
    const onPointerDown = (e: PointerEvent) => {
      rings.push({ x: e.clientX, y: e.clientY, t: 0 });
      if (rings.length > 6) rings.shift();
      for (const p of particles) {
        const dx = p.x - e.clientX;
        const dy = p.y - (e.clientY + scrollSmooth * p.depth * 0.12);
        const d = Math.hypot(dx, dy);
        if (d < 260 && d > 0.001) {
          const t = 1 - d / 260;
          p.vx += (dx / d) * t * t * 380;
          p.vy += (dy / d) * t * t * 380;
        }
      }
    };

    const onScroll = () => {
      scrollTarget = window.scrollY;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    resize();
    if (reduceMotion) {
      draw();
    } else {
      start();
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerdown', onPointerDown, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });
      document.addEventListener('mouseout', onPointerLeave);
    }
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mouseout', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <div className="site-bg" aria-hidden="true">
      <div className="site-bg__aurora site-bg__aurora--a" />
      <div className="site-bg__aurora site-bg__aurora--b" />
      <div className="site-bg__aurora site-bg__aurora--c" />
      <div className="site-bg__grid" />
      <canvas ref={canvasRef} className="site-bg__canvas" />
      <div className="site-bg__vignette" />
    </div>
  );
}
