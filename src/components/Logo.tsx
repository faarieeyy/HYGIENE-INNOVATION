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
    <Link href="/" className={`inline-flex flex-col select-none group ${className}`} aria-label="Hygiene Innovations Home">
      <span className={`text-[22px] sm:text-[25px] font-black tracking-[0.12em] leading-none transition-colors duration-200 ${
        isLight ? 'text-white group-hover:text-[#FA7268]' : 'text-[#052C33] group-hover:text-[#083E48]'
      }`}>
        HYGIENE
      </span>
      <div className={`flex justify-between w-full text-[8px] sm:text-[9.5px] font-bold mt-1 transition-colors duration-200 select-none ${
        isLight ? 'text-white/80' : 'text-[#052C33]/85'
      }`}>
        <span>I</span>
        <span>N</span>
        <span>N</span>
        <span>O</span>
        <span>V</span>
        <span>A</span>
        <span>T</span>
        <span>I</span>
        <span>O</span>
        <span>N</span>
        <span>S</span>
      </div>
    </Link>
  );
}
