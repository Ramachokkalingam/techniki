import Link from 'next/link';

export const metadata = {
  title: 'Join Our Team - Techनिकी',
  description: 'Become a core team member of Techनिकी and help build the future of tech community',
};

export default function JoinTeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our <span className="text-blue-400">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Become a core team member and help shape the future of tech education and innovation
          </p>
        </div>

        {/* Why Join Section */}
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Why Join Our Team?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-trophy text-blue-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Leadership Experience</h3>
                <p className="text-gray-400">Gain valuable leadership and organizational skills</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-project-diagram text-purple-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Real Projects</h3>
                <p className="text-gray-400">Work on meaningful projects that impact thousands</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-handshake text-green-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Networking</h3>
                <p className="text-gray-400">Build connections with industry professionals</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-certificate text-yellow-400 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Recognition</h3>
                <p className="text-gray-400">Get recognized for your contributions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Available Positions */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Open Positions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Technical Team */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                <i className="fas fa-code text-blue-400 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Technical Team</h3>
              <p className="text-gray-400 mb-4">Web Dev, App Dev, AI/ML, AR/VR</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Build and maintain projects</li>
                <li>• Conduct technical workshops</li>
                <li>• Mentor fellow students</li>
              </ul>
            </div>

            {/* Design Team */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                <i className="fas fa-palette text-purple-400 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Design Team</h3>
              <p className="text-gray-400 mb-4">UI/UX, Graphics, Video Editing</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Create visual content</li>
                <li>• Design event materials</li>
                <li>• Maintain brand identity</li>
              </ul>
            </div>

            {/* Content Team */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <i className="fas fa-pen text-green-400 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Content Team</h3>
              <p className="text-gray-400 mb-4">Blog Writing, Social Media</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Write technical articles</li>
                <li>• Manage social media</li>
                <li>• Create documentation</li>
              </ul>
            </div>

            {/* Event Management */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-red-500/20 hover:border-red-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                <i className="fas fa-calendar-check text-red-400 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Event Management</h3>
              <p className="text-gray-400 mb-4">Planning, Execution, Coordination</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Organize events and workshops</li>
                <li>• Coordinate with speakers</li>
                <li>• Manage logistics</li>
              </ul>
            </div>

            {/* Marketing Team */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-4">
                <i className="fas fa-bullhorn text-yellow-400 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Marketing Team</h3>
              <p className="text-gray-400 mb-4">Outreach, Partnerships</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Promote events and activities</li>
                <li>• Build partnerships</li>
                <li>• Increase community reach</li>
              </ul>
            </div>

            {/* Operations Team */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-500/50 transition-all">
              <div className="w-14 h-14 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                <i className="fas fa-cogs text-indigo-400 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Operations Team</h3>
              <p className="text-gray-400 mb-4">Logistics, Finance, Admin</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Handle administrative tasks</li>
                <li>• Manage finances</li>
                <li>• Ensure smooth operations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Application Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Apply</h3>
              <p className="text-gray-400">Fill out the application form</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Interview</h3>
              <p className="text-gray-400">Attend a casual interview</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Task</h3>
              <p className="text-gray-400">Complete a small task</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Onboard</h3>
              <p className="text-gray-400">Welcome to the team!</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://forms.gle/your-form-link"
            target="_blank"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform inline-flex items-center justify-center gap-3"
          >
            <i className="fas fa-edit"></i>
            Apply Now
          </Link>
          <p className="text-gray-400 mt-6">
            Applications are reviewed on a rolling basis. Join us today!
          </p>
        </div>
      </div>
    </div>
  );
}
