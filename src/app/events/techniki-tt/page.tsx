
"use client";


import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TechnikiTTPage() {
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
    const payload: Record<string, any> = {};
    formData.forEach((v, k) => (payload[k] = v));
    payload.joinedWhatsapp = !!formData.get('joinedWhatsapp');

    // Collect members into an array
    const members: string[] = [];
    for (let i = 2; i <= 6; i++) {
      const name = payload[`member${i}Name`];
      const course = payload[`member${i}Course`];
      if (name && course) members.push(`${name} (${course})`);
    }
    payload.members = members;

    try {
      const res = await fetch('/api/events/techniki-tt/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Submission failed');
      }

      setSuccess('Team registered successfully! 🎉');
      form.reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setError(err?.message || 'Unknown error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Hero Section - matches CtrlThinkPage */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 bg-gradient-to-br from-blue-900/40 to-purple-900/40">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div data-aos="fade-up">
            <div className="flex flex-col items-center justify-center mb-6">
              <Link href="/" className="flex items-center gap-3 group relative mb-4">
                
              </Link>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                🚀 Techniki Teams (TT)
              </h1>
              <p className="text-xl text-gray-300 mb-2">
                Register your innovative idea and showcase your team's talent
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Success/Error Messages */}
      {success && (
        <div className="max-w-3xl mx-auto px-4 mb-6">
          <div className="bg-green-500 bg-opacity-20 border border-green-500 rounded-lg p-4 text-green-300 text-center">
            {success}
          </div>
        </div>
      )}
      {error && (
        <div className="max-w-3xl mx-auto px-4 mb-6">
          <div className="bg-red-500 bg-opacity-20 border border-red-500 rounded-lg p-4 text-red-300 text-center">
            ⚠️ {error}
          </div>
        </div>
      )}

      {/* Registration Form */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Team Registration</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Team Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Team Name <span className="text-red-400">*</span>
                </label>
                <input
                  name="projectTitle"
                  type="text"
                  placeholder="Enter your team name"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Project Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="projectDesc"
                  placeholder="Describe your project idea in detail..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* Team Leader */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">👤 Team Leader</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="leader"
                    type="text"
                    placeholder="Leader Name"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  />
                  <input
                    name="leaderCourse"
                    type="text"
                    placeholder="Course (e.g., BTech CSE)"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Team Members */}
              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">👥 Team Members</h3>
                
                {/* Member 2 - Required */}
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Member 2 <span className="text-red-400">*</span></p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="member2Name"
                      type="text"
                      placeholder="Name"
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    />
                    <input
                      name="member2Course"
                      type="text"
                      placeholder="Course"
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Members 3-6 - Optional */}
                {[3, 4, 5, 6].map((num) => (
                  <div key={num} className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Member {num} (Optional)</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        name={`member${num}Name`}
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      />
                      <input
                        name={`member${num}Course`}
                        type="text"
                        placeholder="Course"
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Group */}
              <div className="border-t border-gray-700 pt-6">
                <div className="bg-green-900 bg-opacity-30 border border-green-700 rounded-lg p-6">
                  <p className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="text-2xl">💬</span>
                    Join Our WhatsApp Group
                  </p>
                  <p className="text-sm text-gray-300 mb-4">
                    Stay updated with event details, announcements, and communicate with your team.
                  </p>
                  <a
                    href="https://chat.whatsapp.com/KDJ9c4hjf9Q95DERa3yCCt"
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
                className="w-full py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                  '✅ Register Team'
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
