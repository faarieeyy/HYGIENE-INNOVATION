'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Plus, Minus, ShoppingBag, Check, Star, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const handleAdd = () => {
    addToCart(quickViewProduct, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        onClick={() => setQuickViewProduct(null)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Image */}
            <div className="relative aspect-square rounded-2xl bg-[#FAF9F5] p-6 border border-slate-200 flex items-center justify-center">
              <Image
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 350px"
              />
              {quickViewProduct.badge && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#023E46] text-white">
                  {quickViewProduct.badge}
                </span>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#023E46]">
                  {quickViewProduct.category}
                </span>

                <h3 className="text-xl font-extrabold text-slate-900 mt-1 leading-snug">
                  {quickViewProduct.name}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-600">
                    {quickViewProduct.rating} ({quickViewProduct.reviewsCount} reviews)
                  </span>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#023E46]">
                    AED {quickViewProduct.price.toFixed(2)}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      AED {quickViewProduct.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {quickViewProduct.description}
                </p>

                {/* Features List */}
                <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                  {quickViewProduct.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-4">
                <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-slate-600 hover:bg-slate-200 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 py-2 text-xs font-bold text-slate-800 min-w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-slate-600 hover:bg-slate-200 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#023E46] hover:bg-[#074D57] text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart (AED {(quickViewProduct.price * quantity).toFixed(2)})</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-emerald-600" /> Fast UAE Shipping
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Genuine Hygiene Innovations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
