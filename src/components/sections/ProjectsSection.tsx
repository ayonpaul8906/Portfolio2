import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from '../ui/LiveProjectButton';
import FadeIn from '../ui/FadeIn';

interface Project {
  id: string;
  category: string;
  name: string;
  description: string;
  col2Image: string;
  tags: string[];
  link?: string;
  githubLink?: string;
  status: 'Live' | 'WIP';
}

const PROJECTS_DATA: Project[] = [
  {
    id: '01',
    category: 'Security',
    name: 'WrathOps',
    description: 'Real-time enterprise monitoring engine for detecting exposed API keys in public repositories. High-throughput scanning with immediate remediation pipelines.',
    col2Image: '/projects/wrathops.png',
    tags: ['Python', 'Flask', 'Gemini API', 'Webhooks'],
    link: 'https://wrathops.vercel.app/',
    githubLink: 'https://github.com/ayonpaul8906/WrathOps',
    status: 'Live'
  },
  {
    id: '02',
    category: 'Web3',
    name: 'TrustBridge',
    description: 'Decentralized trust-scored interaction protocol. On-chain verification with wallet-native authentication and transparent reputation scoring.',
    col2Image: '/projects/trustbridge.png',
    tags: ['Ethers.js', 'React', 'Solidity', 'RainbowKit'],
    link: 'https://trust-bridge-drab.vercel.app/',
    githubLink: 'https://github.com/ayonpaul8906/TrustBridge',
    status: 'Live'
  },
  {
    id: '03',
    category: 'AI',
    name: 'TARK',
    description: 'Autonomous reasoning assistant merging LLM intelligence with structured knowledge retrieval. Multi-model orchestration for rapid, accurate responses.',
    col2Image: '/projects/tark.png',
    tags: ['GROQ', 'Gemini', 'Python', 'RAG'],
    link: '#',
    githubLink: 'https://github.com/ayonpaul8906',
    status: 'WIP'
  }
];

export const ProjectsSection: React.FC = () => {
  const [stickyTop, setStickyTop] = useState(96);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setStickyTop(128); // md:top-32
      } else {
        setStickyTop(96); // top-24
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="projects"
      className="relative bg-[var(--bg-color)] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 pb-10 px-4 sm:px-8 md:px-10 z-10 overflow-hidden select-none"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col">
        {/* Section label */}
        <FadeIn delay={0} y={15} className="mb-4 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted opacity-80">
            05 / Projects
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.1} y={40} className="w-full text-center mb-16 sm:mb-20">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            Featured Work
          </h2>
        </FadeIn>

        {/* Sibling Stacking Cards Container */}
        <div ref={containerRef} className="relative flex flex-col w-full pb-[10vh] md:pb-[15vh]">
          {PROJECTS_DATA.map((project, idx) => (
            <StickyCard
              key={project.id}
              project={project}
              index={idx}
              stickyTop={stickyTop}
              totalCards={PROJECTS_DATA.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StickyCardProps {
  project: Project;
  index: number;
  stickyTop: number;
  totalCards: number;
  scrollYProgress: any;
}

const StickyCard: React.FC<StickyCardProps> = ({ project, index, stickyTop, totalCards, scrollYProgress }) => {
  // Stacking scale calculation using the parent's scroll progress to avoid sticky freezing
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const start = index / totalCards;
  const end = (index + 1) / totalCards;
  const scale = useTransform(scrollYProgress, [start, end], [1, targetScale]);

  return (
    <motion.div
      className="sticky w-full rounded-[30px] sm:rounded-[40px] md:rounded-[60px] border-2 border-card bg-card p-5 sm:p-6 md:p-8 flex flex-col justify-between select-none shadow-2xl overflow-hidden min-h-[460px] md:min-h-0 md:h-[65vh] mb-[12vh] sm:mb-[16vh] md:mb-[20vh]"
      style={{
        scale,
        top: `calc(${stickyTop}px + ${index * 28}px)`,
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
      }}
    >
      {/* Card Header (Top Row) */}
      <div className="flex flex-row items-center justify-between gap-4 border-b border-card pb-4 sm:pb-6 mb-4 sm:mb-6">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-left">
          {/* Project Number */}
          <span
            className="font-black text-[var(--text-color)] leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 64px)' }}
          >
            {project.id}
          </span>
          {/* Category and Title Stack */}
          <div className="flex flex-col">
            <span className="text-muted text-[9px] sm:text-xs uppercase tracking-widest font-mono mb-1">
              {project.category}
            </span>
            <h3 className="text-[var(--text-color)] font-semibold text-base sm:text-xl md:text-2xl uppercase tracking-wide">
              {project.name}
            </h3>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2.5 sm:p-3 rounded-full border border-card bg-[var(--text-color)]/5 hover:bg-[var(--text-color)]/10 hover:border-[var(--text-color)]/30 transition-all text-[var(--text-color)] cursor-pointer"
              title="View GitHub Repository"
            >
              <svg className="w-4 h-4 sm:w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {project.status === 'Live' && project.link && project.link !== '#' ? (
            <LiveProjectButton onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')} />
          ) : (
            <span className="font-mono text-[9px] sm:text-xs uppercase tracking-widest text-[var(--text-color)] opacity-60 px-3 py-1.5 sm:px-5 sm:py-2.5 border border-card rounded-full bg-[var(--text-color)]/5">
              WIP
            </span>
          )}
        </div>
      </div>

      {/* Card Grid (Bottom Row) */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full items-stretch md:flex-1 overflow-visible md:overflow-hidden text-left pb-4 md:pb-0">
        {/* Left Column (40%): Description & tags */}
        <div className="w-full md:w-[40%] flex flex-col justify-between py-1 sm:py-2 gap-4">
          <p className="text-[var(--text-color)] opacity-80 text-xs sm:text-sm md:text-base font-light leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] sm:text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-card bg-[var(--text-color)]/5 text-[var(--text-color)] opacity-90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Right Column (60%): Main cover image */}
        <div className="w-full md:w-[60%] h-[160px] sm:h-[220px] md:h-auto flex overflow-hidden rounded-[16px] sm:rounded-[24px] md:rounded-[30px] border border-card bg-zinc-950/20">
          <img
            src={project.col2Image}
            alt={`${project.name} main cover`}
            className="w-full h-full object-cover rounded-[16px] sm:rounded-[24px] md:rounded-[30px] transition-transform duration-700 hover:scale-103"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
