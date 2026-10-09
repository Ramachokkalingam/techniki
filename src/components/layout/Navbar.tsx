'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavigationLink } from '@/types';

/**
 * Navigation
 *
 * Desktop: a floating "island" pill with liquid-glass material.
 *   - one highlight pill slides between items on a spring and follows the
 *     pointer, then settles back on the current page (One UI style)
 *   - condenses slightly after you scroll, hides when you scroll down and comes
 *     back the moment you scroll up
 *   - a hairline at the bottom shows how far down the page you are
 *
 * Mobile / tablet: a slim top pill (logo + Join) and a floating bottom dock with
 * icons + labels and a sliding selection pill, in easy thumb reach.
 *
 * Only `translate`, `scale`, `width` and `opacity` are animated.
 */

type NavItem = NavigationLink & { short?: string };

const navigationLinks: NavItem[] = [
  { href: '/events', label: 'Events', icon: 'calendar-alt' },
  { href: '/certificates', label: 'Certificates', short: 'Certs', icon: 'certificate' },
  { href: '/team', label: 'Team', icon: 'users' },
  { href: '/projects', label: 'Projects', icon: 'project-diagram' },
  { href: '/#contact', label: 'Contact', icon: 'envelope' },
];

const isActiveRoute = (pathname: string, href: string) =>
  !href.includes('#') && (pathname === href || pathname.startsWith(`${href}/`));

export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const [hovered, setHovered] = useState<number | null>(null);
  const [rect, setRect] = useState({ x: 0, w: 0 });
  const [snap, setSnap] = useState(true); // true = jump (no slide) when the pill first appears
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);

  const activeIndex = navigationLinks.findIndex((l) => isActiveRoute(pathname, l.href));
  const target = hovered ?? (activeIndex >= 0 ? activeIndex : null);

  // ---- Measure the item the highlight should sit behind --------------------
  const measure = useCallback(() => {
    if (target === null) return;
    const el = itemRefs.current[target];
    if (!el) return;
    setRect((prev) =>
      prev.x === el.offsetLeft && prev.w === el.offsetWidth
        ? prev
        : { x: el.offsetLeft, w: el.offsetWidth },
    );
  }, [target]);

  useEffect(() => {
    measure();
  }, [measure, pathname]);

  useEffect(() => {
    window.addEventListener('resize', measure);
    // Web fonts change text width after load, so measure again then.
    document.fonts?.ready.then(measure).catch(() => {});
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  // First appearance of the pill should not slide in from the far left.
  const prevTarget = useRef<number | null>(null);
  useEffect(() => {
    if (prevTarget.current === null && target !== null) {
      setSnap(true);
      let r2 = 0;
      const r1 = requestAnimationFrame(() => {
        r2 = requestAnimationFrame(() => setSnap(false));
      });
      prevTarget.current = target;
      return () => {
        cancelAnimationFrame(r1);
        cancelAnimationFrame(r2);
      };
    }
    prevTarget.current = target;
  }, [target]);

  // ---- Scroll: progress line, compact state, hide / reveal -----------------
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      headerRef.current?.style.setProperty('--p', progress.toFixed(4));

      setCompact(y > 24);

      const dy = y - lastY;
      const hasFocus = headerRef.current?.contains(document.activeElement) ?? false;
      if (y < 120 || hasFocus) {
        setHidden(false);
        lastY = y;
      } else if (dy > 8) {
        setHidden(true);
        lastY = y;
      } else if (dy < -8) {
        setHidden(false);
        lastY = y;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Always show the bar again after navigating.
  useEffect(() => {
    setHidden(false);
  }, [pathname]);

  const buzz = () => {
    // Tiny haptic tick on phones that support it (Android Chrome); ignored elsewhere.
    if (typeof navigator !== 'undefined') navigator.vibrate?.(8);
  };

  return (
    <>
      {/* ===================== Top pill (all sizes) ===================== */}
      <header
        ref={headerRef}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center pl-[max(0.75rem,env(safe-area-inset-left))] pr-[max(0.75rem,env(safe-area-inset-right))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:pl-[max(1rem,env(safe-area-inset-left))] sm:pr-[max(1rem,env(safe-area-inset-right))] sm:pt-[max(1rem,env(safe-area-inset-top))]"
      >
        <nav
          aria-label="Primary"
          className={`liquid-glass pointer-events-auto relative flex w-full max-w-5xl origin-top items-center justify-between gap-2 rounded-full py-2 pl-4 pr-2 transition-transform duration-[600ms] ${
            hidden ? '-translate-y-[150%]' : 'translate-y-0'
          } ${compact ? 'scale-[0.95]' : 'scale-100'}`}
          style={{ transitionTimingFunction: 'var(--ease-spring)' }}
        >
          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center" aria-label="Techniki home">
            <span className="relative block h-9 w-24">
              <Image
                src="/logo.png"
                alt="Techniki"
                fill
                priority
                sizes="96px"
                className="object-contain transition-transform duration-500 [transition-timing-function:var(--ease-spring)] group-hover:scale-110"
              />
            </span>
          </Link>

          {/* Desktop links + sliding highlight */}
          <ul
            className="relative hidden items-center lg:flex"
            onMouseLeave={() => setHovered(null)}
          >
            <span
              aria-hidden="true"
              className="nav-indicator"
              data-visible={target !== null}
              style={{
                translate: `${rect.x}px 0`,
                width: rect.w,
                transition: snap ? 'opacity 220ms ease-out' : undefined,
              }}
            />
            {navigationLinks.map((link, i) => {
              const hot = i === target;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    aria-current={i === activeIndex ? 'page' : undefined}
                    onMouseEnter={() => setHovered(i)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    className={`relative z-10 block rounded-full px-4 py-2 text-sm font-medium outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
                      hot ? 'text-white' : 'text-white/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Join */}
          <Link
            href="/join"
            className="relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_22px_-8px_rgba(99,102,241,0.9)] outline-none transition-transform duration-300 before:absolute before:inset-y-0 before:-left-1/2 before:w-1/2 before:-translate-x-full before:-skew-x-12 before:bg-white/30 before:transition-transform before:duration-700 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-cyan-300/70 active:scale-95 hover:before:translate-x-[350%]"
          >
            <i className="fas fa-user-plus text-xs"></i>
            JOIN NOW
          </Link>

          {/* Scroll progress hairline */}
          <span aria-hidden="true" className="nav-progress" />
        </nav>
      </header>

      {/* ===================== Bottom dock (below lg) ===================== */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden">
        <nav
          aria-label="Primary mobile"
          className="liquid-glass pointer-events-auto relative grid w-full max-w-md grid-cols-5 rounded-[2rem] p-1.5"
        >
          <span
            aria-hidden="true"
            className="dock-indicator"
            data-visible={activeIndex >= 0}
            style={{ translate: `${Math.max(activeIndex, 0) * 100}% 0` }}
          />
          {navigationLinks.map((link, i) => {
            const active = i === activeIndex;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={buzz}
                aria-current={active ? 'page' : undefined}
                className={`relative z-10 flex flex-col items-center gap-1 rounded-3xl py-2.5 text-[11px] font-medium outline-none transition-[color,transform,scale] duration-300 focus-visible:ring-2 focus-visible:ring-cyan-300/70 active:scale-90 ${
                  active ? 'text-white' : 'text-white/60'
                }`}
              >
                <i className={`fas fa-${link.icon} text-lg`}></i>
                <span>{link.short ?? link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
