'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendar, 
  faClock, 
  faMapMarkerAlt, 
  faCode, 
  faLightbulb, 
  faRocket, 
  faCertificate, 
  faCalendarAlt, 
  faUsers, 
  faExternalLinkAlt, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';

export default function ComputerVisionPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 bg-center bg-cover" style={{ backgroundImage: "url('/assets/images/events/image.png')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Foundations & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Frontiers of Computer Vision</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              From Pixels to Intelligence
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Organized by Techनिकी @ Amity University Haryana
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="glass-card px-6 py-3 rounded-full">
                <FontAwesomeIcon icon={faCalendar} className="mr-2 text-blue-400" />
                <span className="text-white font-semibold">April 7, 2026</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full">
                <FontAwesomeIcon icon={faClock} className="mr-2 text-purple-400" />
                <span className="text-white font-semibold">9:30 AM - 1:00 PM</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-yellow-400" />
                <span className="text-white font-semibold">Room C-214</span>
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
                Join us for an exciting hands-on workshop on <strong className="text-blue-400">Computer Vision</strong> — from the basics to cutting-edge real-world applications. 
                This workshop is organized by Techनिकी at <strong className="text-blue-400">Amity University Haryana</strong> on <strong className="text-blue-400">April 7, 2026</strong>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Learn directly from experts in hands-on coding sessions with <strong className="text-purple-400">OpenCV, PyTorch & YOLOv8</strong>. 
                Explore real-world applications in <strong className="text-green-400">Healthcare, Robotics, and Smart Cities</strong>. 
                Build your own Computer Vision projects and take home valuable skills that industry demands.
              </p>
            </div>

            {/* Event Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="glass-card p-6 rounded-xl">
                <div className="text-4xl mb-4 text-blue-400">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Hands-On Coding</h3>
                <p className="text-gray-300">
                  Live coding sessions with OpenCV, PyTorch & YOLOv8. 
                  Learn practical techniques for image processing and object detection.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="text-4xl mb-4 text-purple-400">
                  <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Real-World Applications</h3>
                <p className="text-gray-300">
                  Discover how Computer Vision is transforming healthcare, robotics, 
                  autonomous systems, and smart city solutions.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="text-4xl mb-4 text-green-400">
                  <FontAwesomeIcon icon={faRocket} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Build Your Projects</h3>
                <p className="text-gray-300">
                  Hands-on experience building CV projects from scratch. 
                  Take your ideas and turn them into working solutions.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="text-4xl mb-4 text-yellow-400">
                  <FontAwesomeIcon icon={faCertificate} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Certificate & Networking</h3>
                <p className="text-gray-300">
                  Earn a participation certificate and network with industry experts 
                  and fellow tech enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Event Details
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />Schedule
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Date:</strong> April 7, 2026</p>
                  <p><strong>Start Time:</strong> 9:30 AM</p>
                  <p><strong>End Time:</strong> 1:00 PM</p>
                  <p><strong>Duration:</strong> 3.5 hours</p>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />Venue
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Room:</strong> C-214</p>
                  <p><strong>Location:</strong> Amity University Gurugram</p>
                  <p><strong>Facilities:</strong> High-speed WiFi, Projector</p>
                  <p><strong>Capacity:</strong> 100+ Participants</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">
                <FontAwesomeIcon icon={faUsers} className="mr-2" />Coordinators
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 font-semibold mb-3">Student Coordinators:</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Sajan Dhakal</li>
                    <li>• Manav Raghav</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-300 font-semibold mb-3">Faculty Coordinators:</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Ms. Shivani Sharma</li>
                    <li>• Ms. Rashmi Gupta</li>
                    <li>• Dr. Alpana</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                <FontAwesomeIcon icon={faLightbulb} className="mr-2" />What You&apos;ll Learn
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">Workshop Highlights:</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>✓ Hands-on coding with OpenCV, PyTorch & YOLOv8</li>
                    <li>✓ Introduction to Image Processing Basics</li>
                    <li>✓ Object Detection & Recognition Techniques</li>
                    <li>✓ Real-world Applications: Healthcare, Robotics, Smart Cities</li>
                    <li>✓ Build your own CV projects & ideas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Prerequisites:</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>✓ Basic AI/ML knowledge (helpful but not required)</li>
                    <li>✓ Bring your laptop & charger</li>
                    <li>✓ Open to all students & professionals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register-computervision" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join?
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Fill out the registration form below to secure your spot in the workshop.
            </p>

            <div className="glass-card p-8 rounded-2xl">
              <div className="mb-6">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeyt_0j0bPBXBiV1czf3PGikTRUNOUReGRLSULHhN50vjt40w/viewform"
                  target="_blank"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 hover:scale-105">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />Open Registration Form
                </a>
              </div>

              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeyt_0j0bPBXBiV1czf3PGikTRUNOUReGRLSULHhN50vjt40w/viewform?embedded=true"
                width="100%"
                height="1800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                style={{border: 'none', borderRadius: '8px', minHeight: '1800px'}}
                loading="lazy"
                title="Computer Vision Workshop Registration Form">
                <p>Loading registration form...</p>
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don&apos;t Miss Out!
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Limited seats available. Register now to secure your spot and join us for an amazing learning experience!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register-computervision"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-xl">
              Register Now <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <Link
              href="/events"
              className="inline-block bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all">
              View All Events <FontAwesomeIcon icon={faCalendar} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
