'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/lib/data/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const categoryColors: Record<string, string> = {
  'ai-ml': 'bg-blue-500',
  web: 'bg-purple-500',
  mobile: 'bg-pink-500',
  robotics: 'bg-cyan-500',
  arvr: 'bg-indigo-500',
  blockchain: 'bg-yellow-500',
};

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  if (featured) {
    return (
      <div
        className="glass-card group project-item flex h-full w-full flex-col overflow-hidden rounded-2xl"
        data-category={project.category}
        data-aos="fade-up"
      >
        {/* Fixed media ratio for every featured card */}
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 576px, 100vw"
              className="bg-gray-800 object-contain"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient || 'from-blue-500 to-purple-600'}`}
            >
              <i className={`fas fa-${project.icon} text-6xl text-white`}></i>
            </div>
          )}
          <span
            className={`${categoryColors[project.category]} absolute left-4 top-4 rounded-full px-3 py-1 text-sm font-semibold text-white`}
          >
            {project.category.toUpperCase()}
          </span>
          {project.status === 'live' && (
            <span className="absolute right-4 top-4 rounded-full bg-green-500 px-2.5 py-1 text-xs text-white">
              Live
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-8">
          <h3 className="mb-4 line-clamp-2 text-2xl font-bold text-white transition-colors group-hover:text-blue-400">
            {project.title}
          </h3>
          <p
            className="mb-6 line-clamp-4 leading-relaxed text-gray-400"
            title={project.description}
          >
            {project.description}
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer pinned to the bottom edge */}
          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-gray-400">
                {project.stats?.stars && (
                  <div className="flex items-center">
                    <i className="fas fa-star mr-1 text-yellow-400"></i>
                    <span>{project.stats.stars}</span>
                  </div>
                )}
                {project.stats?.views && (
                  <div className="flex items-center">
                    <i className="fas fa-eye mr-1"></i>
                    <span>{project.stats.views}</span>
                  </div>
                )}
              </div>
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-white transition-transform duration-300 hover:-translate-y-0.5 active:scale-95"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  {project.status === 'live' ? 'Visit' : 'Demo'}
                </a>
              )}
            </div>
            {project.author && (
              <div className="mt-4 text-right">
                <p className="text-sm italic text-white">-by {project.author}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Regular card
  return (
    <div
      className="glass-card group project-item flex h-full w-full flex-col overflow-hidden rounded-xl"
      data-category={project.category}
      data-aos="fade-up"
    >
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 352px, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.gradient || 'from-blue-500 to-purple-600'}`}
          >
            <i className={`fas fa-${project.icon} text-4xl text-white`}></i>
          </div>
        )}
        <span
          className={`${categoryColors[project.category]} absolute left-3 top-3 rounded-full px-2 py-1 text-xs font-semibold text-white`}
        >
          {project.category.toUpperCase()}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 line-clamp-2 min-h-[3.5rem] text-xl font-bold text-white transition-colors group-hover:text-blue-400">
          {project.title}
        </h3>
        <p
          className="mb-4 line-clamp-4 text-sm leading-relaxed text-gray-400"
          title={project.description}
        >
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-white/10 px-2 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer pinned to the bottom edge */}
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              {project.stats?.stars && (
                <div className="flex items-center">
                  <i className="fas fa-star mr-1 text-yellow-400"></i>
                  <span>{project.stats.stars}</span>
                </div>
              )}
            </div>
            <div className="flex space-x-2">
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-blue-500 px-3.5 py-1 text-sm text-white transition-colors hover:bg-blue-600"
                >
                  <i className="fas fa-external-link-alt mr-1"></i>Demo
                </a>
              )}
              {project.links?.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-700 px-3.5 py-1 text-sm text-white transition-colors hover:bg-gray-600"
                >
                  <i className="fab fa-github mr-1"></i>Code
                </a>
              )}
            </div>
          </div>
          {project.author && (
            <div className="mt-3 text-right">
              <p className="text-sm italic text-white">-by {project.author}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
