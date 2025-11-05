'use client';

export default function EthicalHackingRegistration() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ethical Hacking
              <span className="bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">
                {" "}Event
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 font-semibold">
              Register Now for Our Ethical Hacking Workshop
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join us for an intensive hangit ds-on workshop where you&apos;ll learn the fundamentals of 
              ethical hacking, penetration testing, and cybersecurity best practices.
            </p>
          </div>

          {/* Registration Form Container */}
          <div className="max-w-9xl mx-auto">
            <div 
              className="glass-card p-8 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Event Registration
                </h2>
                <p className="text-gray-300">
                  Fill out the form below to secure your spot in the Ethical Hacking Workshop
                </p>
              </div>

              {/* Google Forms Iframe */}
              <div className="flex justify-center">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf4WpwUOdPzaFQwdmlAQXVrsV4bh3PUyVLSmuJfMwF-IpgFJQ/viewform?embedded=true"
                  width="700"
                  height="920"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg shadow-2xl"
                  style={{ maxWidth: '100%', height: 'auto', aspectRatio: '700/920' }}
                >
                  Loading…
                </iframe>
              </div>

             
            </div>
          </div>

          {/* Event Details Section */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What You&apos;ll Learn
              </h2>
              <p className="text-lg text-gray-300">
                Master the essential skills of ethical hacking and cybersecurity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div 
                className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="text-red-400 text-4xl mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Security Basics</h3>
                <p className="text-gray-300 text-sm">
                  Fundamentals of network security and vulnerability assessment
                </p>
              </div>

              <div 
                className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="text-orange-400 text-4xl mb-4">
                  <i className="fas fa-bug"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Penetration Testing</h3>
                <p className="text-gray-300 text-sm">
                  Hands-on experience with penetration testing tools and techniques
                </p>
              </div>

              <div 
                className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="text-yellow-400 text-4xl mb-4">
                  <i className="fas fa-lock"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cryptography</h3>
                <p className="text-gray-300 text-sm">
                  Understanding encryption, decryption, and secure communications
                </p>
              </div>

              <div 
                className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="text-green-400 text-4xl mb-4">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ethical Practices</h3>
                <p className="text-gray-300 text-sm">
                  Legal guidelines and ethical considerations in cybersecurity
                </p>
              </div>
            </div>
          </div>

          {/* Event Highlights */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-2xl bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Event Highlights
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="text-red-400 text-xl mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Expert Instructors</h3>
                    <p className="text-gray-300 text-sm">Learn from industry professionals with real-world experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-orange-400 text-xl mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Hands-on Labs</h3>
                    <p className="text-gray-300 text-sm">Practical exercises in a safe, controlled environment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-yellow-400 text-xl mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Certificate</h3>
                    <p className="text-gray-300 text-sm">Receive a certificate upon successful completion</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-green-400 text-xl mt-1">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Networking</h3>
                    <p className="text-gray-300 text-sm">Connect with fellow cybersecurity enthusiasts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
