import React from 'react';

export function TrustStrip() {
  return (
    <section className="py-20 sm:py-24 bg-[#FCFBF9]">
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
