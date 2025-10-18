import Hero from '@/components/sections/Hero';

export default function JoinPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Join "
        titleGradient="Techनिकी"
        subtitle="Become Part of the Movement"
        description="Join our vibrant community of tech enthusiasts, innovators, and learners. Start your journey with us today!"
        primaryButton={{
          text: 'Fill Form Below',
          href: '#form',
          icon: 'arrow-down',
        }}
        secondaryButton={{
          text: 'Learn More',
          href: '/#about',
          icon: 'info-circle',
        }}
      />

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Join Us?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Unlock exclusive benefits and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-2xl text-center" data-aos="fade-up">
              <div className="text-5xl mb-4 text-blue-400">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Learn</h3>
              <p className="text-gray-300">
                Access workshops, tutorials, and mentorship from industry experts
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="text-5xl mb-4 text-purple-400">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Network</h3>
              <p className="text-gray-300">
                Connect with like-minded peers and build lasting professional relationships
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-5xl mb-4 text-green-400">
                <i className="fas fa-trophy"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Grow</h3>
              <p className="text-gray-300">
                Participate in hackathons, competitions, and real-world projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="form" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl" data-aos="fade-up">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Join Our Community
                </h2>
                <p className="text-gray-300">
                  Fill out the form below to become a member
                </p>
              </div>

              {/* Embedded Google Form */}
              <div className="w-full" style={{ minHeight: '800px' }}>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScNeIgXaGC-9SbBWVYBzTtEdD1ge9UwEM1uiAyYXfE6mCuLGA/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                >
                  Loading…
                </iframe>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-400 mb-4">
                  Already a member? Connect with us on social media!
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.instagram.com/techniki_auh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/technikiauh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <i className="fab fa-linkedin text-white"></i>
                  </a>
                  <a
                    href="https://discord.gg/jxt2fZG4jM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <i className="fab fa-discord text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
