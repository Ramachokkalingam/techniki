'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TeamMember } from '@/lib/data/team';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="team-member-container">
      <div
        className="card-style-3"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        style={{ perspective: '1000px', height: '400px' }}
      >
        <div
          className="card-inner"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            textAlign: 'center',
            transition: 'transform 0.8s',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front of Card */}
          <div
            className="card-front"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
              background:
                'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="profile-image mb-6"
              style={{
                objectFit: 'cover',
                borderRadius: '50%',
                border: '3px solid rgba(59, 130, 246, 0.3)',
              }}
            />
            <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
            <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
            <p className="text-gray-400 text-sm">Hover to see more</p>
          </div>

          {/* Back of Card */}
          <div
            className="card-back"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              borderRadius: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
              background:
                'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              backdropFilter: 'blur(15px)',
              transform: 'rotateY(180deg)',
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-400">About Me</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-center text-sm">
              {member.bio}
            </p>
            <div className="flex justify-center space-x-4">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full transition-all hover:scale-110"
                >
                  <i className="fab fa-linkedin text-white"></i>
                </a>
              )}
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link bg-gradient-to-r from-gray-600 to-gray-700 p-3 rounded-full transition-all hover:scale-110"
                >
                  <i className="fab fa-github text-white"></i>
                </a>
              )}
              {member.social.website && (
                <a
                  href={member.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full transition-all hover:scale-110"
                >
                  <i className="fas fa-globe text-white"></i>
                </a>
              )}
              {member.social.instagram && (
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link bg-gradient-to-r from-pink-500 to-pink-600 p-3 rounded-full transition-all hover:scale-110"
                >
                  <i className="fab fa-instagram text-white"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
