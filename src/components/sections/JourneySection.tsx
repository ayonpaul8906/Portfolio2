import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import FadeIn from '../ui/FadeIn';

/* ──────────────────────────────────────────────────────────────
   Types
   ────────────────────────────────────────────────────────────── */

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;       // HSL accent for this milestone
  isCurrent?: boolean;
}

/* ──────────────────────────────────────────────────────────────
   Icons
   ────────────────────────────────────────────────────────────── */

const icons = {
  graduation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
    </svg>
  ),
  lightning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <path d="M9 22h6M12 2v3M12 17v5" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v.01" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" />
    </svg>
  ),
};

/* ──────────────────────────────────────────────────────────────
   Journey Data — each milestone has a unique accent colour
   ────────────────────────────────────────────────────────────── */

const JOURNEY_DATA: Milestone[] = [
  {
    year: '2023',
    title: 'Began B.Tech at BCREC',
    description: 'Started the Computer Science & Engineering journey — first lines of code written beyond hobby projects.',
    icon: icons.graduation,
    accent: '220, 90%, 65%',
  },
  {
    year: 'Mid 2024',
    title: 'First Hackathon',
    description: 'Competed in a 24-hour hackathon. Shipped a working product under pressure — discovered the thrill of building fast.',
    icon: icons.lightning,
    accent: '38, 95%, 58%',
  },
  {
    year: 'Early 2025',
    title: 'Full Stack + AI',
    description: 'Built first AI-integrated application using GROQ. The power of combining LLMs with real product surfaces.',
    icon: icons.brain,
    accent: '280, 75%, 62%',
  },
  {
    year: 'Sep–Oct 2025',
    title: 'SkillCraft Internship',
    description: 'First production internship. Shipped real features, collaborative git workflows and stakeholder communication.',
    icon: icons.briefcase,
    accent: '190, 85%, 52%',
  },
  {
    year: 'Sept 2025 - Present',
    title: 'GDG Campus Lead',
    description: 'Elected as Lead for Google Developer Groups on Campus. Organizing events, mentoring developers, building community.',
    icon: icons.community,
    accent: '350, 80%, 62%',
  },
  {
    year: 'Present',
    title: 'Building & Learning',
    description: 'Open to new challenges — building AI agents, blockchain systems, and production web applications.',
    icon: icons.rocket,
    accent: '142, 70%, 55%',
    isCurrent: true,
  },
];

/* ──────────────────────────────────────────────────────────────
   SVG Winding Road Path Generator
   ────────────────────────────────────────────────────────────── */

function generateWindingPath(
  numPoints: number,
  width: number,
  segmentHeight: number,
  curveAmplitude: number
): string {
  const centerX = width / 2;
  let d = `M ${centerX} 20`;

  for (let i = 0; i < numPoints; i++) {
    const startY = 20 + i * segmentHeight;
    const endY = 20 + (i + 1) * segmentHeight;
    const midY = (startY + endY) / 2;
    const direction = i % 2 === 0 ? 1 : -1;
    const cpX = centerX + curveAmplitude * direction;

    d += ` C ${cpX} ${midY - segmentHeight * 0.15}, ${cpX} ${midY + segmentHeight * 0.15}, ${centerX} ${endY}`;
  }

  return d;
}

/* ──────────────────────────────────────────────────────────────
   Milestone Card — Glassmorphism style with accent colour
   ────────────────────────────────────────────────────────────── */

interface MilestoneCardProps {
  milestone: Milestone;
  index: number;
  isRevealed: boolean;
  side: 'left' | 'right';
  yPercent: number;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone, index, isRevealed, side, yPercent }) => {
  const accentColor = `hsl(${milestone.accent})`;

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40, scale: 0.92 }}
      animate={
        isRevealed
          ? { opacity: 1, x: 0, scale: 1 }
          : { opacity: 0, x: side === 'left' ? -40 : 40, scale: 0.92 }
      }
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`
        absolute pointer-events-auto
        ${side === 'left' ? 'right-[55%] text-right' : 'left-[55%] text-left'}
      `}
      style={{
        top: `${yPercent}%`,
        transform: 'translateY(-50%)',
        width: 'clamp(150px, 38%, 280px)',
      }}
    >
      <div
        className="relative rounded-2xl overflow-hidden group"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          boxShadow: isRevealed
            ? `0 4px 24px -4px hsla(${milestone.accent}, 0.12), 0 1px 3px rgba(0,0,0,0.06)`
            : 'none',
          transition: 'box-shadow 0.6s ease',
        }}
      >
        {/* Accent top border glow */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          }}
        />

        {/* Inner card content */}
        <div className="relative px-4 py-3 sm:px-5 sm:py-4">
          {/* Large watermark number */}
          <div
            className={`absolute font-black leading-none opacity-[0.04] pointer-events-none
              ${side === 'left' ? 'left-3 sm:left-4' : 'right-3 sm:right-4'} top-1 sm:top-2
            `}
            style={{ fontSize: 'clamp(40px, 5vw, 64px)', color: accentColor }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Top row: icon + year */}
          <div className={`flex items-center gap-2.5 mb-2 ${side === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500"
              style={{
                background: isRevealed ? `hsla(${milestone.accent}, 0.1)` : 'var(--card-border)',
                border: `1px solid hsla(${milestone.accent}, ${isRevealed ? 0.2 : 0.05})`,
                color: isRevealed ? accentColor : 'var(--text-color)',
              }}
            >
              {milestone.icon}
            </div>

            <div className="flex flex-col">
              <span
                className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-semibold leading-tight"
                style={{ color: isRevealed ? accentColor : 'var(--text-muted)', opacity: isRevealed ? 1 : 0.5 }}
              >
                {milestone.year}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-1.5 text-[var(--text-color)] leading-snug">
            {milestone.title}
          </h3>

          {/* Description */}
          <p className="text-[10px] sm:text-xs text-muted font-light leading-relaxed opacity-80">
            {milestone.description}
          </p>
        </div>
      </div>

      {/* Connector — dotted line from card to road with accent glow */}
      <div
        className={`
          absolute top-1/2 -translate-y-1/2
          ${side === 'left'
            ? '-right-[14px] sm:-right-[22px] w-[14px] sm:w-[22px]'
            : '-left-[14px] sm:-left-[22px] w-[14px] sm:w-[22px]'
          }
        `}
        style={{
          height: '2px',
          background: isRevealed
            ? `linear-gradient(${side === 'left' ? '0deg' : '180deg'}, hsla(${milestone.accent}, 0.5), transparent)`
            : 'transparent',
          transition: 'background 0.5s ease',
        }}
      />
    </motion.div>
  );
};

/* ──────────────────────────────────────────────────────────────
   Road Milestone Marker — multi-ring node at each point
   ────────────────────────────────────────────────────────────── */

const RoadMarker: React.FC<{
  cx: number;
  cy: number;
  isRevealed: boolean;
  accent: string;
  isCurrent?: boolean;
}> = ({ cx, cy, isRevealed, accent, isCurrent }) => {
  const color = `hsl(${accent})`;

  return (
    <g>
      {/* Ambient glow */}
      <circle
        cx={cx} cy={cy}
        r={isRevealed ? 18 : 8}
        fill={isRevealed ? color : 'transparent'}
        opacity={isRevealed ? 0.06 : 0}
        style={{ transition: 'all 0.6s ease' }}
      />
      {/* Outer ring */}
      <circle
        cx={cx} cy={cy}
        r={isRevealed ? 11 : 7}
        fill="none"
        stroke={isRevealed ? color : 'var(--card-border)'}
        strokeWidth={isRevealed ? 1.5 : 0.8}
        opacity={isRevealed ? 0.35 : 0.15}
        style={{ transition: 'all 0.5s ease' }}
      />
      {/* Core dot */}
      <circle
        cx={cx} cy={cy}
        r={isRevealed ? 4.5 : 3}
        fill={isRevealed ? color : 'var(--card-border)'}
        style={{ transition: 'all 0.4s ease' }}
      />
      {/* Centre highlight */}
      <circle
        cx={cx} cy={cy}
        r={isRevealed ? 1.8 : 0}
        fill="var(--card-bg)"
        opacity={isRevealed ? 0.8 : 0}
        style={{ transition: 'all 0.4s ease' }}
      />
      {/* Pulse ring for current milestone */}
      {isCurrent && isRevealed && (
        <>
          <circle cx={cx} cy={cy} r="6" fill="none" stroke={color} strokeWidth="1.2" opacity="0">
            <animate attributeName="r" from="6" to="22" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx={cx} cy={cy} r="6" fill="none" stroke={color} strokeWidth="0.8" opacity="0">
            <animate attributeName="r" from="8" to="28" dur="2.5s" begin="0.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.3" to="0" dur="2.5s" begin="0.8s" repeatCount="indefinite" />
          </circle>
        </>
      )}
    </g>
  );
};

/* ──────────────────────────────────────────────────────────────
   JourneySection — Premium Winding Road Timeline
   ────────────────────────────────────────────────────────────── */

export const JourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [pathLength, setPathLength] = useState(0);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });
  const [milestonePositions, setMilestonePositions] = useState<{ x: number; y: number }[]>([]);
  const [revealedCount, setRevealedCount] = useState(0);

  // SVG coordinate space — wide aspect ratio for compact rendering
  const SVG_WIDTH = 800;
  const SEGMENT_HEIGHT = 130;
  const CURVE_AMPLITUDE = 150;
  const SVG_HEIGHT = 20 + JOURNEY_DATA.length * SEGMENT_HEIGHT + 20;

  const windingPath = useMemo(
    () => generateWindingPath(JOURNEY_DATA.length, SVG_WIDTH, SEGMENT_HEIGHT, CURVE_AMPLITUDE),
    []
  );

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    restDelta: 0.0005,
  });

  // Measure path and compute milestone positions
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const totalLength = path.getTotalLength();
    setPathLength(totalLength);

    const positions = JOURNEY_DATA.map((_, i) => {
      const fraction = (i + 0.5) / JOURNEY_DATA.length;
      const point = path.getPointAtLength(fraction * totalLength);
      return { x: point.x, y: point.y };
    });
    setMilestonePositions(positions);
  }, [windingPath]);

  const drawProgress = useTransform(smoothProgress, [0, 1], [0, 1]);

  useMotionValueEvent(drawProgress, 'change', (latest) => {
    const path = pathRef.current;
    if (!path || pathLength === 0) return;

    const clamped = Math.max(0, Math.min(1, latest));
    const point = path.getPointAtLength(clamped * pathLength);
    setPointerPos({ x: point.x, y: point.y });

    let revealed = 0;
    for (let i = 0; i < JOURNEY_DATA.length; i++) {
      const fraction = (i + 0.5) / JOURNEY_DATA.length;
      if (clamped >= fraction - 0.02) revealed = i + 1;
    }
    setRevealedCount(revealed);
  });

  const dashOffset = useTransform(drawProgress, (p) => {
    if (pathLength === 0) return pathLength;
    return pathLength * (1 - Math.max(0, Math.min(1, p)));
  });

  const cardYPercents = useMemo(() => {
    return JOURNEY_DATA.map((_, i) => {
      const fraction = (i + 0.5) / JOURNEY_DATA.length;
      const svgY = 20 + fraction * (JOURNEY_DATA.length * SEGMENT_HEIGHT);
      return (svgY / SVG_HEIGHT) * 100;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative px-4 sm:px-8 md:px-10 py-16 sm:py-20 text-[var(--text-color)] select-none z-10"
      style={{ overflow: 'clip' }}
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-1/4 w-[40vw] h-[40vw] rounded-full opacity-[0.025] filter blur-[100px]"
          style={{ background: 'hsl(220, 90%, 65%)' }}
        />
        <div className="absolute bottom-[15%] right-1/4 w-[35vw] h-[35vw] rounded-full opacity-[0.02] filter blur-[100px]"
          style={{ background: 'hsl(142, 70%, 55%)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full flex flex-col">
        {/* Section label */}
        <FadeIn delay={0} y={15} className="mb-3 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted opacity-80">
            06 / Journey
          </div>
        </FadeIn>

        {/* Section Heading */}
        <FadeIn delay={0.1} y={30} className="w-full text-center mb-10 sm:mb-14">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2rem, 7vw, 90px)' }}
          >
            The Story So Far
          </h2>
        </FadeIn>

        {/* ── Winding Road Timeline ── */}
        <div className="relative w-full mx-auto" style={{ maxWidth: '720px' }}>

          {/* SVG Road */}
          <svg
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            fill="none"
            className="w-full h-auto"
            style={{ overflow: 'visible' }}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Gradient for the progress trail */}
              <linearGradient id="roadProgressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(220, 90%, 65%)" stopOpacity="0.6" />
                <stop offset="35%" stopColor="hsl(280, 75%, 62%)" stopOpacity="0.5" />
                <stop offset="65%" stopColor="hsl(190, 85%, 52%)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(142, 70%, 55%)" stopOpacity="0.7" />
              </linearGradient>

              {/* Glow filter for the pointer */}
              <filter id="pointerGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Soft glow for the road background */}
              <filter id="roadSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
              </filter>
            </defs>

            {/* ── Road layers ── */}

            {/* Layer 1: Soft ambient glow behind road */}
            <path
              d={windingPath}
              stroke="var(--text-color)"
              strokeWidth="50"
              strokeLinecap="round"
              fill="none"
              opacity="0.02"
              filter="url(#roadSoftGlow)"
            />

            {/* Layer 2: Road surface — subtle fill */}
            <path
              d={windingPath}
              stroke="var(--card-border)"
              strokeWidth="32"
              strokeLinecap="round"
              fill="none"
              opacity="0.35"
            />

            {/* Layer 3: Road edge lines */}
            <path
              d={windingPath}
              stroke="var(--text-color)"
              strokeWidth="33"
              strokeLinecap="round"
              fill="none"
              opacity="0.06"
            />
            <path
              d={windingPath}
              stroke="var(--card-bg)"
              strokeWidth="28"
              strokeLinecap="round"
              fill="none"
              opacity="0.02"
            />

            {/* Layer 4: Dashed centre line */}
            <path
              d={windingPath}
              stroke="var(--text-color)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="5 9"
              fill="none"
              opacity="0.08"
            />

            {/* ── Animated progress ── */}

            {/* Progress glow trail — wide + soft */}
            <motion.path
              d={windingPath}
              stroke="url(#roadProgressGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              opacity="0.35"
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: dashOffset,
              }}
            />

            {/* Progress core line — thin + bright */}
            <motion.path
              ref={pathRef}
              d={windingPath}
              stroke="var(--text-color)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.25"
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: dashOffset,
              }}
            />

            {/* ── Milestone markers ── */}
            {milestonePositions.map((pos, i) => (
              <RoadMarker
                key={i}
                cx={pos.x}
                cy={pos.y}
                isRevealed={i < revealedCount}
                accent={JOURNEY_DATA[i].accent}
                isCurrent={JOURNEY_DATA[i]?.isCurrent}
              />
            ))}

            {/* ── Scroll pointer ── */}
            {pathLength > 0 && (
              <g filter="url(#pointerGlow)">
                {/* Outer glow disc */}
                <circle
                  cx={pointerPos.x} cy={pointerPos.y}
                  r="14"
                  fill="var(--text-color)"
                  opacity="0.06"
                />
                {/* Ring */}
                <circle
                  cx={pointerPos.x} cy={pointerPos.y}
                  r="9"
                  fill="none"
                  stroke="var(--text-color)"
                  strokeWidth="1.5"
                  opacity="0.2"
                />
                {/* Core */}
                <circle
                  cx={pointerPos.x} cy={pointerPos.y}
                  r="4.5"
                  fill="var(--text-color)"
                  opacity="0.9"
                />
                {/* Centre highlight */}
                <circle
                  cx={pointerPos.x} cy={pointerPos.y}
                  r="1.8"
                  fill="var(--card-bg)"
                  opacity="0.85"
                />
              </g>
            )}
          </svg>

          {/* ── Milestone Cards overlay ── */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative w-full h-full">
              {JOURNEY_DATA.map((milestone, index) => (
                <MilestoneCard
                  key={milestone.title}
                  milestone={milestone}
                  index={index}
                  isRevealed={index < revealedCount}
                  side={index % 2 === 0 ? 'right' : 'left'}
                  yPercent={cardYPercents[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
