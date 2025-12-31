'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  showArrow?: boolean;
  className?: string;
}

/**
 * Reusable Button Component
 * Supports primary/secondary variants with smooth hover animations
 * Accessible with keyboard navigation and ARIA labels
 */
export function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  showArrow = true,
  className = '',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[15px] tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-black text-white px-9 py-[14px] hover:bg-pink-400 hover:shadow-[0_8px_24px_rgba(244,114,182,0.3)] focus:ring-black',
    secondary: 'bg-white text-black px-9 py-[14px] border-2 border-black hover:bg-black hover:text-white focus:ring-black',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {content}
    </motion.button>
  );
}
