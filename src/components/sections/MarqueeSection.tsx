import React from 'react';

interface TechItem {
  name: string;
  category: string;
  color: string;
  svg: React.ReactNode;
}

const ROW_1_TECH: TechItem[] = [
  {
    name: 'React.js',
    category: 'Frontend Library',
    color: 'rgba(97, 218, 251, 0.15)',
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 text-[#61dafb] fill-none stroke-current" xmlns="http://www.w3.org/2000/svg">
        <circle r="2.05" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: 'Next.js',
    category: 'React Framework',
    color: 'rgba(128, 128, 128, 0.15)',
    svg: (
      <svg viewBox="0 0 180 180" className="w-6 h-6 text-[var(--text-color)] fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M149.508 157.52L69.142 54H54v72h14.4V72.235l65.195 83.945c5.385-5.32 10.334-11.234 14.732-17.585zM126 54h14v72h-14V54z" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling Engine',
    color: 'rgba(56, 189, 248, 0.15)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#38bdf8] fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.518 15.039 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.282 14.963 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.718 9.039 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.482 8.963 12 5.999 12z" />
      </svg>
    )
  },
  {
    name: 'TypeScript',
    category: 'Typed JS',
    color: 'rgba(49, 120, 198, 0.15)',
    svg: (
      <img src="/tech/ts.png" alt="TS Logo" className="w-6 h-6" />
    )
  },
  {
    name: 'JavaScript',
    category: 'Web Scripting',
    color: 'rgba(247, 223, 30, 0.12)',
    svg: (
      <img src="/tech/js.png" alt="JS Logo" className="w-6 h-6" />
    )
  },
  {
    name: 'GSAP',
    category: 'Cinematic Motion',
    color: 'rgba(136, 206, 2, 0.15)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#88ce02] fill-current" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Core Layout',
    color: 'rgba(227, 76, 38, 0.15)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#e34c26] fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0zm12 17.5l4-1.5.5-5.5H8.5l-.2-2h8.5l.2-2.5H6.2l.6 8H12v3.5z" />
      </svg>
    )
  }
];

const ROW_2_TECH: TechItem[] = [
  {
    name: 'Python',
    category: 'Backend & ML',
    color: 'rgba(55, 118, 171, 0.15)',
    svg: (
      <img src="/tech/python.png" alt="Python Logo" className="w-6 h-6" />
    )
  },
  {
    name: 'Flask',
    category: 'API Engine',
    color: 'rgba(128, 128, 128, 0.15)',
    svg: (
      <img src="/tech/flask.png" alt="Flask Logo" className="w-6 h-6" />
    )
  },
  {
    name: 'Node.js',
    category: 'JS Runtime',
    color: 'rgba(51, 153, 51, 0.15)',
    svg: (
      <img src="/tech/nodejs.png" alt="Node.js Logo" className="w-6 h-6" />
    )
  },
  {
    name: 'Solidity',
    category: 'Smart Contract',
    color: 'rgba(100, 100, 100, 0.15)',
    svg: (
      <img src="/tech/solidity.png" alt="Solidity Logo" className="w-6 h-6" />
    )
  },
  {
    name: 'Gemini & LLMs',
    category: 'Cognitive AI',
    color: 'rgba(138, 43, 226, 0.15)',
    svg: (
      <img src="/tech/gemini.png" alt="Gemini Logo" className="w-6 h-6" />
    )
  },
  {
    name: 'Firebase',
    category: 'Database & Auth',
    color: 'rgba(255, 202, 40, 0.15)',
    svg: (
      <img src="/tech/firebase.png" alt="Firebase Logo" className="w-6 h-6" />
    )
  },
  {
    name: 'Git & GitHub',
    category: 'Control & Hub',
    color: 'rgba(128, 128, 128, 0.15)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--text-color)] fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    )
  }
];

// Double the elements for perfect seamless scrolling in pure CSS marquee
const doubledRow1 = [...ROW_1_TECH, ...ROW_1_TECH];
const doubledRow2 = [...ROW_2_TECH, ...ROW_2_TECH];

export const MarqueeSection: React.FC = () => {
  return (
    <section
      id="marquee"
      className="bg-transparent pt-20 sm:pt-24 md:pt-28 pb-10 flex flex-col gap-5 overflow-hidden select-none"
    >
      {/* Row 1: Moves LEFT continuously, pauses on hover */}
      <div className="w-full overflow-hidden py-2">
        <div className="animate-marquee-left gap-5">
          {doubledRow1.map((tech, idx) => (
            <div
              key={`r1-${idx}`}
              className="w-[250px] h-[76px] flex-shrink-0 flex items-center gap-4 px-5 rounded-2xl bg-card border border-card shadow-xl hover:border-[var(--text-color)]/20 transition-all duration-300 relative group"
            >
              {/* Core glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 20% 50%, ${tech.color}, transparent 60%)`,
                }}
              />
              <div className="relative z-10 w-11 h-11 flex items-center justify-center rounded-xl bg-[var(--bg-color)] border border-card group-hover:scale-105 transition-transform duration-300">
                {tech.svg}
              </div>
              <div className="relative z-10 flex flex-col text-left">
                <span className="font-bold text-sm sm:text-base tracking-wider text-[var(--text-color)] font-sans group-hover:opacity-80 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[9px] font-mono text-muted uppercase tracking-widest mt-0.5">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Moves RIGHT continuously, pauses on hover */}
      <div className="w-full overflow-hidden py-2">
        <div className="animate-marquee-right gap-5">
          {doubledRow2.map((tech, idx) => (
            <div
              key={`r2-${idx}`}
              className="w-[250px] h-[76px] flex-shrink-0 flex items-center gap-4 px-5 rounded-2xl bg-card border border-card shadow-xl hover:border-[var(--text-color)]/20 transition-all duration-300 relative group"
            >
              {/* Core glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 20% 50%, ${tech.color}, transparent 60%)`,
                }}
              />
              <div className="relative z-10 w-11 h-11 flex items-center justify-center rounded-xl bg-[var(--bg-color)] border border-card group-hover:scale-105 transition-transform duration-300">
                {tech.svg}
              </div>
              <div className="relative z-10 flex flex-col text-left">
                <span className="font-bold text-sm sm:text-base tracking-wider text-[var(--text-color)] font-sans group-hover:opacity-80 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[9px] font-mono text-muted uppercase tracking-widest mt-0.5">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
