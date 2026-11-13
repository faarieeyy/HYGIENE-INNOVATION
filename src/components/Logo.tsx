import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark' | 'white';
  showTagline?: boolean;
  className?: string;
}

export function Logo({ variant = 'dark', showTagline = false, className = '' }: LogoProps) {
  const isLight = variant === 'light' || variant === 'white';
  
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 select-none group ${className}`}
      aria-label="Hygiene Innovations Home"
    >
      {/* Serif "Hi" mark with coral leaf dot */}
      <div className="flex items-baseline font-serif text-[28px] sm:text-[32px] font-bold leading-none tracking-tight">
        <span className={isLight ? 'text-white' : 'text-[#013D38]'}>H</span>
        <span className="relative inline-block">
          <span className={isLight ? 'text-white' : 'text-[#013D38]'}>ı</span>
          {/* Coral leaf dot */}
          <svg
            className="absolute -top-1.5 -right-0.5 w-2.5 h-3 text-[#FA7268]"
            viewBox="0 0 10 12"
            fill="currentColor"
          >
            <path d="M2 11C2 7 5 3 10 0C8 5 6 9 2 11Z" />
          </svg>
        </span>
      </div>

      {/* Brand Name */}
      <div className="flex flex-col justify-center">
        <span
          className={`text-[15px] sm:text-[17px] font-serif font-bold tracking-[0.08em] leading-none ${
            isLight ? 'text-white' : 'text-[#013D38]'
          }`}
        >
          HYGIENE
        </span>
        <span
          className={`text-[8.5px] sm:text-[9.5px] font-sans font-semibold tracking-[0.24em] uppercase leading-none mt-1 ${
            isLight ? 'text-white/80' : 'text-[#4A6469]'
          }`}
        >
          INNOVATIONS
        </span>
      </div>
    </Link>
  );
}
