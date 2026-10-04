'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Lightweight scroll reveal for every element that has `data-aos`
 * (the markup the site already uses). It replaces the AOS library, which was
 * only initialised on a single page, so nothing animated anywhere else.
 *
 *  - Only elements that start BELOW the fold are hidden, so nothing flashes
 *    on first paint and nothing visible ever disappears.
 *  - Animates opacity + transform only (compositor friendly).
 *  - After the animation the helper classes are removed, so the element goes
 *    back to being completely ordinary (no leftover transform / stacking
 *    context, hover effects untouched).
 *  - Without JavaScript, or with "reduce motion", nothing is ever hidden.
 */
const REVEAL_MS = 1100; // transition (700) + max delay (400), with headroom

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const seen = new WeakSet<Element>();
    const timers = new Set<number>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.classList.add('rv-in');
          const t = window.setTimeout(() => {
            el.classList.remove('rv', 'rv-in');
            el.style.removeProperty('--rv-delay');
            timers.delete(t);
          }, REVEAL_MS);
          timers.add(t);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    );

    const scan = () => {
      const fold = window.innerHeight * 0.92;
      document.querySelectorAll<HTMLElement>('[data-aos]').forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (el.getBoundingClientRect().top < fold) return; // already on screen: leave it alone
        const delay = Math.min(Number(el.dataset.aosDelay) || 0, 400);
        if (delay) el.style.setProperty('--rv-delay', `${delay}ms`);
        el.classList.add('rv');
        io.observe(el);
      });
    };

    scan();
    // Pick up content that renders a moment later (client components, images).
    const main = document.querySelector('main');
    const mo = main ? new MutationObserver(scan) : null;
    mo?.observe(main!, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo?.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [pathname]);

  return null;
}
