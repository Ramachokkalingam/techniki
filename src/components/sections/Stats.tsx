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

// Full class names so Tailwind can see them (`lg:grid-cols-${n}` is never generated).
const lgCols: Record<number, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
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
          className={`grid grid-cols-2 gap-6 md:gap-8 ${lgCols[stats.length] ?? 'lg:grid-cols-4'}`}
          data-aos="fade-up"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="glass-card flex h-full flex-col justify-center rounded-2xl p-6">
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
