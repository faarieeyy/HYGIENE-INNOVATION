'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Truck, Award, Building2 } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';
import { TrustStrip } from '@/components/TrustStrip';
import { ThreeTiltCard } from '@/components/ThreeTiltCard';
import { FloatingLeaves } from '@/components/FloatingLeaves';

export default function HomePage() {
  // 3 Featured products from design Page 5
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="flex flex-col bg-[#FCFBF9] overflow-x-hidden">
      {/* ========================================================= */}
      {/* 1. HERO SECTION - Full-Bleed Exact Reference Background   */}
      {/* ========================================================= */}
      <section className="relative w-full overflow-hidden bg-[#ECE4D8] min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] xl:min-h-[760px] flex items-center">
        {/* Full-bleed background image with zero quality reduction (exact raw asset served unoptimized) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/home_hero_exact_bg.jpg"
            alt="Hygiene Innovations Commercial Environment"
            fill
            priority
            unoptimized
            className="object-cover object-right lg:object-right-bottom w-full h-full"
          />
          {/* Mobile/tablet gradient overlay for crisp text readability while preserving full desktop clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ECE4D8]/95 via-[#ECE4D8]/80 to-transparent lg:hidden pointer-events-none" />

          {/* Subtle bottom blend melting into the next section (white) */}
          <div className="absolute bottom-0 inset-x-0 h-10 sm:h-14 lg:h-16 bg-gradient-to-t from-white via-white/25 to-transparent pointer-events-none" />
        </div>

        {/* Ambient floating leaves with gentle windy drift (Green, Light Beige) */}
        <FloatingLeaves colors={['red', 'green', 'beige']} preset="hero" opacity={0.88} />

        {/* Hero Content Container aligned to the left over the open stucco wall */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-12 py-14 sm:py-18 lg:py-20">
          <div className="w-full lg:w-[50%] xl:w-[46%] space-y-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.14, delayChildren: 0.1 },
                },
              }}
              className="space-y-5"
            >
              {/* 1. Eyebrow: CLEANER SPACES • BRIGHTER TOMORROWS */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#FA7268] animate-pulse" />
                <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-[#345359] uppercase">
                  CLEANER SPACES &bull; BRIGHTER TOMORROWS
                </p>
              </motion.div>

              {/* 2. Coral Accent Line directly under Eyebrow */}
              <motion.div
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1, transition: { duration: 0.5 } },
                }}
                className="w-10 h-[2.5px] bg-[#FA7268] rounded-full origin-left -mt-2"
              />

              {/* 3. Bold Sans Headline */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black tracking-tight text-[#042B32] leading-[1.08] pt-1"
              >
                A cleaner standard<br />
                for every space.
              </motion.h1>

              {/* 4. Subtitle */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="text-base sm:text-[17px] text-[#3E5F66] leading-relaxed max-w-lg font-normal"
              >
                Thoughtful cleaning, hygiene and food-service<br className="hidden sm:inline" />
                essentials for home and business.
              </motion.p>

              {/* 5. Shop the range CTA Pill Button */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#003D47] hover:bg-[#034F5C] text-white text-[14.5px] font-bold shadow-md hover:shadow-lg transition-all duration-200 group active:scale-95"
                >
                  <span>Shop the range</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/food-service"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-[#003D47] border border-[#DDD6C8] text-[14.5px] font-bold transition-all shadow-xs"
                >
                  <span>Food Service</span>
                </Link>
              </motion.div>

              {/* 6. 4 Compact, Well-Proportioned Trust Pillars */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {/* 1. Quality Certified */}
                <div className="flex items-center gap-2.5 group">
                  <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#052C33] shadow-3xs border border-[#EAE3D6] group-hover:border-[#052C33] group-hover:bg-[#052C33] group-hover:text-white transition-all shrink-0">
                    <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div className="text-[10.5px] font-bold text-[#052C33] uppercase leading-tight tracking-wider">
                    QUALITY<br />CERTIFIED
                  </div>
                </div>

                {/* 2. Trusted Brands */}
                <div className="flex items-center gap-2.5 group">
                  <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#052C33] shadow-3xs border border-[#EAE3D6] group-hover:border-[#052C33] group-hover:bg-[#052C33] group-hover:text-white transition-all shrink-0">
                    <Award className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div className="text-[10.5px] font-bold text-[#052C33] uppercase leading-tight tracking-wider">
                    TRUSTED<br />BRANDS
                  </div>
                </div>

                {/* 3. UAE & GCC Fleet */}
                <div className="flex items-center gap-2.5 group">
                  <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#052C33] shadow-3xs border border-[#EAE3D6] group-hover:border-[#052C33] group-hover:bg-[#052C33] group-hover:text-white transition-all shrink-0">
                    <Truck className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div className="text-[10.5px] font-bold text-[#052C33] uppercase leading-tight tracking-wider">
                    UAE &amp; GCC<br />FLEET
                  </div>
                </div>

                {/* 4. For Homes & Business */}
                <div className="flex items-center gap-2.5 group">
                  <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#052C33] shadow-3xs border border-[#EAE3D6] group-hover:border-[#052C33] group-hover:bg-[#052C33] group-hover:text-white transition-all shrink-0">
                    <Building2 className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div className="text-[10.5px] font-bold text-[#052C33] uppercase leading-tight tracking-wider">
                    HOMES &amp;<br />BUSINESS
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CATEGORY CARDS SECTION - 3D Perspective Grid           */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="text-[#FA7268] text-[11px] font-bold tracking-[0.25em] uppercase block mb-1">
                COMMERCIAL PORTFOLIO
              </span>
              <h2 className="font-serif text-3xl sm:text-[38px] font-bold text-[#052C33] tracking-tight">
                Explore by category<span className="text-[#FA7268]">.</span>
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-[14.5px] font-bold text-[#015664] hover:text-[#FA7268] transition-colors group"
            >
              <span>View full range</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4 Cards Grid with 3D Tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {CATEGORIES.map((cat, idx) => (
              <CategoryCard key={cat.id} category={cat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FEATURED PRODUCTS SECTION - Page 5 Blueprint           */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5] border-y border-[#EDE7DC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="text-[#FA7268] text-[11px] font-bold tracking-[0.25em] uppercase block mb-1">
                TOP PICKS
              </span>
              <h2 className="font-serif text-3xl sm:text-[38px] font-bold text-[#052C33] tracking-tight">
                Featured products<span className="text-[#FA7268]">.</span>
              </h2>
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-[15px] font-bold text-[#015664] hover:text-[#FA7268] transition-colors group"
            >
              <span>View all products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 3 Product Cards Grid with 3D Perspective Tilt */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9">
            {featuredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} variant="featured" index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. TRUST STRIP SECTION - Elevated Micro-Interactions      */}
      {/* ========================================================= */}
      <TrustStrip />
    </div>
  );
}
