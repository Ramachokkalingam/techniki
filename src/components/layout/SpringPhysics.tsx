'use client';

import { useEffect } from 'react';

/**
 * Spring physics for the whole site (replaces MagneticButtons).
 *
 * Every moving thing is a damped harmonic oscillator, integrated per frame:
 *
 *     a = -k (x - target) - c v          (Hooke's law + viscous damping, mass = 1)
 *     v += a h ;  x += v h               (semi-implicit Euler, fixed step h = 1/120 s)
 *
 * so motion overshoots slightly, settles, and carries momentum when the target
 * changes mid-flight, instead of following a fixed-duration curve.
 *
 *  - Buttons (a.hero-btn, a.glass-pill, white/gradient pills) lean toward the cursor.
 *  - Cards (.glass-card, [data-tilt]) tilt in 3D toward the cursor (rotateX/Y).
 *  - [data-depth="0.15"] elements parallax with scroll: offset = -scrollY * depth.
 *
 * One rAF loop, running only while something is still moving. Skipped on touch
 * screens (pointer effects) and for reduced motion.
 */
const BTN = 'a.hero-btn, a.glass-pill, a[class*="bg-gradient-to-r"][class*="rounded-full"]:not([aria-label])';
const CARD = '.glass-card, [data-tilt]';
const K = 190; // stiffness
const C = 17; // damping (zeta = C / (2 sqrt(K)) ~ 0.62: lively but not wobbly)
const H = 1 / 120;
const PULL = 0.22;
const PULL_MAX = 10; // px
const TILT_MAX = 5; // deg
const EPS = 0.01;

type Kind = 'btn' | 'card' | 'depth';
interface S {
  kind: Kind;
  p: number[];
  v: number[];
  t: number[];
}

export default function SpringPhysics() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const states = new Map<HTMLElement, S>();
    let raf = 0;
    let last = 0;

    const get = (el: HTMLElement, kind: Kind): S => {
      let s = states.get(el);
      if (!s) {
        s = { kind, p: [0, 0], v: [0, 0], t: [0, 0] };
        states.set(el, s);
      }
      return s;
    };

    const apply = (el: HTMLElement, s: S) => {
      if (s.kind === 'btn') el.style.translate = `${s.p[0].toFixed(2)}px ${s.p[1].toFixed(2)}px`;
      else if (s.kind === 'depth') el.style.translate = `0px ${s.p[1].toFixed(2)}px`;
      else
        el.style.transform = `perspective(900px) rotateX(${s.p[0].toFixed(3)}deg) rotateY(${s.p[1].toFixed(3)}deg)`;
    };

    const rest = (el: HTMLElement, s: S) => {
      if (s.kind === 'card') el.style.removeProperty('transform');
      else if (s.kind === 'btn') el.style.removeProperty('translate');
      else apply(el, s);
      if (s.kind !== 'depth') states.delete(el);
    };

    const tick = (now: number) => {
      let dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      let moving = false;
      while (dt > 0) {
        const h = Math.min(H, dt);
        dt -= h;
        states.forEach((s) => {
          for (let i = 0; i < 2; i++) {
            const a = -K * (s.p[i] - s.t[i]) - C * s.v[i];
            s.v[i] += a * h;
            s.p[i] += s.v[i] * h;
          }
        });
      }
      states.forEach((s, el) => {
        const settled = s.p.every((x, i) => Math.abs(x - s.t[i]) < EPS && Math.abs(s.v[i]) < EPS);
        if (settled) {
          s.p = [...s.t];
          s.v = [0, 0];
          if (s.t[0] === 0 && s.t[1] === 0) rest(el, s);
          else apply(el, s);
        } else {
          moving = true;
          apply(el, s);
        }
      });
      raf = moving ? requestAnimationFrame(tick) : 0;
    };
    const wake = () => {
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    // ---- pointer: buttons + cards ------------------------------------------
    let hoverBtn: HTMLElement | null = null;
    let hoverCard: HTMLElement | null = null;
    const release = (el: HTMLElement | null) => {
      const s = el && states.get(el);
      if (s) {
        s.t = [0, 0];
        wake();
      }
    };

    const onMove = (e: PointerEvent) => {
      const tgt = e.target as Element | null;
      const btn = (tgt?.closest?.(BTN) as HTMLElement | null) ?? null;
      const card = btn ? null : ((tgt?.closest?.(CARD) as HTMLElement | null) ?? null);
      if (btn !== hoverBtn) release(hoverBtn);
      if (card !== hoverCard) release(hoverCard);
      hoverBtn = btn;
      hoverCard = card;

      if (btn) {
        const r = btn.getBoundingClientRect();
        const s = get(btn, 'btn');
        const dx = (e.clientX - (r.left + r.width / 2)) * PULL;
        const dy = (e.clientY - (r.top + r.height / 2)) * PULL;
        const k = Math.min(1, PULL_MAX / Math.max(Math.hypot(dx, dy), 0.001));
        s.t = [dx * k, dy * k];
        wake();
      } else if (card && card.getBoundingClientRect().width < window.innerWidth * 0.8) {
        const r = card.getBoundingClientRect();
        const s = get(card, 'card');
        const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
        const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
        s.t = [-ny * TILT_MAX, nx * TILT_MAX];
        wake();
      }
    };
    const onLeave = () => {
      release(hoverBtn);
      release(hoverCard);
      hoverBtn = hoverCard = null;
    };
    if (fine) {
      document.addEventListener('pointermove', onMove, { passive: true });
      document.documentElement.addEventListener('mouseleave', onLeave);
    }

    // ---- scroll: depth parallax --------------------------------------------
    let depthEls: HTMLElement[] = [];
    const collect = () => {
      depthEls = Array.from(document.querySelectorAll<HTMLElement>('[data-depth]'));
    };
    const onScroll = () => {
      const y = Math.min(window.scrollY, window.innerHeight * 1.4);
      for (const el of depthEls) {
        const d = Number(el.dataset.depth) || 0;
        get(el, 'depth').t = [0, -y * d];
      }
      if (depthEls.length) wake();
    };
    collect();
    const mo = new MutationObserver(() => {
      collect();
      onScroll();
    });
    const main = document.querySelector('main');
    if (main) mo.observe(main, { childList: true, subtree: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('scroll', onScroll);
      mo.disconnect();
      cancelAnimationFrame(raf);
      states.forEach((_s, el) => {
        el.style.removeProperty('transform');
        el.style.removeProperty('translate');
      });
      states.clear();
    };
  }, []);

  return null;
}
