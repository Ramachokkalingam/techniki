'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Entrance motion for every page.
 *
 *  1. Content already on screen when a page opens (the hero) plays a short
 *     staggered "rise": each child of the block enters ~110 ms after the
 *     previous one, so the title, text and buttons arrive one after another.
 *  2. Content below the fold is revealed as it scrolls into view.
 *  3. Headings that are not inside an animated block get a stronger
 *     "rise out of blur" so section titles feel deliberate.
 *
 * Blocks use the `data-aos` attributes the site already has (the AOS library
 * itself was only ever started on one page). Only opacity / transform / a
 * short blur are animated. Elements that contain glass (backdrop-filter) skip
 * the opacity part: fading a parent switches the blur off until it finishes,
 * which shows as a pop. Every helper class is removed afterwards, so
 * elements go back to being completely ordinary.
 *
 * With JavaScript off, or "reduce motion" set, nothing is ever hidden.
 */
const REVEAL_MS = 1500;
const INTRO_MS = 1500;
const STAGGER_MS = 110;

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const seen = new WeakSet<Element>();
    const timers = new Set<number>();
    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.classList.add('rv-in');
          later(() => {
            el.classList.remove('rv', 'rv-in', 'rv-title');
            el.style.removeProperty('--rv-delay');
          }, REVEAL_MS);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    );

    const intro = (el: HTMLElement) => {
      const kids = el.children.length ? (Array.from(el.children) as HTMLElement[]) : [el];
      kids.forEach((kid, i) => {
        const hasGlass = kid.matches('.glass-card, .glass-pill') || !!kid.querySelector('.glass-card, .glass-pill');
        kid.style.setProperty('--d', `${80 + Math.min(i, 8) * STAGGER_MS}ms`);
        kid.classList.add(hasGlass ? 'intro-move' : 'intro');
        later(() => {
          kid.classList.remove('intro', 'intro-move');
          kid.style.removeProperty('--d');
        }, INTRO_MS);
      });
    };

    const hide = (el: HTMLElement, title: boolean) => {
      const delay = Math.min(Number(el.dataset.aosDelay) || 0, 400);
      if (delay) el.style.setProperty('--rv-delay', `${delay}ms`);
      el.classList.add('rv');
      if (title) el.classList.add('rv-title');
      io.observe(el);
    };

    const scan = () => {
      const fold = window.innerHeight * 0.92;

      document.querySelectorAll<HTMLElement>('[data-aos]').forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (el.getBoundingClientRect().top < fold) intro(el);
        else hide(el, false);
      });

      document.querySelectorAll<HTMLElement>('main h1, main h2').forEach((el) => {
        if (seen.has(el) || el.closest('[data-aos]')) return;
        seen.add(el);
        if (el.getBoundingClientRect().top >= fold) hide(el, true);
      });
    };

    scan();
    // Pick up content that renders a moment later (client components, images).
    const main = document.querySelector('main');
    const mo = main ? new MutationObserver(scan) : null;
    if (main && mo) mo.observe(main, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo?.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [pathname]);

  return null;
}
