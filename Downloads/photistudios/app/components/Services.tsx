'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Mic, TrendingUp } from 'lucide-react';

/**
 * Services Section Component
 * Displays the three main service offerings
 */

const services = [
  {
    icon: Lightbulb,
    title: 'Strategy',
    description:
      "We'll develop a content strategy, advise appropriate equipment & software, and create a promotional plan to grow a loyal listener base.",
  },
  {
    icon: Mic,
    title: 'Production',
    description:
      "You show up to record. We take care of the rest. Our #1 goal → your guests and listeners have a world-class experience, without you having to lift a finger.",
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description:
      "We'll maximize the reach of your show by creating promotional assets and targeting ideal listeners who'll resonate with your show.",
  },
];

export function Services() {
  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-4xl sm:text-5xl uppercase tracking-tight text-neutral-950 [text-wrap:balance]"
          >
            HOW WE CAN HELP
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-600 mt-6 leading-relaxed"
          >
            We offer a full suite of podcast production services to help you
            create a world-class show, without the stress.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 sm:p-8 rounded-3xl ring-1 ring-neutral-950/5 text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Icon */}
              <service.icon
                className="w-10 h-10 text-pink-400 transition-transform duration-300 hover:scale-110"
                strokeWidth={1.5}
              />

              {/* Title */}
              <h3 className="font-semibold text-2xl text-neutral-950 mt-6">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-base text-neutral-800 mt-4 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
