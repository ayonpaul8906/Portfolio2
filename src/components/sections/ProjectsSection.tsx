import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import LiveProjectButton from '../ui/LiveProjectButton';
import FadeIn from '../ui/FadeIn';

/* ──────────────────────────────────────────────────────────────
   Types
   ────────────────────────────────────────────────────────────── */

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

interface StickyCardProps {
  project: Project;
  index: number;
  totalCards: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
}

/* ──────────────────────────────────────────────────────────────
   Project Data
   ────────────────────────────────────────────────────────────── */

const PROJECTS_DATA: Project[] = [
  {
    id: '01',
    category: 'Security',
    name: 'WrathOps',
    description:
      'Real-time enterprise monitoring engine for detecting exposed API keys in public repositories. High-throughput scanning with immediate remediation pipelines.',
    col2Image: '/projects/wrathops.png',
    tags: ['Next.js', 'Flask', 'Gemini API', 'Webhooks', 'CLI'],
    link: 'https://wrathops.vercel.app/',
    githubLink: 'https://github.com/ayonpaul8906/WrathOps',
    status: 'Live',
  },
  {
    id: '02',
    category: 'Web3',
    name: 'TrustBridge',
    description:
      'Decentralized trust-scored interaction protocol. On-chain verification with wallet-native authentication and transparent reputation scoring.',
    col2Image: '/projects/trustbridge.png',
    tags: ['Ethers.js', 'React', 'Solidity', 'RainbowKit'],
    link: 'https://trust-bridge-drab.vercel.app/',
    githubLink: 'https://github.com/ayonpaul8906/TrustBridge',
    status: 'Live',
  },
  {
    id: '03',
    category: 'AI',
    name: 'TARK',
    description:
      'Autonomous reasoning assistant merging LLM intelligence with structured knowledge retrieval. Multi-model orchestration for rapid, accurate responses.',
    col2Image: '/projects/tark.png',
    tags: ['Next.js', 'Gemini', 'Python', 'RAG'],
    link: '#',
    githubLink: 'https://github.com/ayonpaul8906',
    status: 'WIP',
  },
];

/* ──────────────────────────────────────────────────────────────
   Constants
   ────────────────────────────────────────────────────────────── */

const CARD_TOP_PADDING = 60;   // px — base top offset for the first card
const CARD_STACK_OFFSET = 30;  // px — each card sticks 30px lower than the previous
const SCALE_STEP = 0.05;       // how much each card shrinks relative to the next

/* ──────────────────────────────────────────────────────────────
   StickyCard — Olivier Larose / Dennis Snellenberg Pattern
   ──────────────────────────────────────────────────────────────
   Structure:
     <div class="cardContainer">   ← height: 100vh, sticky, top: 0
       <motion.div class="card">   ← relative, top offset for stagger
         ...content...
       </motion.div>
     </div>

   HOW IT WORKS:
   • Every cardContainer is 100vh tall and position:sticky at top:0.
   • As the user scrolls, each container sticks at the viewport top.
   • Because all containers are siblings, they naturally pile up.
   • The NEXT container sliding in pushes the scroll progress forward,
     which drives the PREVIOUS card's scale down — making it appear
     to recede into the stack.
   • The relative top offset on the inner card creates the staggered
     "peek" of previous cards under the current one.
   ────────────────────────────────────────────────────────────── */

const StickyCard: React.FC<StickyCardProps> = ({
  project,
  index,
  totalCards,
  range,
  targetScale,
  progress,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Per-card scroll — used for the entry slide-up animation
  const { scrollYProgress: cardProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  // Scale: shrinks from 1 → targetScale as subsequent cards scroll over
  const scale = useTransform(progress, range, [1, targetScale]);

  // Entry animation: card slides up as it enters the viewport
  const cardY = useTransform(cardProgress, [0, 1], [100, 0]);

  // Stagger: each card peeks 30px below the previous
  const topOffset = CARD_TOP_PADDING + index * CARD_STACK_OFFSET;

  return (
    <div
      ref={containerRef}
      style={{
        height: '100vh',
        position: 'sticky',
        top: 0,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: `${topOffset}px`,
      }}
    >
      <motion.div
        className="w-full max-w-5xl rounded-[30px] sm:rounded-[40px] md:rounded-[60px] border-2 border-card bg-card p-5 sm:p-6 md:p-8 flex flex-col justify-between select-none overflow-hidden will-change-transform"
        style={{
          scale,
          y: cardY,
          height: 'clamp(420px, 65vh, 720px)',
          zIndex: totalCards + index,
          transformOrigin: 'top center',
          boxShadow: `
            0 ${4 + index * 4}px ${20 + index * 10}px rgba(0,0,0,${0.08 + index * 0.04}),
            0 0 0 1px rgba(0,0,0,0.03)
          `,
        }}
      >
        {/* ── Card Header ── */}
        <div className="flex flex-row items-center justify-between gap-4 border-b border-card pb-4 sm:pb-6 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-left">
            <span
              className="font-black text-[var(--text-color)] leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 64px)' }}
            >
              {project.id}
            </span>
            <div className="flex flex-col">
              <span className="text-muted text-[9px] sm:text-xs uppercase tracking-widest font-mono mb-1">
                {project.category}
              </span>
              <h3 className="text-[var(--text-color)] font-semibold text-base sm:text-xl md:text-2xl uppercase tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2.5 sm:p-3 rounded-full border border-card bg-[var(--text-color)]/5 hover:bg-[var(--text-color)]/10 hover:border-[var(--text-color)]/30 transition-all text-[var(--text-color)] cursor-pointer"
                title="View GitHub Repository"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {project.status === 'Live' &&
            project.link &&
            project.link !== '#' ? (
              <LiveProjectButton
                onClick={() =>
                  window.open(project.link, '_blank', 'noopener,noreferrer')
                }
              />
            ) : (
              <span className="font-mono text-[9px] sm:text-xs uppercase tracking-widest text-[var(--text-color)] opacity-60 px-3 py-1.5 sm:px-5 sm:py-2.5 border border-card rounded-full bg-[var(--text-color)]/5">
                WIP
              </span>
            )}
          </div>
        </div>

        {/* ── Card Body ── */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full items-stretch md:flex-1 overflow-visible md:overflow-hidden text-left pb-4 md:pb-0">
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

          <div className="w-full md:w-[60%] h-[160px] sm:h-[220px] md:h-auto flex overflow-hidden rounded-[16px] sm:rounded-[24px] md:rounded-[30px] border border-card bg-zinc-950/20">
            <img
              src={project.col2Image}
              alt={`${project.name} main cover`}
              className="w-full h-full object-cover rounded-[16px] sm:rounded-[24px] md:rounded-[30px] transition-transform duration-700 hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────
   ProjectsSection — Stacking Cards Container
   ──────────────────────────────────────────────────────────────
   CRITICAL: The <section> uses `overflow-clip` NOT `overflow-hidden`.
   `overflow: hidden` creates a new scroll container and KILLS
   position:sticky for ALL descendants. `overflow: clip` clips
   content for rounded corners without breaking sticky.

   The container ref wraps all card containers. Its total height
   = N × 100vh (from the children). useScroll tracks 0→1 as the
   container scrolls from "top hits viewport top" to "bottom hits
   viewport bottom".

   Each card's scale animation range is [i/N, 1], meaning:
   - Card 0 scales from progress 0 → 1  (most total shrinkage)
   - Card 1 scales from progress 0.33 → 1
   - Card 2 scales from progress 0.66 → 1  (least shrinkage)
   ────────────────────────────────────────────────────────────── */

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative bg-[var(--bg-color)] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 px-4 sm:px-8 md:px-10 z-10 select-none"
      style={{ overflow: 'clip' }}
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col">
        {/* Section Label */}
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
      </div>

      {/* ── Stacking Cards Scroll Container ──
           This div provides the total scroll height.
           Its children are N sticky containers that pile up. */}
      <div
        ref={containerRef}
        className="relative w-full"
      >
        {PROJECTS_DATA.map((project, idx) => {
          const totalCards = PROJECTS_DATA.length;
          const targetScale = 1 - (totalCards - idx) * SCALE_STEP;
          const start = idx / totalCards;
          const end = 1;

          return (
            <StickyCard
              key={project.id}
              project={project}
              index={idx}
              totalCards={totalCards}
              range={[start, end]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
