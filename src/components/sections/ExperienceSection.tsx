import React from 'react';
import FadeIn from '../ui/FadeIn';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  status: string;
  description: string;
  tags: string[];
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: '01',
    role: 'Lead',
    company: 'GDG on Campus BCREC',
    duration: 'Sept 2025 – Present',
    status: 'Current',
    description: 'Leading Google Developer Groups chapter on campus, organizing tech events, workshops, and hackathons for the developer community.',
    tags: ['Community', 'Events', 'Google'],
  },
  {
    id: '02',
    role: 'Web Developer Intern',
    company: 'SkillCraft Technology',
    duration: 'Sep – Oct 2024',
    status: 'Completed',
    description: 'Built and shipped frontend features for production web applications using modern React-based architecture and responsive design principles.',
    tags: ['React', 'Frontend', 'Production'],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-transparent px-5 sm:px-8 md:px-10 py-20 sm:py-24 text-[var(--text-color)] select-none z-10 relative"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col">
        {/* Section label */}
        <FadeIn delay={0} y={15} className="mb-4">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted opacity-80">
            04 / Experience
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.1} y={30} className="w-full text-center mb-16 sm:mb-20">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            Work Experience
          </h2>
        </FadeIn>

        {/* Experience List */}
        <div className="flex flex-col border-t border-card">
          {EXPERIENCE_DATA.map((exp, index) => (
            <FadeIn
              key={exp.id}
              delay={index * 0.15}
              y={30}
              as="div"
              className="flex flex-col md:flex-row items-start py-10 sm:py-12 border-b border-card gap-6 md:gap-12"
            >
              {/* Left Column: Number & Duration */}
              <div className="flex items-center md:items-start md:flex-col gap-4 w-full md:w-[220px] flex-shrink-0">
                <span
                  className="font-black text-muted opacity-40 leading-none select-none block"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
                >
                  {exp.id}
                </span>
                <div className="flex flex-col gap-1 text-left">
                  <span className="font-mono text-xs text-muted tracking-wider">
                    {exp.duration}
                  </span>
                  <span
                    className={`inline-block text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full w-max mt-1 ${
                      exp.status === 'Current'
                        ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                        : 'bg-[var(--text-color)]/10 text-[var(--text-color)] opacity-70 border border-card'
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>
              </div>

              {/* Right Column: Details & Tech */}
              <div className="flex flex-col flex-1 text-left">
                <h3
                  className="font-semibold uppercase tracking-wide text-[var(--text-color)] mb-2"
                  style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.8rem)' }}
                >
                  {exp.role} <span className="text-muted opacity-80">@</span> {exp.company}
                </h3>
                <p
                  className="font-light leading-relaxed text-muted mb-6 max-w-2xl text-sm sm:text-base"
                >
                  {exp.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs font-mono px-3 py-1 rounded-full border border-card bg-[var(--text-color)]/5 text-[var(--text-color)] opacity-90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
