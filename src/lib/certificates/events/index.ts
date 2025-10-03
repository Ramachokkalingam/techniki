// Central export for all event configurations and certificates

import { ctrlThinkConfig, ctrlThinkCertificates } from './ctrl-think-2024';
import type { EventConfig, CertificateData } from '../types';

// Registry of all events
export const eventRegistry: Record<string, EventConfig> = {
  'ctrl-think-2024': ctrlThinkConfig,
  // Add more events here as they are created:
  // 'innovathon-2024': innovathonConfig,
  // 'tech-talk-2024': techTalkConfig,
};

// Registry of all certificates by event
export const certificateRegistry: Record<string, CertificateData[]> = {
  'ctrl-think-2024': ctrlThinkCertificates,
  // Add more certificate arrays here:
  // 'innovathon-2024': innovathonCertificates,
  // 'tech-talk-2024': techTalkCertificates,
};

// Get all certificates across all events
export function getAllCertificates(): CertificateData[] {
  return Object.values(certificateRegistry).flat();
}

// Get certificates for a specific event
export function getCertificatesByEvent(eventId: string): CertificateData[] {
  return certificateRegistry[eventId] || [];
}

// Get event configuration
export function getEventConfig(eventId: string): EventConfig | null {
  return eventRegistry[eventId] || null;
}

// Get all available events
export function getAllEvents(): EventConfig[] {
  return Object.values(eventRegistry);
}

// Export individual event data for backward compatibility
export { ctrlThinkConfig, ctrlThinkCertificates };
