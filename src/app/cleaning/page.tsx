'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingCart, Sparkles, Layers, ShieldCheck, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { ReassuranceStrip } from '@/components/ReassuranceStrip';

const FEATURED_CLEANING_PRODUCTS: Product[] = [
  {
    id: 'prod-clean-blue',
    name: 'Microfiber Cleaning Cloths (Blue)',
    category: 'Cloths & Wipes',
    subtitle: 'Premium edgeless microfiber pack for streak-free cleaning',
    price: 24,
    originalPrice: 30,
    image: '/images/clean_prod_blue.webp',
    color: 'Blue',
    size: 'Pack of 10 (40x40 cm)',
    badge: 'Streak Free',
    rating: 4.9,
    reviewsCount: 142,
    description: 'High-density commercial split-fiber cloths engineered for dust trapping and streak-free buffing across glass, countertops, and appliances.',
    features: [
      '80/20 polyester-polyamide split fiber technology',
      'Lint-free and streak-free finish on all hard surfaces',
      'High absorption capacity wet or dry',
      'Washable and reusable up to 300 cycles',
    ],
    isFeatured: true,
    inStock: true,
  },
  {
    id: 'prod-clean-aqua',
    name: 'Multi-Purpose Service Wipes (Aqua)',
    category: 'Cloths & Wipes',
    subtitle: 'Heavy-duty absorbent food-safe wipes for catering & hospitality',
    price: 38,
    originalPrice: 45,
    image: '/images/clean_prod_aqua.webp',
    color: 'Aqua',
    size: 'Roll of 150 Sheets',
    badge: 'Food Safe',
    rating: 4.8,
    reviewsCount: 98,
    description: 'Durable patterned nonwoven wipes formulated for fast wipe-downs and spill cleanup in catering areas and workstations.',
    features: [
      'Food-contact safe antibacterial nonwoven substrate',
      'Heavy-duty tensile strength wet or dry',
      'Fast drying to minimize microbial growth',
      'Perforated tear lines for rapid single-sheet dispensing',
    ],
    isFeatured: true,
    inStock: true,
  },
  {
    id: 'prod-clean-yellow',
    name: 'Absorbent Cleaning Wipes (Yellow)',
    category: 'Cloths & Wipes',
    subtitle: 'Super-absorbent commercial wipes for heavy spills',
    price: 32,
    originalPrice: 38,
    image: '/images/clean_prod_yellow.webp',
    color: 'Yellow',
    size: 'Pack of 20 Sheets',
    badge: 'High Absorbency',
    rating: 4.9,
    reviewsCount: 76,
    description: 'Highly absorbent waffle-texture cleaning wipes crafted for soaking up liquid messes, polishing chrome, and heavy-duty general cleaning.',
    features: [
      'Engineered waffle cell structure holds 10x its weight in liquids',
      'Durable multi-ply construction resists tearing',
      'Ideal for heavy commercial kitchen and workshop spills',
      'Bleach and disinfectant chemical-resistant',
    ],
    isFeatured: true,
    inStock: true,
  },
];

export default function CleaningPage() {
  const { addToCart, openCart } = useCart();
  const [addedId, setAddedId] = React.useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
    openCart();
  };

  return (
    <div className="bg-[#FCFBF9] text-[#052033] min-h-screen">
      {/* ========================================================= */}
      {/* SECTION 1: HERO (Dark Pine Teal Backdrop)                */}
      {/* ========================================================= */}
      <section className="relative bg-[#013D38] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[460px] lg:min-h-[500px]">
            {/* Left Content Column */}
            <div className="lg:col-span-5 px-6 sm:px-10 lg:px-12 py-14 sm:py-16 lg:py-20 z-10">
              {/* Category Subhead with Coral Dash */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[3px] bg-[#FA7268] inline-block" />
                <span className="text-white/80 font-bold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase">
                  Cleaning Essentials
                </span>
              </div>

              {/* Main Headline with Coral Dot */}
              <h1 className="font-serif text-[38px] sm:text-[46px] lg:text-[54px] font-bold text-white tracking-tight leading-[1.12] mb-5">
                Make every clean count<span className="text-[#FA7268]">.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-white/85 text-[16px] sm:text-[17px] font-normal leading-relaxed mb-8 max-w-[440px]">
                Practical cloths, wipes and cleaning essentials for everyday and professional spaces.
              </p>

              {/* CTA Button */}
              <div>
                <Link
                  href="/shop?category=Cloths%20%26%20Wipes"
                  className="inline-flex items-center gap-2.5 bg-[#FB826D] hover:bg-[#FA7268] text-[#012B26] font-semibold text-[15px] px-7 py-3.5 rounded-[3px] shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <span>Shop cleaning essentials</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Lifestyle Image */}
            <div className="lg:col-span-7 relative h-[320px] sm:h-[400px] lg:h-[500px] w-full">
              <Image
                src="/images/clean_hero_main.webp"
                alt="Practical cleaning cloths and wipes for everyday spaces"
                fill
                priority
                className="object-cover object-center lg:object-left"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              {/* Soft Gradient Mask for seamless blending on large screens */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#013D38] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: CLEAN BY TASK (3 Grid Cards)                   */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FCFBF9]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[3px] bg-[#FA7268] inline-block" />
                <span className="text-[#052C33] font-bold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase">
                  Clean by Task
                </span>
              </div>
              <h2 className="font-serif text-[32px] sm:text-[40px] font-bold text-[#052033] tracking-tight leading-tight">
                Find your cleaning essential<span className="text-[#FA7268]">.</span>
              </h2>
            </div>
            <p className="text-[#4A5D5A] text-[15.5px] max-w-[360px] leading-relaxed">
              From everyday tidying to bigger clean-ups, explore essentials for every task.
            </p>
          </div>

          {/* 3 Task Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 1: Wipe & polish */}
            <Link
              href="/shop?category=Cloths%20%26%20Wipes"
              className="group flex flex-col focus:outline-none"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-[#EAE3D2]/40 mb-4 shadow-sm">
                <Image
                  src="/images/clean_task_wipe.webp"
                  alt="Wipe and polish surfaces streak-free"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex items-center justify-between mt-1">
                <h3 className="font-serif text-[22px] sm:text-[23px] font-bold text-[#052033] group-hover:text-[#013D38] transition-colors">
                  Wipe &amp; polish
                </h3>
                <ArrowRight className="w-5 h-5 text-[#013D38] transition-transform duration-200 group-hover:translate-x-1.5" />
              </div>
              <p className="text-[#4A5D5A] text-[14.5px] mt-2 leading-relaxed font-normal">
                Get a streak-free finish on surfaces around your space.
              </p>
            </Link>

            {/* Card 2: Tackle spills */}
            <Link
              href="/shop?category=Cloths%20%26%20Wipes"
              className="group flex flex-col focus:outline-none"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-[#EAE3D2]/40 mb-4 shadow-sm">
                <Image
                  src="/images/clean_task_spill.webp"
                  alt="Tackle spills quickly and easily"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex items-center justify-between mt-1">
                <h3 className="font-serif text-[22px] sm:text-[23px] font-bold text-[#052033] group-hover:text-[#013D38] transition-colors">
                  Tackle spills
                </h3>
                <ArrowRight className="w-5 h-5 text-[#013D38] transition-transform duration-200 group-hover:translate-x-1.5" />
              </div>
              <p className="text-[#4A5D5A] text-[14.5px] mt-2 leading-relaxed font-normal">
                Absorb and clean up messes quickly and easily.
              </p>
            </Link>

            {/* Card 3: Keep it stocked */}
            <Link
              href="/shop"
              className="group flex flex-col focus:outline-none"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-[#EAE3D2]/40 mb-4 shadow-sm">
                <Image
                  src="/images/clean_task_stock.webp"
                  alt="Keep spaces stocked with everyday cleaning cloths"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex items-center justify-between mt-1">
                <h3 className="font-serif text-[22px] sm:text-[23px] font-bold text-[#052033] group-hover:text-[#013D38] transition-colors">
                  Keep it stocked
                </h3>
                <ArrowRight className="w-5 h-5 text-[#013D38] transition-transform duration-200 group-hover:translate-x-1.5" />
              </div>
              <p className="text-[#4A5D5A] text-[14.5px] mt-2 leading-relaxed font-normal">
                Everyday formats for home and professional spaces.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: FEATURE BANNER (Tools for the jobs that matter)*/}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FCFBF9] border-t border-[#EAE3D2]/60">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Copy & Value Pillars */}
            <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6">
              {/* Category Subhead with Coral Dash */}
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[3px] bg-[#FA7268] inline-block" />
                <span className="text-[#052C33] font-bold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase">
                  Built for Everyday Cleaning
                </span>
              </div>

              {/* Headline with Coral Dot */}
              <h2 className="font-serif text-[34px] sm:text-[42px] lg:text-[48px] font-bold text-[#052033] tracking-tight leading-[1.14] mb-5">
                Tools for the jobs<br className="hidden sm:inline" /> that matter<span className="text-[#FA7268]">.</span>
              </h2>

              {/* Subtitle */}
              <p className="text-[#4A5D5A] text-[16px] sm:text-[16.5px] leading-relaxed mb-9 max-w-[480px]">
                Dependable cloths and wipes designed to handle real-world cleaning — at home, in the workplace and beyond.
              </p>

              {/* 3 Circular Icon Pillars */}
              <div className="space-y-6 w-full max-w-[500px]">
                {/* Pillar 1: Effective cleaning performance */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#E0EBE6] flex items-center justify-center shrink-0 text-[#013D38]">
                    <Sparkles className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#052033] leading-snug">
                      Effective cleaning performance
                    </h3>
                    <p className="text-[#4A5D5A] text-[14.5px] mt-1 leading-relaxed">
                      Tackles dust, dirt and everyday messes.
                    </p>
                  </div>
                </div>

                {/* Pillar 2: Versatile for multiple surfaces */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#E0EBE6] flex items-center justify-center shrink-0 text-[#013D38]">
                    <Layers className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#052033] leading-snug">
                      Versatile for multiple surfaces
                    </h3>
                    <p className="text-[#4A5D5A] text-[14.5px] mt-1 leading-relaxed">
                      Use across kitchens, workspaces and more.
                    </p>
                  </div>
                </div>

                {/* Pillar 3: Practical and reliable */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#E0EBE6] flex items-center justify-center shrink-0 text-[#013D38]">
                    <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#052033] leading-snug">
                      Practical and reliable
                    </h3>
                    <p className="text-[#4A5D5A] text-[14.5px] mt-1 leading-relaxed">
                      Everyday essentials you can count on.
                    </p>
                  </div>
                </div>
              </div>

              {/* Link CTA */}
              <div className="mt-9">
                <Link
                  href="/shop?category=Cloths%20%26%20Wipes"
                  className="inline-flex items-center gap-2 text-[#013D38] font-semibold text-[15.5px] underline underline-offset-4 decoration-[#013D38]/50 hover:decoration-[#013D38] transition-colors group"
                >
                  <span>Explore the cleaning range</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Stacked Cloths Showcase Photo */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-[4px] overflow-hidden shadow-sm bg-[#EAE3D2]/40">
                <Image
                  src="/images/clean_tools_stack.webp"
                  alt="High quality stacked cleaning cloths and wipes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: FEATURED CLEANING ESSENTIALS (Everyday favourites) */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FCFBF9] border-t border-[#EAE3D2]/60">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-14 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[3px] bg-[#FA7268] inline-block" />
                <span className="text-[#052C33] font-bold text-[12px] sm:text-[13px] tracking-[0.2em] uppercase">
                  Featured Cleaning Essentials
                </span>
              </div>
              <h2 className="font-serif text-[32px] sm:text-[40px] font-bold text-[#052033] tracking-tight leading-tight">
                Everyday favourites<span className="text-[#FA7268]">.</span>
              </h2>
            </div>
            <div>
              <Link
                href="/shop?category=Cloths%20%26%20Wipes"
                className="inline-flex items-center gap-2 text-[#013D38] font-semibold text-[15px] underline underline-offset-4 decoration-[#013D38]/50 hover:decoration-[#013D38] transition-colors group"
              >
                <span>View all cleaning products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* 3 Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {FEATURED_CLEANING_PRODUCTS.map((product) => {
              const isAdded = addedId === product.id;
              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-[#F2EDE2]/60 mb-4 shadow-sm border border-[#EAE3D2]/40">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#052033] leading-snug group-hover:text-[#013D38] transition-colors min-h-[48px]">
                    {product.name}
                  </h3>

                  {/* Price & Action Row */}
                  <div className="flex items-center justify-between mt-3 pt-2">
                    <span className="text-[15px] sm:text-[16px] font-medium text-[#052033]">
                      AED —
                    </span>

                    {/* Shopping Cart Button */}
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      aria-label={`Add ${product.name} to cart`}
                      className={`w-10 h-10 rounded-[3px] border border-[#023E46] flex items-center justify-center transition-all duration-200 ${
                        isAdded
                          ? 'bg-[#023E46] text-white'
                          : 'text-[#023E46] hover:bg-[#023E46] hover:text-white'
                      }`}
                    >
                      {isAdded ? (
                        <Check className="w-5 h-5 text-white" />
                      ) : (
                        <ShoppingCart className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: REASSURANCE STRIP (Forest Green Blueprint)     */}
      {/* ========================================================= */}
      <ReassuranceStrip variant="cleaning" />
    </div>
  );
}
