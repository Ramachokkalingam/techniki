'use client';

import { useEffect, useRef } from 'react';

/**
 * Polygon-mesh background ("plexus").
 *
 * A cloud of nodes floats in 3D. Nodes that are close on screen are joined by
 * thin lines, and any three mutually-joined nodes get a faint triangular facet,
 * which gives the low-poly look. Everything is drawn on one 2D canvas.
 *
 * How it reacts
 *   pointer  : the whole mesh tilts toward the cursor (yaw / pitch), nodes near
 *              the cursor are pulled toward it like a lens, and lines connect
 *              them to it
 *   scroll   : nodes slide at different speeds by depth (parallax) and wrap
 *              around vertically, so the mesh never runs out; fast scrolling
 *              also spins the mesh slightly
 *   click    : a ring spreads out and nearby nodes swell and settle back
 *
 * Maths
 *   perspective      s = F / (F + z)                    X = cx + x * s
 *   yaw / pitch      standard 2D rotations about the scene centre
 *   smoothing        v += (target - v) * (1 - e^(-dt * k))   (frame-rate independent)
 *   link strength    a = (1 - d / L)^1.5 * fog            (soft falloff, no popping)
 *   depth fog        fog = 1 - (z + R) / (2.6 R)
 *
 * Performance: pairs are tested on typed arrays reused every frame, lines and
 * facets are batched by opacity (a handful of strokes/fills instead of
 * hundreds), the canvas is capped at 1.5x pixel ratio, the loop pauses in
 * background tabs, and it sheds nodes automatically if frames get slow.
 */

type MeshNode = {
  x: number;
  y: number;
  z: number;
  ax: number; // drift amplitudes
  ay: number;
  az: number;
  p1: number; // drift phases
  p2: number;
  p3: number;
  r: number;
  near: number; // 0 (far) .. 1 (near), used for scroll parallax
};

type Ring = { x: number; y: number; t: number };

const MAXN = 200;
const FOCAL = 1100;
const ZR = 380;
const LINK = 175;
const LEVELS = 6;
const TRI_LEVELS = 4;
const POINTER_R = 210;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const root = canvas.parentElement as HTMLElement | null;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let worldW = 0;
    let worldH = 0;
    let nodes: MeshNode[] = [];
    let raf = 0;
    let last = 0;
    let running = false;
    let t = 0;

    const pointer = { x: 0, y: 0, sx: 0, sy: 0, active: false };
    const par = { x: 0, y: 0 }; // smoothed pointer, -1..1
    const scrollTarget = { v: window.scrollY };
    let scrollSmooth = scrollTarget.v;
    let lastScrollY = scrollTarget.v;
    let warp = 0; // smoothed scroll velocity, -1..1
    let prog = 0; // page progress 0..1
    let lastSy = -1;
    const rings: Ring[] = [];

    // Reused every frame
    const sx = new Float32Array(MAXN);
    const sy = new Float32Array(MAXN);
    const ss = new Float32Array(MAXN);
    const sf = new Float32Array(MAXN);
    const sz = new Float32Array(MAXN);
    const vis = new Uint8Array(MAXN);
    const pulse = new Float32Array(MAXN);
    const adj = new Float32Array(MAXN * MAXN);
    const buckets: number[][] = Array.from({ length: LEVELS }, () => []);
    const tris: number[][] = Array.from({ length: TRI_LEVELS }, () => []);

    // Adaptive quality
    let ema = 16.7;
    let slowMs = 0;
    let downgrades = 0;

    const makeNodes = () => {
      const visible = clamp(Math.round((w * h) / 15000), 26, 80);
      const count = Math.min(MAXN, Math.round(visible * 2 * (coarse ? 0.6 : 1)));
      worldW = w * 1.4;
      worldH = Math.max(h * 2, 1200);
      nodes = Array.from({ length: count }, () => {
        const z = (Math.random() * 2 - 1) * ZR;
        const big = Math.random() < 0.07; // a few large nodes, like the reference
        return {
          x: (Math.random() - 0.5) * worldW,
          y: (Math.random() - 0.5) * worldH,
          z,
          ax: 14 + Math.random() * 34,
          ay: 14 + Math.random() * 34,
          az: 10 + Math.random() * 30,
          p1: Math.random() * Math.PI * 2,
          p2: Math.random() * Math.PI * 2,
          p3: Math.random() * Math.PI * 2,
          r: big ? 3.8 + Math.random() * 2.6 : 1.1 + Math.random() * 1.7,
          near: (ZR - z) / (2 * ZR),
        };
      });
      pulse.fill(0);
      downgrades = 0;
    };

    const render = (dt: number) => {
      t += dt;

      // ---- smoothing -------------------------------------------------------
      const follow = 1 - Math.exp(-dt * 14);
      pointer.sx += (pointer.x - pointer.sx) * follow;
      pointer.sy += (pointer.y - pointer.sy) * follow;
      scrollSmooth += (scrollTarget.v - scrollSmooth) * (1 - Math.exp(-dt * 8));

      const vel = (scrollTarget.v - lastScrollY) / Math.max(dt, 0.001);
      lastScrollY = scrollTarget.v;
      warp += (clamp(vel / 1800, -1, 1) - warp) * (1 - Math.exp(-dt * 6));

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      prog = maxScroll > 0 ? clamp(scrollSmooth / maxScroll, 0, 1) : 0;

      const pk = 1 - Math.exp(-dt * 3);
      par.x += ((pointer.active ? (pointer.x / w) * 2 - 1 : 0) - par.x) * pk;
      par.y += ((pointer.active ? (pointer.y / h) * 2 - 1 : 0) - par.y) * pk;

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

      // ---- project every node ---------------------------------------------
      const yaw = Math.sin(t * 0.11) * 0.14 + par.x * 0.34 + warp * 0.2;
      const pitch = par.y * 0.16 + Math.sin(t * 0.08 + 1) * 0.04;
      const cyaw = Math.cos(yaw);
      const syaw = Math.sin(yaw);
      const cpit = Math.cos(pitch);
      const spit = Math.sin(pitch);
      const cx = w / 2;
      const cy = h / 2;
      const n = nodes.length;
      const decay = Math.exp(-dt * 3);

      for (let i = 0; i < n; i++) {
        const o = nodes[i];
        const x = o.x + Math.sin(t * 0.23 + o.p1) * o.ax;
        let y = o.y + Math.sin(t * 0.19 + o.p2) * o.ay;
        const z = o.z + Math.sin(t * 0.17 + o.p3) * o.az;

        // scroll parallax: near nodes travel further than far ones, then wrap
        y -= scrollSmooth * (0.2 + 0.6 * o.near);
        y = ((((y + worldH / 2) % worldH) + worldH) % worldH) - worldH / 2;

        const x1 = x * cyaw + z * syaw;
        const z1 = -x * syaw + z * cyaw;
        const y2 = y * cpit - z1 * spit;
        const z2 = y * spit + z1 * cpit;

        const depth = FOCAL + z2 + ZR * 0.6;
        if (depth < 200) {
          vis[i] = 0;
          continue;
        }
        const s = clamp(FOCAL / depth, 0.35, 2.2);
        let X = cx + x1 * s;
        let Y = cy + y2 * s;

        // lens: nodes near the pointer lean toward it
        if (pointer.active) {
          const dx = pointer.sx - X;
          const dy = pointer.sy - Y;
          const d = Math.hypot(dx, dy);
          if (d < POINTER_R) {
            const k = (1 - d / POINTER_R) ** 2 * 0.16;
            X += dx * k;
            Y += dy * k;
          }
        }

        sx[i] = X;
        sy[i] = Y;
        ss[i] = s;
        sz[i] = z2;
        sf[i] = clamp(1 - (z2 + ZR) / (2.6 * ZR), 0.12, 1);
        vis[i] = X > -60 && X < w + 60 && Y > -60 && Y < h + 60 ? 1 : 0;
        pulse[i] *= decay;
      }

      // ---- draw -------------------------------------------------------------
      ctx.clearRect(0, 0, w, h);
      const hue = 205 + prog * 55; // ice blue at the top of the page -> violet at the bottom

      if (pointer.active) {
        const g = ctx.createRadialGradient(pointer.sx, pointer.sy, 0, pointer.sx, pointer.sy, 280);
        g.addColorStop(0, `hsla(${hue.toFixed(0)}, 95%, 70%, 0.16)`);
        g.addColorStop(1, `hsla(${hue.toFixed(0)}, 95%, 70%, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(pointer.sx - 280, pointer.sy - 280, 560, 560);
      }

      // pairs -> links + adjacency for facets
      adj.fill(0, 0, n * MAXN);
      for (const b of buckets) b.length = 0;
      for (let i = 0; i < n; i++) {
        if (!vis[i]) continue;
        for (let j = i + 1; j < n; j++) {
          if (!vis[j]) continue;
          const dx = sx[i] - sx[j];
          const dy = sy[i] - sy[j];
          const lim = LINK * (ss[i] + ss[j]) * 0.5;
          const d2 = dx * dx + dy * dy;
          if (d2 >= lim * lim) continue;
          if (Math.abs(sz[i] - sz[j]) > 300) continue;
          const k = 1 - Math.sqrt(d2) / lim;
          const a = k * Math.sqrt(k) * (sf[i] + sf[j]) * 0.5;
          adj[i * MAXN + j] = a;
          const lv = Math.min(LEVELS - 1, Math.floor(a * LEVELS));
          buckets[lv].push(sx[i], sy[i], sx[j], sy[j]);
        }
      }

      // facets: three nodes that are all linked to each other
      for (const b of tris) b.length = 0;
      for (let i = 0; i < n; i++) {
        if (!vis[i]) continue;
        for (let j = i + 1; j < n; j++) {
          const aij = adj[i * MAXN + j];
          if (aij <= 0.02) continue;
          for (let k = j + 1; k < n; k++) {
            const aik = adj[i * MAXN + k];
            if (aik <= 0.02) continue;
            const ajk = adj[j * MAXN + k];
            if (ajk <= 0.02) continue;
            const m = Math.min(aij, aik, ajk);
            const lv = Math.min(TRI_LEVELS - 1, Math.floor(m * TRI_LEVELS));
            tris[lv].push(sx[i], sy[i], sx[j], sy[j], sx[k], sy[k]);
          }
        }
      }
      for (let lv = 0; lv < TRI_LEVELS; lv++) {
        const b = tris[lv];
        if (!b.length) continue;
        ctx.fillStyle = `hsla(${(hue + 8).toFixed(0)}, 90%, 80%, ${(0.022 + lv * 0.03).toFixed(3)})`;
        ctx.beginPath();
        for (let q = 0; q < b.length; q += 6) {
          ctx.moveTo(b[q], b[q + 1]);
          ctx.lineTo(b[q + 2], b[q + 3]);
          ctx.lineTo(b[q + 4], b[q + 5]);
          ctx.closePath();
        }
        ctx.fill();
      }

      ctx.lineWidth = 1;
      for (let lv = 0; lv < LEVELS; lv++) {
        const b = buckets[lv];
        if (!b.length) continue;
        ctx.strokeStyle = `hsla(${hue.toFixed(0)}, 70%, 92%, ${(0.07 + (lv / (LEVELS - 1)) * 0.5).toFixed(3)})`;
        ctx.beginPath();
        for (let q = 0; q < b.length; q += 4) {
          ctx.moveTo(b[q], b[q + 1]);
          ctx.lineTo(b[q + 2], b[q + 3]);
        }
        ctx.stroke();
      }

      // pointer -> node links
      if (pointer.active) {
        for (let i = 0; i < n; i++) {
          if (!vis[i]) continue;
          const d = Math.hypot(sx[i] - pointer.sx, sy[i] - pointer.sy);
          if (d >= POINTER_R) continue;
          const k = 1 - d / POINTER_R;
          ctx.strokeStyle = `hsla(${(hue - 10).toFixed(0)}, 95%, 82%, ${(k * k * 0.8 * sf[i]).toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(pointer.sx, pointer.sy);
          ctx.lineTo(sx[i], sy[i]);
          ctx.stroke();
        }
      }

      // click rings
      for (const r of rings) {
        const e = 1 - (1 - r.t) ** 3;
        ctx.strokeStyle = `rgba(200, 220, 255, ${((1 - r.t) * 0.6).toFixed(3)})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(r.x, r.y, e * 260, 0, Math.PI * 2);
        ctx.stroke();
      }

      // nodes: halo, then a bright core
      for (let i = 0; i < n; i++) {
        if (!vis[i]) continue;
        const o = nodes[i];
        const f = sf[i];
        const rad = o.r * ss[i] * (1 + pulse[i] * 1.1);
        ctx.fillStyle = `rgba(190, 215, 255, ${(0.1 * f * (1 + pulse[i])).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(sx[i], sy[i], rad * 4.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${(215 + 40 * f).toFixed(0)}, ${(228 + 27 * f).toFixed(0)}, 255, ${(0.35 + 0.6 * f).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(sx[i], sy[i], rad, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const resize = () => {
      const nextW = window.innerWidth;
      const nextH = window.innerHeight;
      // Mobile URL-bar show/hide only changes the height a little: ignore it.
      if (w && Math.abs(nextW - w) < 1 && Math.abs(nextH - h) < 120) return;

      w = nextW;
      h = nextH;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      makeNodes();
      if (!running) render(0);
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const raw = now - last;
      const dt = Math.min(raw / 1000, 0.05);
      last = now;

      // If the device cannot hold ~40 fps for 1.5 s, drop 20% of the nodes (max 3 times).
      if (raw < 250) {
        ema += (raw - ema) * 0.06;
        slowMs = ema > 25 ? slowMs + raw : 0;
        if (slowMs > 1500 && downgrades < 3 && nodes.length > 40) {
          nodes.length = Math.max(40, Math.round(nodes.length * 0.8));
          downgrades++;
          slowMs = 0;
        }
      }
      render(dt);
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
        pointer.sx = e.clientX;
        pointer.sy = e.clientY;
      }
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) pointer.active = false;
    };

    const onPointerDown = (e: PointerEvent) => {
      rings.push({ x: e.clientX, y: e.clientY, t: 0 });
      if (rings.length > 6) rings.shift();
      for (let i = 0; i < nodes.length; i++) {
        if (!vis[i]) continue;
        const d = Math.hypot(sx[i] - e.clientX, sy[i] - e.clientY);
        if (d < 320) pulse[i] = Math.max(pulse[i], 1 - d / 320);
      }
    };

    const onScroll = () => {
      scrollTarget.v = window.scrollY;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    resize();
    if (!reduceMotion) {
      start();
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerdown', onPointerDown, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });
      document.addEventListener('mouseout', onMouseOut);
    }
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mouseout', onMouseOut);
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
