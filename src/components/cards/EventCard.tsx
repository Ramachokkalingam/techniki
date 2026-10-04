'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Event } from '@/lib/data/events';

interface EventCardProps {
  event: Event;
}

const categoryColors: Record<string, string> = {
  Competition: 'bg-blue-500',
  Workshop: 'bg-green-500',
  Hackathon: 'bg-purple-500',
};

const pillButton =
  'rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(99,102,241,0.8)]';

export default function EventCard({ event }: EventCardProps) {
  const isUpcoming = event.status === 'upcoming';
  const detailsHref = !event.registerUrl ? event.detailsPage || event.link : undefined;

  const card = (
    <article
      className="event-card glass-card group flex h-full w-full flex-col overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1.5"
      data-aos="fade-up"
    >
      {/* Media: one fixed ratio for every card so images never change card size */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(min-width: 1024px) 352px, (min-width: 640px) 45vw, 100vw"
            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
              event.imagePosition === 'top' ? 'object-top' : 'object-center'
            }`}
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${event.gradient}`}
          >
            <i className={`fas fa-${event.icon} text-6xl text-white`}></i>
            {!isUpcoming && (
              <span className="absolute right-3 top-3 rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white shadow">
                Completed
              </span>
            )}
          </div>
        )}

        <span
          className={`${categoryColors[event.category]} absolute left-4 top-4 rounded-full px-3 py-1 text-sm font-semibold text-white`}
        >
          {event.category}
        </span>
        {isUpcoming && (
          <span className="absolute right-4 top-4 rounded-full bg-green-500 px-2.5 py-1 text-xs text-white">
            Registration Open
          </span>
        )}
      </div>

      {/* Body: flex column so the footer row always sits on the bottom edge */}
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-3 text-sm text-gray-400">{event.date}</span>

        {/* Two-line title slot keeps text aligned across cards in a row */}
        <h3
          className="mb-2 line-clamp-2 min-h-[3.5rem] text-xl font-bold text-white"
          title={event.title}
        >
          {event.title}
        </h3>

        <p className="mb-5 line-clamp-6 text-gray-300" title={event.description}>
          {event.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-yellow-400">{event.participants}</span>
          {isUpcoming && event.registerUrl ? (
            <a
              href={event.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pillButton} shrink-0 transition-transform duration-300 hover:-translate-y-0.5 active:scale-95`}
            >
              Register Now
            </a>
          ) : (
            <span className={`${pillButton} shrink-0`}>
              {isUpcoming ? 'Register Now' : 'View Details'}
            </span>
          )}
        </div>
      </div>
    </article>
  );

  // The whole card is clickable when it has an internal details page / link.
  if (detailsHref) {
    return (
      <Link
        href={detailsHref}
        className="flex rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
      >
        {card}
      </Link>
    );
  }

  return card;
}
