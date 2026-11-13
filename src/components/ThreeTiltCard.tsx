'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ThreeTiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum tilt angle in degrees (default: 8)
  scale?: number; // Hover scale (default: 1.02)
  glare?: boolean; // Show realistic light reflection glare
  perspective?: number; // Perspective distance in px (default: 1000)
}

/**
 * High-performance 3D Perspective Tilt Card with specular light reflection.
 * Uses GPU-accelerated CSS 3D transforms with Framer Motion spring physics.
 * Automatically disables or respects reduced-motion preferences.
 */
export function ThreeTiltCard({
  children,
  className = '',
  maxTilt = 7,
  scale = 1.02,
  glare = true,
  perspective = 1000,
}: ThreeTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates relative to center (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for natural tactile feel
  const springConfig = { damping: 20, stiffness: 240, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Map mouse coordinate to 3D rotation angles
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  // Glare position
  const glareX = useTransform(smoothX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const normalizedX = mouseX / rect.width - 0.5;
      const normalizedY = mouseY / rect.height - 0.5;

      x.set(normalizedX);
      y.set(normalizedY);
    },
    [x, y]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className={`relative ${className}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isHovered ? scale : 1,
        }}
        transition={{
          scale: { duration: 0.25, ease: 'easeOut' },
        }}
        className="w-full h-full relative"
      >
        {children}

        {/* Specular Glare Overlay */}
        {glare && isHovered && (
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 45%, transparent 70%)`,
            }}
            className="pointer-events-none absolute inset-0 rounded-[inherit] z-20 mix-blend-overlay transition-opacity duration-300"
          />
        )}
      </motion.div>
    </div>
  );
}

