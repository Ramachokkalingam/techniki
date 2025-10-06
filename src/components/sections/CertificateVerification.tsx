'use client';

import { useState } from 'react';
import { generateCertificateWithOverlay } from '@/lib/utils/generateCertificate';
import { getAllEvents } from '@/lib/certificates/events';

interface CertificateData {
  certificateId: string;
  name: string;
  teamName?: string;
  email: string;
  enrollment?: string;
  eventName: string;
  eventDate: string;
  eventId: string;
}

export default function CertificateVerification() {
  const [searchType, setSearchType] = useState<'certificateId' | 'enrollment' | 'email'>('certificateId');
  const [searchValue, setSearchValue] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<string>('all');
  const [certificate, setCertificate] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  // Get all available events
  const availableEvents = getAllEvents();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setCertificate(null);

    try {
      const params = new URLSearchParams();
      
      if (searchType === 'certificateId') {
        params.append('certificateId', searchValue);
      } else if (searchType === 'enrollment') {
        params.append('enrollment', searchValue);
      } else if (searchType === 'email') {
        params.append('email', searchValue);
      }
      
      // Add event filter if specific event selected
      if (selectedEvent !== 'all') {
        params.append('eventId', selectedEvent);
      }

      const response = await fetch(`/api/certificates/verify?${params.toString()}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Certificate not found');
      }

      setCertificate(data.certificate);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!certificate) return;

    setIsDownloading(true);
    try {
      // Get the event config to get template path
      const eventConfig = availableEvents.find(e => e.eventId === certificate.eventId);
      
      await generateCertificateWithOverlay({
        name: certificate.name,
        certificateId: certificate.certificateId,
        templatePath: eventConfig?.templatePath,
        teamName: certificate.teamName,
      });
    } catch (err) {
      setError('Failed to generate certificate. Please try again.');
      console.error(err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="verify" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl" data-aos="fade-up">
            <div className="text-center mb-8">
              <div className="text-6xl mb-6 text-blue-400">
                <i className="fas fa-certificate"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Certificate Verification
              </h2>
              <p className="text-gray-300">
                Enter your details to verify and download your certificate
              </p>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="space-y-6 mb-8">
              {/* Event Selector */}
              <div>
                <label htmlFor="eventSelect" className="block text-white font-semibold mb-2">
                  Select Event
                </label>
                <select
                  id="eventSelect"
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="all" className="bg-gray-900">All Events</option>
                  {availableEvents.map((event) => (
                    <option key={event.eventId} value={event.eventId} className="bg-gray-900">
                      {event.eventName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Type Toggle */}
              <div className="flex justify-center gap-2 mb-6 flex-wrap">
                <button
                  type="button"
                  onClick={() => setSearchType('certificateId')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                    searchType === 'certificateId'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <i className="fas fa-id-card mr-1"></i>
                  Certificate ID
                </button>
                <button
                  type="button"
                  onClick={() => setSearchType('enrollment')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                    searchType === 'enrollment'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <i className="fas fa-graduation-cap mr-1"></i>
                  Enrollment
                </button>
                <button
                  type="button"
                  onClick={() => setSearchType('email')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                    searchType === 'email'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <i className="fas fa-envelope mr-1"></i>
                  Email
                </button>
              </div>

              <div>
                <label htmlFor="searchValue" className="block text-white font-semibold mb-2">
                  {searchType === 'certificateId' && 'Certificate ID'}
                  {searchType === 'enrollment' && 'Enrollment Number'}
                  {searchType === 'email' && 'Email Address'}
                </label>
                <input
                  type={searchType === 'email' ? 'email' : 'text'}
                  id="searchValue"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder={
                    searchType === 'certificateId'
                      ? 'e.g., TECH-CT-2024-001'
                      : searchType === 'enrollment'
                      ? 'e.g., A501052XXXXX'
                      : 'e.g., student@example.com'
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Searching...
                  </>
                ) : (
                  <>
                    <i className="fas fa-search mr-2"></i>
                    Search Certificate
                  </>
                )}
              </button>
            </form>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-300 px-6 py-4 rounded-lg mb-6">
                <i className="fas fa-exclamation-circle mr-2"></i>
                {error}
              </div>
            )}

            {/* Certificate Details */}
            {certificate && (
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    <i className="fas fa-check-circle text-green-400 mr-2"></i>
                    Certificate Verified
                  </h3>
                  <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                    Valid
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Certificate ID</p>
                    <p className="text-white font-semibold">{certificate.certificateId}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Participant Name</p>
                    <p className="text-white font-semibold">{certificate.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Team Name</p>
                    <p className="text-white font-semibold">{certificate.teamName}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Enrollment Number</p>
                    <p className="text-white font-semibold">{certificate.enrollment || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="text-white font-semibold break-all">{certificate.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Event</p>
                    <p className="text-white font-semibold">{certificate.eventName}</p>
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-lg font-semibold hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isDownloading ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Generating Certificate...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-download mr-2"></i>
                      Download Certificate
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
