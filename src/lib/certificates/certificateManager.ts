// Main Certificate Manager - Handles all certificate operations across events

import { getAllCertificates, getCertificatesByEvent, getEventConfig } from './events';
import type { CertificateData, SearchCriteria, CertificateSearchResult } from './types';

/**
 * Search for a certificate across all events or within a specific event
 */
export function findCertificate(criteria: SearchCriteria): CertificateSearchResult {
  try {
    // Get certificates to search through
    const certificates = criteria.eventId 
      ? getCertificatesByEvent(criteria.eventId)
      : getAllCertificates();

    if (certificates.length === 0) {
      return {
        success: false,
        error: 'No certificates available for the specified event',
      };
    }

    // Search by certificate ID (highest priority)
    if (criteria.certificateId) {
      const cert = certificates.find(c => 
        c.certificateId.toLowerCase() === criteria.certificateId!.toLowerCase()
      );
      if (cert) {
        return { success: true, certificate: cert };
      }
    }

    // Search by enrollment number
    if (criteria.enrollment) {
      const cert = certificates.find(c => 
        c.enrollment?.toLowerCase() === criteria.enrollment!.toLowerCase()
      );
      if (cert) {
        return { success: true, certificate: cert };
      }
    }

    // Search by email
    if (criteria.email) {
      const cert = certificates.find(c => 
        c.email.toLowerCase() === criteria.email!.toLowerCase()
      );
      if (cert) {
        return { success: true, certificate: cert };
      }
    }

    // Search by name (partial match)
    if (criteria.name) {
      const cert = certificates.find(c => 
        c.name.toLowerCase().includes(criteria.name!.toLowerCase())
      );
      if (cert) {
        return { success: true, certificate: cert };
      }
    }

    return {
      success: false,
      error: 'Certificate not found. Please check your search criteria.',
    };
  } catch (error) {
    console.error('Error finding certificate:', error);
    return {
      success: false,
      error: 'An error occurred while searching for the certificate.',
    };
  }
}

/**
 * Get certificates by team name across all events or within a specific event
 */
export function getCertificatesByTeam(teamName: string, eventId?: string): CertificateData[] {
  const certificates = eventId 
    ? getCertificatesByEvent(eventId)
    : getAllCertificates();

  return certificates.filter(cert => 
    cert.teamName?.toLowerCase() === teamName.toLowerCase()
  );
}

/**
 * Get certificates by category (Participant, Winner, etc.)
 */
export function getCertificatesByCategory(category: CertificateData['category'], eventId?: string): CertificateData[] {
  const certificates = eventId 
    ? getCertificatesByEvent(eventId)
    : getAllCertificates();

  return certificates.filter(cert => cert.category === category);
}

/**
 * Get statistics for an event or all events
 */
export function getCertificateStats(eventId?: string) {
  const certificates = eventId 
    ? getCertificatesByEvent(eventId)
    : getAllCertificates();

  const stats = {
    total: certificates.length,
    byCategory: {} as Record<string, number>,
    byEvent: {} as Record<string, number>,
    uniqueTeams: new Set<string>(),
  };

  certificates.forEach(cert => {
    // Count by category
    stats.byCategory[cert.category] = (stats.byCategory[cert.category] || 0) + 1;
    
    // Count by event
    stats.byEvent[cert.eventId] = (stats.byEvent[cert.eventId] || 0) + 1;
    
    // Track unique teams
    if (cert.teamName) {
      stats.uniqueTeams.add(cert.teamName);
    }
  });

  return {
    ...stats,
    uniqueTeamsCount: stats.uniqueTeams.size,
  };
}

/**
 * Validate certificate authenticity
 */
export function validateCertificate(certificateId: string): boolean {
  const result = findCertificate({ certificateId });
  return result.success;
}

// Export for backward compatibility
export { getAllCertificates, getCertificatesByEvent, getEventConfig };
