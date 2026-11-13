'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Check, Heart, Sparkles } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ThreeTiltCard } from './ThreeTiltCard';

interface ProductCardProps {
  product: Product;
  variant?: 'featured' | 'catalog';
  index?: number;
}

export function ProductCard({ product, variant = 'catalog', index = 0 }: ProductCardProps) {
  const { addToCart, setQuickViewProduct } = useCart();
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleToggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  // FEATURED VARIANT - Page 5 Blueprint with 3D depth & interactive elegance
  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(8px)', scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 0.7,
          delay: (index % 4) * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="h-full"
      >
        <ThreeTiltCard maxTilt={5} scale={1.015} className="h-full">
        <div className="group flex flex-col justify-between h-full bg-white rounded-3xl p-4 sm:p-5 border border-[#EAE4D7] shadow-xs hover:shadow-xl transition-all duration-300">
          {/* Top Image Box */}
          <div
            onClick={() => setQuickViewProduct(product)}
            className="relative w-full aspect-[620/365] rounded-2xl overflow-hidden bg-[#FAF9F6] cursor-pointer border border-[#F2ECE1]"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Quick View Button overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <span className="px-4 py-2 rounded-full bg-white/95 text-[#052C33] text-xs font-bold shadow-lg backdrop-blur-xs flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <Eye className="w-3.5 h-3.5 text-[#FA7268]" />
                <span>Quick View</span>
              </span>
            </div>

            {/* Badge */}
            {product.badge && (
              <span className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#052C33] text-white shadow-xs">
                {product.badge}
              </span>
            )}

            {/* Heart Wishlist Icon Top-Right */}
            <button
              onClick={handleToggleLike}
              className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-sm text-[#052033] hover:text-rose-500 hover:scale-110 transition-all cursor-pointer"
              title="Add to wishlist"
              aria-label="Add to wishlist"
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  liked ? 'fill-rose-500 text-rose-500' : 'text-[#052033]'
                }`}
              />
            </button>
          </div>

          {/* Content Below Image Box */}
          <div className="pt-4 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center justify-between text-xs text-[#6B8084] mb-1">
                <span className="font-semibold uppercase tracking-wider text-[11px] text-[#FA7268]">
                  {product.category}
                </span>
                <span className="font-medium">{product.size}</span>
              </div>

              <h3
                onClick={() => setQuickViewProduct(product)}
                className="font-serif text-[18px] sm:text-[20px] font-bold text-[#052033] leading-snug cursor-pointer hover:text-[#015664] transition-colors"
              >
                {product.name}
              </h3>

              <div className="flex items-baseline gap-2 mt-2">
                <p className="text-[17px] font-bold text-[#052033]">
                  AED {product.price}
                </p>
                {product.originalPrice && (
                  <p className="text-[13px] text-[#8A9B9E] line-through">
                    AED {product.originalPrice}
                  </p>
                )}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAdd}
              className={`mt-4 w-full py-3.5 px-4 rounded-xl text-[14px] font-bold flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-[0.98] shadow-xs cursor-pointer ${
                added
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#003D47] hover:bg-[#034F5C] text-white hover:shadow-md'
              }`}
              aria-label={`Add ${product.name} to cart`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Added to cart</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 text-white stroke-[2.2]" />
                  <span>Add to cart</span>
                </>
              )}
            </button>
          </div>
        </div>
      </ThreeTiltCard>
    </motion.div>
  );
}

  // CATALOG VARIANT (Shop All Blueprint with 3D Tilt & Micro-interactions)
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, filter: 'blur(6px)', scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <ThreeTiltCard maxTilt={6} scale={1.015} className="h-full">
      <div className="group flex flex-col justify-between h-full bg-white rounded-2xl p-3.5 sm:p-4 border border-[#ECE6DB] shadow-xs hover:shadow-xl transition-all duration-300">
        {/* Product Image Box */}
        <div
          onClick={() => setQuickViewProduct(product)}
          className="relative w-full aspect-[430/377] rounded-xl overflow-hidden bg-[#FAF9F5] cursor-pointer border border-[#F2ECE1]"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
          />

          {/* Quick View Button overlay on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <span className="px-3 py-1.5 rounded-full bg-white/95 text-[#052C33] text-[11px] font-bold shadow-md backdrop-blur-xs flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye className="w-3.5 h-3.5 text-[#FA7268]" />
              <span>Quick View</span>
            </span>
          </div>

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded-full text-[9.5px] font-extrabold uppercase tracking-wider bg-[#052C33] text-white">
              {product.badge}
            </span>
          )}

          {/* Heart Wishlist Icon Top-Right */}
          <button
            onClick={handleToggleLike}
            className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/95 flex items-center justify-center shadow-xs text-[#FA7268] hover:scale-110 transition-transform cursor-pointer"
            title="Add to wishlist"
            aria-label="Add to wishlist"
          >
            <Heart
              className={`w-3.5 h-3.5 transition-colors ${
                liked ? 'fill-[#FA7268] text-[#FA7268]' : 'text-[#FA7268]'
              }`}
            />
          </button>
        </div>

        {/* Product Info & Action */}
        <div className="pt-3 flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center justify-between text-[11px] text-[#6E8387] mb-1">
              <span className="font-bold uppercase tracking-wider text-[#FA7268]">
                {product.category}
              </span>
              <span>{product.size}</span>
            </div>

            <h3
              onClick={() => setQuickViewProduct(product)}
              className="font-serif text-[16px] sm:text-[17px] font-bold text-[#052033] leading-snug cursor-pointer hover:text-[#003D47] transition-colors line-clamp-1"
            >
              {product.name}
            </h3>

            <div className="flex items-baseline gap-2 mt-1.5">
              <p className="text-[15px] font-bold text-[#052033]">
                AED {product.price}
              </p>
              {product.originalPrice && (
                <p className="text-[12px] text-[#8A9B9E] line-through">
                  AED {product.originalPrice}
                </p>
              )}
            </div>
          </div>

          {/* Full-Width Add To Cart Pill Button */}
          <button
            onClick={handleAdd}
            className={`mt-3 w-full py-2.5 sm:py-3 rounded-full text-[13.5px] font-bold text-white transition-all duration-200 active:scale-[0.98] shadow-xs cursor-pointer flex items-center justify-center gap-2 ${
              added
                ? 'bg-emerald-700'
                : 'bg-[#003D47] hover:bg-[#034F5C]'
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 text-white" />
                <span>Add to cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </ThreeTiltCard>
  </motion.div>
);
}
