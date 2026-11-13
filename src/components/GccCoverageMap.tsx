'use client';

import React from 'react';

export function GccCoverageMap({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden border border-[#DCE4DF] bg-[#EFF2EF] shadow-xs select-none ${className}`}
    >
      <svg
        viewBox="0 0 698 315"
        className="w-full h-auto block"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Hygiene Innovations UAE & GCC Coverage Map"
      >
        {/* Water / Arabian Gulf Background */}
        <rect width="698" height="315" fill="#EFF2EF" />

        {/* Northern Coastline curve across the Gulf */}
        <path
          d="M 420 0 C 460 22 520 32 580 26 C 630 20 670 8 698 0 L 698 0 Z"
          fill="#E2EBE5"
        />

        {/* Landmass: Saudi Arabia & Kuwait */}
        <path
          d="M 0 0 
             L 360 0 
             C 370 24 374 42 368 62 
             C 345 76 305 84 278 102 
             C 238 120 208 128 194 146 
             C 188 154 182 178 200 192 
             L 200 210 
             C 194 224 212 236 232 244 
             L 232 315 
             L 0 315 
             Z"
          fill="#D0DBD5"
        />

        {/* Qatar Peninsula */}
        <path
          d="M 200 185 
             C 194 168 190 134 204 120 
             C 212 112 222 112 228 120 
             C 236 138 232 168 226 185 
             Z"
          fill="#D0DBD5"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />

        {/* Bahrain Island */}
        <ellipse
          cx="184"
          cy="124"
          rx="6"
          ry="11"
          fill="#D0DBD5"
          stroke="#FFFFFF"
          strokeWidth="1.2"
        />
        {/* Bahrain location dot */}
        <circle cx="184" cy="122" r="2.6" fill="#3D555A" />

        {/* Qatar location dot */}
        <circle cx="214" cy="148" r="2.6" fill="#3D555A" />

        {/* Oman (Eastern Landmass) */}
        <path
          d="M 365 315 
             L 365 222 
             C 378 210 384 192 384 172 
             C 396 166 410 152 410 132 
             C 402 114 396 98 388 94 
             C 384 92 380 106 378 118 
             C 370 136 358 148 344 158 
             L 348 190 
             C 352 208 360 220 365 254 
             L 365 315 
             L 698 315 
             L 698 105 
             C 650 108 565 130 505 158 
             C 450 184 405 252 365 315 
             Z"
          fill="#D0DBD5"
        />

        {/* Musandam Exclave (Oman tip at Strait of Hormuz) */}
        <path
          d="M 388 94 
             C 392 78 396 72 398 82 
             C 400 90 396 98 388 94 
             Z"
          fill="#D0DBD5"
          stroke="#FFFFFF"
          strokeWidth="1"
        />

        {/* UAE Region (Highlighted Sage-Teal with Crisp White Boundary) */}
        <path
          d="M 232 244 
             C 246 230 260 210 282 196 
             C 308 184 335 170 370 144 
             C 380 136 385 122 388 94 
             C 396 98 402 114 410 132 
             C 410 152 396 166 384 172 
             C 384 192 378 210 365 222 
             L 365 254 
             C 335 252 295 248 254 244 
             Z"
          fill="#718E86"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* White Border between Saudi Arabia and Oman to the South */}
        <line
          x1="365"
          y1="254"
          x2="365"
          y2="315"
          stroke="#FFFFFF"
          strokeWidth="2"
        />

        {/* White Border between Saudi Arabia and UAE at Western edge */}
        <path
          d="M 232 244 C 224 260 226 284 232 315"
          stroke="#FFFFFF"
          strokeWidth="2"
        />

        {/* LABELS - Clean, Sharp, Perfectly Legible Typography */}

        {/* KUWAIT */}
        <text
          x="365"
          y="54"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="12.5"
          fontWeight="700"
          fill="#3D555A"
          letterSpacing="0.08em"
        >
          KUWAIT
        </text>

        {/* BAHRAIN */}
        <text
          x="200"
          y="94"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="12"
          fontWeight="700"
          fill="#3D555A"
          letterSpacing="0.08em"
        >
          BAHRAIN
        </text>

        {/* QATAR */}
        <text
          x="232"
          y="152"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="12"
          fontWeight="700"
          fill="#3D555A"
          letterSpacing="0.08em"
        >
          QATAR
        </text>

        {/* SAUDI ARABIA */}
        <text
          x="115"
          y="238"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="12.5"
          fontWeight="700"
          fill="#3D555A"
          letterSpacing="0.08em"
          textAnchor="middle"
        >
          SAUDI ARABIA
        </text>

        {/* UAE (Bold White Uppercase in center of highlighted territory) */}
        <text
          x="312"
          y="212"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="24"
          fontWeight="800"
          fill="#FFFFFF"
          letterSpacing="0.12em"
          textAnchor="middle"
        >
          UAE
        </text>

        {/* OMAN */}
        <text
          x="480"
          y="256"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="12.5"
          fontWeight="700"
          fill="#3D555A"
          letterSpacing="0.08em"
        >
          OMAN
        </text>
      </svg>
    </div>
  );
}
