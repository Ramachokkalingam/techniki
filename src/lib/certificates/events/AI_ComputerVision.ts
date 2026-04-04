import { parseCSV } from '@/lib/utils/csvParser';
import type { EventConfig, CertificateData } from '../types';
import { TEMPLATE_PATHS } from '../templates';

// Event Configuration for AI Computer Vision Workshop
export const aiComputerVisionConfig: EventConfig = {
  eventId: 'computer-vision-2026',
  eventName: 'Foundations & Frontiers of Computer Vision Workshop',
  eventDate: '7th April 2026',
  issueDate: '7th April 2026',
  certificatePrefix: 'TECH-CV-2026',
  templatePath: TEMPLATE_PATHS['computer-vision-2026'],
  templateConfig: {
    type: 'overlay',
    dimensions: {
      width: 1200,
      height: 800,
    },
    elements: {
      name: {
        x: 600,
        y: 440,
        fontSize: 48,
        fontFamily: 'Georgia, serif',
        color: '#ffffff',
        align: 'center',
      },
      qrCode: {
        x: 920,
        y: 620,
        size: 120,
      },
      teamName: {
        x: 600,
        y: 520,
        fontSize: 24,
        fontFamily: 'Arial, sans-serif',
        color: '#e0e0e0',
        align: 'center',
      },
    },
  },
};

// CSV data for attendees (empty sample; add rows as needed)
const CSV_DATA = `Timestamp,Name,Enrollment Number,Course,Semester,Phone No.,Email-ID\n`;

function csvToCertificates(): CertificateData[] {
  const rows = parseCSV(CSV_DATA);

  return rows.map((row, idx) => ({
    id: row.id || (idx + 1).toString(),
    certificateId: `${aiComputerVisionConfig.certificatePrefix}-${(idx + 1).toString().padStart(3, '0')}`,
    eventId: aiComputerVisionConfig.eventId,
    eventName: aiComputerVisionConfig.eventName,
    teamName: row.team_name,
    name: row.name,
    email: row.email_id,
    enrollment: row.enrollment,
    eventDate: aiComputerVisionConfig.eventDate,
    issueDate: aiComputerVisionConfig.issueDate,
    category: 'Participant',
  }));
}

export const aiComputerVisionCertificates: CertificateData[] = csvToCertificates();
