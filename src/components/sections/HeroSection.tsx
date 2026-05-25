import React, { useState, useEffect } from 'react';
import FadeIn from '../ui/FadeIn';
import Magnet from '../ui/Magnet';

const TYPING_ROLES = [
  'Full Stack Developer',
  'AI Engineer',
  'Open Source Contributor',
  'GDG ON Campus Lead',
  'Problem Solver'
];

interface HeroSectionProps {
  theme?: 'dark' | 'light';
}

const TypingEffect: React.FC = () => {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: any;
    const activeWord = TYPING_ROLES[currentWordIdx];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIdx((prev) => (prev + 1) % TYPING_ROLES.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : activeWord.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  return (
    <span className="inline-block border-r-2 border-[var(--text-color)] dark:border-[var(--accent-color)] pr-1 animate-pulse min-h-[1.2em] font-mono tracking-wider">
      {currentText}
    </span>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({ theme = 'dark' }) => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden px-4 sm:px-6 md:px-10 pb-6 sm:pb-8 md:pb-10 bg-[var(--bg-color)]">
      
      {/* Background Video Layer - ONLY visible on medium and large screens */}
      <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden z-0 select-none pointer-events-none">
        <video
          src={theme === 'light' ? '/hero_light.mp4'  : '/hero_dark.mp4'}
          style={theme === 'light' ? { opacity: 0.85 } : { opacity: 1}}
          poster="/hero_thumb.png"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        {/* Responsive Overlay to ensure text readability */}
        {theme === 'dark' && (
          <div
            className="absolute inset-0 z-10 transition-colors duration-300"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--bg-color) 45%, transparent)',
              backgroundImage: 'linear-gradient(to bottom, transparent, var(--bg-color))',
              backdropFilter: 'backdrop-blur(0.5px)'
            }}
          />
        )}
      </div>

      {/* 1. Navbar (Left-aligned on desktop to avoid theme toggle overlap) */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex flex-wrap justify-center sm:justify-start items-center w-full pt-6 md:pt-8 z-30 gap-y-2 gap-x-6 sm:gap-8 md:gap-10 pr-16"
      >
        {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={(e) => { e.preventDefault(); handleScroll(item); }}
            className="text-[var(--text-color)] font-semibold uppercase tracking-wider text-[10px] sm:text-xs md:text-sm lg:text-[1.1rem] transition-opacity duration-200 hover:opacity-70 select-none cursor-pointer"
          >
            {item}
          </a>
        ))}
      </FadeIn>

      {/* 2. Hero Content */}
      <div className="flex-1 flex flex-col items-center sm:items-start justify-center z-20 text-center sm:text-left py-12 md:py-20 max-w-4xl w-full">        
        <FadeIn delay={0.15} y={40}>
          <h1 
            className="hero-heading font-black uppercase tracking-tight leading-[0.85] text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[7.5vw] select-none mb-4"
            style={theme === 'light' ? { background: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', WebkitTextFillColor: 'unset', color: 'var(--text-color)' } : {}}
          >
            Hi, i&apos;m <span className="block mt-1 sm:mt-2 text-[var(--text-color)]">ayon paul</span>
          </h1>
        </FadeIn>

        {/* Dynamic typing roles (replaces tech stack tags) */}
        <FadeIn delay={0.2} y={20} className="mb-6">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold uppercase tracking-wider text-[var(--accent-color)]">
            <TypingEffect />
          </div>
        </FadeIn>

        {/* Mobile Portrait Frame - Only visible on small screens */}
        <FadeIn
          as="div"
          delay={0.25}
          y={20}
          className="block md:hidden w-full max-w-[200px] sm:max-w-[240px] mx-auto my-6 z-20"
        >
          <Magnet
            padding={50}
            strength={2}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="flex items-center justify-center"
          >
            <img
              src="/pic.png"
              alt="Ayon Portrait"
              className="w-full h-auto object-contain select-none filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] bg-card/10 backdrop-blur-sm rounded-full p-2 border border-card"
              draggable="false"
            />
          </Magnet>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="max-w-2xl mb-8">
          <p 
            className="font-light uppercase tracking-wide leading-snug text-sm sm:text-base md:text-lg lg:text-[1.35rem] text-[var(--text-color)]"
            style={theme === 'light' ? { opacity: 1 } : {opacity: 0.9}}
          >
            Building systems that actually matter.
          </p>
          <p 
            className="font-mono text-[10px] sm:text-xs uppercase tracking-wider mt-2.5"
            style={{ color: theme === 'light' ? 'var(--text-color)' : 'var(--text-muted)' }}
          >
            3rd Year CSE · BCREC, Durgapur
          </p>
        </FadeIn>

        <FadeIn delay={0.35} y={20} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => handleScroll('contact')}
            className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl border border-[var(--text-color)] bg-[var(--text-color)] text-[var(--bg-color)] hover:bg-transparent hover:text-[var(--text-color)] transition-all duration-300 font-bold uppercase tracking-widest text-xs cursor-pointer text-center"
          >
            Let&apos;s Connect
          </button>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-resume'))}
            className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl border border-card bg-card/20 backdrop-blur-sm hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] hover:border-[var(--text-color)] transition-all duration-300 font-semibold uppercase tracking-widest text-xs cursor-pointer text-center text-[var(--text-color)]"
          >
            View Resume
          </button>
        </FadeIn>
      </div>

      {/* 3. Spacing telemetry footer */}
      <div className="w-full z-30 mt-auto flex justify-between items-center text-[10px] font-mono text-muted uppercase tracking-widest select-none pt-4">
        <span className="hidden sm:inline">scroll_to_explore &darr;</span>
      </div>

    </section>
  );
};

export default HeroSection;
