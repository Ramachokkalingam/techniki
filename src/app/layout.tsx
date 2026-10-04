import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FieldBackground from '@/components/layout/FieldBackground';
import GlassEffects from '@/components/layout/GlassEffects';
import RouteProgress from '@/components/layout/RouteProgress';
import ScrollReveal from '@/components/layout/ScrollReveal';
import SmoothScroll from '@/components/layout/SmoothScroll';
import SpringPhysics from '@/components/layout/SpringPhysics';

// Headings and big display type
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display-face',
  display: 'swap',
});

// Body text, buttons and forms
const body = Geist({
  subsets: ['latin'],
  variable: '--font-body-face',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Techniki - Empowering Innovation in Technology',
  description: 'Join Techniki, the premier tech community for AI, ML, Web Development, AR, and VR enthusiasts.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#060813',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Open the connection to the icon CDN early */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      {/* Flex column + min-h-dvh keeps the footer pinned to the true bottom even on short pages */}
      <body className={`flex min-h-dvh flex-col text-white antialiased`}>
        {/* Global interactive background (aurora + magnetic needle field) */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <FieldBackground />

        <GlassEffects />
        <RouteProgress />
        <ScrollReveal />
        <SmoothScroll />
        <SpringPhysics />
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
