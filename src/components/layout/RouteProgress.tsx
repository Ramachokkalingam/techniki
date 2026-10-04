'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Instant navigation feedback.
 *
 * The moment an internal link is pressed (pointerdown, not click, so ~100 ms
 * earlier) a gradient bar appears and starts creeping forward. When the new
 * route has rendered it snaps to 100% and fades out.
 *
 * The creep is an exponential approach to 90%, frame-rate independent:
 *     p += (0.9 - p) * (1 - e^(-dt * k))
 * so it moves fast at first and never "finishes" before the page does.
 */
const K = 1.6; // approach rate (1/s)
const CEILING = 0.9;

export default function RouteProgress() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);
  const state = useRef({ p: 0, raf: 0, last: 0, active: false, hide: 0 });

  const paint = (p: number, opacity: number) => {
    const el = barRef.current;
    if (!el) return;
    el.style.transform = `scaleX(${p.toFixed(4)})`;
    el.style.opacity = String(opacity);
  };

  // Finish whenever the route actually changes.
  useEffect(() => {
    const s = state.current;
    if (!s.active) return;
    cancelAnimationFrame(s.raf);
    s.active = false;
    paint(1, 1);
    window.clearTimeout(s.hide);
    s.hide = window.setTimeout(() => {
      const el = barRef.current;
      if (!el) return;
      el.style.transition = 'opacity 300ms ease-out';
      el.style.opacity = '0';
      window.setTimeout(() => {
        if (!state.current.active && barRef.current) {
          barRef.current.style.transition = '';
          paint(0, 0);
        }
      }, 320);
    }, 120);
  }, [pathname]);

  useEffect(() => {
    const s = state.current;

    const tick = (now: number) => {
      const dt = Math.min((now - s.last) / 1000, 0.1);
      s.last = now;
      s.p += (CEILING - s.p) * (1 - Math.exp(-dt * K));
      paint(s.p, 1);
      s.raf = requestAnimationFrame(tick);
    };

    const start = () => {
      window.clearTimeout(s.hide);
      cancelAnimationFrame(s.raf);
      if (barRef.current) barRef.current.style.transition = '';
      s.active = true;
      s.p = 0.08;
      s.last = performance.now();
      paint(s.p, 1);
      s.raf = requestAnimationFrame(tick);
    };

    const onDown = (e: PointerEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // same page / hash jump
      start();
    };

    // Safety net: if navigation was cancelled, don't leave the bar hanging.
    const onVisible = () => {
      if (document.hidden || !s.active) return;
      window.setTimeout(() => {
        if (s.active && performance.now() - s.last > 15000) {
          cancelAnimationFrame(s.raf);
          s.active = false;
          paint(0, 0);
        }
      }, 15000);
    };

    document.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('visibilitychange', onVisible);
      cancelAnimationFrame(s.raf);
      window.clearTimeout(s.hide);
    };
  }, []);

  return <div ref={barRef} className="route-progress" aria-hidden="true" />;
}
