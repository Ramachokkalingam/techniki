"use client";

import { useEffect, useRef } from "react";

/**
 * Magnetic field background (replaces the old particle-network background).
 *
 * A staggered lattice of tiny needles behaves like iron filings around a magnet.
 * The cursor is a rotating magnetic dipole, so needles bend into real dipole
 * field lines around it and heat from indigo to amber (the brand colours) as they
 * get close. Click / tap releases a shockwave that twists the field.
 * With no pointer (phones, idle desktop) a ghost magnet drifts on its own.
 *
 * It renders inside the existing .site-bg wrapper, so the aurora glows,
 * the warm yellow light and the vignette defined in globals.css still apply.
 */

type Ripple = { x: number; y: number; t: number };

const SPACING = 30;          // distance between needles on laptops / desktops (px)
const SPACING_COMPACT = 40;  // phones and tablets: ~45% fewer needles to animate
const FRAME_MS = 1000 / 61;  // desktop frame cap (keeps 120/144 Hz screens from burning power)
const FRAME_MS_COMPACT = 1000 / 31; // phones: 30 fps is plenty for slow drifting needles
const REACH = 300;           // how far the magnet influences needles (px)
const RIPPLE_LIFE = 2200;    // ms
const RIPPLE_SPEED = 0.55;   // px per ms
const IDLE_AFTER = 3000;     // ms of no pointer movement before the ghost magnet takes over

const BASE: [number, number, number] = [129, 140, 248];  // indigo
const MID: [number, number, number] = [251, 191, 36];    // amber
const HOT: [number, number, number] = [249, 115, 22];    // orange

const mix = (a: number[], b: number[], t: number) =>
  `${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(a[2] + (b[2] - a[2]) * t)}`;

export default function FieldBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Phones / tablets (touch or narrow screens) get a lighter version of the effect.
    let compact = false;
    let spacing = SPACING;
    let w = 0, h = 0, cols = 0, rows = 0, raf = 0;
    let lastDraw = 0;
    let angles = new Float32Array(0);
    const ripples: Ripple[] = [];
    const ptr = { x: 0, y: 0, active: false, last: 0 };
    const magnet = { x: 0, y: 0 };

    const draw = (now: number, dt = 16.7) => {
      // Frame-rate independent easing: same feel at 30, 60 or 144 fps.
      const frames = Math.min(dt, 100) / 16.667;
      const magnetEase = 1 - Math.pow(0.91, frames);
      const needleEase = 1 - Math.pow(0.84, frames);

      const idle = !ptr.active || now - ptr.last > IDLE_AFTER;
      const tx = idle ? w * (0.5 + 0.32 * Math.sin(now * 0.00023)) : ptr.x;
      const ty = idle ? h * (0.5 + 0.28 * Math.sin(now * 0.00031 + 1.3)) : ptr.y;
      magnet.x += (tx - magnet.x) * magnetEase;
      magnet.y += (ty - magnet.y) * magnetEase;

      // dipole axis rotates slowly
      const axis = now * 0.0004;
      const mx = Math.cos(axis), my = Math.sin(axis);

      ctx.clearRect(0, 0, w, h);

      // soft warm glow under the magnet
      const g = ctx.createRadialGradient(magnet.x, magnet.y, 0, magnet.x, magnet.y, REACH * 1.1);
      g.addColorStop(0, "rgba(251,146,60,0.11)");
      g.addColorStop(1, "rgba(251,146,60,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      while (ripples.length && now - ripples[0].t > RIPPLE_LIFE) ripples.shift();

      const sigma2 = 2 * (REACH * 0.5) * (REACH * 0.5);
      const hot: number[] = [];

      ctx.lineCap = "round";
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${BASE.join(",")},0.2)`;
      ctx.beginPath();

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cx = c * spacing + (r & 1 ? spacing / 2 : 0) - spacing / 2;
          const cy = r * spacing - spacing / 2;
          const i = r * cols + c;

          const dx = cx - magnet.x, dy = cy - magnet.y;
          const d2 = dx * dx + dy * dy;
          const d = Math.sqrt(d2) || 1;
          const inf = Math.exp(-d2 / sigma2);

          // ambient drifting flow
          const flow = 1.4 * (Math.sin(cx * 0.0045 + now * 0.00025) + Math.cos(cy * 0.0055 - now * 0.0002));

          // magnetic dipole field direction: B = 3(m.r)r - m
          const rx = dx / d, ry = dy / d;
          const md = mx * rx + my * ry;
          const dip = Math.atan2(3 * md * ry - my, 3 * md * rx - mx);

          // needles are headless, so blend in double-angle space
          const vx = Math.cos(2 * flow) * (1 - inf) + Math.cos(2 * dip) * inf;
          const vy = Math.sin(2 * flow) * (1 - inf) + Math.sin(2 * dip) * inf;
          let target = Math.atan2(vy, vx) / 2;

          // shockwave rings twist the field as they pass
          let wave = 0;
          for (let k = 0; k < ripples.length; k++) {
            const rp = ripples[k];
            const age = now - rp.t;
            const dist = Math.hypot(cx - rp.x, cy - rp.y);
            const band = Math.exp(-Math.pow(dist - age * RIPPLE_SPEED, 2) / (2 * 55 * 55));
            wave += band * (1 - age / RIPPLE_LIFE);
          }
          wave = Math.min(wave, 1);
          target += wave * Math.PI * 0.5;

          // ease toward target along the shortest turn (needle period is pi)
          let diff = target - angles[i];
          diff = ((((diff + Math.PI / 2) % Math.PI) + Math.PI) % Math.PI) - Math.PI / 2;
          angles[i] += diff * (reduceMotion ? 1 : needleEase);

          const e = Math.min(1, inf * 1.1 + wave);
          const a = angles[i];

          if (e < 0.08) {
            const half = 4.5;
            ctx.moveTo(cx - Math.cos(a) * half, cy - Math.sin(a) * half);
            ctx.lineTo(cx + Math.cos(a) * half, cy + Math.sin(a) * half);
          } else {
            hot.push(cx, cy, a, e);
          }
        }
      }
      ctx.stroke();

      // needles near the magnet: longer, thicker, warmer
      for (let n = 0; n < hot.length; n += 4) {
        const cx = hot[n], cy = hot[n + 1], a = hot[n + 2], e = hot[n + 3];
        const half = 4.5 + e * 7;
        const col = e < 0.5 ? mix(BASE, MID, e * 2) : mix(MID, HOT, (e - 0.5) * 2);
        ctx.strokeStyle = `rgba(${col},${0.2 + e * 0.75})`;
        ctx.lineWidth = 1 + e * 1.3;
        ctx.beginPath();
        ctx.moveTo(cx - Math.cos(a) * half, cy - Math.sin(a) * half);
        ctx.lineTo(cx + Math.cos(a) * half, cy + Math.sin(a) * half);
        ctx.stroke();
      }
    };

    const resize = () => {
      const nextW = window.innerWidth;
      const nextH = window.innerHeight;
      // Mobile URL-bar show/hide only changes the height a little: ignore it.
      if (w && Math.abs(nextW - w) < 1 && Math.abs(nextH - h) < 120) return;

      compact =
        nextW < 768 || window.matchMedia("(hover: none), (pointer: coarse)").matches;
      spacing = compact ? SPACING_COMPACT : SPACING;
      const dpr = Math.min(window.devicePixelRatio || 1, compact ? 1.25 : 1.5);
      w = nextW;
      h = nextH;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / spacing) + 2;
      rows = Math.ceil(h / spacing) + 2;
      angles = new Float32Array(cols * rows);
      if (!magnet.x) { magnet.x = w * 0.6; magnet.y = h * 0.4; }
      if (reduceMotion) draw(0);
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const dt = now - lastDraw;
      // Skip frames above the cap. The 1 ms slack stops a 60 Hz screen from
      // dropping every other frame because of timer jitter.
      if (dt < (compact ? FRAME_MS_COMPACT : FRAME_MS) - 1) return;
      lastDraw = now;
      draw(now, dt);
    };

    // Stop drawing completely while the tab is in the background.
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      if (!document.hidden && !reduceMotion) {
        lastDraw = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };

    const onMove = (e: PointerEvent) => {
      ptr.x = e.clientX;
      ptr.y = e.clientY;
      ptr.active = true;
      ptr.last = performance.now();
    };
    const onDown = (e: PointerEvent) => {
      onMove(e);
      ripples.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (ripples.length > 6) ripples.shift();
    };
    const onLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) ptr.active = false;
    };

    resize();
    window.addEventListener("resize", resize);

    if (!reduceMotion) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onDown, { passive: true });
      document.addEventListener("mouseout", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
      lastDraw = performance.now();
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("mouseout", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="site-bg" aria-hidden="true">
      <div className="site-bg__aurora site-bg__aurora--a" />
      <div className="site-bg__aurora site-bg__aurora--b" />
      <div className="site-bg__aurora site-bg__aurora--c" />
      <canvas ref={ref} className="site-bg__canvas" />
      <div className="site-bg__vignette" />
    </div>
  );
}
