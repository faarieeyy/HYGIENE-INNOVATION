'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Search, X, Sparkles, Filter, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { TrustStrip } from '@/components/TrustStrip';
import { ThreeTiltCard } from '@/components/ThreeTiltCard';
import { FloatingLeaves } from '@/components/FloatingLeaves';
import { WindyLeaf } from '@/components/WindyLeaf';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All products';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name'>('featured');

  // Sync category with URL parameters
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const categories = [
    'All products',
    'Cloths & Wipes',
    'Kitchen Essentials',
    'Bins',
    'Dispensers & Refills',
    'Food Service',
  ];

  const colors = ['All', 'Blue', 'Aqua', 'Black', 'White', 'Clear'];
  const sizes = ['All', 'Pack of 10', 'Roll of 150 Sheets', '30 Litre', '300 mm', '450 mm'];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category match
      if (selectedCategory !== 'All products') {
        if (selectedCategory === 'Food Service') {
          if (!item.isFoodService && item.category !== 'Food Service') return false;
        } else if (item.category !== selectedCategory) {
          return false;
        }
      }

      // Color match
      if (selectedColor !== 'All' && !item.color.toLowerCase().includes(selectedColor.toLowerCase())) {
        return false;
      }

      // Size match
      if (selectedSize !== 'All' && !item.size.toLowerCase().includes(selectedSize.toLowerCase())) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesSub = item.subtitle?.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        if (!matchesName && !matchesSub && !matchesDesc) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, selectedColor, selectedSize, searchQuery, sortBy]);

  const hasActiveFilters = selectedCategory !== 'All products' || selectedColor !== 'All' || selectedSize !== 'All' || searchQuery !== '';

  const resetFilters = () => {
    setSelectedCategory('All products');
    setSelectedColor('All');
    setSelectedSize('All');
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFBF9]">
      {/* ========================================================= */}
      {/* 1. HERO SECTION - Full-Bleed Exact Reference Background   */}
      {/* ========================================================= */}
      <section className="relative w-full overflow-hidden bg-[#E1CFBF] min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] xl:min-h-[760px] flex items-center">
        {/* Full-bleed background image with zero quality reduction (exact raw asset served unoptimized) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/shop_hero_exact_bg.jpg"
            alt="Hygiene Innovations Commercial Essentials"
            fill
            priority
            unoptimized
            className="object-cover object-right lg:object-right-bottom w-full h-full"
          />
          {/* Mobile/tablet gradient overlay for crisp text readability while preserving full desktop clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#E1CFBF]/95 via-[#E1CFBF]/80 to-transparent lg:hidden pointer-events-none" />

          {/* Subtle bottom blend melting into product catalog (#FCFBF9) */}
          <div className="absolute bottom-0 inset-x-0 h-10 sm:h-14 lg:h-16 bg-gradient-to-t from-[#FCFBF9] via-[#FCFBF9]/25 to-transparent pointer-events-none" />
        </div>

        {/* Ambient floating leaves with gentle windy drift (Red, Green, Light Beige) */}
        <FloatingLeaves colors={['red', 'green', 'beige']} preset="hero" opacity={0.85} />

        {/* Gentle Light Beige botanical branch at bottom left */}
        <WindyLeaf color="light-beige" position="bottom-left" size="md" opacity={0.75} />

        {/* Hero Content aligned to the left over the stucco wall */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="w-full lg:w-[50%] xl:w-[46%] space-y-5">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                },
              }}
              className="space-y-4"
            >
              {/* Breadcrumb & Live Dispatch Pill */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-center gap-3 text-[13px] text-[#345359] font-medium flex-wrap"
              >
                <div className="flex items-center gap-2">
                  <Link href="/" className="hover:text-[#003D47] transition-colors">
                    Home
                  </Link>
                  <span className="text-[#899A9D]">&bull;</span>
                  <span className="text-[#052033] font-semibold">Shop All</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  UAE Central Warehouse Active
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="font-serif text-[42px] sm:text-[54px] lg:text-[64px] font-bold tracking-tight text-[#052033] leading-[1.06] pt-1"
              >
                Shop all<br />
                <span className="text-[#02565C]">essentials</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="text-[16px] sm:text-[17px] text-[#3E5F66] leading-relaxed max-w-md font-normal"
              >
                Thoughtful cleaning, hygiene and food-service products for home, workplace and hospitality.
              </motion.p>

              {/* Quick Jump Category Chips directly in Hero */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="pt-2"
              >
                <p className="text-[11px] font-bold text-[#55696E] uppercase tracking-wider mb-2">
                  Popular Categories:
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.slice(1).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        document.getElementById('products-catalog')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`text-[12px] font-semibold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-[#003D47] text-white border-[#003D47] shadow-xs'
                          : 'bg-white/90 hover:bg-white text-[#052C33] border-[#DDD5C7] hover:border-[#003D47] backdrop-blur-xs'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* CTA & Trust Bullet */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#products-catalog"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#003D47] hover:bg-[#034F5C] text-white text-[14.5px] font-bold shadow-md hover:shadow-lg transition-all duration-200 group active:scale-95"
                >
                  <span>Browse catalog</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <span className="text-xs text-[#55696E] font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FA7268]" />
                  Volume pricing available for commercial teams
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. ALL PRODUCTS CATALOG - Filters & 3D Cards Grid         */}
      {/* ========================================================= */}
      <section id="products-catalog" className="py-14 sm:py-20 bg-[#FCFBF9] scroll-mt-14">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Header & Controls Bar */}
          <div className="space-y-6 pb-8 border-b border-[#ECE6DB]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="font-serif text-[34px] sm:text-[42px] font-bold text-[#052033] tracking-tight leading-tight">
                  All products<span className="text-[#FA7268]">.</span>
                </h2>
                <p className="text-[14px] text-[#55696E] font-medium mt-1">
                  Showing {filteredProducts.length} commercial-grade essentials
                </p>
              </div>

              {/* Search Bar Input */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-[#7A9195] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search catalog..."
                  className="w-full pl-10 pr-10 py-2.5 bg-white rounded-full border border-[#DCD5C7] text-xs font-medium focus:border-[#003D47] focus:ring-2 focus:ring-[#003D47]/10 outline-none transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter and Sort Pills Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#003D47] text-white shadow-xs'
                        : 'bg-white text-[#4A6469] border border-[#DDD6C8] hover:border-[#003D47]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Dropdown Filters: Color, Size, Sort */}
              <div className="flex items-center gap-2.5">
                {/* Color */}
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  aria-label="Filter by color"
                  className="px-3.5 py-2 bg-white rounded-full border border-[#DDD6C8] text-xs font-semibold text-[#052033] outline-none cursor-pointer focus:border-[#003D47]"
                >
                  <option value="All">Color: All</option>
                  {colors.filter(c => c !== 'All').map(c => (
                    <option key={c} value={c}>Color: {c}</option>
                  ))}
                </select>

                {/* Size */}
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  aria-label="Filter by size"
                  className="px-3.5 py-2 bg-white rounded-full border border-[#DDD6C8] text-xs font-semibold text-[#052033] outline-none cursor-pointer focus:border-[#003D47]"
                >
                  <option value="All">Size: All</option>
                  {sizes.filter(s => s !== 'All').map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label="Sort products"
                  className="px-3.5 py-2 bg-white rounded-full border border-[#DDD6C8] text-xs font-semibold text-[#052033] outline-none cursor-pointer focus:border-[#003D47]"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>

                {/* Reset button if filters active */}
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="p-2 text-rose-500 hover:bg-rose-50 rounded-full transition-colors"
                    title="Reset all filters"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="pt-10">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
                {filteredProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} variant="catalog" index={idx} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center space-y-4 bg-white rounded-3xl border border-[#EAE3D6] p-8 max-w-lg mx-auto">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F0] text-[#7A9195] flex items-center justify-center mx-auto">
                  <Filter className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#052033]">
                  No products match your criteria
                </h3>
                <p className="text-xs text-[#6A8084]">
                  Try clearing some filters or searching with a different term.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-full bg-[#003D47] text-white text-xs font-bold hover:bg-[#034F5C] transition-colors"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. TRUST STRIP SECTION */}
      <TrustStrip />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FCFBF9] flex items-center justify-center">Loading catalog...</div>}>
      <ShopContent />
    </Suspense>
  );
}
