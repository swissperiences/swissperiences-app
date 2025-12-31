"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InfiniteSliderProps {
  children: ReactNode;
  duration?: number;
  direction?: "left" | "right";
  gap?: number;
  className?: string;
}

export function InfiniteSlider({
  children,
  duration = 40,
  direction = "left",
  gap = 16,
  className = "",
}: InfiniteSliderProps) {
  const directionValue = direction === "left" ? -1 : 1;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex"
        style={{ gap: `${gap}px` }}
        animate={{
          x: directionValue * -50 + "%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
