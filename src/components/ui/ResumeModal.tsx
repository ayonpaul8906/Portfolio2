import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ResumeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-resume', handleOpen);
    return () => window.removeEventListener('open-resume', handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* 1. Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
          />

          {/* 2. Floating Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-4xl h-[80vh] md:h-[85vh] rounded-3xl border border-card bg-card flex flex-col overflow-hidden shadow-2xl select-none"
            style={{
              boxShadow: `0 24px 50px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05)`
            }}
          >
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-card bg-card/90">
              <div className="flex flex-col text-left">
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted opacity-80">Credentials Vault</span>
                <h3 className="font-bold text-sm sm:text-base uppercase tracking-wider text-[var(--text-color)]">
                  Ayon Paul — Curriculum Vitae
                </h3>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Download PDF button */}
                <a
                  href="/Resume.pdf"
                  download="Ayon_Paul_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[var(--text-color)] text-[var(--bg-color)] hover:opacity-80 transition-all font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  <span className="hidden sm:inline">Download</span>
                </a>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 sm:p-2 rounded-xl border border-card bg-[var(--text-color)]/5 text-[var(--text-color)] hover:bg-[var(--text-color)]/10 hover:border-card transition-all cursor-pointer focus:outline-none"
                  title="Close Window"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body (Embed / IFrame viewer) */}
            <div className="flex-1 w-full bg-[var(--bg-color)] relative">
              <iframe
                src="/Resume.pdf#toolbar=0"
                title="Ayon Paul Resume"
                className="w-full h-full border-none hidden md:block"
              />

              {/* Mobile Backup view */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center md:hidden bg-[var(--bg-color)]">
                <svg className="w-16 h-16 text-muted opacity-30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h4 className="font-bold text-[var(--text-color)] uppercase tracking-wider mb-2">Resume PDF Reader</h4>
                <p className="text-xs text-muted max-w-xs leading-relaxed mb-6">
                  PDF preview requires a wider desktop viewport. Click below to download or view it directly in your browser.
                </p>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl border border-[var(--text-color)] text-[var(--bg-color)] bg-[var(--text-color)] hover:bg-transparent hover:text-[var(--text-color)] transition-all font-semibold uppercase tracking-widest text-xs"
                >
                  Open PDF Directly
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
