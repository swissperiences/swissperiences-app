import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <h3 className="text-2xl font-light mb-4 tracking-wide">Swissperiences</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Curated Swiss experiences for discerning travelers.
              Invite-only hosts. Swiss precision.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-light tracking-wide mb-4 text-gray-300">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/experiences" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                  All Experiences
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                  Corporate Retreats
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-light tracking-wide mb-4 text-gray-300">
              For Partners
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                  Become a Host
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                  Partner Benefits
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                  Host Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-light tracking-wide mb-4 text-gray-300">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
                  Support
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-light">
          <p>&copy; 2025 Swissperiences. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors font-light">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors font-light">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
