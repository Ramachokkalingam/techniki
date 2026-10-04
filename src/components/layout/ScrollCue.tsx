'use client';

/**
 * "Scroll down" cue for hero sections.
 *
 * It must be a direct child of the hero <section> (which is `relative`), so it
 * is positioned against the section's bottom edge instead of the content block
 * (that was why it used to sit between the buttons and the text).
 * On phones it sits above the floating bottom dock.
 */
export default function ScrollCue() {
  const go = () =>
    window.scrollBy({ top: Math.round(window.innerHeight * 0.9), behavior: 'smooth' });

  return (
    <button
      type="button"
      onClick={go}
      aria-label="Scroll down"
      className="glass-pill absolute bottom-28 left-1/2 z-10 flex h-14 w-9 -translate-x-1/2 items-start justify-center rounded-full pt-2.5 text-white/80 outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300/70 lg:bottom-10"
    >
      <i className="fas fa-chevron-down animate-bounce text-sm"></i>
    </button>
  );
}
