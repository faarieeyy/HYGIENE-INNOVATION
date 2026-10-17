import React from 'react';

interface ReassuranceStripProps {
  variant?: 'default' | 'cleaning';
}

export function ReassuranceStrip({ variant = 'default' }: ReassuranceStripProps) {
  if (variant === 'cleaning') {
    return (
      <section className="py-16 sm:py-20 bg-[#045F59] border-t border-[#03514C]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {/* Column 1: For home & workplace */}
            <div className="flex flex-col items-center text-center px-6 py-8 md:py-4">
              {/* House Outline with Chimney & Coral Sprout */}
              <svg
                className="w-16 h-16 sm:w-[72px] sm:h-[72px] mb-5"
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden="true"
              >
                {/* Roof */}
                <path
                  d="M10 32 L31 14 L52 32"
                  stroke="#FFFFFF"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Chimney */}
                <path
                  d="M40 21 V15.5 H45 V25"
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Left wall and bottom */}
                <path
                  d="M15 31 V52 H45"
                  stroke="#FFFFFF"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Right wall stopping before sprout */}
                <path
                  d="M47 31 V39"
                  stroke="#FFFFFF"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Doorway */}
                <path
                  d="M26 52 V39 H34 V52"
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Coral Plant Sprout */}
                <path d="M49 52 V44" stroke="#EF6F69" strokeWidth="2.4" strokeLinecap="round" />
                <path
                  d="M49 44 C42 41 41 33 48 32 C50 37 49 43 49 44 Z"
                  stroke="#EF6F69"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#EF6F69"
                  fillOpacity="0.5"
                />
                <path
                  d="M49 44 C55 41 58 35 55 31 C51 34 50 43 49 44 Z"
                  stroke="#EF6F69"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#EF6F69"
                  fillOpacity="0.5"
                />
              </svg>
              <h3 className="font-serif text-[24px] sm:text-[26px] font-bold text-white tracking-tight leading-snug">
                For home &amp; workplace
              </h3>
              <p className="text-[15.5px] text-white/85 mt-2.5 leading-relaxed font-normal max-w-[290px]">
                Practical solutions for everyday and professional spaces.
              </p>
            </div>

            {/* Column 2: Reusable cloth options */}
            <div className="flex flex-col items-center text-center px-6 py-8 md:py-4">
              {/* Circular Recycle Arrows with Coral Sprout in Center */}
              <svg
                className="w-16 h-16 sm:w-[72px] sm:h-[72px] mb-5"
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden="true"
              >
                {/* Top arrow arc */}
                <path
                  d="M19 33 C19 22 27 16 38 16 C45 16 51 20 53 26"
                  stroke="#FFFFFF"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <polyline
                  points="47 26 53 26 53 20"
                  stroke="#FFFFFF"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Bottom arrow arc */}
                <path
                  d="M45 31 C45 42 37 48 26 48 C19 48 13 44 11 38"
                  stroke="#FFFFFF"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <polyline
                  points="17 38 11 38 11 44"
                  stroke="#FFFFFF"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Coral Sprout in center */}
                <path d="M32 41 V33" stroke="#EF6F69" strokeWidth="2.4" strokeLinecap="round" />
                <path
                  d="M32 34 C26 31 25 24 31 23 C33 27 32 33 32 34 Z"
                  stroke="#EF6F69"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#EF6F69"
                  fillOpacity="0.5"
                />
                <path
                  d="M32 34 C38 31 40 25 38 23 C34 25 33 33 32 34 Z"
                  stroke="#EF6F69"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#EF6F69"
                  fillOpacity="0.5"
                />
              </svg>
              <h3 className="font-serif text-[24px] sm:text-[26px] font-bold text-white tracking-tight leading-snug">
                Reusable cloth options
              </h3>
              <p className="text-[15.5px] text-white/85 mt-2.5 leading-relaxed font-normal max-w-[290px]">
                Durable choices for repeated use across multiple cleaning tasks.
              </p>
            </div>

            {/* Column 3: Professional wipe formats */}
            <div className="flex flex-col items-center text-center px-6 py-8 md:py-4">
              {/* Stacked 3 Isometric Layers / Wipe Sheets */}
              <svg
                className="w-16 h-16 sm:w-[72px] sm:h-[72px] mb-5 text-white"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Top layer */}
                <path d="M32 13 L52 23 L32 33 L12 23 Z" />
                {/* Middle layer */}
                <path d="M12 31.5 L32 41.5 L52 31.5" />
                {/* Bottom layer */}
                <path d="M12 40 L32 50 L52 40" />
              </svg>
              <h3 className="font-serif text-[24px] sm:text-[26px] font-bold text-white tracking-tight leading-snug">
                Professional wipe formats
              </h3>
              <p className="text-[15.5px] text-white/85 mt-2.5 leading-relaxed font-normal max-w-[290px]">
                Convenient sizes and formats to keep you stocked.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24 bg-[#FCFBF9] border-t border-[#EAE3D2]/50">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Column 1: Made for home & business */}
          <div className="relative flex flex-col items-center text-center px-6 py-8 md:py-6">
            {/* Building Icon */}
            <svg
              className="w-[72px] h-[72px] text-[#023E46] mb-6 sm:mb-7"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {/* Base line */}
              <line x1="7" y1="56" x2="57" y2="56" strokeWidth="2.6" />
              {/* Tall building on left */}
              <rect x="13" y="14" width="23" height="42" rx="1.5" strokeWidth="2.5" />
              {/* 4 rows of 2 windows */}
              <rect x="18.5" y="21" width="4" height="4.5" rx="0.8" fill="#023E46" stroke="none" />
              <rect x="26.5" y="21" width="4" height="4.5" rx="0.8" fill="#023E46" stroke="none" />
              <rect x="18.5" y="29" width="4" height="4.5" rx="0.8" fill="#023E46" stroke="none" />
              <rect x="26.5" y="29" width="4" height="4.5" rx="0.8" fill="#023E46" stroke="none" />
              <rect x="18.5" y="37" width="4" height="4.5" rx="0.8" fill="#023E46" stroke="none" />
              <rect x="26.5" y="37" width="4" height="4.5" rx="0.8" fill="#023E46" stroke="none" />
              <rect x="18.5" y="45" width="4" height="4.5" rx="0.8" fill="#023E46" stroke="none" />
              <rect x="26.5" y="45" width="4" height="4.5" rx="0.8" fill="#023E46" stroke="none" />
              {/* Short building on right */}
              <rect x="36" y="27" width="15" height="29" rx="1.5" strokeWidth="2.5" />
              {/* 2 rows of 1 window */}
              <rect x="41.5" y="35" width="4" height="4.5" rx="0.8" fill="#023E46" stroke="none" />
              <rect x="41.5" y="43" width="4" height="4.5" rx="0.8" fill="#023E46" stroke="none" />
            </svg>

            <h3 className="font-serif text-[24px] sm:text-[27px] font-bold text-[#052033] tracking-tight leading-snug">
              Made for home &amp; business
            </h3>
            <p className="font-serif text-[17px] text-[#052033] mt-2.5 leading-relaxed font-normal">
              Reliable solutions for every space.
            </p>

            {/* Inset Divider Right */}
            <div className="hidden md:block absolute right-0 top-4 bottom-4 w-[1px] bg-[#EAE3D2]" />
          </div>

          {/* Column 2: Reliable essentials */}
          <div className="relative flex flex-col items-center text-center px-6 py-8 md:py-6">
            {/* Shield Icon */}
            <svg
              className="w-[72px] h-[72px] text-[#023E46] mb-6 sm:mb-7"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path
                d="M32 9 C38 12.5 46 15.5 52 17 C52 23 52 29 52 34 C52 45 43.5 52.5 32 56 C20.5 52.5 12 45 12 34 C12 29 12 23 12 17 C18 15.5 26 12.5 32 9 Z"
                strokeWidth="2.5"
              />
              <path d="M23 33 L29.5 39.5 L43 26" strokeWidth="2.8" />
            </svg>

            <h3 className="font-serif text-[24px] sm:text-[27px] font-bold text-[#052033] tracking-tight leading-snug">
              Reliable essentials
            </h3>
            <p className="font-serif text-[17px] text-[#052033] mt-2.5 leading-relaxed font-normal">
              Quality you can count on.
            </p>

            {/* Inset Divider Right */}
            <div className="hidden md:block absolute right-0 top-4 bottom-4 w-[1px] bg-[#EAE3D2]" />
          </div>

          {/* Column 3: Here to help */}
          <div className="flex flex-col items-center text-center px-6 py-8 md:py-6">
            {/* Headset Icon */}
            <svg
              className="w-[72px] h-[72px] text-[#023E46] mb-6 sm:mb-7"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {/* Headband */}
              <path d="M16 33 C16 19.5 48 19.5 48 33" strokeWidth="2.6" />
              {/* Left earpad */}
              <rect x="12" y="27" width="8" height="16" rx="4" strokeWidth="2.4" />
              {/* Right earpad */}
              <rect x="44" y="27" width="8" height="16" rx="4" strokeWidth="2.4" />
              {/* Mic boom */}
              <path d="M48 42 C48 51.5 39 54 36.5 54" strokeWidth="2.4" />
              {/* Hollow mic tip */}
              <circle cx="33.5" cy="54" r="3" strokeWidth="2.4" fill="none" />
            </svg>

            <h3 className="font-serif text-[24px] sm:text-[27px] font-bold text-[#052033] tracking-tight leading-snug">
              Here to help
            </h3>
            <p className="font-serif text-[17px] text-[#052033] mt-2.5 leading-relaxed font-normal">
              Friendly support, always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
