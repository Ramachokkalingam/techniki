"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ComputerVisionWorkshopPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string | boolean> = {};
    formData.forEach((v, k) => (payload[k] = v.toString()));
    payload.joinedWhatsapp = !!formData.get('joinedWhatsapp');

    try {
      const res = await fetch('/api/events/cvw/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Submission failed');
      }

      setSuccess('Successfully registered for the Computer Vision Workshop! 🎉');
      form.reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Unknown error occurred. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 bg-gradient-to-br from-cyan-900/40 to-blue-900/40">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div data-aos="fade-up">
            <div className="flex flex-col items-center justify-center mb-6">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                From Pixel to Intelligence
              </h1>
              <p className="text-2xl text-cyan-300 font-bold mb-1 tracking-wide">
              Foundations & Frontiers of Computer Vision
              </p>
              <p className="text-xl text-orange-400 font-semibold tracking-widest mb-4">
                LEARN. CODE. INNOVATE.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Organized by Techनिकी @ Amity University Gurugram &nbsp;|&nbsp; Co-powered by AI Research Cluster
              </p>
              {/* Event Details Pills */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="glass-card px-6 py-3 rounded-full bg-white/10 backdrop-blur">
                  <i className="fas fa-calendar mr-2 text-cyan-400"></i>
                  <span className="text-white font-semibold">April 7, 2026</span>
                </div>
                <div className="glass-card px-6 py-3 rounded-full bg-white/10 backdrop-blur">
                  <i className="fas fa-clock mr-2 text-orange-400"></i>
                  <span className="text-white font-semibold">9:30 AM – 1:00 PM</span>
                </div>
                <div className="glass-card px-6 py-3 rounded-full bg-white/10 backdrop-blur">
                  <i className="fas fa-map-marker-alt mr-2 text-blue-400"></i>
                  <span className="text-white font-semibold">Venue: C-214</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success/Error Messages */}
      {success && (
        <div className="max-w-3xl mx-auto px-4 mt-6">
          <div className="bg-green-500 bg-opacity-20 border border-green-500 rounded-lg p-4 text-green-300 text-center">
            {success}
          </div>
        </div>
      )}
      {error && (
        <div className="max-w-3xl mx-auto px-4 mt-6">
          <div className="bg-red-500 bg-opacity-20 border border-red-500 rounded-lg p-4 text-red-300 text-center">
            ⚠️ {error}
          </div>
        </div>
      )}

      {/* Registration Form */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-8">
            <h2 className="text-3xl font-bold mb-2 text-center">Workshop Registration</h2>
            <p className="text-center text-gray-400 text-sm mb-8">
              Fill in your details to register for the hands-on Computer Vision Workshop
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">👤 Participant Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="fullName"
                      type="text"
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Enrollment No. <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="enrollmentNo"
                      type="text"
                      placeholder="e.g. A2305224XXXXXX"
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Course &amp; Branch <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="course"
                      type="text"
                      placeholder="e.g. BTech CSE"
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Year / Semester <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="yearSem"
                      type="text"
                      placeholder="e.g. 2nd Year / Sem 4"
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Background */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400"> Background & Experience</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Programming Experience <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="experience"
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="" disabled selected>Select your level</option>
                      <option value="beginner">Beginner – Just starting out</option>
                      <option value="intermediate">Intermediate – Comfortable with Python</option>
                      <option value="advanced">Advanced – Worked with ML/CV before</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Have you used OpenCV / PyTorch / YOLOv8 before?
                    </label>
                    <select
                      name="priorCVExperience"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="none">No, completely new to these</option>
                      <option value="opencv">Used OpenCV only</option>
                      <option value="pytorch">Used PyTorch only</option>
                      <option value="multiple">Used more than one of these</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      What do you hope to learn? <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="expectation"
                      placeholder="Tell us what you're excited to learn or build at this workshop..."
                      required
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* WhatsApp Group */}
              <div className="border-t border-gray-700 pt-6">
                <div className="bg-green-900 bg-opacity-30 border border-green-700 rounded-lg p-6">
                  <p className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">💬</span>
                    Join Our WhatsApp Group
                  </p>
                  <p className="text-sm text-gray-300 mb-4">
                    Stay updated with workshop details, pre-reads, and announcements from the coordinators.
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors mb-4"
                  >
                    Join WhatsApp Group →
                  </a>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      name="joinedWhatsapp"
                      type="checkbox"
                      required
                      className="w-5 h-5 rounded border-gray-600 text-green-500 focus:ring-2 focus:ring-green-500"
                    />
                    <span className="text-sm">
                      I confirm I have joined the WhatsApp group <span className="text-red-400">*</span>
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-orange-500 hover:from-cyan-600 hover:via-blue-600 hover:to-orange-600 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  '✅ Register for Workshop'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-8 text-center text-sm text-gray-500 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Techनिकी. All rights reserved.</p>
      </footer>
    </main>
  );
}
