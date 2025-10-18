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

export default function EventCard({ event }: EventCardProps) {
  const CardContent = (
    <div
      className="event-card glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
      data-aos="fade-up"
    >
      <div className="relative">
        {event.image ? (
          <div className="h-48 overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={300}
              className="w-full h-full object-cover scale-105"
            />
          </div>
        ) : (
          <div
            className={`h-48 bg-gradient-to-br ${event.gradient} flex items-center justify-center relative`}
          >
            <i className={`fas fa-${event.icon} text-6xl text-white`}></i>
            {event.status !== 'upcoming' && (
              <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Completed
              </span>
            )}
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span
            className={`${categoryColors[event.category]} text-white px-3 py-1 rounded-full text-sm font-semibold`}
          >
            {event.category}
          </span>
        </div>
        {event.status === 'upcoming' && (
          <div className="absolute top-4 right-4">
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
              Registration Open
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400 text-sm">{event.date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
        <p className="text-gray-300 mb-4">{event.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-yellow-400 font-semibold">
            {event.participants}
          </span>
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
          </span>
        </div>
      </div>
    </div>
  );

  // Make entire card clickable if it has a detailsPage or link
  if (event.detailsPage || event.link) {
    return (
      <Link href={event.detailsPage || event.link || '#'} className="block">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
