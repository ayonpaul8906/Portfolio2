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
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#3178c6] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm14.595 12.188c.18 0 .346.009.5.027.153.018.306.054.459.108.153.054.306.126.459.216.153.09.288.207.405.35.117.144.216.315.297.513.081.198.122.423.122.675 0 .288-.05.545-.149.77-.099.225-.238.414-.418.567-.18.153-.396.265-.648.337-.252.072-.531.108-.837.108-.225 0-.464-.023-.716-.068-.252-.045-.49-.117-.715-.216a4.4 4.4 0 0 1-.621-.351l.9-.99c.144.117.297.216.459.297.162.081.333.122.513.122.18 0 .324-.045.432-.135.108-.09.162-.216.162-.378 0-.126-.036-.225-.108-.297-.072-.072-.162-.126-.27-.162-.108-.036-.225-.063-.351-.081a5.952 5.952 0 0 1-.396-.067c-.207-.045-.4-.117-.58-.216a2.04 2.04 0 0 1-.495-.392c-.135-.153-.243-.346-.324-.58-.081-.234-.122-.518-.122-.85 0-.315.054-.599.162-.85.108-.252.261-.464.459-.635.198-.171.437-.301.716-.391.279-.09.585-.135.918-.135.234 0 .468.027.702.081.234.054.454.135.661.243.207.108.396.243.567.405l-.837.936a2.38 2.38 0 0 0-.486-.297 1.528 1.528 0 0 0-.585-.099c-.198 0-.356.045-.473.135-.117.09-.175.225-.175.405 0 .126.036.225.108.297.072.072.167.126.284.162.117.036.243.063.378.081.135.018.265.04.391.068zm-5.067-2.313H14.13V20h-2.385v-7.938H9.36v-2.187z" />
        </svg>
      )
    },
    {
      name: 'JavaScript',
      tagline: 'Core scripting engine & dynamic client interactions.',
      tags: ['ES6+ Syntax', 'DOM manipulation', 'Async-Await', 'Event Loop'],
      color: '#f59e0b',
      bgGlow: 'rgba(245, 158, 11, 0.08)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#f59e0b] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0V0zm22.034 18.5c0-1.504-.905-2.506-2.527-2.506-1.547 0-2.368.807-2.738 1.777l1.79.94c.26-.52.54-.863 1.008-.863.398 0 .684.2.684.58 0 .753-.943.918-1.745 1.15-.99.288-2.116.732-2.116 2.453 0 1.554 1.124 2.47 2.62 2.47 1.253 0 2.062-.602 2.447-1.42h.036l.245 1.18h1.666V18.5zM12.923 20.315c0-2.454-1.282-3.69-3.21-3.69-1.928 0-3.23 1.236-3.23 3.69 0 2.448 1.302 3.684 3.23 3.684 1.928 0 3.21-1.236 3.21-3.684zm-2.096 0c0 1.267-.61 1.9-1.114 1.9-.504 0-1.114-.633-1.114-1.9 0-1.267.61-1.9 1.114-1.9.504 0 1.114.633 1.114 1.9z" />
        </svg>
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
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#3776ab] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.547 3.328c.451 0 .813.363.813.813s-.363.813-.813.813-.813-.363-.813-.813.363-.813.813-.813zm5.094 15.11c-.451 0-.813-.363-.813-.813s.363-.813.813-.813.813.363.813.813-.362.813-.813.813zm.859-3.797H12.03v-1.125h3.047a2.03 2.03 0 0 0 2.031-2.031v-2.031h-1.125V12.5a.906.906 0 0 1-.906.906H9.998v-3.047a2.03 2.03 0 0 0-2.031-2.031H5.936v1.125h2.031a.906.906 0 0 1 .906.906v4.172c0 1.12.91 2.031 2.031 2.031h5.485v-1.125z" />
        </svg>
      )
    },
    {
      name: 'Flask',
      tagline: 'Structured Python API creation & server middleware.',
      tags: ['REST Endpoints', 'Session Auth', 'CORS Config', 'Route Mapping'],
      color: '#4b5563',
      bgGlow: 'rgba(75, 85, 99, 0.05)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-current fill-none stroke-current" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Node.js',
      tagline: 'JavaScript server runtimes & backend system integration.',
      tags: ['Event Loop', 'NPM Ecosystem', 'File Streams', 'Core Modules'],
      color: '#339933',
      bgGlow: 'rgba(51, 153, 81, 0.08)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#339933] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-5h2v5zm0-6h-2V7h2v3z" />
        </svg>
      )
    },
    {
      name: 'Express.JS',
      tagline: 'Minimalist routing middleware for Node.js servers.',
      tags: ['Middleware API', 'Routing Nodes', 'Error Handling', 'Token Auth'],
      color: '#6b7280',
      bgGlow: 'rgba(107, 114, 128, 0.05)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-current fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="4" />
          <path d="M7 8h10M7 12h10M7 16h5" />
        </svg>
      )
    },
    {
      name: 'MongoDB',
      tagline: 'Document-oriented NoSQL database system.',
      tags: ['BSON Objects', 'Aggregation', 'Query Tuning', 'Mongoose ODM'],
      color: '#13aa52',
      bgGlow: 'rgba(19, 170, 82, 0.08)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#13aa52] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C10.5 3 6 8.5 6 12s2.5 6.5 6 12c3.5-5.5 6-8.5 6-12s-4.5-9-6-12zm-1 12c0-1.5.5-3 1-3s1 1.5 1 3-.5 3-1 3-1-1.5-1-3z" />
        </svg>
      )
    },
    {
      name: 'MySQL',
      tagline: 'Relational database schema structure & indexing.',
      tags: ['SQL Schemas', 'Joins & Views', 'Index Optimizers', 'Transaction Locks'],
      color: '#00758f',
      bgGlow: 'rgba(0, 117, 143, 0.08)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#00758f] fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
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
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#f59e0b] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0V0zm22.034 18.5c0-1.504-.905-2.506-2.527-2.506-1.547 0-2.368.807-2.738 1.777l1.79.94c.26-.52.54-.863 1.008-.863.398 0 .684.2.684.58 0 .753-.943.918-1.745 1.15-.99.288-2.116.732-2.116 2.453 0 1.554 1.124 2.47 2.62 2.47 1.253 0 2.062-.602 2.447-1.42h.036l.245 1.18h1.666V18.5zM12.923 20.315c0-2.454-1.282-3.69-3.21-3.69-1.928 0-3.23 1.236-3.23 3.69 0 2.448 1.302 3.684 3.23 3.684 1.928 0 3.21-1.236 3.21-3.684zm-2.096 0c0 1.267-.61 1.9-1.114 1.9-.504 0-1.114-.633-1.114-1.9 0-1.267.61-1.9 1.114-1.9.504 0 1.114.633 1.114 1.9z" />
        </svg>
      )
    },
    {
      name: 'Python',
      tagline: 'Multi-paradigm dynamic language logic.',
      tags: ['Memory Management', 'Decorators', 'Generators', 'Gil Structure'],
      color: '#3776ab',
      bgGlow: 'rgba(55, 118, 171, 0.08)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#3776ab] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.547 3.328c.451 0 .813.363.813.813s-.363.813-.813.813-.813-.363-.813-.813.363-.813.813-.813zm5.094 15.11c-.451 0-.813-.363-.813-.813s.363-.813.813-.813.813.363.813.813-.362.813-.813.813zm.859-3.797H12.03v-1.125h3.047a2.03 2.03 0 0 0 2.031-2.031v-2.031h-1.125V12.5a.906.906 0 0 1-.906.906H9.998v-3.047a2.03 2.03 0 0 0-2.031-2.031H5.936v1.125h2.031a.906.906 0 0 1 .906.906v4.172c0 1.12.91 2.031 2.031 2.031h5.485v-1.125z" />
        </svg>
      )
    },
    {
      name: 'C',
      tagline: 'Procedural compilation with manual memory mapping.',
      tags: ['Pointers Logic', 'Memory allocation', 'Bitwise operations', 'Structs'],
      color: '#00599c',
      bgGlow: 'rgba(0, 89, 156, 0.08)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#00599c] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c3.2 0 6.05-1.5 7.89-3.87l-2.43-1.62C16.1 18.06 14.18 19 12 19c-3.86 0-7-3.14-7-7s3.14-7 7-7c2.18 0 4.1 0.94 5.46 2.49l2.43-1.62C18.05 3.5 15.2 2 12 2z" />
        </svg>
      )
    },
    {
      name: 'Java',
      tagline: 'Class-based JVM runtime logic.',
      tags: ['JVM Garbage Collector', 'Multithreading', 'Inheritance model', 'Collections'],
      color: '#ea2d2e',
      bgGlow: 'rgba(234, 45, 46, 0.08)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#ea2d2e] fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10h11v5a4 4 0 01-4 4H9a4 4 0 01-4-4v-5zM16 11h2a2 2 0 012 2v0a2 2 0 01-2 2h-2M9 2v4M12 2v4" />
        </svg>
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
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#f59e0b] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.89 15.75L9.61 4.33a.62.62 0 0 1 1.13 0l2.36 4.72-9.21 6.7zm16.22-1.34l-2.77-5.26-2.52 4.79 5.29.47zm-1.07 3.01l-7.23-4.29-2.31 4.39 9.54-.1z" />
        </svg>
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
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#2496ed] fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.983 8.871h-1.993v1.993h1.993v-1.993zm-2.99 0h-1.993v1.993h1.993v-1.993zm-2.99 0h-1.993v1.993h1.993v-1.993zm-2.991 0h-1.993v1.993h1.993v-1.993zm11.972-2.99h-1.993v1.993h1.993v-1.993zm-2.99 0h-1.993v1.993h1.993v-1.993zm-2.99 0h-1.993v1.993h1.993v-1.993zm10.973 5.98h-1.993v1.993h1.993v-1.993zm-20.975.996c0 2.223 1.764 4.024 3.93 4.024h12.576c2.166 0 3.93-1.801 3.93-4.024v-1.006H0v1.006z" />
        </svg>
      )
    },
    {
      name: 'Vercel',
      tagline: 'Serverless deployment and web deployment scaling.',
      tags: ['Static Hosting', 'Serverless Functions', 'Domains mapping', 'CI/CD hooks'],
      color: '#000000',
      bgGlow: 'rgba(0, 0, 0, 0.05)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-current fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L24 22H0L12 1z" />
        </svg>
      )
    },
    {
      name: 'Render',
      tagline: 'Cloud-native database and microservice deployment.',
      tags: ['Web Services', 'Static Sites', 'Cron Jobs', 'Autodeploys'],
      color: '#46e3b7',
      bgGlow: 'rgba(70, 227, 183, 0.08)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#46e3b7] fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 22h20L12 2z" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" className="fill-current" />
        </svg>
      )
    },
    {
      name: 'Postman',
      tagline: 'API client endpoints testing & payloads verification.',
      tags: ['API Requests', 'Environments', 'Mock Servers', 'Test Scripts'],
      color: '#ff6c37',
      bgGlow: 'rgba(255, 108, 55, 0.08)',
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#ff6c37] fill-none stroke-current" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12h20M12 2l10 10-10 10" />
        </svg>
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
