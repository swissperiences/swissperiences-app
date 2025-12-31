'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail } from 'lucide-react';

/**
 * Footer Component
 * Site footer with social links and copyright
 */
export function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Social Links */}
        <div className="flex items-center gap-6">
          <motion.a
            href="https://twitter.com/photistudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-red-600 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" strokeWidth={1.5} />
          </motion.a>

          <motion.a
            href="https://linkedin.com/company/photistudios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-red-600 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" strokeWidth={1.5} />
          </motion.a>

          <motion.a
            href="mailto:hello@photistudios.com"
            className="text-gray-700 hover:text-red-600 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Email"
          >
            <Mail className="w-5 h-5" strokeWidth={1.5} />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-600 font-serif">
          © 2025 Photi Studios
        </div>
      </div>
    </footer>
  );
}
