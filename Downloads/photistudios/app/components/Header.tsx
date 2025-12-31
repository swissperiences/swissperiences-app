'use client';

import { motion } from 'framer-motion';

/**
 * Header Component
 * Fixed header with black background and white logo
 * Follows WCAG 2.1 AA accessibility standards
 */
export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-5 flex items-start">
        <a
          href="/"
          className="text-white font-bold text-[13px] tracking-wider leading-[1.3] uppercase focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
          aria-label="Photi Studios Home"
        >
          PHOTI
          <br />
          STUDIOS
        </a>
      </div>
    </motion.header>
  );
}
