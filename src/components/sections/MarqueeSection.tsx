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
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#3178c6] fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm14.595 12.188c.18 0 .346.009.5.027.153.018.306.054.459.108.153.054.306.126.459.216.153.09.288.207.405.35.117.144.216.315.297.513.081.198.122.423.122.675 0 .288-.05.545-.149.77-.099.225-.238.414-.418.567-.18.153-.396.265-.648.337-.252.072-.531.108-.837.108-.225 0-.464-.023-.716-.068-.252-.045-.49-.117-.715-.216a4.4 4.4 0 0 1-.621-.351l.9-.99c.144.117.297.216.459.297.162.081.333.122.513.122.18 0 .324-.045.432-.135.108-.09.162-.216.162-.378 0-.126-.036-.225-.108-.297-.072-.072-.162-.126-.27-.162-.108-.036-.225-.063-.351-.081a5.952 5.952 0 0 1-.396-.067c-.207-.045-.4-.117-.58-.216a2.04 2.04 0 0 1-.495-.392c-.135-.153-.243-.346-.324-.58-.081-.234-.122-.518-.122-.85 0-.315.054-.599.162-.85.108-.252.261-.464.459-.635.198-.171.437-.301.716-.391.279-.09.585-.135.918-.135.234 0 .468.027.702.081.234.054.454.135.661.243.207.108.396.243.567.405l-.837.936a2.38 2.38 0 0 0-.486-.297 1.528 1.528 0 0 0-.585-.099c-.198 0-.356.045-.473.135-.117.09-.175.225-.175.405 0 .126.036.225.108.297.072.072.167.126.284.162.117.036.243.063.378.081.135.018.265.04.391.068zm-5.067-2.313H14.13V20h-2.385v-7.938H9.36v-2.187z" />
      </svg>
    )
  },
  {
    name: 'JavaScript',
    category: 'Web Scripting',
    color: 'rgba(247, 223, 30, 0.12)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#f7df1e] fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0zm22.034 18.5c0-1.504-.905-2.506-2.527-2.506-1.547 0-2.368.807-2.738 1.777l1.79.94c.26-.52.54-.863 1.008-.863.398 0 .684.2.684.58 0 .753-.943.918-1.745 1.15-.99.288-2.116.732-2.116 2.453 0 1.554 1.124 2.47 2.62 2.47 1.253 0 2.062-.602 2.447-1.42h.036l.245 1.18h1.666V18.5zM12.923 20.315c0-2.454-1.282-3.69-3.21-3.69-1.928 0-3.23 1.236-3.23 3.69 0 2.448 1.302 3.684 3.23 3.684 1.928 0 3.21-1.236 3.21-3.684zm-2.096 0c0 1.267-.61 1.9-1.114 1.9-.504 0-1.114-.633-1.114-1.9 0-1.267.61-1.9 1.114-1.9.504 0 1.114.633 1.114 1.9z" />
      </svg>
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
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#3776ab] fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.547 3.328c.451 0 .813.363.813.813s-.363.813-.813.813-.813-.363-.813-.813.363-.813.813-.813zm5.094 15.11c-.451 0-.813-.363-.813-.813s.363-.813.813-.813.813.363.813.813-.362.813-.813.813zm.859-3.797H12.03v-1.125h3.047a2.03 2.03 0 0 0 2.031-2.031v-2.031h-1.125V12.5a.906.906 0 0 1-.906.906H9.998v-3.047a2.03 2.03 0 0 0-2.031-2.031H5.936v1.125h2.031a.906.906 0 0 1 .906.906v4.172c0 1.12.91 2.031 2.031 2.031h5.485v-1.125z" />
      </svg>
    )
  },
  {
    name: 'Flask',
    category: 'API Engine',
    color: 'rgba(128, 128, 128, 0.15)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--text-color)] fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: 'Node.js',
    category: 'JS Runtime',
    color: 'rgba(51, 153, 51, 0.15)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#339933] fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-5h2v5zm0-6h-2V7h2v3z" />
      </svg>
    )
  },
  {
    name: 'Solidity',
    category: 'Smart Contract',
    color: 'rgba(100, 100, 100, 0.15)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 3.32l7.62 4.35L12 12.03l-7.62-4.36L12 3.32zm-7.62 6.03L12 13.72v8.72l-7.62-4.36V9.35zm9.12 13.09v-8.72l7.62-4.37v8.72l-7.62 4.37z" />
      </svg>
    )
  },
  {
    name: 'Gemini & LLMs',
    category: 'Cognitive AI',
    color: 'rgba(138, 43, 226, 0.15)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#8a2be2] fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L14.7 9.3L24 12L14.7 14.7L12 24L9.3 14.7L0 12L9.3 9.3L12 0Z" />
      </svg>
    )
  },
  {
    name: 'Firebase',
    category: 'Database & Auth',
    color: 'rgba(255, 202, 40, 0.15)',
    svg: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#ffca28] fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.89 15.75L9.61 4.33a.62.62 0 0 1 1.13 0l2.36 4.72-9.21 6.7zm16.22-1.34l-2.77-5.26-2.52 4.79 5.29.47zm-1.07 3.01l-7.23-4.29-2.31 4.39 9.54-.1z" />
      </svg>
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
