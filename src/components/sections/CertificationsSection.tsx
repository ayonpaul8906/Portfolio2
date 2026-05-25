import React from 'react';
import FadeIn from '../ui/FadeIn';

interface Certificate {
  year: string;
  category: string;
  title: string;
  link: string;
}

const CERTIFICATES_DATA: Certificate[] = [
  {
    year: '2025',
    category: 'Hackathon',
    title: 'HackHazard 2025',
    link: 'https://drive.google.com/file/d/1gREjVO59PbaJFAg8ZHG8ns87wt-FIbBB/view?usp=sharing'
  },
  {
    year: '2025',
    category: 'National Hackathon',
    title: 'Bharatiya Antariksh',
    link: 'https://drive.google.com/file/d/1N2bP_7GcXzHlmNZAFvCbKElFZAg6H2f6/view?usp=sharing'
  },
  {
    year: '2025',
    category: 'Open Source',
    title: 'JWOC 2025',
    link: 'https://drive.google.com/file/d/1jhIAUs0ruMpkffxWCuEhNItZSy3bFtf7/view?usp=sharing'
  },
  {
    year: '2025',
    category: 'Google Challenge',
    title: 'Solution Challenge',
    link: 'https://drive.google.com/file/d/13OGv9Zch2LHmLQxpiI1BGSxHPDjB0sDd/view?usp=sharing'
  },
  {
    year: '2026',
    category: 'Open Source',
    title: 'Apertre 3.0',
    link: 'https://drive.google.com/file/d/1T3BYTdV8_EcHSXENPXrZDF0aZnykL-1Q/view?usp=sharing'
  },
  {
    year: '2024',
    category: 'Hackathon',
    title: 'Code for Change',
    link: 'https://drive.google.com/file/d/1lPxTiqE4ypoKbMuU5rvmTSpNk9CTUSKC/view?usp=sharing'
  },
  {
    year: '2026',
    category: 'Hackathon',
    title: 'Code for Change 2.0',
    link: 'https://drive.google.com/file/d/17WKYQzHY4jSF_sRzoZyaDJw1qkrHFT3E/view?usp=sharing'
  },
  {
    year: '2023',
    category: 'Open Source',
    title: 'Winter of Code 5.0',
    link: 'https://drive.google.com/file/d/1rbwSA3SYeD7dJSF7cfbebOYeUMGuF7vR/view?usp=sharing'
  }
];

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="bg-transparent px-5 sm:px-8 md:px-10 py-20 sm:py-24 text-[var(--text-color)] select-none z-10 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col">
        {/* Section label */}
        <FadeIn delay={0} y={15} className="mb-4 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted opacity-80">
            07 / Recognition
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.1} y={30} className="w-full text-center mb-16 sm:mb-20">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            Awards &amp; Certifications
          </h2>
          <p className="text-xs sm:text-sm font-mono text-muted uppercase tracking-widest text-center mt-3">
            Hackathons, open source &amp; industry milestones
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {CERTIFICATES_DATA.map((cert, index) => (
            <FadeIn
              key={cert.title}
              delay={index * 0.05}
              y={20}
              as="a"
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-5 rounded-2xl border border-card bg-card hover:bg-[var(--text-color)]/[0.04] hover:border-[var(--text-color)]/20 transition-all duration-300 relative cursor-pointer min-h-[160px]"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-muted">
                    {cert.year}
                  </span>
                  {/* Arrow Icon */}
                  <svg
                    className="w-4 h-4 text-muted opacity-60 group-hover:text-[var(--text-color)] group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-1">
                  {cert.category}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-color)] leading-snug group-hover:opacity-80 transition-colors duration-300">
                  {cert.title}
                </h3>
              </div>
              
              <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted opacity-80 group-hover:text-[var(--text-color)] transition-colors duration-300 mt-4 block">
                Verify credential &rarr;
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
