'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingCart, Check } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function FoodServicePage() {
  const { addToCart, openCart, openEnquiry } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  // 4 Featured food service products from blueprint
  const featuredProducts: Product[] = [
    PRODUCTS.find((p) => p.id === 'prod-5') || {
      id: 'prod-5',
      name: 'Wrapmaster 4500 Dispenser',
      category: 'Food Service',
      subtitle: 'The gold standard catering wrap dispenser',
      price: 185,
      originalPrice: 210,
      image: '/foodservice/prod_wrapmaster_4500.webp',
      color: 'White',
      size: '450 mm',
      badge: 'Kitchen Standard',
      rating: 5.0,
      reviewsCount: 215,
      description: 'Effortless one-press cut with a concealed safety blade.',
      features: ['Concealed blade system', 'Dishwasher-safe lid and base'],
      isFeatured: true,
      isFoodService: true,
      inStock: true,
    },
    PRODUCTS.find((p) => p.id === 'prod-6') || {
      id: 'prod-6',
      name: 'Cling Film, Foil & Parchment',
      category: 'Food Service',
      subtitle: 'High-cling food service grade preservation wrap',
      price: 65,
      originalPrice: 75,
      image: '/foodservice/prod_rolls.webp',
      color: 'Clear',
      size: '450 mm x 300 m',
      badge: 'HACCP Compliant',
      rating: 4.9,
      reviewsCount: 173,
      description: 'Food-grade preservation wrap that seals in freshness.',
      features: ['Moisture-locking membrane', 'Freezer-safe'],
      isFeatured: true,
      isFoodService: true,
      inStock: true,
    },
    PRODUCTS.find((p) => p.id === 'prod-7') || {
      id: 'prod-7',
      name: 'Disposable Chef Hats',
      category: 'Food Service',
      subtitle: 'Pleated non-woven chef caps',
      price: 42,
      originalPrice: 50,
      image: '/foodservice/prod_hats.webp',
      color: 'Black',
      size: 'Box of 50 pcs',
      badge: 'Food Safe',
      rating: 4.8,
      reviewsCount: 89,
      description: 'Maintain a pristine, professional appearance in the kitchen.',
      features: ['Breathable pleated crown', 'Adjustable adhesive'],
      isFeatured: true,
      isFoodService: true,
      inStock: true,
    },
    PRODUCTS.find((p) => p.id === 'prod-8') || {
      id: 'prod-8',
      name: 'Wrapmaster Refills',
      category: 'Food Service',
      subtitle: 'Genuine heavy-duty replacement rolls',
      price: 89,
      originalPrice: 105,
      image: '/foodservice/prod_refills.webp',
      color: 'Clear / Silver',
      size: 'Pack of 3 Rolls',
      badge: 'Genuine Refill',
      rating: 4.9,
      reviewsCount: 112,
      description: 'Genuine high-performance refill rolls for Wrapmaster.',
      features: ['Snug fit core pins', 'Anti-static formulation'],
      isFeatured: true,
      isFoodService: true,
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
    <div className="bg-[#FAF7F2] text-[#0A2624] min-h-screen">
      {/* ========================================================= */}
      {/* SECTION 1: HERO (Image 2 Blueprint)                       */}
      {/* ========================================================= */}
      <section className="relative bg-[#012823] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[480px] lg:min-h-[520px]">
            {/* Left Content Column */}
            <div className="lg:col-span-6 px-6 sm:px-10 lg:px-12 py-14 sm:py-16 lg:py-20 z-10">
              <h1 className="font-serif text-[42px] sm:text-[54px] lg:text-[64px] font-bold text-white tracking-tight leading-[1.08] mb-5">
                Ready for<br />
                every service.
              </h1>

              <p className="text-white/85 text-[16px] sm:text-[18px] font-normal leading-relaxed mb-8 max-w-[460px]">
                Food prep and presentation essentials for busy kitchens and hospitality teams.
              </p>

              <div className="pt-1">
                <a
                  href="#kitchen-essentials"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#FB826D] hover:bg-[#FA725B] text-[#111827] text-[15px] font-semibold transition-all duration-200 shadow-md active:scale-95 group"
                >
                  <span>Explore food service</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Chef Photo Column */}
            <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[440px] lg:h-[520px] overflow-hidden">
              <Image
                src="/foodservice/hero_chef_clean.webp"
                alt="Chef in commercial kitchen using Wrapmaster cling film dispenser"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Seamless blend gradient on left */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#012823] to-transparent pointer-events-none" />
              {/* Subtle bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#012823]/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: 3 USE CASES (Image 3 Blueprint)                */}
      {/* ========================================================= */}
      <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 1: Prepare. */}
            <div className="flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden shadow-xs">
                <Image
                  src="/foodservice/uc_prepare.webp"
                  alt="Prepare - Commercial kitchen chef slicing fresh vegetables"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h2 className="font-serif text-[28px] sm:text-[34px] font-bold text-[#0A2624] tracking-tight mt-6 mb-2">
                Prepare.
              </h2>
              <p className="text-[#3A4D4B] text-[15px] sm:text-[16px] leading-relaxed max-w-[360px]">
                Keep ingredients fresh and work efficiently from prep to plate.
              </p>
            </div>

            {/* Card 2: Wrap & store. */}
            <div className="flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden shadow-xs">
                <Image
                  src="/foodservice/uc_wrap_store.webp"
                  alt="Wrap and store - Wrapmaster dispenser sealing fresh salad pan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h2 className="font-serif text-[28px] sm:text-[34px] font-bold text-[#0A2624] tracking-tight mt-6 mb-2">
                Wrap &amp; store.
              </h2>
              <p className="text-[#3A4D4B] text-[15px] sm:text-[16px] leading-relaxed max-w-[360px]">
                Practical options for protecting prepared ingredients.
              </p>
            </div>

            {/* Card 3: Serve with confidence. */}
            <div className="flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden shadow-xs">
                <Image
                  src="/foodservice/uc_serve.webp"
                  alt="Serve with confidence - Chef garnishing gourmet dish with microgreens"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h2 className="font-serif text-[28px] sm:text-[34px] font-bold text-[#0A2624] tracking-tight mt-6 mb-2">
                Serve with confidence.
              </h2>
              <p className="text-[#3A4D4B] text-[15px] sm:text-[16px] leading-relaxed max-w-[360px]">
                Food-service essentials for a polished kitchen routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: WRAPMASTER SPOTLIGHT (Image 4 Blueprint)       */}
      {/* ========================================================= */}
      <section className="relative bg-[#012823] text-white overflow-hidden py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[54px] font-bold text-white tracking-tight leading-[1.08] mb-3">
                  A better way<br />
                  to wrap.
                </h2>
                <p className="text-white/80 text-[15.5px] sm:text-[16.5px] leading-relaxed max-w-[420px]">
                  A practical, professional wrap dispenser designed for busy kitchens.
                </p>
              </div>

              {/* 4 Feature Items with Blueprint Circular Icons */}
              <div className="space-y-4 pt-2">
                {/* Feature 1 */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 shrink-0">
                    <Image
                      src="/foodservice/icon_press.webp"
                      alt="One-press cut"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[16px] leading-snug">One-press cut</h3>
                    <p className="text-white/70 text-[13.5px]">For quick, easy use.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 shrink-0">
                    <Image
                      src="/foodservice/icon_blade.webp"
                      alt="Concealed blade"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[16px] leading-snug">Concealed blade</h3>
                    <p className="text-white/70 text-[13.5px]">For safer cutting.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 shrink-0">
                    <Image
                      src="/foodservice/icon_dishwasher.webp"
                      alt="Dishwasher-safe lid and base"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[16px] leading-snug">Dishwasher-safe lid and base</h3>
                    <p className="text-white/70 text-[13.5px]">for effortless cleaning.</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 shrink-0">
                    <Image
                      src="/foodservice/icon_portable.webp"
                      alt="Portable"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[16px] leading-snug">Portable</h3>
                    <p className="text-white/70 text-[13.5px]">for flexible use across the kitchen.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Product In-Action Image */}
            <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[420px] lg:h-[460px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/foodservice/wrapmaster_scene.webp"
                alt="Wrapmaster 4500 Dispenser wrapping fresh vegetables in hotel kitchen"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: CHEF HATS (Image 1 Blueprint)                  */}
      {/* ========================================================= */}
      <section className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 border-b border-[#EFE9DF]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-14">
            {/* Left Photo of White Chef Hats */}
            <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden rounded-xl shadow-xs">
              <Image
                src="/foodservice/chef_hats_photo.webp"
                alt="Pleated white disposable chef hats resting on stainless steel prep counter"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-serif text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-[#0A2624] tracking-tight leading-[1.12]">
                A polished finish<br />
                for every shift.
              </h2>
              <p className="text-[#3A4D4B] text-[16px] sm:text-[17px] leading-relaxed max-w-[500px]">
                Disposable chef hats help maintain a professional appearance and support a clean, hygienic kitchen environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: FEATURED PRODUCTS (Image 5 Blueprint)          */}
      {/* ========================================================= */}
      <section id="kitchen-essentials" className="bg-[#FAF7F2] py-16 sm:py-20 lg:py-24 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="text-[#FA7C6B] text-[11px] font-bold tracking-[0.25em] uppercase block mb-1">
                FEATURED PRODUCTS
              </span>
              <h2 className="font-serif text-[36px] sm:text-[44px] font-bold text-[#0A2624] tracking-tight">
                Kitchen essentials<span className="text-[#FA7C6B]">.</span>
              </h2>
            </div>

            <Link
              href="/shop?category=Food%20Service"
              className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#0A2624] hover:text-[#FA7C6B] transition-colors group"
            >
              <span>View all food service</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => {
              const isAdded = addedId === product.id;
              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between bg-white rounded-2xl border border-[#EAE3D4] p-5 shadow-2xs hover:shadow-md hover:border-[#D6CBBA] transition-all duration-200"
                >
                  <div>
                    {/* Product Image Container */}
                    <div className="relative aspect-[4/3] w-full bg-[#FAF8F5] rounded-xl overflow-hidden mb-5">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    {/* Product Title */}
                    <h3 className="font-serif text-[17px] sm:text-[18px] font-bold text-[#0A2624] leading-snug tracking-tight mb-1 line-clamp-1">
                      {product.name}
                    </h3>

                    {/* Price Line matching blueprint */}
                    <p className="text-[14px] text-[#0A2624]/75 font-normal mb-5">
                      AED —
                    </p>
                  </div>

                  {/* Add to Cart Full-width Dark Teal Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full py-3 px-4 rounded-xl bg-[#05322F] hover:bg-[#07423E] text-white text-[13.5px] font-semibold flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98] shadow-xs"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-[#FB826D]" />
                        <span>Added to cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add to cart</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: BUSINESS CTA (Page 19 Blueprint)               */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#0E3836] text-white">
        {/* Background Image: Inpainted clean banner with organic curve & chef scene */}
        <div className="absolute inset-0">
          <Image
            src="/foodservice/cta_banner_clean.webp"
            alt="Commercial kitchen chef using Wrapmaster dispenser"
            fill
            priority
            className="object-cover object-right"
            sizes="100vw"
          />
          {/* Subtle responsive gradient on smaller viewports */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E3836] via-[#0E3836]/90 to-transparent lg:hidden" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="max-w-xl space-y-5 sm:space-y-6">
            {/* Coral Eyebrow */}
            <span className="text-[#FA7C6B] text-[11px] sm:text-[12px] font-bold tracking-[0.22em] uppercase block">
              FOR PROFESSIONAL KITCHENS
            </span>

            {/* Serif Headline */}
            <h2 className="font-serif text-[42px] sm:text-[54px] lg:text-[62px] font-bold text-white tracking-tight leading-[1.08]">
              Built for<br />
              busy kitchens.
            </h2>

            {/* Subtitle */}
            <p className="text-white/85 text-[16px] sm:text-[17.5px] leading-relaxed max-w-[440px]">
              Reliable food-service essentials,<br className="hidden sm:inline" />
              ready for every shift.
            </p>

            {/* CTA Button: Cream Background with Dark Teal Text matching blueprint */}
            <div className="pt-2">
              <button
                onClick={() => openEnquiry('Food Service Commercial Outfitting')}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl bg-[#FAF7F2] hover:bg-white text-[#0A2624] text-[15px] font-bold transition-all duration-200 shadow-md active:scale-95 group"
              >
                <span>Talk to our team</span>
                <ArrowRight className="w-4 h-4 text-[#0A2624] transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Spaced Footer Attributes */}
            <div className="pt-4 sm:pt-6">
              <p className="text-white/60 text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] uppercase">
                SUPPLY &bull; QUALITY &bull; SUPPORT
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
