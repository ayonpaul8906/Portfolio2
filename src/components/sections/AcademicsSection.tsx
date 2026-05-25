import React from 'react';
import FadeIn from '../ui/FadeIn';

interface EducationItem {
  stage: string;
  institution: string;
  duration: string;
  metricLabel: string;
  metricValue: string;
  location: string;
}

const EDUCATION_DATA: EducationItem[] = [
  {
    stage: 'Bachelor of Technology (CSE)',
    institution: 'Dr. B.C. Roy Engineering College',
    duration: '2023 – 2027',
    metricLabel: 'CGPA / Status',
    metricValue: '8.4 / Enrolled',
    location: 'Durgapur, West Bengal'
  },
  {
    stage: 'Higher Secondary (WBCHSE)',
    institution: 'Modern High School',
    duration: '2021 – 2023',
    metricLabel: 'Percentage',
    metricValue: '77.8%',
    location: 'Durgapur, West Bengal'
  },
  {
    stage: 'Secondary (WBBSE)',
    institution: 'Modern High School',
    duration: '2019 – 2021',
    metricLabel: 'Percentage',
    metricValue: '88.0%',
    location: 'Durgapur, West Bengal'
  }
];

export const AcademicsSection: React.FC = () => {
  return (
    <section
      id="academics"
      className="relative bg-transparent px-4 sm:px-8 md:px-10 py-16 sm:py-24 z-10 overflow-hidden select-none"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col">
        {/* Section label */}
        <FadeIn delay={0} y={15} className="mb-4">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted opacity-80">
            03 / Academics
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.1} y={30} className="mb-12 sm:mb-16">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            Education &amp; Foundations
          </h2>
        </FadeIn>

        {/* Grid Layout (Education Columns & Specialization Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Vertical Education Stack (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {EDUCATION_DATA.map((edu, idx) => (
              <FadeIn
                key={edu.stage}
                delay={0.1 + idx * 0.08}
                y={20}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-card bg-card/80 relative overflow-hidden group hover:border-[var(--text-color)]/20 transition-all duration-300"
                style={{
                  boxShadow: `0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05)`
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-1">
                      {edu.stage}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-[var(--text-color)] group-hover:text-[var(--text-color)]/80 transition-colors">
                      {edu.institution}
                    </h3>
                  </div>
                  
                  {/* Metric Badge */}
                  <div className="flex flex-col items-start sm:items-end flex-shrink-0">
                    <span className="text-[8px] font-mono uppercase tracking-widest text-muted opacity-80">
                      {edu.metricLabel}
                    </span>
                    <span className="text-xs font-mono font-bold text-[var(--text-color)] bg-[var(--text-color)]/10 border border-card px-2 py-0.5 rounded mt-0.5">
                      {edu.metricValue}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-card pt-4 mt-2 text-[10px] font-mono text-muted uppercase tracking-wider">
                  <span>{edu.location}</span>
                  <span className="text-muted opacity-60">{edu.duration}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right Column: Core Specialization Card (Span 2) */}
          <FadeIn
            delay={0.3}
            y={30}
            className="lg:col-span-2 flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-card bg-card/80"
            style={{
              boxShadow: `0 8px 30px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05)`
            }}
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-2">
                Subject Matter
              </span>
              <h3 className="text-xl font-bold uppercase tracking-wide text-[var(--text-color)] mb-6">
                Core Specialization
              </h3>
              
              <div className="flex flex-col gap-4">
                {[
                  { name: 'DSA', desc: 'Data Structures & Algorithms' },
                  { name: 'OS', desc: 'Operating Systems' },
                  { name: 'DBMS', desc: 'Database Management Systems' },
                  { name: 'CN', desc: 'Computer Networks' },
                  { name: 'AI/ML', desc: 'Artificial Intelligence & Machine Learning' }
                ].map((subject) => (
                  <div key={subject.name} className="flex items-start gap-4 group">
                    <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-[var(--text-color)]/5 border border-card text-[var(--text-color)] min-w-[50px] text-center group-hover:bg-[var(--text-color)]/10 group-hover:border-[var(--text-color)]/20 transition-all">
                      {subject.name}
                    </span>
                    <span className="text-xs sm:text-sm text-muted font-light pt-0.5 group-hover:text-[var(--text-color)] transition-colors">
                      {subject.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-card text-[9px] font-mono text-muted opacity-60 uppercase tracking-widest">
              // academic_foundations
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
