import Link from 'next/link';

export const metadata = {
  title: 'Join Community - Techनिकी',
  description: 'Join the Techनिकी community and connect with passionate tech enthusiasts',
};

export default function JoinCommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our <span className="text-purple-400">Community</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow tech enthusiasts, participate in events, and grow together
          </p>
        </div>

        {/* Community Platforms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Discord */}
          <a
            href="https://discord.gg/jxt2fZG4jM"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-700 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <i className="fab fa-discord text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center">Discord</h3>
            <p className="text-gray-400 text-center">Join our active Discord server for real-time discussions</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://chat.whatsapp.com/BVCtubt4o6pLJcfPAYdBO5"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-green-500/20 hover:border-green-500/50 transition-all hover:scale-105"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <i className="fab fa-whatsapp text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center">WhatsApp</h3>
            <p className="text-gray-400 text-center">Get instant updates and announcements</p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/techniki_auh/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <i className="fab fa-instagram text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center">Instagram</h3>
            <p className="text-gray-400 text-center">Follow us for event highlights and updates</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/technikiauh"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all hover:scale-105"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
              <i className="fab fa-linkedin-in text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 text-center">LinkedIn</h3>
            <p className="text-gray-400 text-center">Connect professionally and network</p>
          </a>
        </div>

        {/* Benefits Section */}
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Why Join Our Community?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-users text-purple-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Network</h3>
                <p className="text-gray-400">Connect with like-minded tech enthusiasts</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-graduation-cap text-blue-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Learn</h3>
                <p className="text-gray-400">Access workshops, tutorials, and resources</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-calendar-alt text-green-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Events</h3>
                <p className="text-gray-400">Participate in hackathons and tech events</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-project-diagram text-yellow-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaborate</h3>
                <p className="text-gray-400">Work on exciting projects together</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-certificate text-red-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Certificates</h3>
                <p className="text-gray-400">Earn certificates for participation</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-lightbulb text-indigo-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Mentorship</h3>
                <p className="text-gray-400">Get guidance from experienced members</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Want to be more involved?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join-team"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
            >
              <i className="fas fa-user-plus"></i>
              Join Our Team
            </Link>
            <Link
              href="/ambassador"
              className="bg-gradient-to-r from-blue-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
            >
              <i className="fas fa-star"></i>
              Become an Ambassador
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
