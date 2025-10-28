'use client';

import Link from 'next/link';
import Stats from '@/components/sections/Stats';
import { stats } from '@/lib/data/stats';
import { missionCards } from '@/lib/data/mission';
import { domains } from '@/lib/data/domains';
 

export default function Home() {

  return (
    <>
      {/* Hero Section with Hyperspeed Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Overlay and Hero Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              Tech
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                निकी
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 font-semibold drop-shadow-lg">
              Empowering Innovation Through Technology, Community, and Collaboration
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto drop-shadow-md">
              Join our vibrant community of AI/ML enthusiasts, web developers, and AR/VR innovators.
              Learn, collaborate, and build the future together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/join"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-2xl flex items-center gap-2"
              >
                <i className="fas fa-user-plus"></i>
                Join Community
              </Link>
              <Link
                href="/events"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <i className="fas fa-calendar"></i>
                Explore Events
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <i className="fas fa-chevron-down text-white text-2xl opacity-50"></i>
          </div>
        </div>
      </section>

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
              Techniki is more than just a community—it&apos;s a movement. We bring together
              passionate students, developers, and innovators to learn, create, and shape the future
              of technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-2xl" data-aos="fade-right">
              <div className="text-blue-400 text-5xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Community</h3>
              <p className="text-gray-300 leading-relaxed">
                Join 500+ active members across various tech domains. Whether you&apos;re interested
                in AI/ML, web development, AR/VR, or robotics, you&apos;ll find your tribe here.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl" data-aos="fade-left">
              <div className="text-purple-400 text-5xl mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To create an inclusive platform where technology enthusiasts can collaborate,
                innovate, and transform ideas into impactful projects that solve real-world
                problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Do</h2>
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
                <div
                  className={`text-6xl mb-6 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}
                >
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Tech Domains</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore diverse technology fields and find your area of interest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {domains.map((domain, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-black/80">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join the Movement?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a community that&apos;s shaping the future of technology. Learn,
              collaborate, and innovate with us.
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
