import Link from 'next/link';

export const metadata = {
  title: 'Campus Ambassador Program - Techनिकी',
  description: 'Become a Techनिकी Campus Ambassador and represent us across India',
};

export default function AmbassadorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-green-400 font-semibold">🚀 Applications Open</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Become a <span className="text-green-400">Campus Ambassador</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Represent Techनिकी at your college and be the bridge between innovation and your peers
          </p>
        </div>

        {/* What is CA Program */}
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            What is the Campus Ambassador Program?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Our Campus Ambassador Program is designed to empower passionate students to become leaders in their colleges.
            As an ambassador, you&apos;ll represent Techनिकी, organize events, and build a thriving tech community at your campus.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Ambassador Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <i className="fas fa-certificate text-green-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Official Certificate</h3>
              <p className="text-gray-400">Receive an official Campus Ambassador certificate</p>
            </div>

            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                <i className="fas fa-award text-blue-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Letter of Recommendation</h3>
              <p className="text-gray-400">Get a LoR from Techनिकी leadership</p>
            </div>

            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <i className="fas fa-users text-purple-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Exclusive Network</h3>
              <p className="text-gray-400">Access to ambassador-only networking events</p>
            </div>

            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-4">
                <i className="fas fa-gift text-yellow-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Exclusive Swag</h3>
              <p className="text-gray-400">Techनिकी merchandise and goodies</p>
            </div>

            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-red-500/20 hover:border-red-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                <i className="fas fa-graduation-cap text-red-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Leadership Skills</h3>
              <p className="text-gray-400">Develop organizational and leadership skills</p>
            </div>

            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                <i className="fas fa-star text-indigo-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Recognition</h3>
              <p className="text-gray-400">Featured on our website and social media</p>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Your Responsibilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fas fa-bullhorn text-green-400"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Promote Events</h3>
                <p className="text-gray-400">Spread awareness about Techनिकी events at your campus</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fas fa-handshake text-blue-400"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Build Community</h3>
                <p className="text-gray-400">Create and nurture a tech community at your college</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fas fa-share-alt text-purple-400"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Social Media</h3>
                <p className="text-gray-400">Share our content and engage with your college community</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fas fa-comments text-yellow-400"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Feedback</h3>
                <p className="text-gray-400">Gather feedback and insights from your peers</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fas fa-calendar-alt text-red-400"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Organize Meetups</h3>
                <p className="text-gray-400">Host small meetups and study sessions</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <i className="fas fa-chart-line text-indigo-400"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Report Activities</h3>
                <p className="text-gray-400">Submit monthly reports of your initiatives</p>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Who Can Apply?
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-center space-x-4">
              <i className="fas fa-check-circle text-green-400 text-xl"></i>
              <p className="text-gray-300 text-lg">Currently enrolled college/university student</p>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-check-circle text-green-400 text-xl"></i>
              <p className="text-gray-300 text-lg">Passionate about technology and community building</p>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-check-circle text-green-400 text-xl"></i>
              <p className="text-gray-300 text-lg">Good communication and interpersonal skills</p>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-check-circle text-green-400 text-xl"></i>
              <p className="text-gray-300 text-lg">Active on social media platforms</p>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-check-circle text-green-400 text-xl"></i>
              <p className="text-gray-300 text-lg">Committed to the program for at least 6 months</p>
            </div>
          </div>
        </div>

        {/* Selection Process */}
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Selection Process
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                1
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Application</h3>
              <p className="text-gray-400 text-sm">Submit the form</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                2
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Screening</h3>
              <p className="text-gray-400 text-sm">Initial review</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                3
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Interview</h3>
              <p className="text-gray-400 text-sm">Virtual interview</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                4
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Task</h3>
              <p className="text-gray-400 text-sm">Small assignment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                5
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Onboarding</h3>
              <p className="text-gray-400 text-sm">Welcome aboard!</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://forms.gle/your-ambassador-form"
            target="_blank"
            className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform inline-flex items-center justify-center gap-3"
          >
            <i className="fas fa-paper-plane"></i>
            Apply for Campus Ambassador
          </Link>
          <p className="text-gray-400 mt-6 text-lg">
            Join 100+ ambassadors representing Techनिकी across India!
          </p>
        </div>
      </div>
    </div>
  );
}
