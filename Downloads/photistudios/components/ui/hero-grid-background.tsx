"use client";

import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame
} from "framer-motion";

/**
 * Helper component for the SVG grid pattern.
 */
const GridPattern = ({ offsetX, offsetY, size }: { offsetX: any; offsetY: any; size: number }) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="hero-grid-pattern"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-pink-200"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
    </svg>
  );
};

/**
 * Elegant Grid Background for Hero
 * Subtle infinite scrolling grid with mouse reveal effect
 */
export function HeroGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridSize = 40;

  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  // Grid offsets for infinite scroll animation
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.08;
  const speedY = 0.08;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % gridSize);
    gridOffsetY.set((currentY + speedY) % gridSize);
  });

  // Create a dynamic radial mask for the "spotlight" effect
  const maskImage = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Layer 1: Visible background grid (always visible) */}
      <div className="absolute inset-0 opacity-30">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} size={gridSize} />
      </div>

      {/* Layer 2: Highlighted grid (revealed by mouse) */}
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} size={gridSize} />
      </motion.div>

      {/* Decorative Blur Spheres */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-15%] top-[-10%] w-[35%] h-[35%] rounded-full bg-pink-300/15 blur-[140px]" />
        <div className="absolute left-[-10%] bottom-[-10%] w-[30%] h-[30%] rounded-full bg-pink-200/10 blur-[120px]" />
      </div>
    </div>
  );
}
