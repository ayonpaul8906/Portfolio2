import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharInfo {
  char: string;
  globalIndex: number;
}

interface WordInfo {
  word: string;
  chars: CharInfo[];
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  let charCount = 0;

  const wordsData: WordInfo[] = words.map((word) => {
    const chars: CharInfo[] = word.split('').map((char) => ({
      char,
      globalIndex: charCount++,
    }));
    // Count the space as a step in the character indexing timeline
    charCount++;
    return { word, chars };
  });

  const totalChars = charCount;

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center text-center leading-relaxed ${className}`}>
      {wordsData.map((wordData, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.3em] last:mr-0">
          {wordData.chars.map((charData) => (
            <Character
              key={charData.globalIndex}
              char={charData.char}
              index={charData.globalIndex}
              total={totalChars}
              progress={scrollYProgress}
            />
          ))}
        </span>
      ))}
    </p>
  );
};

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, progress }) => {
  // Use a sliding window of the scroll progress to change opacity from 0.2 to 1
  const windowSize = 0.08; // 8% of the scroll timeline for each letter to fade in
  const start = (index / total) * (1 - windowSize);
  const end = start + windowSize;

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder to reserve layout space */}
      <span className="opacity-0">{char}</span>
      {/* Absolute positioned animated character */}
      <motion.span style={{ opacity }} className="absolute top-0 left-0 select-none">
        {char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
