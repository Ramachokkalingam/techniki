import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import { stats } from '@/lib/data/stats';
import { missionCards, ambassadorBenefits } from '@/lib/data/mission';
import { domains } from '@/lib/data/domains';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Tech"
        titleGradient="निकी"
        subtitle="Empowering Innovation Through Technology, Community, and Collaboration"
        description="Join our vibrant community of AI/ML enthusiasts, web developers, and AR/VR innovators. Learn, collaborate, and build the future together."
        primaryButton={{
          text: 'Join Community',
          href: '/join',
          icon: 'user-plus',
        }}
        secondaryButton={{
          text: 'Explore Events',
          href: '/events',
          icon: 'calendar',
        }}
      />

      {/* Stats Section */}
      <Stats stats={stats} />

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Tech<span className="text-blue-400">निकी</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Techniki is more than just a community—it&apos;s a movement. We bring together passionate students, 
              developers, and innovators to learn, create, and shape the future of technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-2xl" data-aos="fade-right">
              <div className="text-blue-400 text-5xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Community</h3>
              <p className="text-gray-300 leading-relaxed">
                Join 500+ active members across various tech domains. Whether you&amp;apos;re interested in AI/ML, 
                web development, AR/VR, or robotics, you&apos;ll find your tribe here.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl" data-aos="fade-left">
              <div className="text-purple-400 text-5xl mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To create an inclusive platform where technology enthusiasts can collaborate, innovate, 
                and transform ideas into impactful projects that solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What We Do
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We organize events, workshops, and hackathons to help you learn, grow, and innovate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {missionCards.map((card, index) => (
              <div
                key={card.id}
                className="glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-transform"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`text-6xl mb-6 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                  <i className={`fas fa-${card.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Domains */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Tech Domains
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore diverse technology fields and find your area of interest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {domains.map((domain, index: number) => (
              <div
                key={domain.id}
                className={`glass-card p-8 rounded-2xl text-center group hover:bg-gradient-to-br ${domain.gradient} transition-all cursor-pointer`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  <i className={`fas fa-${domain.icon} text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{domain.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambassador Program CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
            <div className="text-6xl mb-6">
              <i className="fas fa-award text-yellow-400"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Become a Campus Ambassador
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Lead tech initiatives in your college, organize events, and be the face of Techniki 
              in your campus. Get exclusive perks and recognition.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {ambassadorBenefits.slice(0, 3).map((benefit, index) => (
                <div
                  key={benefit.id}
                  className="glass-card p-6 rounded-xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-3xl mb-3">
                    <i className={`fas fa-${benefit.icon} text-blue-400`}></i>
                  </div>
                  <h4 className="text-white font-bold mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <Link
              href="/ambassador"
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-xl"
            >
              Apply Now <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/80">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join the Movement?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a community that&apos;s shaping the future of technology. 
              Learn, collaborate, and innovate with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/join"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-xl"
              >
                Join Now <i className="fas fa-user-plus ml-2"></i>
              </Link>
              <Link
                href="/events"
                className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all"
              >
                View Events <i className="fas fa-calendar ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}