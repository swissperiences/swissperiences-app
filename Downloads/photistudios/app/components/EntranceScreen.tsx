'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/**
 * Entrance Screen Component
 * Displays Clancy's letter as an entrance screen with zoom capability
 * User can click ENTER to proceed to the main site
 */

interface EntranceScreenProps {
  onEnter: () => void;
}

export function EntranceScreen({ onEnter }: EntranceScreenProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [scale, setScale] = useState(1);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(onEnter, 800);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newScale = Math.min(Math.max(0.5, scale + delta), 3);
    setScale(newScale);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          onWheel={handleWheel}
        >
          {/* Letter Image with Zoom */}
          <motion.div
            className="relative w-full h-full max-w-6xl max-h-[90vh] mx-auto cursor-zoom-in"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ scale }}
          >
            <img
              src="/clancy_letter_ultra_res.png"
              alt="Clancy's Letter"
              className="w-full h-full object-contain select-none"
              draggable={false}
            />
          </motion.div>

          {/* Enter Button */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              onClick={handleEnter}
              className="text-2xl font-bold tracking-wider text-white hover:text-pink-400 transition-colors duration-300 px-8 py-3"
            >
              ENTER
            </button>
          </motion.div>

          {/* Zoom hint */}
          <motion.div
            className="absolute top-8 right-8 text-white/40 text-sm tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Scroll to zoom
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
