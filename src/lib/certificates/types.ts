// Shared TypeScript interfaces for certificate system

export interface CertificateData {
  id: string;
  certificateId: string;
  eventId: string;
  eventName: string;
  teamName?: string;
  name: string;
  email: string;
  enrollment?: string;
  eventDate: string;
  issueDate: string;
  category: 'Participant' | 'Winner' | 'Runner-Up' | 'Speaker' | 'Organizer' | 'Volunteer';
  rank?: string;
  position?: '1st' | '2nd' | '3rd';
  customFields?: Record<string, string>; // For event-specific fields
}

export interface EventConfig {
  eventId: string;
  eventName: string;
  eventDate: string;
  issueDate: string;
  certificatePrefix: string; // e.g., "TECH-CT", "TECH-IN", "TECH-TT"
  templatePath: string;
  templateConfig: TemplateConfig;
  csvData?: string; // Optional CSV data for bulk import
}

export interface TemplateConfig {
  type: 'overlay' | 'pdf' | 'image';
  dimensions: {
    width: number;
    height: number;
  };
  elements: {
    name: {
      x: number;
      y: number;
      fontSize: number;
      fontFamily: string;
      color: string;
      align: 'left' | 'center' | 'right';
      maxWidth?: number;
    };
    qrCode: {
      x: number;
      y: number;
      size: number;
    };
    teamName?: {
      x: number;
      y: number;
      fontSize: number;
      fontFamily: string;
      color: string;
      align: 'left' | 'center' | 'right';
    };
    customText?: Array<{
      key: string;
      x: number;
      y: number;
      fontSize: number;
      fontFamily: string;
      color: string;
      align: 'left' | 'center' | 'right';
    }>;
  };
}

export interface SearchCriteria {
  certificateId?: string;
  enrollment?: string;
  email?: string;
  eventId?: string;
  name?: string;
}

export interface CertificateSearchResult {
  success: boolean;
  certificate?: CertificateData;
  error?: string;
}
