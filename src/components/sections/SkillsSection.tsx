import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../ui/FadeIn';

interface TechSkill {
  name: string;
  tagline: string;
  tags: string[];
  color: string;
  bgGlow: string;
  svg: React.ReactNode;
}

const CATEGORIES = ['Frontend', 'Backend', 'Core Languages', 'Tools & Cloud'] as const;
type CategoryType = typeof CATEGORIES[number];

const SKILLS_DATA: Record<CategoryType, TechSkill[]> = {
  'Frontend': [
    {
      name: 'React.js',
      tagline: 'Component rendering architectures & custom hook models.',
      tags: ['Hooks API', 'Context API', 'State Flow', 'Performance Tuning'],
      color: '#00d8ff',
      bgGlow: 'rgba(0, 216, 255, 0.08)',
      svg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10 text-[#00d8ff] fill-none stroke-current" xmlns="http://www.w3.org/2000/svg">
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
      tagline: 'Server-side rendering, routing logic & static builds.',
      tags: ['App Router', 'RSC architecture', 'Incremental Build', 'API Routes'],
      color: '#000000',
      bgGlow: 'rgba(0, 0, 0, 0.05)',
      svg: (
        <svg viewBox="0 0 180 180" className="w-10 h-10 text-current fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M149.508 157.52L69.142 54H54v72h14.4V72.235l65.195 83.945c5.385-5.32 10.334-11.234 14.732-17.585zM126 54h14v72h-14V54z" />
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      tagline: 'Rapid interface development with utility structures.',
      tags: ['CSS Variables', 'Responsive Grid', 'Glassmorphism', 'Animation Classes'],
      color: '#06b6d4',
      bgGlow: 'rgba(6, 182, 212, 0.08)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#06b6d4] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.518 15.039 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.282 14.963 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.718 9.039 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.482 8.963 12 5.999 12z" />
        </svg>
      )
    },
    {
      name: 'TypeScript',
      tagline: 'Strict compile-time type safety & functional architecture.',
      tags: ['Generics', 'Type Guards', 'Utility Types', 'Compiler Options'],
      color: '#3178c6',
      bgGlow: 'rgba(49, 120, 198, 0.08)',
      svg: (
        <img src="/tech/ts.png" alt="TS Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'JavaScript',
      tagline: 'Core scripting engine & dynamic client interactions.',
      tags: ['ES6+ Syntax', 'DOM manipulation', 'Async-Await', 'Event Loop'],
      color: '#f59e0b',
      bgGlow: 'rgba(245, 158, 11, 0.08)',
      svg: (
        <img src="/tech/js.png" alt="JS Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'Vite',
      tagline: 'Ultra-fast Next-Gen frontend tooling & bundler.',
      tags: ['Hot Module', 'ES Modules', 'Asset Pipeline', 'Rollup Builds'],
      color: '#646cff',
      bgGlow: 'rgba(100, 108, 255, 0.08)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#646cff] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0l-9.5 16h6.5l-2.5 8 13-11h-7.5z" />
        </svg>
      )
    }
  ],
  'Backend': [
    {
      name: 'Python',
      tagline: 'Robust logical scripts & computational logic layers.',
      tags: ['Data Structures', 'OOP Paradigm', 'File Handling', 'Libraries'],
      color: '#3776ab',
      bgGlow: 'rgba(55, 118, 171, 0.08)',
      svg: (
        <img src="/tech/python.png" alt="Python Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'Flask',
      tagline: 'Structured Python API creation & server middleware.',
      tags: ['REST Endpoints', 'Session Auth', 'CORS Config', 'Route Mapping'],
      color: '#4b5563',
      bgGlow: 'rgba(75, 85, 99, 0.05)',
      svg: (
        <img src="/tech/flask.png" alt="Flask Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'Node.js',
      tagline: 'JavaScript server runtimes & backend system integration.',
      tags: ['Event Loop', 'NPM Ecosystem', 'File Streams', 'Core Modules'],
      color: '#339933',
      bgGlow: 'rgba(51, 153, 81, 0.08)',
      svg: (
        <img src="/tech/nodejs.png" alt="Node.js Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'Express.JS',
      tagline: 'Minimalist routing middleware for Node.js servers.',
      tags: ['Middleware API', 'Routing Nodes', 'Error Handling', 'Token Auth'],
      color: '#6b7280',
      bgGlow: 'rgba(107, 114, 128, 0.05)',
      svg: (
        <img src="/tech/express.png" alt="Express.js Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'MongoDB',
      tagline: 'Document-oriented NoSQL database system.',
      tags: ['BSON Objects', 'Aggregation', 'Query Tuning', 'Mongoose ODM'],
      color: '#13aa52',
      bgGlow: 'rgba(19, 170, 82, 0.08)',
      svg: (
        <img src="/tech/mongo.png" alt="MongoDB Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'MySQL',
      tagline: 'Relational database schema structure & indexing.',
      tags: ['SQL Schemas', 'Joins & Views', 'Index Optimizers', 'Transaction Locks'],
      color: '#00758f',
      bgGlow: 'rgba(0, 117, 143, 0.08)',
      svg: (
        <img src="/tech/mysql.png" alt="MySQL Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'REST API',
      tagline: 'Standard HTTP communication logic & payload delivery.',
      tags: ['CORS Config', 'HTTP Verbs', 'JSON Payloads', 'Rate Limiting'],
      color: '#ec4899',
      bgGlow: 'rgba(236, 72, 153, 0.08)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#ec4899] fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ],
  'Core Languages': [
    {
      name: 'JavaScript',
      tagline: 'Prototype-based asynchronous scripting model.',
      tags: ['ES2023 Spec', 'Engine V8', 'Closures', 'Promises API'],
      color: '#f59e0b',
      bgGlow: 'rgba(245, 158, 11, 0.08)',
      svg: (
        <img src="/tech/js.png" alt="JavaScript Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'Python',
      tagline: 'Multi-paradigm dynamic language logic.',
      tags: ['Memory Management', 'Decorators', 'Generators', 'Gil Structure'],
      color: '#3776ab',
      bgGlow: 'rgba(55, 118, 171, 0.08)',
      svg: (
        <img src="/tech/python.png" alt="Python Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'C',
      tagline: 'Procedural compilation with manual memory mapping.',
      tags: ['Pointers Logic', 'Memory allocation', 'Bitwise operations', 'Structs'],
      color: '#00599c',
      bgGlow: 'rgba(0, 89, 156, 0.08)',
      svg: (
        <img src="/tech/C.png" alt="C Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'Java',
      tagline: 'Class-based JVM runtime logic.',
      tags: ['JVM Garbage Collector', 'Multithreading', 'Inheritance model', 'Collections'],
      color: '#ea2d2e',
      bgGlow: 'rgba(234, 45, 46, 0.08)',
      svg: (
        <img src="/tech/java.png" alt="Java Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'SQL',
      tagline: 'Declarative queries for structured data systems.',
      tags: ['Queries Syntax', 'DML & DDL', 'Constraint Engines', 'Subqueries'],
      color: '#00758f',
      bgGlow: 'rgba(0, 117, 143, 0.08)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#00758f] fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      )
    }
  ],
  'Tools & Cloud': [
    {
      name: 'Firebase',
      tagline: 'Realtime datastores, CDN storage & credentials auth.',
      tags: ['Firestore NoSQL', 'Auth Tokens', 'Cloud Storage', 'Realtime Sync'],
      color: '#f59e0b',
      bgGlow: 'rgba(245, 158, 11, 0.08)',
      svg: (
        <img src="/tech/firebase.png" alt="Firebase Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'Git & GitHub',
      tagline: 'Distributed version control & workflow pipelines.',
      tags: ['Branch Workflows', 'Commit Tracing', 'Actions CI/CD', 'Hooks Logic'],
      color: '#000000',
      bgGlow: 'rgba(0, 0, 0, 0.05)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-current fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: 'Docker',
      tagline: 'Containerization, image builds, and registry pipelines.',
      tags: ['Dockerfile', 'Containers Engine', 'Docker Compose', 'Volumes & Networks'],
      color: '#2496ed',
      bgGlow: 'rgba(36, 150, 237, 0.08)',
      svg: (
        <img src="/tech/docker.png" alt="Docker Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'Vercel',
      tagline: 'Serverless deployment and web deployment scaling.',
      tags: ['Static Hosting', 'Serverless Functions', 'Domains mapping', 'CI/CD hooks'],
      color: '#000000',
      bgGlow: 'rgba(0, 0, 0, 0.05)',
      svg: (
        <img src="/tech/vercel.png" alt="Vercel Logo" className="w-9 h-9" />
      )
    },
    {
      name: 'Render',
      tagline: 'Cloud-native database and microservice deployment.',
      tags: ['Web Services', 'Static Sites', 'Cron Jobs', 'Autodeploys'],
      color: '#46e3b7',
      bgGlow: 'rgba(70, 227, 183, 0.08)',
      svg: (
        <img src="/tech/render.png" alt="Render Logo" className="w-10 h-10" />
      )
    },
    {
      name: 'Postman',
      tagline: 'API client endpoints testing & payloads verification.',
      tags: ['API Requests', 'Environments', 'Mock Servers', 'Test Scripts'],
      color: '#ff6c37',
      bgGlow: 'rgba(255, 108, 55, 0.08)',
      svg: (
        <img src="/tech/postman.png" alt="Postman Logo" className="w-10 h-10" />
      )
    }
  ]
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: 'easeOut'
    }
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('Frontend');

  return (
    <section
      id="skills"
      className="bg-[var(--bg-color)] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[var(--text-color)] select-none relative overflow-hidden"
    >
      {/* Background grid lines */}
      <div className="absolute inset-0 grid-lines opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto w-full flex flex-col relative z-10">
        {/* Section label */}
        <FadeIn delay={0} y={15} className="mb-4">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            02 / Skills
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.1} y={30} className="mb-12 sm:mb-16">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            Technology Arsenal
          </h2>
        </FadeIn>

        {/* Categories Tab Bar */}
        <FadeIn delay={0.15} y={20} className="mb-12">
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-card border border-card max-w-xl">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative focus:outline-none cursor-pointer"
              >
                <span className={`relative z-10 transition-colors duration-300 ${activeCategory === category ? 'text-[var(--bg-color)] dark:text-black' : 'text-muted hover:text-[var(--text-color)]'}`}>
                  {category}
                </span>
                {activeCategory === category && (
                  <motion.div
                    layoutId="active-skill-tab-dark"
                    className="absolute inset-0 rounded-xl bg-[var(--text-color)] shadow-lg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skills Cards Grid */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {SKILLS_DATA[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  variants={cardVariants}
                  className="p-6 rounded-3xl border border-card bg-card transition-all duration-300 flex flex-col justify-between min-h-[200px] relative group overflow-hidden"
                  style={{
                    boxShadow: `0 8px 30px rgba(0, 0, 0, 0.03)`
                  }}
                  whileHover={{ y: -6, borderColor: 'var(--accent-color)' }}
                >
                  {/* Brand color accent light */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 10% 10%, ${skill.bgGlow}, transparent 70%)`
                    }}
                  />

                  {/* Top content */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-card border border-card flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                        {skill.svg}
                      </div>
                    </div>

                    <h3 className="font-extrabold uppercase text-[var(--text-color)] tracking-wider text-base sm:text-lg mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted font-light leading-relaxed mb-4">
                      {skill.tagline}
                    </p>
                  </div>

                  {/* Sub tags list */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-card relative z-10">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-card bg-card text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
