'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import LetsWorkTogether from '@/components/ui/lets-work-section';
import { HeroGridBackground } from '@/components/ui/hero-grid-background';

/**
 * Hero Section Component
 * Main landing section with large typography and CTA
 * Implements staggered animation for visual hierarchy
 */

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const clients = [
  { type: 'text', content: 'FreshBooks' },
  { type: 'text', content: 'C2' },
  { type: 'text', content: 'HubSpot' },
  { type: 'text', content: 'Manychat' },
  { type: 'image', content: '/gooddaydema.png', alt: 'Good Day Dema' },
  { type: 'image', content: '/logo1.png', alt: 'Logo 1' },
  { type: 'image', content: '/sai.png', alt: 'SAI' },
  { type: 'image', content: '/21-pilots.png', alt: '21 Pilots' },
  { type: 'image', content: '/ned.png', alt: 'NED' },
  { type: 'image', content: '/top.png', alt: 'TOP' },
  { type: 'image', content: '/tape2.png', alt: 'Tape 2' },
  { type: 'image', content: '/pngegg.png', alt: 'PNG Egg' },
  { type: 'image', content: '/zoom.png', alt: 'Zoom' },
];

export function HeroSection() {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <>
      <section className="relative min-h-screen bg-white flex flex-col items-center justify-center px-6 lg:px-8 pt-20 overflow-hidden">
        {/* Elegant Infinite Grid Background */}
        <HeroGridBackground />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center w-full flex-1 flex flex-col items-center justify-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Main Heading */}
          <motion.h1
            className="font-black text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-neutral-950 mb-6"
            variants={fadeInUp}
          >
            PROFESSIONAL PODCAST
            <br />
            PRODUCTION
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-neutral-600 mb-8 mt-6"
            variants={fadeInUp}
          >
            We help the world's best podcasts &<br />
            organizations grow through podcasting.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <Button href="#contact">Reach Out</Button>
          </motion.div>
        </motion.div>

        {/* Animated Client Logos Marquee */}
        <div className="relative z-10 w-full pb-12 overflow-hidden">
          <motion.div
            className="flex gap-16 md:gap-20 lg:gap-24 items-center"
            animate={{
              x: ['0%', '-33.333%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.content}-${index}`}
                className="flex-shrink-0"
              >
                {client.type === 'text' ? (
                  <div className="text-black font-bold text-lg md:text-xl tracking-tight opacity-40 select-none whitespace-nowrap">
                    {client.content}
                  </div>
                ) : (
                  <img
                    src={client.content}
                    alt={client.alt}
                    className="h-8 md:h-10 w-auto opacity-40 select-none"
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <LetsWorkTogether />
    </>
  );
}
