'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { TrustStrip } from '@/components/TrustStrip';
import { useCart } from '@/context/CartContext';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All products';
  const { openEnquiry } = useCart();

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name'>('featured');

  // Update selectedCategory if query param changes
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

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, selectedColor, selectedSize, sortBy]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFBF9]">
      {/* 1. HERO SECTION - Exact 1:1 Match to Blueprint Pages 8 & 9 */}
      <section className="relative overflow-hidden bg-[#F7F0E6]">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between min-h-[500px] lg:min-h-[560px]">
          {/* Left Column Content */}
          <div className="w-full lg:w-[48%] xl:w-[45%] z-10 pt-8 pb-10 sm:py-12 lg:py-14 space-y-5 px-6 sm:px-10 lg:pl-[max(3rem,calc((100vw-1400px)/2+3rem))] lg:pr-4">
            {/* Breadcrumb: Home / Shop All */}
            <nav className="flex items-center gap-2 text-[13px] text-[#345359] font-medium">
              <Link href="/" className="hover:text-[#003D47] transition-colors">
                Home
              </Link>
              <span className="text-[#899A9D]">&bull;</span>
              <span className="text-[#052033] font-semibold">Shop All</span>
            </nav>

            {/* Headline */}
            <h1 className="font-serif text-[42px] sm:text-[54px] lg:text-[64px] font-bold tracking-tight text-[#052033] leading-[1.06] pt-1">
              Shop all<br />
              <span className="text-[#02565C]">essentials</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] sm:text-[17px] text-[#3E5F66] leading-relaxed max-w-md font-normal">
              Thoughtful cleaning, hygiene and food-service products for home, workplace and hospitality.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#products-catalog"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#003D47] hover:bg-[#034F5C] text-white text-[14.5px] font-bold shadow-sm transition-all duration-200 group active:scale-95"
              >
                <span>Browse categories</span>
                <span className="text-lg transition-transform group-hover:translate-x-1 leading-none">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column Product Photography Showcase - Bleeds to right edge */}
          <div className="w-full lg:w-[52%] xl:w-[55%] self-end relative flex justify-end pr-0 mr-0">
            <div className="relative w-full aspect-[1211/802]">
              {/* Smooth Left Gradient Blend */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-[#F7F0E6] to-transparent z-10 pointer-events-none" />

              <Image
                src="/images/shop-hero-products.webp"
                alt="Hygiene Innovations Shop All Essentials Display"
                fill
                priority
                className="object-contain object-right-bottom"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALL PRODUCTS CATALOG - Exact 1:1 Match to Blueprint Pages 8 & 10 */}
      <section id="products-catalog" className="py-14 sm:py-20 bg-[#FCFBF9]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Header & Filter Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
            {/* Title & Product Count */}
            <div>
              <h2 className="font-serif text-[34px] sm:text-[42px] font-bold text-[#052033] tracking-tight leading-tight">
                All products
              </h2>
              <p className="text-[14px] text-[#55696E] font-medium mt-1">
                {filteredProducts.length} products
              </p>
            </div>

            {/* Filter and Sort Pills */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Dropdown Pill */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-[#D5CFC2] text-[#052033] text-[14px] font-medium rounded-full px-5 py-2.5 pr-10 hover:border-[#003D47] focus:outline-none focus:ring-1 focus:ring-[#003D47] transition-all cursor-pointer shadow-2xs"
                  aria-label="Filter by category"
                >
                  <option value="All products">Category</option>
                  {categories.filter(c => c !== 'All products').map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#052033] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Color Dropdown Pill */}
              <div className="relative">
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="appearance-none bg-white border border-[#D5CFC2] text-[#052033] text-[14px] font-medium rounded-full px-5 py-2.5 pr-10 hover:border-[#003D47] focus:outline-none focus:ring-1 focus:ring-[#003D47] transition-all cursor-pointer shadow-2xs"
                  aria-label="Filter by color"
                >
                  <option value="All">Color</option>
                  {colors.filter(c => c !== 'All').map((col) => (
                    <option key={col} value={col}>
                      {col}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#052033] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Size Dropdown Pill */}
              <div className="relative">
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="appearance-none bg-white border border-[#D5CFC2] text-[#052033] text-[14px] font-medium rounded-full px-5 py-2.5 pr-10 hover:border-[#003D47] focus:outline-none focus:ring-1 focus:ring-[#003D47] transition-all cursor-pointer shadow-2xs"
                  aria-label="Filter by size"
                >
                  <option value="All">Size</option>
                  {sizes.filter(s => s !== 'All').map((sz) => (
                    <option key={sz} value={sz}>
                      {sz}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#052033] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Inset Divider */}
              <div className="hidden sm:block w-[1px] h-7 bg-[#D5CFC2] mx-1" />

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-[14px] text-[#052033] font-medium hidden sm:inline">
                  Sort by
                </span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="appearance-none bg-white border border-[#D5CFC2] text-[#052033] text-[14px] font-medium rounded-full px-5 py-2.5 pr-10 hover:border-[#003D47] focus:outline-none focus:ring-1 focus:ring-[#003D47] transition-all cursor-pointer shadow-2xs"
                    aria-label="Sort products"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#052033] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* 4 Cards Grid - Matches Blueprint Page 10 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="catalog" />
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS CALL TO ACTION - Exact 1:1 Match to Blueprint Pages 8 & 11 */}
      <section className="relative overflow-hidden bg-[#FDF6EC]">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between min-h-[460px] lg:min-h-[520px]">
          {/* Left Column Content */}
          <div className="w-full lg:w-[48%] xl:w-[45%] z-10 pt-10 pb-12 sm:py-14 lg:py-16 space-y-5 px-6 sm:px-10 lg:pl-[max(3rem,calc((100vw-1400px)/2+3rem))] lg:pr-4">
            {/* Eyebrow: FOR BUSINESS */}
            <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] text-[#FA7268] uppercase">
              FOR BUSINESS
            </p>

            {/* Headline */}
            <h2 className="font-serif text-[36px] sm:text-[46px] lg:text-[52px] font-bold text-[#052033] tracking-tight leading-[1.1]">
              Need supplies for<br />
              your whole team?
            </h2>

            {/* Subtitle */}
            <p className="text-[15.5px] sm:text-[16.5px] text-[#3E5F66] leading-relaxed max-w-md font-normal">
              Ask us about larger quantities and product options for your workplace or hospitality business.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => openEnquiry('Shop All Bulk Inquiry')}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#003D47] hover:bg-[#034F5C] text-white text-[14.5px] font-bold shadow-sm transition-all duration-200 group active:scale-95 cursor-pointer"
              >
                <span>Enquire about bulk orders</span>
                <span className="text-lg transition-transform group-hover:translate-x-1 leading-none">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Column Kitchen Product Showcase - Bleeds to right edge */}
          <div className="w-full lg:w-[52%] xl:w-[55%] self-end relative flex justify-end pr-0 mr-0">
            <div className="relative w-full aspect-[1211/802]">
              {/* Smooth Left Gradient Blend */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-[#FDF6EC] to-transparent z-10 pointer-events-none" />

              <Image
                src="/images/shop-business-cta.webp"
                alt="Hygiene Innovations Commercial Kitchen & Team Supplies Display"
                fill
                priority
                className="object-contain object-right-bottom"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST STRIP - Page 12 Blueprint */}
      <TrustStrip />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FCFBF9]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#003D47]" />
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
