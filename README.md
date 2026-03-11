# 🎓 Techniki Community Website - Certificate Management System

> **Next.js 15 + TypeScript** | Modern web platform for Techniki community with comprehensive certificate management

---

## 📋 Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Certificate System](#certificate-system)
- [Project Structure](#project-structure)
- [Adding New Events](#adding-new-events)
- [Features](#features)
- [Development](#development)
- [Deployment](#deployment)

---

## 🎯 Overview

This project is a complete migration of the Techniki community website from static HTML/CSS/JS to a modern **Next.js 15** application with **TypeScript** and **Tailwind CSS v4**. It features a sophisticated multi-event certificate management system with QR code verification.

### What We Built

✅ **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS v4  
✅ **8 Full Pages**: Home, Events, Team, Projects, Certificates, Join, Event Details  
✅ **Certificate System**: Multi-event support with QR verification  
✅ **70+ Certificates**: CTRL+THINK event with all participant data  
✅ **Scalable Architecture**: Easy to add unlimited events  
✅ **Mobile Responsive**: Works on all devices  

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project
cd techniki-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **http://localhost:3000**

### Build for Production

```bash
npm run build
npm start
```

---

## 🎓 Certificate System

### Overview

A comprehensive, scalable certificate management system supporting multiple events with unique templates, QR code verification, and flexible search options.

### Features

- ✅ **Multi-Event Support** - Unlimited events, each with unique templates
- ✅ **3 Search Methods** - Certificate ID, Enrollment Number, Email Address
- ✅ **QR Code Verification** - Each certificate has unique verification QR
- ✅ **Dynamic Templates** - Custom template per event with configurable overlays
- ✅ **CSV Import** - Bulk import participants from CSV
- ✅ **Type-Safe** - Full TypeScript support

### Current Events

| Event | Certificates | Status |
|-------|-------------|--------|
| CTRL+THINK 2025 | 70 participants, 21 teams | ✅ Active |

### Certificate ID Format

```
TECH - CT - 2024 - 001
 │     │     │     │
 │     │     │     └── Sequential number (001-999)
 │     │     └──────── Year
 │     └────────────── Event code (CT = CTRL+THINK)
 └──────────────────── Organization prefix
```

### Searching Certificates

**Frontend**: http://localhost:3000/certificates

**API Endpoint**: `GET /api/certificates/verify`

**Query Parameters**:
- `certificateId` - e.g., `TECH-CT-2024-001`
- `enrollment` - e.g., `A50105225074`
- `email` - e.g., `student@example.com`
- `eventId` - (optional) Filter by specific event

**Example Searches**:

```bash
# By Certificate ID
/api/certificates/verify?certificateId=TECH-CT-2024-001

# By Enrollment
/api/certificates/verify?enrollment=A50105225074

# By Email (specific event)
/api/certificates/verify?email=student@example.com&eventId=ctrl-think-2024
```

### QR Code Verification

When users scan the QR code on a certificate, they land on:
```
/certificates/verify/TECH-CT-2024-001
```

This page displays:
- ✅ Certificate verification status
- ✅ Participant details (name, team, enrollment)
- ✅ Event information
- ✅ Download button
- ✅ Security badge

---

## 📁 Project Structure

```
techniki-app/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── page.tsx                  # Home page
│   │   ├── events/
│   │   │   ├── page.tsx              # Events listing
│   │   │   └── ctrl-think/           # Event detail page
│   │   ├── team/page.tsx             # Team page
│   │   ├── projects/page.tsx         # Projects page
│   │   ├── certificates/
│   │   │   ├── page.tsx              # Certificate search
│   │   │   └── verify/[id]/          # QR verification page
│   │   ├── join/page.tsx             # Join page
│   │   └── api/
│   │       └── certificates/verify/  # Verification API
│   │
│   ├── components/
│   │   ├── layout/                   # Navbar, Footer
│   │   ├── sections/                 # Hero, Stats, CertificateVerification
│   │   └── cards/                    # EventCard, TeamCard, ProjectCard
│   │
│   ├── lib/
│   │   ├── certificates/             # Certificate management system
│   │   │   ├── types.ts              # TypeScript interfaces
│   │   │   ├── certificateManager.ts # Search & validation
│   │   │   ├── templates/            # Template configurations
│   │   │   │   └── index.ts          # TEMPLATE_PATHS, TEMPLATE_POSITIONS
│   │   │   └── events/               # Event data
│   │   │       ├── index.ts          # Event registry
│   │   │       ├── ctrl-think-2024.ts # CTRL+THINK data (70 certs)
│   │   │       └── _TEMPLATE.ts      # Template for new events
│   │   ├── data/                     # Static data (events, team, etc.)
│   │   └── utils/                    # Utility functions
│   │
│   └── types/
│       └── index.ts                  # Global TypeScript types
│
├── public/
│   └── assets/
│       └── images/
│           └── templates/            # Certificate template images
│               └── ctrl_think.jpg    # CTRL+THINK template
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md                         # This file
```

### Key Directories

- **`src/lib/certificates/`** - Complete certificate management system
- **`public/assets/images/templates/`** - Certificate template images (JPG/PNG)
- **`src/app/certificates/`** - Certificate UI pages
- **`src/components/sections/`** - Reusable sections

---

## ➕ Adding New Events

### Step-by-Step Guide

#### 1. Add Certificate Template Image

```bash
# Place your template image here:
public/assets/images/templates/innovathon.jpg
```

**Requirements**:
- Format: JPG or PNG
- Recommended: 1200x800px (landscape)
- Good quality for printing

#### 2. Register Template in Configuration

**File**: `src/lib/certificates/templates/index.ts`

```typescript
export const TEMPLATE_PATHS = {
  'ctrl-think-2024': '/assets/images/templates/ctrl_think.jpg',
  'innovathon-2024': '/assets/images/templates/innovathon.jpg',  // ← ADD
} as const;

export const TEMPLATE_POSITIONS = {
  'ctrl-think-2024': { /* ... */ },
  'innovathon-2024': {  // ← ADD POSITIONING
    name: {
      x: 600,              // Horizontal position
      y: 450,              // Vertical position
      fontSize: 48,        // Font size
      fontFamily: 'Georgia, serif',
      color: '#000000',
      align: 'center',
    },
    qrCode: {
      x: 900,              // QR position
      y: 600,
      size: 120,           // QR size (120x120)
    },
  },
} as const;
```

#### 3. Create Event Data File

**File**: `src/lib/certificates/events/innovathon-2024.ts`

```typescript
import { parseCSV } from '@/lib/utils/csvParser';
import type { EventConfig, CertificateData } from '../types';
import { TEMPLATE_PATHS } from '../templates';

export const innovathonConfig: EventConfig = {
  eventId: 'innovathon-2024',
  eventName: 'Innovathon 2024',
  eventDate: '10th November 2024',
  issueDate: '11th November 2024',
  certificatePrefix: 'TECH-IN-2024',
  templatePath: TEMPLATE_PATHS['innovathon-2024'],
  templateConfig: {
    type: 'overlay',
    dimensions: { width: 1200, height: 800 },
    elements: {
      name: { x: 600, y: 450, fontSize: 48, /* ... */ },
      qrCode: { x: 900, y: 600, size: 120 },
    },
  },
};

// CSV Data
const CSV_DATA = `id,team_name,name,email_id,enrollment
1,Team Alpha,John Doe,john@example.com,A12345678
2,Team Alpha,Jane Smith,jane@example.com,A12345679`;

// Convert to certificates
function csvToCertificates(): CertificateData[] {
  const rows = parseCSV(CSV_DATA);
  return rows.map(row => ({
    id: row.id,
    certificateId: `${innovathonConfig.certificatePrefix}-${row.id.padStart(3, '0')}`,
    eventId: innovathonConfig.eventId,
    eventName: innovathonConfig.eventName,
    teamName: row.team_name,
    name: row.name,
    email: row.email_id,
    enrollment: row.enrollment,
    eventDate: innovathonConfig.eventDate,
    issueDate: innovathonConfig.issueDate,
    category: 'Participant',
  }));
}

export const innovathonCertificates: CertificateData[] = csvToCertificates();
```

#### 4. Register Event

**File**: `src/lib/certificates/events/index.ts`

```typescript
import { ctrlThinkConfig, ctrlThinkCertificates } from './ctrl-think-2024';
import { innovathonConfig, innovathonCertificates } from './innovathon-2024';

export const eventRegistry: Record<string, EventConfig> = {
  'ctrl-think-2024': ctrlThinkConfig,
  'innovathon-2024': innovathonConfig,  // ← ADD
};

export const certificateRegistry: Record<string, CertificateData[]> = {
  'ctrl-think-2024': ctrlThinkCertificates,
  'innovathon-2024': innovathonCertificates,  // ← ADD
};
```

#### 5. Test

✅ Event appears in dropdown automatically  
✅ Search works with new event  
✅ Certificates download with correct template  
✅ QR codes verify correctly  

---

## ✨ Features

### Pages

1. **Home** (`/`) - Hero, stats, about, mission
2. **Events** (`/events`) - Event listing with cards
3. **CTRL+THINK** (`/events/ctrl-think`) - Event details with photo gallery
4. **Team** (`/team`) - Team member cards
5. **Projects** (`/projects`) - Project showcases
6. **Certificates** (`/certificates`) - Search & download certificates
7. **Join** (`/join`) - Ambassador program registration
8. **Certificate Verify** (`/certificates/verify/[id]`) - QR verification page

### Components

- **Navbar** - Responsive navigation with mobile menu
- **Footer** - Social links, contact info
- **Hero Section** - Gradient text, CTA buttons
- **Event Cards** - Event information with images
- **Team Cards** - Team member profiles
- **Certificate Verification** - Multi-search with event selector

### Technology

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Font Awesome
- **QR Codes**: qrcode npm package
- **Deployment Ready**: Vercel, Netlify

---

## 💻 Development

### Run Development Server

```bash
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Adding Pages

1. Create file in `src/app/[page-name]/page.tsx`
2. Export default React component
3. Add to navigation in `components/layout/Navbar.tsx`

### Styling

Using Tailwind CSS v4:

```tsx
// No config file needed
// Use classes directly
<div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg">
  Button
</div>
```

---

## 🎨 Certificate Template Positioning Guide

### Coordinate System

```
Template: 1200px × 800px

(0,0) ──────────────────────────── (1200,0)
  │                                    │
  │         Name Position              │
  │         (600, 450)                 │
  │                                    │
  │                     QR Code        │
  │                     (900, 600)     │
  │                                    │
(0,800) ─────────────────────────── (1200,800)
```

### Positioning Elements

**Name**:
```typescript
name: {
  x: 600,              // Center horizontally (1200/2)
  y: 450,              // Slightly above center
  fontSize: 48,        // Large font
  align: 'center',     // Center-aligned text
}
```

**QR Code**:
```typescript
qrCode: {
  x: 900,              // Right side (bottom-right corner)
  y: 600,              // Lower section
  size: 120,           // 120x120 pixels
}
```

**Team Name** (optional):
```typescript
teamName: {
  x: 600,              // Center horizontally
  y: 520,              // Below name
  fontSize: 24,        // Smaller than name
  align: 'center',
}
```

---

## 📦 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect GitHub repo to Vercel dashboard for automatic deployments.

### Deploy to Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Environment Variables (Production)

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 🗂️ Data Management

### Certificate Data

**Location**: `src/lib/certificates/events/[event-name].ts`

**Format**: CSV embedded as string

```typescript
const CSV_DATA = `id,team_name,name,email_id,enrollment
1,Team A,John Doe,john@email.com,A12345
2,Team B,Jane Smith,jane@email.com,A67890`;
```

### Static Data

**Location**: `src/lib/data/`

- `events.ts` - Event listings
- `team.ts` - Team members
- `projects.ts` - Project data
- `stats.ts` - Homepage statistics
- `socialLinks.ts` - Social media links

---

## 🔧 Troubleshooting

### Template Not Loading

**Problem**: Certificate template shows 404

**Solution**: Ensure template is in `public/assets/images/templates/`

```bash
# Verify file exists
ls public/assets/images/templates/ctrl_think.jpg

# Restart dev server
npm run dev
```

### Certificate Not Found

**Problem**: Search returns "Certificate not found"

**Solution**: 
1. Check enrollment number matches exactly (case-sensitive)
2. Verify event ID is registered in `events/index.ts`
3. Check CSV data has correct format

### Build Errors

**Problem**: TypeScript errors during build

**Solution**:
```bash
# Check for type errors
npm run lint

# Clear cache and rebuild
rm -rf .next
npm run build
```

---

## 📊 System Statistics

- **Total Pages**: 8
- **Components**: 15+
- **Events**: 1 (CTRL+THINK)
- **Certificates**: 70
- **Teams**: 21
- **Lines of Code**: 5000+

---

## 🤝 Contributing

### Adding Features

1. Create feature branch
2. Implement changes
3. Test locally
4. Submit pull request

### Code Style

- Use TypeScript for all files
- Follow ESLint rules
- Use Tailwind classes (no inline styles)
- Document complex functions

---

## 📞 Support

**Email**: techniki@ggn.amity.edu

**Issues**: For technical issues, check:
1. This README
2. Error messages in console
3. Terminal output

---

## 📄 License

© 2024 Techniki - Amity University Gurugram

---

## 🎉 Acknowledgments

### Development Journey

This project was built through careful planning and execution:

1. ✅ Analyzed static HTML website structure
2. ✅ Created Next.js project with TypeScript
3. ✅ Migrated all pages (Home, Events, Team, Projects, Join)
4. ✅ Built CTRL+THINK event detail page with photo gallery
5. ✅ Implemented comprehensive certificate system
6. ✅ Added multi-event support with QR verification
7. ✅ Organized codebase with scalable architecture

### Tech Stack Decisions

- **Next.js 15**: Modern framework with excellent performance
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS v4**: Utility-first CSS with no config needed
- **App Router**: Latest Next.js routing for better UX
- **CSV Import**: Simple data management without database

---

## 🚀 Quick Reference

### Most Common Tasks

**Start Development**:
```bash
cd techniki-app && npm run dev
```

**Search Certificate**:
Visit http://localhost:3000/certificates

**Add Event**:
1. Add template to `public/assets/images/templates/`
2. Update `src/lib/certificates/templates/index.ts`
3. Create event file in `src/lib/certificates/events/`
4. Register in `events/index.ts`

**Deploy**:
```bash
vercel
```

---

**Built with ❤️ by Techniki Team**

*Last Updated: October 3, 2025*
