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
        className="glass-card rounded-2xl overflow-hidden group project-item"
        data-category={project.category}
        data-aos="fade-up"
      >
        <div className="relative">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="h-64 w-full object-contain bg-gray-800 rounded-t-2xl"
            />
          ) : (
            <div
              className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >
              <i className={`fas fa-${project.icon} text-6xl text-white`}></i>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span
              className={`${categoryColors[project.category]} text-white px-3 py-1 rounded-full text-sm font-semibold`}
            >
              {project.category.toUpperCase()}
            </span>
          </div>
          {project.status === 'live' && (
            <div className="absolute top-4 right-4">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">Live</span>
            </div>
          )}
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 text-gray-400">
              {project.stats.stars && (
                <div className="flex items-center">
                  <i className="fas fa-star text-yellow-400 mr-1"></i>
                  <span>{project.stats.stars}</span>
                </div>
              )}
              {project.stats.views && (
                <div className="flex items-center">
                  <i className="fas fa-eye mr-1"></i>
                  <span>{project.stats.views}</span>
                </div>
              )}
            </div>
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                {project.status === 'live' ? 'Visit' : 'Demo'}
              </a>
            )}
          </div>
          {project.author && (
            <div className="text-right">
              <p className="text-white text-sm italic">-by {project.author}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Regular card
  return (
    <div
      className="glass-card rounded-xl overflow-hidden group project-item"
      data-category={project.category}
      data-aos="fade-up"
    >
      <div className="relative">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover"
          />
        ) : (
          <div
            className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
          >
            <i className={`fas fa-${project.icon} text-4xl text-white`}></i>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span
            className={`${categoryColors[project.category]} text-white px-2 py-1 rounded-full text-xs font-semibold`}
          >
            {project.category.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 text-gray-400 text-sm">
            {project.stats.stars && (
              <div className="flex items-center">
                <i className="fas fa-star text-yellow-400 mr-1"></i>
                <span>{project.stats.stars}</span>
              </div>
            )}
          </div>
          <div className="flex space-x-2">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                <i className="fas fa-external-link-alt mr-1"></i>Demo
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                <i className="fab fa-github mr-1"></i>Code
              </a>
            )}
          </div>
        </div>
        {project.author && (
          <div className="text-right mt-3">
            <p className="text-white text-sm italic">-by {project.author}</p>
          </div>
        )}
      </div>
    </div>
  );
}
