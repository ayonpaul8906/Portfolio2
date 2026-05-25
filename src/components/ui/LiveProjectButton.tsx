import React from 'react';
import { motion } from 'framer-motion';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ onClick, className = '' }) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`rounded-full border-2 border-[var(--text-color)] text-[var(--text-color)] font-medium uppercase tracking-widest bg-transparent transition-colors duration-200 select-none hover:bg-[var(--text-color)]/10 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      Live Project
    </motion.button>
  );
};

export default LiveProjectButton;
