'use client';

import { useEffect } from 'react';

/**
 * Magnetic hover for the main buttons: while the pointer is over a button it
 * leans a few pixels toward the cursor, then eases back when you leave.
 *
 * One delegated listener for the whole page. The easing itself is a CSS
 * transition (see [data-magnetic] in globals.css), so nothing runs per frame.
 * Skipped on touch screens and for reduced motion.
 */
const SELECTOR = 'a.hero-btn, a.glass-pill, a[class*="bg-gradient-to-r"][class*="rounded-full"]';
const PULL = 0.2; // fraction of the cursor offset the button follows
const MAX = 9; // px

export default function MagneticButtons() {
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) return;

    let active: HTMLElement | null = null;

    const release = () => {
      if (active) active.style.transform = '';
      active = null;
    };

    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(SELECTOR) as HTMLElement | null;
      if (el !== active) release();
      if (!el) return;
      active = el;
      if (!el.hasAttribute('data-magnetic')) el.setAttribute('data-magnetic', '');
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * PULL;
      const dy = (e.clientY - (r.top + r.height / 2)) * PULL;
      const k = Math.min(1, MAX / Math.max(Math.hypot(dx, dy), 0.001));
      el.style.transform = `translate3d(${(dx * k).toFixed(1)}px, ${(dy * k).toFixed(1)}px, 0)`;
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseleave', release);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseleave', release);
      release();
    };
  }, []);

  return null;
}
