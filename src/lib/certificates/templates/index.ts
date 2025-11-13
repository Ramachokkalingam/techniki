/**
 * Certificate Templates Configuration
 * 
 * This file maps event IDs to their certificate template locations.
 * Templates are stored in: public/assets/images/templates/
 * 
 * File Organization:
 * ├── src/lib/certificates/
 * │   ├── templates/
 * │   │   └── index.ts (this file - template configs)
 * │   └── events/
 * │       └── [event-name].ts (references templates from here)
 * └── public/assets/images/templates/
 *     └── [template-files].jpg (actual image files)
 */

export const TEMPLATE_PATHS = {
  // CTRL+THINK Event Template
  'ctrl-think-2025': '/assets/images/templates/ctrl_think.jpg',
  'Astrix': '/assets/images/templates/astrix.jpg',
  // Cyber Security Workshop
  'cyber-security-2025': '/assets/images/templates/cyber_security.jpg',
  
  // Future event templates - add here:
  // 'innovathon-2024': '/assets/images/templates/innovathon.jpg',
  // 'tech-talk-2024': '/assets/images/templates/tech_talk.jpg',
} as const;

/**
 * Get template path for an event
 * @param eventId - Event identifier
 * @returns Template path or default template
 */
export function getTemplatePath(eventId: string): string {
  return TEMPLATE_PATHS[eventId as keyof typeof TEMPLATE_PATHS] || '/assets/images/templates/default.jpg';
}

/**
 * Template positioning configuration
 * Defines where elements (name, QR code, etc.) should be placed on each template
 */
export const TEMPLATE_POSITIONS = {
  'ctrl-think-2025': {
    name: {
      x: 600,      // X coordinate (horizontal position)
      y: 450,      // Y coordinate (vertical position)
      fontSize: 48,
      fontFamily: 'Georgia, serif',
      color: '#000000',
      align: 'center' as const,
      textTransform: 'uppercase' as const,
    },
    qrCode: {
      x: 900,      // X coordinate
      y: 600,      // Y coordinate
      size: 120,   // QR code size (120x120 pixels)
    },
    teamName: {
      x: 600,
      y: 520,
      fontSize: 24,
      fontFamily: 'Arial, sans-serif',
      color: '#333333',
      align: 'center' as const,
    },
  },
  'cyber-security-2025': {
    name: {
      x: 600,
      y: 420,
      fontSize: 48,
      fontFamily: 'Georgia, serif',
      color: '#ffffff',
      align: 'center' as const,
      textTransform: 'none' as const,
    },
    qrCode: {
      x: 900,
      y: 600,
      size: 120,
    },
    teamName: {
      x: 600,
      y: 500,
      fontSize: 22,
      fontFamily: 'Arial, sans-serif',
      color: '#cccccc',
      align: 'center' as const,
    },
  },
  
  // Add positioning for future events here
} as const;

/**
 * Get template positioning for an event
 * @param eventId - Event identifier
 * @returns Positioning configuration or default
 */
export function getTemplatePositions(eventId: string) {
  return TEMPLATE_POSITIONS[eventId as keyof typeof TEMPLATE_POSITIONS] || TEMPLATE_POSITIONS['ctrl-think-2025'];
}
