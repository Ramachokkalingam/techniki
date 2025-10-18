import Image from 'next/image';
import Link from 'next/link';

export default function CtrlThinkPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 bg-gradient-to-br from-blue-900/40 to-purple-900/40">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Git<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">And Github</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Workshop
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Organized by Techनिकी @ Amity University Haryana
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="glass-card px-6 py-3 rounded-full">
                <i className="fas fa-calendar mr-2 text-blue-400"></i>
                <span className="text-white font-semibold">September 4, 2025</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full">
                <i className="fas fa-users mr-2 text-purple-400"></i>
                <span className="text-white font-semibold">70+ Participants</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full">
                <i className="fas fa-trophy mr-2 text-yellow-400"></i>
                <span className="text-white font-semibold">60+ Teams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Event Overview
            </h2>
            <div className="glass-card p-8 rounded-2xl mb-12">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
               Git & GitHub Workshop was a hands-on session organized by Techनिकी on 
                <strong className="text-blue-400"> September 04, 2025</strong>, at Amity University Haryana. 
                Git & GitHub Workshop brought together enthusiastic learners to explore version control, collaborate on real projects, and build their own portfolio websites through hands-on learning.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                The workshop featured <strong className="text-purple-400">Git & GitHub Workshop</strong> brought together over 
              <strong className="text-green-400">70 enthusiastic participants</strong> who explored version control, 
              learned collaborative development using GitHub, and created their own portfolio websites — showcasing 
              their creativity and technical skills. </p>
            </div>

            {/* Event Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="glass-card p-6 rounded-xl">
                <div className="text-4xl mb-4 text-blue-400">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Innovation Focus</h3>
                <p className="text-gray-300">
                Participants developed practical skills in version control, collaboration, and web development — empowering them to build their own portfolio websites and contribute confidently to real-world projects.
                </p>
              </div>
<div className="glass-card p-6 rounded-xl">
                <div className="text-4xl mb-4 text-green-400">
                  <i className="fas fa-file-code text-purple-400 mr-2"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Portfolio Website</h3>
                <p className="text-gray-300">
                 Participants presented their ideas to a panel of expert judges, 
    showcasing their portfolio websites.
                </p>
              </div>


              <div className="glass-card p-6 rounded-xl">
                <div className="text-4xl mb-4 text-green-400">
                  <i className="fas fa-users-cog"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Team Collaboration</h3>
                <p className="text-gray-300">
                 70+ participants collaborated, learned Git & GitHub workflows, and built impressive portfolio websites.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="text-4xl mb-4 text-yellow-400">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Recognition</h3>
                <p className="text-gray-300">
                  Winners received certificates, prizes, and mentorship opportunities 
                  to further develop their innovative ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Event Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image
                src="/assets/images/events/ctrl-think-1.jpg"
                alt="CTRL+THINK Event"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-semibold">Website Presentations</p>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image
                src="/assets/images/events/ctrl-think-2.jpg"
                alt="CTRL+THINK Participants"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-semibold">Workshop Sessions</p>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden glass-card flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4 text-blue-400">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  Breakthrough ideas that could shape the future
                </p>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden glass-card flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4 text-purple-400">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  Teams working together to solve real challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Impact */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Event Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-8 rounded-2xl">
                <div className="text-5xl font-bold text-blue-400 mb-2">100+</div>
                <p className="text-gray-300 text-lg">Participants</p>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <div className="text-5xl font-bold text-purple-400 mb-2">25</div>
                <p className="text-gray-300 text-lg">Teams Competed</p>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <div className="text-5xl font-bold text-green-400 mb-2">3</div>
                <p className="text-gray-300 text-lg">Winning Ideas</p>
              </div>
            </div>

           <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Key Takeaways
              </h3>
            <ul className="text-left space-y-3 text-gray-300">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                <span>Gained hands-on experience with Git & GitHub for version control</span>
                </li>
                <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
                <span>Built and showcased their own portfolio websites from scratch</span>
                </li>
              <li className="flex items-start">
              <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
            <span>Enhanced web design and front-end development skills</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
              <span>Learned the importance of collaboration and project presentation</span>
                </li>
                <li className="flex items-start">
              <i className="fas fa-check-circle text-green-400 mr-3 mt-1"></i>
               <span>Boosted confidence in creating real-world, deployable projects</span>
                </li>
              </ul>
              </div>
          </div>
          </div>
      </section>

      {/* Get Your Photos Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div data-aos="fade-up">
              <div className="text-6xl mb-6 text-pink-400">
                <i className="fas fa-camera"></i>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Your Event Photos
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Relive the memories! Scan the QR code below to access all your photos from Git and Github  event.
              </p>

              {/* QR Code Container */}
              <div className="glass-card p-12 rounded-2xl mb-8">
                <div className="bg-white p-8 rounded-xl inline-block">
                  {/* QR Code Placeholder - Replace with actual QR code */}
                  <div className="w-64 h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                    <div className="text-center">
                      <i className="fas fa-qrcode text-8xl text-gray-400 mb-4"></i>
                      <p className="text-gray-600 font-semibold">Scan QR Code</p>
                      <p className="text-gray-500 text-sm mt-2">to get your photos</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-white text-lg font-semibold mb-2">
                    <i className="fas fa-info-circle text-blue-400 mr-2"></i>
                    How to access your photos:
                  </p>
                  <ol className="text-left max-w-2xl mx-auto space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                      <span>Open your phone&apos;s camera app</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                      <span>Point it at the QR code above</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                      <span>Tap the notification to open the photo gallery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                      <span>Download your favorite moments!</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Alternative Link */}
              <div className="glass-card p-6 rounded-xl">
                <p className="text-gray-300 mb-4">
                  <i className="fas fa-mobile-alt text-purple-400 mr-2"></i>
                  Can&apos;t scan? No problem!
                </p>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all"
                >
                  <i className="fas fa-download mr-2"></i>
                  Click here to access photos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want to Participate in Future Events?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join Techनिकी to get notified about upcoming ideathons, hackathons, and competitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/certificates"
                className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-xl"
              >
                Get Certificate <i className="fas fa-certificate ml-2"></i>
              </Link>
              <Link
                href="/join"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-xl"
              >
                Join Community <i className="fas fa-user-plus ml-2"></i>
              </Link>
              <Link
                href="/events"
                className="inline-block bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all"
              >
                View All Events <i className="fas fa-calendar ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


