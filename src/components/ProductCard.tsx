'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, ShoppingBag, Eye, Check, Heart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  variant?: 'featured' | 'catalog';
}

export function ProductCard({ product, variant = 'catalog' }: ProductCardProps) {
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

  // FEATURED VARIANT - Exact 1:1 Match to PDF Page 5 Blueprint
  if (variant === 'featured') {
    return (
      <div className="group flex flex-col justify-between transition-all duration-300">
        {/* Top Image Box */}
        <div className="relative w-full aspect-[620/365] rounded-2xl overflow-hidden bg-[#FAF9F6]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-104"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          />

          {/* Heart Wishlist Icon Top-Right */}
          <button
            onClick={handleToggleLike}
            className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-xs text-[#052033] hover:text-rose-500 transition-colors"
            title="Add to wishlist"
            aria-label="Add to wishlist"
          >
            <Heart className={`w-4 h-4 transition-all ${liked ? 'fill-rose-500 text-rose-500' : 'text-[#052033]'}`} />
          </button>
        </div>

        {/* Content Below Image Box */}
        <div className="pt-4 flex flex-col justify-between flex-1">
          <div>
            <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#052033] leading-snug">
              {product.name}
            </h3>
            <p className="text-[16px] font-bold text-[#052033] mt-2">
              AED &mdash;
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAdd}
            className={`mt-4 w-full py-3.5 px-4 rounded-lg text-[14.5px] font-bold flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-[0.99] shadow-xs ${
              added
                ? 'bg-emerald-700 text-white'
                : 'bg-[#015664] hover:bg-[#024753] text-white'
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
    );
  }

  // CATALOG VARIANT (Exact 1:1 Match to Shop All Blueprint Page 10)
  return (
    <div className="group flex flex-col justify-between transition-all duration-300">
      {/* Product Image Box */}
      <div 
        onClick={() => setQuickViewProduct(product)}
        className="relative w-full aspect-[430/377] rounded-2xl overflow-hidden bg-[#FAF9F5] cursor-pointer"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-104"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Heart Wishlist Icon Top-Right with Coral Stroke */}
        <button
          onClick={handleToggleLike}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-xs text-[#FA7268] hover:scale-110 transition-transform"
          title="Add to wishlist"
          aria-label="Add to wishlist"
        >
          <Heart className={`w-4 h-4 transition-colors ${liked ? 'fill-[#FA7268] text-[#FA7268]' : 'text-[#FA7268]'}`} />
        </button>
      </div>

      {/* Product Info & Action */}
      <div className="pt-3.5 flex flex-col justify-between flex-1">
        <div>
          <h3 
            onClick={() => setQuickViewProduct(product)}
            className="font-serif text-[17px] sm:text-[18px] font-bold text-[#052033] leading-snug cursor-pointer hover:text-[#003D47] transition-colors"
          >
            {product.name}
          </h3>
          <p className="text-[14px] font-semibold text-[#052033] mt-1.5">
            AED &mdash;
          </p>
        </div>

        {/* Full-Width Add To Cart Pill Button */}
        <button
          onClick={handleAdd}
          className={`mt-3.5 w-full py-2.5 sm:py-3 rounded-full text-[14px] font-bold text-white transition-all duration-200 active:scale-[0.98] shadow-xs cursor-pointer flex items-center justify-center gap-2 ${
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
            <span>Add to cart</span>
          )}
        </button>
      </div>
    </div>
  );
}
