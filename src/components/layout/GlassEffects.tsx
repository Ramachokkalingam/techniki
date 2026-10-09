'use client';

import { useEffect } from 'react';

/**
 * Pointer "specular light" for glass cards.
 *
 * Sets --mx / --my (px, relative to the hovered card) which the CSS in
 * globals.css uses to place a soft highlight behind the card content.
 *
 * Smoothing is frame-rate independent exponential decay:
 *     p += (target - p) * (1 - e^(-dt / tau))
 * so it feels identical at 60 Hz and 144 Hz.
 *
 * Performance notes:
 *  - one passive pointermove listener on document (event delegation)
 *  - the pointer handler only stores coordinates; layout is read and style is
 *    written once per animation frame
 *  - the rAF loop stops as soon as the light has caught up with the pointer,
 *    so nothing runs while the mouse is still or off a card
 *  - skipped entirely on touch devices and for prefers-reduced-motion
 */
const TAU_MS = 90; // smoothing time-constant: lower = snappier, higher = floatier
const EPSILON_PX = 0.35; // stop animating when closer than this

export default function GlassEffects() {
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reduceMotion) return;

    let card: HTMLElement | null = null;
    let clientX = 0;
    let clientY = 0;
    let x = 0;
    let y = 0;
    let snap = false;
    let raf = 0;
    let last = 0;

    const step = (now: number) => {
      raf = 0;
      if (!card) return;

      const rect = card.getBoundingClientRect(); // one layout read per frame
      const tx = clientX - rect.left;
      const ty = clientY - rect.top;

      if (snap) {
        x = tx;
        y = ty;
        snap = false;
      } else {
        const dt = Math.min(now - last, 64); // clamp after tab switches / hitches
        const a = 1 - Math.exp(-dt / TAU_MS);
        x += (tx - x) * a;
        y += (ty - y) * a;
      }
      last = now;

      card.style.setProperty('--mx', `${x.toFixed(1)}px`);
      card.style.setProperty('--my', `${y.toFixed(1)}px`);

      if (Math.hypot(tx - x, ty - y) > EPSILON_PX) {
        raf = requestAnimationFrame(step);
      }
    };

    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const next = (target?.closest?.('.glass-card, .glass-panel') as HTMLElement | null) ?? null;
      if (!next) return;

      if (next !== card) {
        card = next;
        snap = true; // jump to the pointer when entering a new card
      }
      clientX = e.clientX;
      clientY = e.clientY;
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
