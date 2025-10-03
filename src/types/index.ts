// Type definitions for Techniki Website

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  category: 'hackathon' | 'workshop' | 'competition' | 'webinar';
  registrationLink?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'ai-ml' | 'web-dev' | 'ar-vr' | 'mobile' | 'iot';
  image?: string;
  githubLink?: string;
  liveLink?: string;
  contributors: string[];
  status: 'active' | 'completed' | 'archived';
}

export interface Certificate {
  id: string;
  title: string;
  description: string;
  category: string;
  issueDate: string;
  recipientName: string;
  certificateId: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  tags: string[];
  image?: string;
  readTime: number; // in minutes
}

export interface NavigationLink {
  href: string;
  label: string;
  icon?: string;
}

export interface SocialLink {
  platform: 'instagram' | 'linkedin' | 'discord' | 'whatsapp' | 'github';
  url: string;
  icon: string;
}
