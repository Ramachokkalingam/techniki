/**
 * TEMPLATE FOR ADDING NEW EVENTS
 * 
 * Instructions:
 * 1. Copy this file and rename it to your event name (e.g., innovathon-2024.ts)
 * 2. Update all the configuration values
 * 3. Add your CSV data or certificate array
 * 4. Register in events/index.ts
 * 5. Add template image to public/assets/images/templates/
 */

import { parseCSV } from '@/lib/utils/csvParser';
import type { EventConfig, CertificateData } from '../types';

// ============================================
// EVENT CONFIGURATION
// ============================================
export const myEventConfig: EventConfig = {
  // Unique identifier for this event (use kebab-case)
  eventId: 'my-event-2024',
  
  // Display name of the event
  eventName: 'My Amazing Event 2024',
  
  // When the event happened
  eventDate: '15th March 2024',
  
  // When certificates were issued
  issueDate: '16th March 2024',
  
  // Certificate ID prefix (format: TECH-XX-YYYY-###)
  // XX = Event code (2 letters), YYYY = Year
  certificatePrefix: 'TECH-ME-2024',
  
  // Path to certificate template image
  templatePath: '/assets/images/templates/my_event.jpg',
  
  // Template overlay configuration
  templateConfig: {
    type: 'overlay',
    dimensions: {
      width: 1200,  // Template width in pixels
      height: 800,  // Template height in pixels
    },
    elements: {
      // Participant name positioning
      name: {
        x: 600,              // X coordinate (center of 1200 = 600)
        y: 400,              // Y coordinate from top
        fontSize: 48,        // Font size in pixels
        fontFamily: 'Georgia, serif',
        color: '#000000',    // Black color
        align: 'center',     // left | center | right
      },
      // QR code positioning
      qrCode: {
        x: 900,              // X coordinate
        y: 600,              // Y coordinate
        size: 150,           // QR code size (150x150)
      },
      // Optional: Team name positioning
      teamName: {
        x: 600,
        y: 480,
        fontSize: 24,
        fontFamily: 'Arial, sans-serif',
        color: '#333333',
        align: 'center',
      },
    },
  },
};

// ============================================
// CSV DATA (Option 1: Use CSV format)
// ============================================
const CSV_DATA = `id,team_name,name,email_id,enrollment
1,Team Alpha,John Doe,john@example.com,A12345678
2,Team Alpha,Jane Smith,jane@example.com,A12345679
3,Team Beta,Bob Johnson,bob@example.com,A12345680`;

// Convert CSV to certificates
function csvToCertificates(): CertificateData[] {
  const rows = parseCSV(CSV_DATA);
  return rows.map(row => ({
    id: row.id,
    certificateId: `${myEventConfig.certificatePrefix}-${row.id.padStart(3, '0')}`,
    eventId: myEventConfig.eventId,
    eventName: myEventConfig.eventName,
    teamName: row.team_name,
    name: row.name,
    email: row.email_id,
    enrollment: row.enrollment,
    eventDate: myEventConfig.eventDate,
    issueDate: myEventConfig.issueDate,
    category: 'Participant', // Change as needed
  }));
}

// Export certificates
export const myEventCertificates: CertificateData[] = csvToCertificates();

// ============================================
// MANUAL DATA (Option 2: Manually create array)
// ============================================
// Uncomment and use this if you prefer manual entry:
/*
export const myEventCertificates: CertificateData[] = [
  {
    id: '1',
    certificateId: 'TECH-ME-2024-001',
    eventId: 'my-event-2024',
    eventName: 'My Amazing Event 2024',
    teamName: 'Team Alpha',
    name: 'John Doe',
    email: 'john@example.com',
    enrollment: 'A12345678',
    eventDate: '15th March 2024',
    issueDate: '16th March 2024',
    category: 'Winner',
    position: '1st',
  },
  {
    id: '2',
    certificateId: 'TECH-ME-2024-002',
    eventId: 'my-event-2024',
    eventName: 'My Amazing Event 2024',
    teamName: 'Team Beta',
    name: 'Jane Smith',
    email: 'jane@example.com',
    enrollment: 'A12345679',
    eventDate: '15th March 2024',
    issueDate: '16th March 2024',
    category: 'Runner-Up',
    position: '2nd',
  },
  // Add more certificates...
];
*/

// ============================================
// NEXT STEPS:
// ============================================
// 1. Update events/index.ts:
//    - Import: import { myEventConfig, myEventCertificates } from './my-event-2024';
//    - Add to eventRegistry: 'my-event-2024': myEventConfig,
//    - Add to certificateRegistry: 'my-event-2024': myEventCertificates,
//
// 2. Add template image:
//    - Place at: public/assets/images/templates/my_event.jpg
//
// 3. Test:
//    - Visit: http://localhost:3000/certificates
//    - Search by certificate ID, enrollment, or email
//    - Verify QR code works
