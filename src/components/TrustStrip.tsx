'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Building2, Award, Headphones, Sparkles } from 'lucide-react';
import { ThreeTiltCard } from './ThreeTiltCard';

export function TrustStrip() {
  const trustItems = [
    {
      step: '01',
      badge: 'Dual Certified',
      icon: Building2,
      title: 'Made for Home & Business',
      desc: 'Tested for heavy commercial & everyday domestic environments.',
    },
    {
      step: '02',
      badge: 'HACCP & ISO',
      icon: ShieldCheck,
      title: 'Certified Quality Standards',
      desc: 'HACCP-compliant, food-safe, and high-durability essentials.',
    },
    {
      step: '03',
      badge: '24-48h Delivery',
      icon: Truck,
      title: 'Express UAE & GCC Dispatch',
      desc: 'Prompt delivery from our central Dubai logistics facility.',
    },
    {
      step: '04',
      badge: 'Official Partner',
      icon: Award,
      title: 'Trusted Global Brands',
      desc: 'Official partner for Wrapmaster and international hygiene leaders.',
    },
    {
      step: '05',
      badge: 'Dedicated Team',
      icon: Headphones,
      title: 'Dedicated Client Support',
      desc: 'Personalized product advice and tailored B2B supply terms.',
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-[#FAF7F2] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(240,230,215,0.65),rgba(250,247,242,1))] border-t border-[#EAE3D6] overflow-hidden">
      {/* Ambient background refraction orbs that shine through the semi-transparent glassy cards */}
      <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-80 h-80 bg-[#023E46]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-80 h-80 bg-[#FA7268]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[620px] h-72 bg-[#EADCC8]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header with Bulged Glass Pill Badge */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.04)] text-[#FA7268] text-[11px] font-bold uppercase tracking-[0.22em] mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA7268] animate-pulse" />
            <span>THE HYGIENE INNOVATIONS PROMISE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#052C33] tracking-tight leading-[1.15]">
            Reliable supply for every standard<span className="text-[#FA7268]">.</span>
          </h2>

          <p className="text-[14px] sm:text-[15.5px] text-[#5D7276] font-normal mt-3 leading-relaxed max-w-lg mx-auto">
            Commercial-grade rigor and verified durability engineered for homes, hospitality, and workplaces across the UAE.
          </p>
        </div>

        {/* 5 Semi-Transparent Bulged Glassy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 45, scale: 0.86 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.75,
                  delay: idx * 0.1,
                  ease: [0.34, 1.45, 0.64, 1],
                }}
                className="h-full"
              >
                <ThreeTiltCard maxTilt={6} scale={1.025} className="h-full">
                  <div className="relative flex flex-col justify-between p-6 sm:p-7 rounded-[32px] bg-gradient-to-b from-white/75 via-white/55 to-white/40 backdrop-blur-xl border-[1.5px] border-white/90 shadow-[0_16px_36px_-8px_rgba(2,62,70,0.08),0_4px_12px_rgba(0,0,0,0.03),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-3px_6px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_50px_-10px_rgba(2,62,70,0.18),inset_0_3px_6px_rgba(255,255,255,1)] hover:border-white hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden group">
                  {/* Bulged Glass Sheen Reflection (Top Curvature) */}
                  <div className="absolute inset-x-0 top-0 h-[45%] rounded-t-[30px] bg-gradient-to-b from-white/70 via-white/20 to-transparent pointer-events-none" />

                  {/* Corner ambient glow accent on hover */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-gradient-to-br from-[#FA7268]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top Row: Index number & Frosted Glass Badge */}
                  <div className="relative z-10 flex items-center justify-between gap-2 mb-5">
                    <span className="text-[11px] font-mono font-bold text-[#8E8070] tracking-wider">
                      {item.step}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.03)] text-[10px] font-bold text-[#023E46] tracking-wide uppercase group-hover:bg-[#023E46] group-hover:text-white transition-all duration-200">
                      <Sparkles className="w-2.5 h-2.5 text-[#FA7268] group-hover:text-[#FA7268]" />
                      {item.badge}
                    </span>
                  </div>

                  {/* Center: 3D Bulged Glass Icon Container */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#023E46] via-[#034F5C] to-[#012E34] text-white flex items-center justify-center mb-4.5 shadow-[0_8px_20px_rgba(2,62,70,0.25),inset_0_2px_3px_rgba(255,255,255,0.4)] border border-white/20 group-hover:scale-110 group-hover:shadow-[0_12px_28px_rgba(2,62,70,0.36)] transition-all duration-300">
                      {/* Inner specular gloss spot */}
                      <div className="absolute top-1 left-2 w-4 h-2 rounded-full bg-white/35 blur-[0.5px]" />
                      <Icon className="w-6 h-6 stroke-[1.9]" />
                    </div>

                    <h3 className="font-serif text-[17px] sm:text-[18px] font-bold text-[#052C33] tracking-tight leading-snug mb-2 group-hover:text-[#023E46] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-[12.5px] sm:text-[13px] text-[#55696E] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom: Modern expanding coral accent bar */}
                  <div className="relative z-10 pt-5 mt-auto flex flex-col items-center">
                    <div className="w-8 h-[2.5px] rounded-full bg-[#E4DCD0] group-hover:w-16 group-hover:bg-[#FA7268] transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.05)]" />
                  </div>
                </div>
              </ThreeTiltCard>
            </motion.div>
          );
        })}
        </div>
      </div>

      {/* Smooth bottom transition blend melting softly into the footer */}
      <div className="absolute bottom-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-t from-[#01595B]/15 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
