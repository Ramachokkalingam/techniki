'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TeamMember } from '@/lib/data/team';

interface TeamCardProps {
  member: TeamMember;
}

const socials: {
  key: keyof TeamMember['social'];
  icon: string;
  label: string;
  gradient: string;
}[] = [
  { key: 'linkedin', icon: 'fab fa-linkedin-in', label: 'LinkedIn', gradient: 'from-blue-500 to-blue-700' },
  { key: 'github', icon: 'fab fa-github', label: 'GitHub', gradient: 'from-gray-500 to-gray-700' },
  { key: 'website', icon: 'fas fa-globe', label: 'Website', gradient: 'from-cyan-500 to-blue-600' },
  { key: 'instagram', icon: 'fab fa-instagram', label: 'Instagram', gradient: 'from-pink-500 to-purple-600' },
];

/**
 * Flip card.
 *  - Desktop: flips on hover (pure CSS, no React re-render per hover).
 *  - Touch / keyboard: tap, Enter or Space toggles the flip, so the bio and
 *    social links are reachable on phones (the old version was hover-only).
 *  - Every card is exactly the same size, whatever the bio length.
 *  - The blur lives on the static outer shell; the 3D faces carry no
 *    backdrop-filter (that combination is slow and glitchy).
 */
export default function TeamCard({ member }: TeamCardProps) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((f) => !f);
  const onKey = (e: React.KeyboardEvent) => {
    if (e.target !== e.currentTarget) return; // ignore keys pressed on inner links
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    } else if (e.key === 'Escape') {
      setFlipped(false);
    }
  };

  const links = socials.filter((s) => member.social[s.key]);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${member.name}, ${member.role}. Press to ${flipped ? 'hide' : 'show'} details`}
      data-flipped={flipped}
      onClick={toggle}
      onKeyDown={onKey}
      className="team-card glass-card group h-[26rem] w-full cursor-pointer rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
      style={{ perspective: '1100px' }}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-data-[flipped=true]:[transform:rotateY(180deg)] [@media(hover:hover)]:group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 px-6 text-center [backface-visibility:hidden]">
          <div className="relative mb-6 h-28 w-28 overflow-hidden rounded-full border-[3px] border-blue-400/40 shadow-[0_10px_30px_-10px_rgba(99,102,241,0.8)]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <h3 className="mb-2 line-clamp-2 text-2xl font-bold text-white">{member.name}</h3>
          <p className="mb-4 font-semibold text-blue-400">{member.role}</p>
          <span className="glass-pill rounded-full px-4 py-1.5 text-xs text-gray-300">
            <span className="hidden [@media(hover:hover)]:inline">Hover</span>
            <span className="[@media(hover:hover)]:hidden">Tap</span> to see more
          </span>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-purple-600/25 to-blue-500/20 px-7 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="mb-3 text-2xl font-bold text-purple-300">About Me</h3>
          <p className="mb-6 line-clamp-6 text-sm leading-relaxed text-gray-200">{member.bio}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {links.map((s) => (
              <a
                key={s.key}
                href={member.social[s.key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on ${s.label}`}
                onClick={(e) => e.stopPropagation()}
                className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${s.gradient} text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] outline-none transition-transform duration-300 hover:-translate-y-0.5 hover:scale-110 focus-visible:ring-2 focus-visible:ring-cyan-300/70 active:scale-95`}
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
