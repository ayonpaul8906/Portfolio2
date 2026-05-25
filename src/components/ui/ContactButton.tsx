import React from 'react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick, className = '' }) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`rounded-full font-medium uppercase tracking-widest text-white transition-all select-none ${className} px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
      whileHover={{ scale: 1.05, opacity: 0.95 }}
      whileTap={{ scale: 0.98 }}
    >
      Contact Me
    </motion.button>
  );
};

export default ContactButton;
