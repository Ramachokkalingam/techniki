import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import TeamCard from '@/components/cards/TeamCard';
import { teamStats } from '@/lib/data/stats';
import { teamMembers } from '@/lib/data/team';
import { domainTeams } from '@/lib/data/domains';

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Meet Our "
        titleGradient="Team"
        subtitle="The Driving Force Behind Techniki"
        description="            Meet the passionate individuals behind Techनिकी&apos;s success. Our diverse team of"
        primaryButton={{
          text: 'Join Our Team',
          href: '/join',
          icon: 'users',
        }}
        secondaryButton={{
          text: 'View Projects',
          href: '/projects',
          icon: 'project-diagram',
        }}
      />

      {/* Stats Section */}
      <Stats stats={teamStats} />

      {/* Team Members */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Team
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Meet the dedicated members who lead and shape Techniki&apos;s vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Domain Teams */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Teams
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Specialized teams working on different tech domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {domainTeams.map((team, index) => (
              <div
                key={team.id}
                className={`glass-card p-8 rounded-2xl text-center group hover:bg-gradient-to-br ${team.gradient} transition-all cursor-pointer`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl mb-4 text-white group-hover:scale-110 transition-transform">
                  <i className={`fas fa-${team.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{team.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{team.description}</p>
                <div className="text-gray-400 text-xs">
                  <i className="fas fa-users mr-2"></i>
                  {team.members}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="text-6xl mb-6">
              <i className="fas fa-hand-holding-heart text-blue-400"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              we&amp;apos;re always looking for passionate individuals who share our vision. 
                              Whether you&apos;re a developer, designer, or simply passionate about technology,
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="glass-card p-6 rounded-xl">
                <div className="text-3xl mb-3 text-blue-400">
                  <i className="fas fa-code"></i>
                </div>
                <h4 className="text-white font-bold mb-2">Developers</h4>
                <p className="text-gray-300 text-sm">
                  Build amazing projects and contribute to open source
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="text-3xl mb-3 text-purple-400">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h4 className="text-white font-bold mb-2">Designers</h4>
                <p className="text-gray-300 text-sm">
                  Create stunning visuals and user experiences
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="text-3xl mb-3 text-green-400">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h4 className="text-white font-bold mb-2">Community Managers</h4>
                <p className="text-gray-300 text-sm">
                  Organize events and grow our community
                </p>
              </div>
            </div>

            <a
              href="/join-team"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-xl"
            >
              Apply Now <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


