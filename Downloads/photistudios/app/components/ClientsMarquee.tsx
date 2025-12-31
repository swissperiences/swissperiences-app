'use client';

import { motion } from 'framer-motion';

/**
 * Clients Marquee Component
 * Static centered display of client logos matching Barshop Studios
 */

const clients = [
  'LEVELS',
  'Manychat',
  'rzero',
  'todoist',
  'CDAO',
  'FreshBooks',
  'G2',
  'HubSpot',
];

export function ClientsMarquee() {
  return (
    <section className="relative py-16 md:py-20 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-neutral-900 font-bold text-lg md:text-xl tracking-tight opacity-40 select-none"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
