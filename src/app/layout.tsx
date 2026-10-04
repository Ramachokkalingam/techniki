import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import InteractiveBackground from '@/components/layout/InteractiveBackground';
import GlassEffects from '@/components/layout/GlassEffects';
import RouteProgress from '@/components/layout/RouteProgress';
import ScrollReveal from '@/components/layout/ScrollReveal';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Techनिकी - Empowering Innovation in Technology',
  description: 'Join Techनिकी, the premier tech community for AI, ML, Web Development, AR, and VR enthusiasts.',
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
    <html lang="en" data-scroll-behavior="smooth">
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
      <body className={`${inter.className} flex min-h-dvh flex-col text-white antialiased`}>
        {/* Global interactive background (aurora + particle network) */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <InteractiveBackground />

        <GlassEffects />
        <RouteProgress />
        <ScrollReveal />
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
