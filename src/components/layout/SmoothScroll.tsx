'use client';

import { useEffect } from 'react';

/**
 * Inertial mouse-wheel scrolling.
 *
 * Wheel input moves a *target* position; the real scroll position chases it
 * with exponential easing:
 *
 *     current += (target - current) * (1 - e^(-dt * DAMPING))
 *
 * which is frame-rate independent (same feel at 60 Hz and 144 Hz) and gives the
 * soft "glide and settle" movement. Only the wheel is intercepted; everything
 * else stays native:
 *   - touch screens, keyboard, scrollbar drag, anchor links, find-in-page
 *   - wheel over a scrollable box that can still scroll (textarea, modal list)
 *   - pinch / ctrl+wheel zoom
 *   - people who asked the OS for reduced motion
 *
 * To turn it off, delete <SmoothScroll /> from layout.tsx.
 */
const DAMPING = 11; // 1/s. Higher = tighter and quicker, lower = floatier.

export default function SmoothScroll() {
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) return;

    let target = window.scrollY;
    let current = target;
    let raf = 0;
    let last = 0;
    let driving = false;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

    const canScrollInside = (start: Element | null, dy: number) => {
      let el: Element | null = start;
      while (el && el !== document.body && el !== document.documentElement) {
        const oy = getComputedStyle(el).overflowY;
        if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight) {
          const atTop = el.scrollTop <= 0;
          const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
          if ((dy < 0 && !atTop) || (dy > 0 && !atBottom)) return true;
        }
        el = el.parentElement;
      }
      return false;
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      current += (target - current) * (1 - Math.exp(-dt * DAMPING));
      if (Math.abs(target - current) < 0.4) {
        current = target;
        driving = false;
      }
      // "instant": the page has CSS scroll-behavior: smooth, which would otherwise
      // animate every one of these per-frame jumps and make them lag.
      window.scrollTo({ top: current, behavior: 'instant' });
      if (driving) raf = requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.defaultPrevented) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // horizontal gesture
      if (document.body.style.overflow === 'hidden') return; // a modal locked the page

      const dy =
        e.deltaMode === 1 ? e.deltaY * 34 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
      if (canScrollInside(e.target as Element | null, dy)) return;

      e.preventDefault();
      if (!driving) {
        current = window.scrollY; // re-sync after any native scrolling
        target = current;
      }
      target = Math.min(Math.max(target + dy, 0), Math.max(0, maxScroll()));
      if (!driving) {
        driving = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    // Native scrolling (keys, scrollbar, anchors, route changes) keeps us in sync.
    const onScroll = () => {
      if (!driving) {
        current = window.scrollY;
        target = current;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
