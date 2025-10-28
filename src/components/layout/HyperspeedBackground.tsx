'use client';

import dynamic from 'next/dynamic';
import { hyperspeedPresets } from '@/app/presets';

type HyperspeedProps = { effectOptions?: Partial<Record<string, unknown>> };

const Hyperspeed = dynamic<HyperspeedProps>(() => import('@/app/Hyperspeed'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, #000000, #3a0ca3)',
      }}
    />
  ),
});

export default function HyperspeedBackground() {
  // Remove event handlers from preset to avoid serialization issues without binding unused vars
  const presetWithoutHandlers: Record<string, unknown> = { ...(hyperspeedPresets.one ?? {}) } as Record<string, unknown>;
  delete (presetWithoutHandlers as { [k: string]: unknown }).onSpeedUp;
  delete (presetWithoutHandlers as { [k: string]: unknown }).onSlowDown;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, #000000, #3a0ca3)' }}
      />
      <div className="absolute inset-0">
        <Hyperspeed effectOptions={presetWithoutHandlers} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
    </div>
  );
}
