'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, Check, ShieldCheck, Sparkles, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ThreeTiltCard } from '@/components/ThreeTiltCard';
import { FloatingLeaves } from '@/components/FloatingLeaves';
import { WindyLeaf } from '@/components/WindyLeaf';

export default function FoodServicePage() {
  const { addToCart, openCart, openEnquiry, setQuickViewProduct } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  // 4 Featured products matching the Food Service blueprint
  const featuredProducts: Product[] = [
    {
      id: 'fs-wrap-dispenser',
      name: 'Wrap Dispenser',
      category: 'Food Service',
      subtitle: 'Professional catering wrap dispenser',
      price: 185,
      image: '/images/fs_prod_wrap_dispenser.webp',
      color: 'White',
      size: '450 mm',
      rating: 5.0,
      reviewsCount: 120,
      features: ['One-press cut system', 'Concealed safety blade', 'Dishwasher safe base'],
      description: 'Effortless one-press cut with concealed safety blade. The gold standard in commercial catering.',
      inStock: true,
    },
    {
      id: 'fs-cling-foil-parchment',
      name: 'Cling Film, Foil & Baking Parchment',
      category: 'Food Service',
      subtitle: 'Commercial catering preservation rolls',
      price: 65,
      image: '/images/fs_prod_rolls.webp',
      color: 'Clear / Silver',
      size: '450 mm x 300 m',
      rating: 4.9,
      reviewsCount: 95,
      features: ['Moisture-locking barrier', 'Freezer & heat safe', 'HACCP certified'],
      description: 'Food-grade preservation wrap that seals in freshness across high-temperature kitchens.',
      inStock: true,
    },
    {
      id: 'fs-disposable-chef-hats',
      name: 'Disposable Chef Hats',
      category: 'Food Service',
      subtitle: 'Pleated white chef headwear',
      price: 42,
      image: '/images/fs_prod_chef_hats.webp',
      color: 'White',
      size: 'Pack of 50',
      rating: 4.8,
      reviewsCount: 64,
      features: ['Breathable pleated crown', 'Adjustable headband', 'Sweat-wicking liner'],
      description: 'Maintain a pristine, professional appearance and strict hygiene standards in the kitchen.',
      inStock: true,
    },
    {
      id: 'fs-wrap-dispenser-refills',
      name: 'Wrap Dispenser Refills',
      category: 'Food Service',
      subtitle: 'Heavy-duty catering refill rolls',
      price: 89,
      image: '/images/fs_prod_refills.webp',
      color: 'Clear',
      size: 'Pack of 3 Rolls',
      rating: 4.9,
      reviewsCount: 88,
      features: ['Snug fit core pins', 'Anti-static formulation', 'Tangle-free dispensing'],
      description: 'Genuine high-performance refill rolls engineered specifically for Wrapmaster units.',
      inStock: true,
    },
  ];

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
    openCart();
  };

  return (
    <div className="bg-[#FAF7F2] text-[#0A2624] min-h-screen overflow-x-hidden">
      {/* ========================================================= */}
      {/* ========================================================= */}
      {/* SECTION 2: HERO - Full-Bleed Exact Reference Background   */}
      {/* ========================================================= */}
      <section className="relative w-full bg-[#120404] text-white overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] xl:min-h-[580px] flex items-center">
        {/* Full-width dark professional kitchen background image served unoptimized */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/food_service_hero_exact_bg.jpg"
            alt="Professional chef preparing culinary presentations with commercial wrap dispenser"
            fill
            priority
            unoptimized
            className="object-cover object-right lg:object-right w-full h-full"
          />
          {/* Dark gradient overlay on the left for crisp text contrast while keeping right-side imagery vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-transparent w-full md:w-[65%] lg:w-[52%] pointer-events-none" />
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />

          {/* Subtle bottom edge blend with reduced height and opacity */}
          <div className="absolute bottom-0 inset-x-0 h-10 sm:h-14 lg:h-16 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/25 to-transparent pointer-events-none" />
        </div>

        {/* Ambient floating leaves with gentle windy drift (Red, Green, Light Beige) */}
        <FloatingLeaves colors={['red', 'green', 'beige']} preset="hero" opacity={0.82} />

        {/* Red / Coral botanical accent at bottom-left */}
        <WindyLeaf color="coral" position="bottom-left" size="sm" opacity={0.65} />

        {/* Content aligned to the left with smooth entrance motion */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 xl:col-span-6 max-w-xl"
            >
              {/* Category Eyebrow */}
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FA7268] animate-pulse" />
                <p className="text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.24em] text-[#FA7268] uppercase">
                  FOOD SERVICE &amp; CATERING ESSENTIALS
                </p>
              </div>

              <h1 className="font-serif text-[42px] sm:text-[54px] lg:text-[64px] font-bold text-white tracking-tight leading-[1.08] mb-4">
                Ready for<br />
                every service.
              </h1>

              <p className="text-white/90 text-[15.5px] sm:text-[17.5px] font-normal leading-relaxed mb-7 max-w-[490px]">
                Food prep and presentation essentials for busy kitchens and hospitality teams across the UAE.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-7">
                <a
                  href="#featured-products"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FA7268] hover:bg-[#F25C51] text-white text-[14.5px] font-semibold transition-all duration-200 shadow-lg active:scale-95 group"
                >
                  <span>Explore food service</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <button
                  onClick={() => openEnquiry('Food Service Commercial Outfitting')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 text-[14px] font-semibold transition-all backdrop-blur-xs cursor-pointer"
                >
                  <span>Commercial Quote</span>
                </button>
              </div>

              {/* Quality Checklist */}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-[13px] text-white/80 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#FA7268]" /> Official Wrapmaster® Partner
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#FA7268]" /> Food-Grade Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#FA7268]" /> HACCP &amp; EFST Compliant
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: THREE BENEFIT CARDS (3D Perspective Elevation) */}
      {/* ========================================================= */}
      <section className="bg-[#FAF7F2] py-14 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Prepare. (Left Perspective Tilt) */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <ThreeTiltCard maxTilt={5} scale={1.015} className="h-full">
                <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white/40 p-2 sm:p-3 border border-[#EBE5DB] shadow-xs hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#EDE7DC]">
                    <Image
                      src="/images/fs_card_prepare.webp"
                      alt="Prepare - Kitchen chef slicing fresh ingredients"
                      fill
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-3 pt-4">
                    <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-[#0A2624] tracking-tight mb-2">
                      Prepare.
                    </h2>
                    <p className="text-[#3A4D4B] text-[15px] sm:text-[16px] leading-relaxed">
                      Keep ingredients fresh and work efficiently from prep to plate.
                    </p>
                  </div>
                </div>
              </ThreeTiltCard>
            </motion.div>

            {/* Card 2: Wrap & store. (Center Spring Lift) */}
            <motion.div
              initial={{ opacity: 0, y: 45, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <ThreeTiltCard maxTilt={5} scale={1.015} className="h-full">
                <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white/40 p-2 sm:p-3 border border-[#EBE5DB] shadow-xs hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#EDE7DC]">
                    <Image
                      src="/images/fs_card_wrap_store.webp"
                      alt="Wrap and store - Wrap dispenser on food container"
                      fill
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-3 pt-4">
                    <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-[#0A2624] tracking-tight mb-2">
                      Wrap &amp; store.
                    </h2>
                    <p className="text-[#3A4D4B] text-[15px] sm:text-[16px] leading-relaxed">
                      Reliable solutions to protect food quality and reduce waste.
                    </p>
                  </div>
                </div>
              </ThreeTiltCard>
            </motion.div>

            {/* Card 3: Serve with confidence. (Right Perspective Tilt) */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <ThreeTiltCard maxTilt={5} scale={1.015} className="h-full">
                <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white/40 p-2 sm:p-3 border border-[#EBE5DB] shadow-xs hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#EDE7DC]">
                    <Image
                      src="/images/fs_card_serve.webp"
                      alt="Serve with confidence - Plating gourmet food presentation"
                      fill
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-3 pt-4">
                    <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-[#0A2624] tracking-tight mb-2">
                      Serve with confidence.
                    </h2>
                    <p className="text-[#3A4D4B] text-[15px] sm:text-[16px] leading-relaxed">
                      From kitchen to customer, present food at its best.
                    </p>
                  </div>
                </div>
              </ThreeTiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WRAP DISPENSER FEATURE                         */}
      {/* ========================================================= */}
      <section className="relative w-full bg-[#031A18] text-white overflow-hidden py-16 sm:py-20 lg:py-24">
        {/* Wide kitchen image background showing wrap dispenser and roll on counter */}
        <div className="absolute inset-0">
          <Image
            src="/images/food_service_wrap_banner.webp"
            alt="Professional wrap dispenser and roll on commercial kitchen counter"
            fill
            unoptimized
            className="object-cover object-right lg:object-center"
          />
          {/* Darkened left side for readable text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#031A18] via-[#031A18]/90 to-transparent w-full md:w-[65%] lg:w-[50%]" />
          <div className="absolute inset-0 bg-black/15" />

          {/* Subtle top edge blend */}
          <div className="absolute top-0 inset-x-0 h-8 sm:h-12 bg-gradient-to-b from-[#FAF7F2]/60 via-[#FAF7F2]/20 to-transparent pointer-events-none" />

          {/* Subtle bottom edge blend */}
          <div className="absolute bottom-0 inset-x-0 h-8 sm:h-12 bg-gradient-to-t from-[#FAF7F2]/60 via-[#FAF7F2]/20 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-xl space-y-6">
            <div>
              <h2 className="font-serif text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-white tracking-tight leading-[1.08] mb-3">
                A better way<br />
                to wrap.
              </h2>
              <p className="text-white/80 text-[15.5px] sm:text-[16.5px] leading-relaxed max-w-[430px]">
                A practical, professional wrap dispenser designed for busy kitchens.
              </p>
            </div>

            {/* 4 Vertically stacked feature rows with small gold line icons */}
            <div className="space-y-4 pt-2">
              {/* Row 1: One-press cut */}
              <div className="flex items-center gap-4 group">
                <div className="relative w-11 h-11 shrink-0 transition-transform group-hover:scale-110">
                  <Image
                    src="/images/fs_icon_one_press.webp"
                    alt="One-press cut"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[15.5px] leading-snug">One-press cut</h3>
                  <p className="text-white/70 text-[13.5px]">for quick, easy use.</p>
                </div>
              </div>

              {/* Row 2: Concealed blade */}
              <div className="flex items-center gap-4 group">
                <div className="relative w-11 h-11 shrink-0 transition-transform group-hover:scale-110">
                  <Image
                    src="/images/fs_icon_concealed_blade.webp"
                    alt="Concealed blade"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[15.5px] leading-snug">Concealed blade</h3>
                  <p className="text-white/70 text-[13.5px]">for safer handling.</p>
                </div>
              </div>

              {/* Row 3: Dishwasher-safe lid and base */}
              <div className="flex items-center gap-4 group">
                <div className="relative w-11 h-11 shrink-0 transition-transform group-hover:scale-110">
                  <Image
                    src="/images/fs_icon_dishwasher_safe.webp"
                    alt="Dishwasher-safe lid and base"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[15.5px] leading-snug">Dishwasher-safe lid and base</h3>
                  <p className="text-white/70 text-[13.5px]">for effortless cleaning.</p>
                </div>
              </div>

              {/* Row 4: Portable */}
              <div className="flex items-center gap-4 group">
                <div className="relative w-11 h-11 shrink-0 transition-transform group-hover:scale-110">
                  <Image
                    src="/images/fs_icon_portable.webp"
                    alt="Portable"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[15.5px] leading-snug">Portable</h3>
                  <p className="text-white/70 text-[13.5px]">for flexible use across the kitchen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: CHEF HATS FEATURE                              */}
      {/* ========================================================= */}
      <section className="bg-[#FAF7F2] py-14 sm:py-18 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-14">
            {/* Left Photo of Disposable Chef Hats with 3D Depth */}
            <div className="lg:col-span-6">
              <ThreeTiltCard maxTilt={5} scale={1.015}>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-sm border border-[#EAE3D6]">
                  <Image
                    src="/images/fs_chef_hats_photo.webp"
                    alt="Disposable chef hats resting on prep counter"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ThreeTiltCard>
            </div>

            {/* Right: Warm Off-white Text Panel */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[48px] font-bold text-[#0A2624] tracking-tight leading-[1.12]">
                A polished finish<br />
                for every shift.
              </h2>
              <p className="text-[#3A4D4B] text-[15.5px] sm:text-[16.5px] leading-relaxed max-w-[500px]">
                Disposable chef hats help maintain a professional appearance and support a clean, hygienic kitchen environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: FEATURED PRODUCTS                              */}
      {/* ========================================================= */}
      <section id="featured-products" className="bg-[#FAF7F2] py-16 sm:py-20 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <h2 className="font-serif text-[32px] sm:text-[40px] font-bold text-[#0A2624] tracking-tight">
              Featured products<span className="text-[#FA7268]">.</span>
            </h2>

            <Link
              href="/shop?category=Food%20Service"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#FA7268] hover:text-[#F25C51] transition-colors group"
            >
              <span>View all food service</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4 Product Cards in One Row with 3D Tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => {
              const isAdded = addedId === product.id;
              return (
                <ThreeTiltCard key={product.id} maxTilt={6} scale={1.02} className="h-full">
                  <div className="bg-white rounded-2xl border border-[#ECE7DC] p-4 flex flex-col justify-between h-full shadow-2xs hover:shadow-xl transition-all duration-300 group">
                    <div>
                      {/* Product Image */}
                      <div
                        onClick={() => setQuickViewProduct(product)}
                        className="relative aspect-[4/3] w-full bg-[#F6F4EE] rounded-xl overflow-hidden mb-4 cursor-pointer border border-[#EFEAE0]"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-3 group-hover:scale-106 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        {/* Quick View overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <span className="px-3 py-1 rounded-full bg-white/95 text-[#052C33] text-[10.5px] font-bold shadow-md backdrop-blur-xs flex items-center gap-1">
                            <Eye className="w-3 h-3 text-[#FA7268]" />
                            <span>Quick View</span>
                          </span>
                        </div>
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => setQuickViewProduct(product)}
                        className="font-serif text-[16px] sm:text-[17px] font-bold text-[#0A2624] leading-snug tracking-tight mb-2 cursor-pointer hover:text-[#FA7268] transition-colors"
                      >
                        {product.name}
                      </h3>
                    </div>

                    {/* Price & Small Coral Outlined Cart Button */}
                    <div className="flex items-center justify-between pt-3 mt-auto">
                      <span className="text-[14.5px] text-[#0A2624] font-bold">
                        AED {product.price}
                      </span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                        className={`w-9 h-9 rounded-[6px] border border-[#FA7268] flex items-center justify-center transition-all duration-150 active:scale-95 cursor-pointer ${
                          isAdded
                            ? 'bg-[#FA7268] text-white shadow-xs'
                            : 'text-[#FA7268] hover:bg-[#FA7268] hover:text-white'
                        }`}
                      >
                        {isAdded ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <ShoppingCart className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </ThreeTiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: BUSINESS CALLOUT                               */}
      {/* ========================================================= */}
      <section className="bg-[#052C33] text-white py-14 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left: Heading & Text */}
            <div className="max-w-md space-y-2.5 text-center lg:text-left">
              <h2 className="font-serif text-[32px] sm:text-[38px] font-bold text-white tracking-tight leading-tight">
                Built for busy kitchens.
              </h2>
              <p className="text-white/80 text-[14.5px] sm:text-[15.5px] leading-relaxed">
                Looking to equip your team or place a larger order? We’re here to help with tailored solutions for your business.
              </p>
            </div>

            {/* Center: 3 Gold Icon-and-Label Rows */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-3.5">
              {/* Business enquiries */}
              <div
                onClick={() => openEnquiry('Food Service Business Enquiries')}
                className="flex items-center gap-3 text-[#D6B272] hover:text-[#E8CD96] transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
                </svg>
                <span className="text-[14.5px] font-medium text-white/90">Business enquiries</span>
              </div>

              {/* Bulk orders */}
              <div
                onClick={() => openEnquiry('Food Service Bulk Orders')}
                className="flex items-center gap-3 text-[#D6B272] hover:text-[#E8CD96] transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-8 0h6m4 0h2m-6 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0m-10 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M13 6h4l4 5v6h-4" />
                </svg>
                <span className="text-[14.5px] font-medium text-white/90">Bulk orders</span>
              </div>

              {/* Product support */}
              <div
                onClick={() => openEnquiry('Food Service Product Support')}
                className="flex items-center gap-3 text-[#D6B272] hover:text-[#E8CD96] transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
                <span className="text-[14.5px] font-medium text-white/90">Product support</span>
              </div>
            </div>

            {/* Right: Coral Button */}
            <div>
              <button
                onClick={() => openEnquiry('Food Service Team Contact')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[6px] bg-[#FA7268] hover:bg-[#F25C51] text-white text-[14.5px] font-semibold transition-all duration-150 shadow-md active:scale-95 group cursor-pointer"
              >
                <span>Contact our team</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
