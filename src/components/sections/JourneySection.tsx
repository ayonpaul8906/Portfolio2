import React from 'react';
import FadeIn from '../ui/FadeIn';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const JOURNEY_DATA: Milestone[] = [
  {
    year: '2023',
    title: 'Began B.Tech at BCREC',
    description: 'Started the Computer Science & Engineering journey — first lines of code written beyond hobby projects.'
  },
  {
    year: 'Mid 2024',
    title: 'First Hackathon',
    description: 'Competed in a 24-hour hackathon. Shipped a working product under pressure — discovered the thrill of building fast.'
  },
  {
    year: 'Early 2025',
    title: 'Discovered Full Stack + AI',
    description: 'Built first AI-integrated application using GROQ. Realised the power of combining LLMs with real product surfaces.'
  },
  {
    year: 'Sep–Oct 2025',
    title: 'SkillCraft Internship',
    description: 'First production internship. Shipped real features, learned collaborative git workflows and stakeholder communication.'
  },
  {
    year: 'Sept 2025',
    title: 'GDG Campus Lead',
    description: 'Elected as Lead for Google Developer Groups on Campus. Now organizing events, mentoring developers, and building community.'
  }
];

export const JourneySection: React.FC = () => {
  return (
    <section
      id="journey"
      className="bg-transparent px-5 sm:px-8 md:px-10 py-20 sm:py-24 text-[var(--text-color)] select-none z-10 relative overflow-hidden"
    >
      {/* Background glow lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-blue-500 filter blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto w-full flex flex-col">
        {/* Section label */}
        <FadeIn delay={0} y={15} className="mb-4 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted opacity-80">
            06 / Journey
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.1} y={30} className="w-full text-center mb-16 sm:mb-20">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            The Story So Far
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative border-l-2 border-card ml-4 lg:ml-36 pl-6 lg:pl-16 py-4 flex flex-col gap-12 text-left">
          
          {JOURNEY_DATA.map((milestone, index) => (
            <div key={milestone.title} className="relative group">
              {/* Pulse Circle Indicator on Timeline */}
              <div className="absolute -left-[33px] lg:-left-[73px] top-1.5 w-6 h-6 rounded-full bg-[var(--bg-color)] border-2 border-[var(--text-color)]/30 flex items-center justify-center group-hover:border-[var(--text-color)] transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-[var(--text-color)]/40 group-hover:bg-[var(--text-color)] transition-colors duration-300" />
              </div>

              {/* Milestone Details */}
              <FadeIn
                delay={index * 0.1}
                y={20}
                as="div"
                className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-8"
              >
                {/* Year tag */}
                <div className="lg:absolute lg:-left-[260px] lg:w-[180px] lg:text-right font-mono text-xs sm:text-sm font-semibold text-muted uppercase tracking-widest pt-1 mb-1 lg:mb-0">
                  {milestone.year}
                </div>
                
                {/* Text card */}
                <div className="flex-1 p-5 sm:p-6 rounded-2xl border border-card bg-card group-hover:bg-[var(--text-color)]/[0.04] transition-colors duration-300">
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-[var(--text-color)] mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}

          {/* Current / Present Milestone */}
          <div className="relative group">
            <div className="absolute -left-[33px] lg:-left-[73px] top-1.5 w-6 h-6 rounded-full bg-[var(--bg-color)] border-2 border-green-500/50 flex items-center justify-center animate-pulse">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            
            <FadeIn
              delay={JOURNEY_DATA.length * 0.1}
              y={20}
              as="div"
              className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-8"
            >
              <div className="lg:absolute lg:-left-[260px] lg:w-[180px] lg:text-right font-mono text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-widest pt-1 mb-1 lg:mb-0">
                Present
              </div>
              
              <div className="flex-1 p-5 sm:p-6 rounded-2xl border border-green-500/10 bg-green-500/[0.02]">
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-green-400 mb-2">
                  Building &amp; Learning
                </h3>
                <p className="text-xs sm:text-sm text-muted font-light leading-relaxed">
                  Open to new challenges, building larger-scale AI agents, blockchain systems, and production web applications.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JourneySection;
