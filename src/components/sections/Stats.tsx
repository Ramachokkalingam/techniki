import React from 'react';
import { animationStyles } from '@/lib/data/stats';

interface Stat {
  value: string;
  label: string;
  color: string;
}

interface StatsProps {
  stats: Stat[];
  background?: string;
}

const colorMap: Record<string, string> = {
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  green: 'text-green-400',
  yellow: 'text-yellow-400',
  red: 'text-red-400',
  cyan: 'text-cyan-400',
};

export default function Stats({ stats, background = 'bg-black/50' }: StatsProps) {
  return (
    <section className={`py-20 ${background}`}>
      {/* Inject animation keyframes and helper class */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles + `
        .scale-bounce { animation: scale-bounce 800ms cubic-bezier(.2,.9,.2,1) both; }
      ` }} />
      <div className="container mx-auto px-6">
        <div
          className={`grid grid-cols-2 lg:grid-cols-${stats.length} gap-8`}
          data-aos="fade-up"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="glass-card p-6 rounded-2xl">
                <div
                  className={`text-4xl font-bold ${colorMap[stat.color] || 'text-blue-400'} mb-2 scale-bounce`}
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
