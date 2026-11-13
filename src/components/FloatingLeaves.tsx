'use client';

import React from 'react';

export type FloatingLeafColor = 'red' | 'green' | 'beige' | 'gold' | 'teal';

export interface FloatingLeavesProps {
  className?: string;
  /** Choose specific colors to include, defaults to ['red', 'green', 'beige'] */
  colors?: FloatingLeafColor[];
  /** Density / layout preset */
  preset?: 'hero' | 'minimal' | 'sides' | 'ambient';
  /** Base opacity factor, 0.1 to 1 (default: 0.85) */
  opacity?: number;
}

export function FloatingLeaves({
  className = '',
  colors = ['red', 'green', 'beige'],
  preset = 'hero',
  opacity = 0.85,
}: FloatingLeavesProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-10 select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <style jsx>{`
        @keyframes driftGentle1 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          25% {
            transform: translate3d(14px, -18px, 0) rotate(9deg);
          }
          50% {
            transform: translate3d(24px, -32px, 0) rotate(3deg);
          }
          75% {
            transform: translate3d(8px, -16px, 0) rotate(-8deg);
          }
        }

        @keyframes driftGentle2 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          30% {
            transform: translate3d(-18px, -22px, 0) rotate(-12deg);
          }
          65% {
            transform: translate3d(-8px, -36px, 0) rotate(6deg);
          }
          85% {
            transform: translate3d(6px, -12px, 0) rotate(-4deg);
          }
        }

        @keyframes driftGentle3 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
          }
          35% {
            transform: translate3d(16px, -26px, 0) rotate(14deg) scale(1.04);
          }
          70% {
            transform: translate3d(-12px, -14px, 0) rotate(-10deg) scale(0.96);
          }
        }

        @keyframes driftGentle4 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          20% {
            transform: translate3d(10px, -12px, 0) rotate(6deg);
          }
          55% {
            transform: translate3d(-14px, -28px, 0) rotate(-9deg);
          }
          80% {
            transform: translate3d(8px, -18px, 0) rotate(4deg);
          }
        }

        @keyframes flutterGentle {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(6deg) scale(1.02);
          }
        }

        .anim-drift-1 {
          animation: driftGentle1 11s ease-in-out infinite;
          will-change: transform;
        }

        .anim-drift-2 {
          animation: driftGentle2 13s ease-in-out infinite;
          will-change: transform;
        }

        .anim-drift-3 {
          animation: driftGentle3 9.5s ease-in-out infinite;
          will-change: transform;
        }

        .anim-drift-4 {
          animation: driftGentle4 14s ease-in-out infinite;
          will-change: transform;
        }

        .anim-flutter {
          animation: flutterGentle 6s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>



      {/* =================================================================== */}
      {/* LEAF 2: GREEN / SAGE LEAF (Floating Mid-Left, desktop/tablet only) */}
      {/* =================================================================== */}
      {colors.includes('green') && (
        <div
          className="absolute top-[28%] left-[2%] sm:left-[6%] lg:left-[4%] anim-drift-2 hidden sm:block"
          style={{ opacity: opacity * 0.8 }}
        >
          <svg
            viewBox="0 0 110 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 drop-shadow-[0_4px_14px_rgba(46,125,50,0.18)]"
          >
            {/* Soft botanical shadow */}
            <path
              d="M12 94 C32 64, 56 36, 96 16 C 80 54, 52 82, 12 94 Z"
              fill="#8FA89B"
              fillOpacity="0.25"
            />
            {/* Primary Eucalyptus Leaf - Fresh Botanical Green */}
            <path
              d="M16 90 C36 60, 60 32, 100 12 C 84 50, 56 78, 16 90 Z"
              fill="#CAD8D1"
              fillOpacity="0.88"
            />
            {/* Secondary delicate inner leaf */}
            <path
              d="M24 82 C40 58, 60 36, 88 22 C 76 48, 52 70, 24 82 Z"
              fill="#D9E4DF"
              fillOpacity="0.95"
            />
            {/* Primary stem & leaf vein */}
            <path
              d="M16 90 C38 62, 62 36, 100 12"
              stroke="#7E9F90"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* Side veins */}
            <path
              d="M38 64 C46 62, 54 64, 60 70"
              stroke="#99B5A8"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M54 48 C62 46, 70 48, 76 54"
              stroke="#99B5A8"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* =================================================================== */}
      {/* LEAF 3: LIGHT BEIGE LEAF (Floating Lower-Right)                    */}
      {/* =================================================================== */}
      {colors.includes('beige') && (
        <div
          className="absolute bottom-[14%] right-[6%] sm:right-[12%] lg:right-[8%] anim-drift-3"
          style={{ opacity }}
        >
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-22 lg:h-22 drop-shadow-[0_4px_12px_rgba(216,206,191,0.35)]"
          >
            {/* Primary light beige / warm ivory leaf */}
            <path
              d="M82 82 C52 66, 30 46, 14 14 C 48 26, 72 48, 82 82 Z"
              fill="#EFE6DC"
              fillOpacity="0.92"
            />
            {/* Soft cream inner face */}
            <path
              d="M74 74 C50 60, 32 44, 20 22 C 46 32, 64 50, 74 74 Z"
              fill="#FAF5EE"
              fillOpacity="0.96"
            />
            {/* Warm sand vein */}
            <path
              d="M82 82 C54 64, 34 44, 14 14"
              stroke="#C9BCAB"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Delicate side arches */}
            <path
              d="M60 62 C54 54, 52 46, 48 40"
              stroke="#D8CEBF"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
            <path
              d="M46 48 C40 40, 38 34, 34 28"
              stroke="#D8CEBF"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}



      {/* =================================================================== */}
      {/* LEAF 5: GENTLE GREEN ACCENT (Floating Upper-Left)                  */}
      {/* =================================================================== */}
      {colors.includes('green') && preset !== 'minimal' && (
        <div
          className="absolute top-[12%] left-[16%] sm:left-[22%] anim-drift-3 hidden md:block"
          style={{ opacity: opacity * 0.7 }}
        >
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 drop-shadow-[0_3px_10px_rgba(78,135,113,0.15)]"
          >
            <path
              d="M68 68 C44 52, 28 34, 12 12 C 36 22, 54 40, 68 68 Z"
              fill="#8FA89B"
              fillOpacity="0.8"
            />
            <path
              d="M68 68 C44 52, 28 34, 12 12"
              stroke="#6B8A7C"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* =================================================================== */}
      {/* LEAF 6: WARM LIGHT BEIGE DRIFTING LEAF (Floating Lower-Left)        */}
      {/* =================================================================== */}
      {colors.includes('beige') && preset !== 'minimal' && (
        <div
          className="absolute bottom-[22%] left-[12%] sm:left-[16%] anim-drift-1 hidden lg:block"
          style={{ opacity: opacity * 0.75 }}
        >
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 lg:w-14 lg:h-14 drop-shadow-[0_3px_10px_rgba(216,206,191,0.25)]"
          >
            <path
              d="M14 66 C28 44, 44 26, 68 12 C 56 36, 38 56, 14 66 Z"
              fill="#FAF5EE"
              fillOpacity="0.9"
            />
            <path
              d="M14 66 C30 44, 46 28, 68 12"
              stroke="#C9BCAB"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

