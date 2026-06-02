import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isInput, setIsInput] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth lagging spring config for the outer ring
  const springConfig = { damping: 30, stiffness: 280, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if pointer device is touch/mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const isHoverable = (el: HTMLElement | null): boolean => {
      if (!el) return false;
      if (el.closest('a, button, [role="button"], .cursor-pointer, .cursor-hover')) {
        return true;
      }
      // Check computed style for pointer cursor
      let current: HTMLElement | null = el;
      for (let i = 0; i < 4 && current; i++) {
        if (window.getComputedStyle(current).cursor === 'pointer') return true;
        current = current.parentElement;
      }
      return false;
    };

    const isInputElement = (el: HTMLElement | null): boolean => {
      if (!el) return false;
      const tagName = el.tagName;
      return tagName === 'INPUT' || tagName === 'TEXTAREA' || el.isContentEditable;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInputElement(target)) {
        setIsInput(true);
        setIsHovered(false);
      } else if (isHoverable(target)) {
        setIsHovered(true);
        setIsInput(false);
      } else {
        setIsHovered(false);
        setIsInput(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, cursorX, cursorY]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Precise Inner Dot/Bar */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          width: isInput ? '2px' : '8px',
          height: isInput ? '18px' : '8px',
          backgroundColor: 'var(--accent-color)',
          borderRadius: isInput ? '1px' : '50%',
          boxShadow: '0 0 8px var(--accent-color)',
        }}
      />

      {/* Lagging Premium Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-[var(--accent-color)]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: 32,
          height: 32,
        }}
        animate={{
          scale: isInput ? 0 : isClicked ? 0.7 : isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? 'var(--accent-glow)' : 'rgba(0, 0, 0, 0)',
          borderColor: 'var(--accent-color)',
          opacity: isInput ? 0 : isClicked ? 0.8 : isHovered ? 0.95 : 0.4,
          backdropFilter: isHovered ? 'blur(1px)' : 'blur(0px)',
        }}
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 26,
        }}
      />
    </>
  );
};

export default CustomCursor;
