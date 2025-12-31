'use client';

import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  imageSrc?: string;
}

/**
 * Testimonial Component
 * Client testimonial card with quote and author info
 */
export function Testimonial({ quote, name, title, imageSrc }: TestimonialProps) {
  return (
    <section className="relative py-24 md:py-32 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed mb-12 text-neutral-950 tracking-tight">
            "{quote}"
          </blockquote>

          {/* Author Info */}
          <div className="flex flex-col items-center gap-4">
            {imageSrc && (
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 ring-4 ring-white shadow-lg">
                <img
                  src={imageSrc}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <div className="font-semibold text-pink-400 mb-1 text-base">
                {name}
              </div>
              <div className="text-sm text-neutral-600">{title}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
