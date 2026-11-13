'use client';

import React from 'react';

export type WindyLeafColor = 'green' | 'coral' | 'red' | 'beige' | 'light-beige' | 'teal' | 'gold' | 'multi';
export type WindyLeafPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
export type WindyLeafSize = 'sm' | 'md' | 'lg' | 'xl';

export interface WindyLeafProps {
  className?: string;
  /** Color theme: green (default), red/coral, beige/light-beige, teal, gold, or multi */
  color?: WindyLeafColor;
  /** Corner position: bottom-left (default), bottom-right, top-left, top-right */
  position?: WindyLeafPosition;
  /** Size scale */
  size?: WindyLeafSize;
  /** Opacity multiplier (0 to 1) */
  opacity?: number;
}

const COLOR_PALETTES: Record<string, {
  shadow: string;
  primary: string;
  primaryOpacity: number;
  secondary: string;
  secondaryOpacity: number;
  vein: string;
  accent: string;
  accentOpacity: number;
  stem: string;
}> = {
  green: {
    shadow: '#8FA89B',
    primary: '#CAD8D1',
    primaryOpacity: 0.88,
    secondary: '#D9E4DF',
    secondaryOpacity: 0.95,
    vein: '#B2C5BD',
    accent: '#BFCFC7',
    accentOpacity: 0.6,
    stem: '#A8BEB4',
  },
  red: {
    shadow: '#E85B51',
    primary: '#FA7268',
    primaryOpacity: 0.88,
    secondary: '#FFAAA1',
    secondaryOpacity: 0.95,
    vein: '#E05349',
    accent: '#FF8A80',
    accentOpacity: 0.6,
    stem: '#D44339',
  },
  coral: {
    shadow: '#E85B51',
    primary: '#FA7268',
    primaryOpacity: 0.88,
    secondary: '#FFAAA1',
    secondaryOpacity: 0.95,
    vein: '#E05349',
    accent: '#FF8A80',
    accentOpacity: 0.6,
    stem: '#D44339',
  },
  beige: {
    shadow: '#D8CEBF',
    primary: '#EFE6DC',
    primaryOpacity: 0.92,
    secondary: '#FAF5EE',
    secondaryOpacity: 0.96,
    vein: '#C9BCAB',
    accent: '#E5D9CB',
    accentOpacity: 0.65,
    stem: '#BFAFA0',
  },
  'light-beige': {
    shadow: '#D8CEBF',
    primary: '#EFE6DC',
    primaryOpacity: 0.92,
    secondary: '#FAF5EE',
    secondaryOpacity: 0.96,
    vein: '#C9BCAB',
    accent: '#E5D9CB',
    accentOpacity: 0.65,
    stem: '#BFAFA0',
  },
  teal: {
    shadow: '#1A4D53',
    primary: '#52987E',
    primaryOpacity: 0.88,
    secondary: '#7AB8A1',
    secondaryOpacity: 0.92,
    vein: '#2F6350',
    accent: '#479CA8',
    accentOpacity: 0.6,
    stem: '#245040',
  },
  gold: {
    shadow: '#C8A96E',
    primary: '#E5C583',
    primaryOpacity: 0.88,
    secondary: '#F5DC9C',
    secondaryOpacity: 0.95,
    vein: '#B89655',
    accent: '#D9B56F',
    accentOpacity: 0.6,
    stem: '#A6823F',
  },
  // Multi-color palette mixes Coral-Red, Sage Green, and Light Beige
  multi: {
    shadow: '#E85B51',
    primary: '#FA7268', // Red primary
    primaryOpacity: 0.88,
    secondary: '#CAD8D1', // Sage green secondary
    secondaryOpacity: 0.95,
    vein: '#7E9F90',
    accent: '#FAF5EE', // Light beige accent
    accentOpacity: 0.85,
    stem: '#D44339',
  },
};

const POSITION_CLASSES: Record<WindyLeafPosition, string> = {
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0 scale-x-[-1]',
  'top-left': 'top-0 left-0 scale-y-[-1]',
  'top-right': 'top-0 right-0 scale-[-1]',
};

const SIZE_CLASSES: Record<WindyLeafSize, string> = {
  sm: 'w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40',
  md: 'w-32 sm:w-44 lg:w-56 h-32 sm:h-44 lg:h-56',
  lg: 'w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72',
  xl: 'w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80',
};

export function WindyLeaf({
  className = '',
  color = 'green',
  position = 'bottom-left',
  size = 'md',
  opacity = 1,
}: WindyLeafProps) {
  const palette = COLOR_PALETTES[color] || COLOR_PALETTES.green;
  const positionClass = POSITION_CLASSES[position] || POSITION_CLASSES['bottom-left'];
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  return (
    <div
      className={`absolute ${positionClass} pointer-events-none z-10 select-none overflow-visible ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <style jsx>{`
        @keyframes windSway {
          0%, 100% {
            transform: rotate(0deg) skewX(0deg);
          }
          20% {
            transform: rotate(3.5deg) skewX(-1.5deg) translateY(-2px);
          }
          40% {
            transform: rotate(1deg) skewX(0.5deg) translateY(-1px);
          }
          60% {
            transform: rotate(4deg) skewX(-2deg) translateY(-3px);
          }
          80% {
            transform: rotate(-1deg) skewX(1deg) translateY(0px);
          }
        }

        @keyframes flutterSecondary {
          0%, 100% {
            transform: rotate(0deg);
          }
          30% {
            transform: rotate(-4deg) scale(1.02);
          }
          70% {
            transform: rotate(3deg) scale(0.99);
          }
        }

        .leaf-wind-group {
          transform-origin: 0% 100%;
          animation: windSway 7.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
          will-change: transform;
        }

        .leaf-flutter-secondary {
          transform-origin: 20% 90%;
          animation: flutterSecondary 5.5s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>

      <svg
        viewBox="0 0 170 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClass} overflow-visible leaf-wind-group`}
      >
        {/* Soft botanical shadow / depth blur */}
        <path
          d="M -15 175 C 18 100, 50 60, 128 32 C 104 88, 55 138, -15 175 Z"
          fill={palette.shadow}
          fillOpacity="0.35"
        />

        {/* Primary Large Eucalyptus Leaf */}
        <path
          d="M -10 170 C 20 95, 52 56, 125 30 C 102 86, 56 134, -10 170 Z"
          fill={palette.primary}
          fillOpacity={palette.primaryOpacity}
        />

        {/* Secondary Delicate Leaf (sways gently independently) */}
        <g className="leaf-flutter-secondary">
          <path
            d="M -6 168 C 12 110, 26 70, 62 38 C 52 82, 32 125, -6 168 Z"
            fill={palette.secondary}
            fillOpacity={palette.secondaryOpacity}
          />
          {/* Secondary leaf vein */}
          <path
            d="M -6 168 C 10 115, 24 82, 58 42"
            stroke={palette.vein}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.75"
          />
        </g>

        {/* Mid accent leaf tip */}
        <path
          d="M 28 122 C 48 94, 78 74, 110 58 C 88 88, 58 116, 28 122 Z"
          fill={palette.accent}
          fillOpacity={palette.accentOpacity}
        />

        {/* Primary Stem */}
        <path
          d="M -15 175 C 22 108, 58 66, 126 28"
          stroke={palette.stem}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
