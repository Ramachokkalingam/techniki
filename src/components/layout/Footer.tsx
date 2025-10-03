import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black/80 backdrop-blur-lg text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-10">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <span className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                Tech<span className="text-blue-400">निकी</span>
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Building an inclusive tech community that empowers every
              individual to learn, connect, and innovate together.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/techniki_auh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-white text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/technikiauh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-white text-lg"></i>
              </a>
              <a
                href="https://discord.gg/jxt2fZG4jM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-700 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Discord"
              >
                <i className="fab fa-discord text-white text-lg"></i>
              </a>
              <a
                href="https://chat.whatsapp.com/BVCtubt4o6pLJcfPAYdBO5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp text-white text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-blue-400">
              Quick Links
            </h5>
            <div className="space-y-2">
              <Link
                href="/events"
                className="block text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
              >
                Events
              </Link>
              <Link
                href="/certificates"
                className="block text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
              >
                Certificates
              </Link>
              <Link
                href="/team"
                className="block text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
              >
                Our Team
              </Link>
              <Link
                href="/projects"
                className="block text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
              >
                Projects
              </Link>
            </div>
          </div>

          {/* Community */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-purple-400">
              Community
            </h5>
            <div className="space-y-2">
              <Link
                href="/join-community"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm md:text-base"
              >
                Join Community
              </Link>
              <Link
                href="/join-team"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm md:text-base"
              >
                Join Team
              </Link>
              <Link
                href="/ambassador"
                className="block text-gray-300 hover:text-purple-400 transition-colors text-sm md:text-base"
              >
                Become Campus Ambassador
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-green-400">
              Get In Touch
            </h5>
            <div className="space-y-4">
              <a
                href="mailto:techniki@ggn.amity.edu"
                className="flex items-center text-gray-300 hover:text-green-400 transition-colors text-sm md:text-base"
              >
                techniki@ggn.amity.edu
              </a>
              <div className="flex items-center text-gray-300 text-sm md:text-base">
                Amity University, Gurgaon
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Techनिकी. All rights reserved. Built with ❤️
            by the Techniki Team.
          </p>
        </div>
      </div>
    </footer>
  );
}
