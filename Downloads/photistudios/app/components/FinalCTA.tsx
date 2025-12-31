'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import { Boxes } from '@/components/ui/background-boxes';

/**
 * Final CTA Section
 * Call-to-action section with animated background boxes
 * Matches Barshop Studios dark theme design
 */
export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-28 bg-black text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 w-full h-full bg-black z-0">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-4xl mx-auto px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bold text-5xl md:text-6xl mb-5 tracking-tight text-white"
        >
          Ready to dive in?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl font-serif text-gray-300 leading-relaxed mb-8"
        >
          Let's get started on your project and bring your vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button href="#contact" variant="secondary">
            Reach Out
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
