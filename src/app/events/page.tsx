import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import EventCard from '@/components/cards/EventCard';
import { eventStats } from '@/lib/data/stats';
import { upcomingEvents, pastEvents } from '@/lib/data/events';

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our "
        titleGradient="Events"
        subtitle="Workshops, Hackathons, and Tech Talks"
        description="Join us for exciting tech events, hands-on workshops, and networking opportunities with industry experts and fellow tech enthusiasts."
        primaryButton={{
          text: 'Register Now',
          href: '/join',
          icon: 'ticket-alt',
        }}
        secondaryButton={{
          text: 'View Past Events',
          href: '#past-events',
          icon: 'history',
        }}
      />

      {/* Stats Section */}
      <Stats stats={eventStats} />

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upcoming Events
            </h2>
           <p className="text-lg text-gray-300 max-w-3xl mx-auto">
  Don&apos;t miss out on our exciting upcoming events and workshops
</p>
 </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl text-gray-600 mb-4">
                <i className="fas fa-calendar-times"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-400 mb-4">
                No Upcoming Events
              </h3>
              <p className="text-gray-500 mb-8">
                Stay tuned! we&amp;apos;re planning something amazing.
              </p>
              <a
                href="/join"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition-all"
              >
                Join Community to Get Notified
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section id="past-events" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Past Events
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Check out our previously hosted events and the amazing experiences we&apos;ve created
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Event Categories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We organize diverse events to cater to all interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="glass-card p-8 rounded-2xl text-center group hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-blue-700/50 transition-all">
              <div className="text-5xl mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hackathons</h3>
              <p className="text-gray-300 text-sm">
                24-hour coding competitions to build innovative solutions
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center group hover:bg-gradient-to-br hover:from-purple-900/50 hover:to-purple-700/50 transition-all">
              <div className="text-5xl mb-4 text-purple-400 group-hover:scale-110 transition-transform">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Workshops</h3>
              <p className="text-gray-300 text-sm">
                Hands-on learning sessions with industry experts
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center group hover:bg-gradient-to-br hover:from-green-900/50 hover:to-green-700/50 transition-all">
              <div className="text-5xl mb-4 text-green-400 group-hover:scale-110 transition-transform">
                <i className="fas fa-microphone-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tech Talks</h3>
              <p className="text-gray-300 text-sm">
                Inspiring talks from tech leaders and innovators
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl text-center group hover:bg-gradient-to-br hover:from-yellow-900/50 hover:to-yellow-700/50 transition-all">
              <div className="text-5xl mb-4 text-yellow-400 group-hover:scale-110 transition-transform">
                <i className="fas fa-trophy"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Competitions</h3>
              <p className="text-gray-300 text-sm">
                Challenge yourself and compete for exciting prizes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want to Host an Event?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Have an idea for an amazing tech event? Collaborate with us and make it happen!
            </p>
            <a
              href="mailto:techniki@ggn.amity.edu"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-xl"
            >
              Contact Us <i className="fas fa-envelope ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


