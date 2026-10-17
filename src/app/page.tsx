'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';
import { TrustStrip } from '@/components/TrustStrip';

export default function HomePage() {
  // 3 Featured products from design Page 5
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="flex flex-col bg-[#FCFBF9]">
      {/* HERO SECTION - Exact 1:1 Match to User Reference Blueprint */}
      <section className="relative overflow-hidden bg-[#F7F6F2]">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between min-h-[560px] lg:min-h-[620px]">
          {/* Left Column Content - Aligned with the Navbar container */}
          <div className="w-full lg:w-[48%] xl:w-[46%] z-10 pt-10 pb-8 sm:py-14 lg:py-16 space-y-6 px-6 sm:px-10 lg:pl-[max(3rem,calc((100vw-1400px)/2+3rem))] lg:pr-4">
            
            {/* 1. Eyebrow: CLEANER SPACES • BRIGHTER TOMORROWS */}
            <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-[#345359] uppercase">
              CLEANER SPACES &bull; BRIGHTER TOMORROWS
            </p>

            {/* 2. Coral Accent Line directly under Eyebrow */}
            <div className="w-10 h-[2.5px] bg-[#FA7268] rounded-full -mt-2" />

            {/* 3. Bold Sans Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black tracking-tight text-[#042B32] leading-[1.08] pt-1">
              A cleaner standard<br />
              for every space.
            </h1>

            {/* 4. Subtitle */}
            <p className="text-base sm:text-[17px] text-[#3E5F66] leading-relaxed max-w-lg font-normal">
              Thoughtful cleaning, hygiene and food-service<br className="hidden sm:inline" />
              essentials for home and business.
            </p>

            {/* 5. Shop the range CTA Pill Button */}
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#003D47] hover:bg-[#034F5C] text-white text-[14.5px] font-bold shadow-sm transition-all duration-200 group active:scale-95"
              >
                <span>Shop the range</span>
                <span className="text-lg transition-transform group-hover:translate-x-1 leading-none">&rarr;</span>
              </Link>
            </div>

            {/* 6. 3 Trust Pillars Row matching reference image without top border */}
            <div className="pt-8 flex flex-wrap items-center gap-7 sm:gap-9">
              {/* Quality Products */}
              <div className="flex items-center gap-3">
                <svg 
                  className="w-6 h-6 text-[#052C33] flex-shrink-0" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M4 20c1.5-4 4-7.5 8-11.5 3-3 6.5-4.5 9-4.5 0 2.5-1.5 6-4.5 9-4 4-7.5 6.5-11.5 8l-1-1z" />
                  <path d="M4 20l7.5-7.5" />
                </svg>
                <div className="text-[11px] font-bold text-[#052C33] uppercase leading-tight tracking-wider">
                  QUALITY<br />PRODUCTS
                </div>
              </div>

              {/* Trusted Brands */}
              <div className="flex items-center gap-3">
                <svg 
                  className="w-6 h-6 text-[#052C33] flex-shrink-0" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <div className="text-[11px] font-bold text-[#052C33] uppercase leading-tight tracking-wider">
                  TRUSTED<br />BRANDS
                </div>
              </div>

              {/* For Homes and Businesses */}
              <div className="flex items-center gap-3">
                <svg 
                  className="w-7 h-6 text-[#052C33] flex-shrink-0" 
                  viewBox="0 0 28 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  {/* Center person */}
                  <circle cx="14" cy="7" r="3.5" />
                  <path d="M8 20a6 6 0 0 1 12 0" />
                  {/* Left person */}
                  <circle cx="6" cy="9" r="2.5" />
                  <path d="M1 20a5 5 0 0 1 6-4" />
                  {/* Right person */}
                  <circle cx="22" cy="9" r="2.5" />
                  <path d="M21 16a5 5 0 0 1 6 4" />
                </svg>
                <div className="text-[11px] font-bold text-[#052C33] uppercase leading-tight tracking-wider">
                  FOR HOMES<br />AND BUSINESSES
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Product Photography Showcase - Bleeds to the right edge */}
          <div className="w-full lg:w-[52%] xl:w-[54%] self-end relative flex justify-end pr-0 mr-0">
            <div className="relative w-full aspect-[892/813]">
              {/* Smooth Left Gradient Blend */}
              <div className="absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-[#F7F6F2] to-transparent z-10 pointer-events-none" />

              <Image
                src="/images/hero-products-display.webp"
                alt="Hygiene Innovations Essentials Lifestyle Display"
                fill
                priority
                className="object-contain object-right-bottom"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY CARDS SECTION - Page 4 Blueprint */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION - Page 5 Blueprint */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Header - Exact match to Page 5 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <h2 className="font-serif text-3xl sm:text-[38px] font-bold text-[#052C33] tracking-tight">
              Featured products
            </h2>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-[15px] font-bold text-[#015664] hover:text-[#052C33] transition-colors group"
            >
              <span>View all products</span>
              <span className="text-lg transition-transform group-hover:translate-x-1 leading-none">&rarr;</span>
            </Link>
          </div>

          {/* 3 Product Cards Grid - Exact 1:1 Match to Blueprint */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP SECTION - Page 6 */}
      <TrustStrip />
    </div>
  );
}
