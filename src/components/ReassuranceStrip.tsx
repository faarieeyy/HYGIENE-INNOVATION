'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  Headphones, 
  RefreshCw, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Truck, 
  Palette, 
  Home 
} from 'lucide-react';
import { ThreeTiltCard } from './ThreeTiltCard';

interface ReassuranceStripProps {
  variant?: 'default' | 'cleaning';
}

export function ReassuranceStrip({ variant = 'default' }: ReassuranceStripProps) {
  if (variant === 'cleaning') {
    const cleaningPillars = [
      {
        icon: Home,
        title: 'Home & Workplace',
        desc: 'Engineered for everyday domestic use and heavy-duty institutional environments.',
      },
      {
        icon: RefreshCw,
        title: 'Reusable & Washable',
        desc: 'Durable split-fiber construction tested for up to 300 commercial laundry cycles.',
      },
      {
        icon: Layers,
        title: 'High-Density Microfiber',
        desc: 'Traps 99% of dust, grime, and grease without requiring harsh chemicals.',
      },
      {
        icon: Palette,
        title: 'Color-Coded Hygiene',
        desc: 'Strict 4-color hygiene standard to prevent cross-contamination across zones.',
      },
      {
        icon: Truck,
        title: 'Express UAE Dispatch',
        desc: 'Next-day delivery from our Dubai central fulfillment hub to all 7 Emirates.',
      },
    ];

    return (
      <section className="py-14 sm:py-18 bg-[#034A45] border-t border-[#023B37] text-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Eyebrow Header */}
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <span className="text-[#FA7268] text-[11px] font-bold tracking-[0.25em] uppercase block mb-1">
              COMMERCIAL CLEANING STANDARDS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why professionals choose our cleaning range<span className="text-[#FA7268]">.</span>
            </h2>
          </div>

          {/* 5 Well-Proportioned Columns with Compact, Refined 22px Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-7">
            {cleaningPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35, x: idx % 2 === 0 ? -18 : 18 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full"
                >
                  <ThreeTiltCard maxTilt={4} scale={1.015} className="h-full">
                    <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/[0.07] border border-white/15 backdrop-blur-xs shadow-xs hover:bg-white/[0.12] hover:border-white/25 transition-all duration-300 h-full justify-start group">
                      {/* Compact, Refined Icon Container (48px with 22px icon) */}
                      <div className="w-12 h-12 rounded-xl bg-white/10 text-[#FA7268] border border-white/20 flex items-center justify-center mb-4 group-hover:bg-[#FA7268] group-hover:text-white transition-all shadow-xs group-hover:scale-105">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>

                      <h3 className="font-serif text-[16px] sm:text-[17px] font-bold text-white tracking-tight leading-snug mb-1.5">
                        {item.title}
                      </h3>

                      <p className="text-xs text-white/75 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </ThreeTiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Default Variant - 5 Balanced Columns with Refined 22px Icons
  const defaultPillars = [
    {
      icon: Building2,
      title: 'Home & Commercial',
      desc: 'Versatile hygiene solutions engineered for high-traffic environments.',
    },
    {
      icon: ShieldCheck,
      title: 'Certified Standards',
      desc: 'HACCP-compliant, food-safe, and ISO quality-assured essentials.',
    },
    {
      icon: Truck,
      title: 'Express Dispatch',
      desc: 'Fast fulfillment across Dubai, Abu Dhabi, and Northern Emirates.',
    },
    {
      icon: RefreshCw,
      title: 'Commercial Supply',
      desc: 'Recurring institutional supply contracts with volume price tiers.',
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      desc: 'Personalized product consultation and dedicated account managers.',
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-[#FCFBF9] border-t border-[#EAE3D2]/60">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-7">
          {defaultPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35, x: idx % 2 === 0 ? -18 : 18 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <ThreeTiltCard maxTilt={4} scale={1.015} className="h-full">
                  <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-[#EAE3D6] shadow-2xs hover:shadow-md transition-all duration-300 h-full justify-start group">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] text-[#023E46] border border-[#EAE3D6] flex items-center justify-center mb-4 group-hover:bg-[#023E46] group-hover:text-white transition-all shadow-3xs group-hover:scale-105">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>

                    <h3 className="font-serif text-[16px] sm:text-[17px] font-bold text-[#052033] tracking-tight leading-snug mb-1.5 group-hover:text-[#0B5D68] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#5D7276] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </ThreeTiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
