'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationLink } from '@/types';

const navigationLinks: NavigationLink[] = [
  { href: '/events', label: 'Events', icon: 'calendar-alt' },
  { href: '/certificates', label: 'Certificates', icon: 'certificate' },
  { href: '/team', label: 'Team', icon: 'users' },
  { href: '/projects', label: 'Projects', icon: 'project-diagram' },
  { href: '/#contact', label: 'Contact', icon: 'envelope' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-25 h-10">
              <Image
                src="/logo.png"
                alt="Techniki Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* <span className="text-2xl font-bold hidden sm:block">
              Tech<span className="text-blue-400">निकी</span>
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-blue-400 transition-colors duration-300 relative px-2 py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Join Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <Link
              href="/join"
              className="hidden sm:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:from-purple-600 hover:to-blue-500 hover:scale-105 shadow-lg text-sm"
            >
              JOIN NOW
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white hover:text-blue-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-blue-400 transition-colors py-2 border-b border-gray-700"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/join"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-center font-semibold"
              >
                JOIN COMMUNITY
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
