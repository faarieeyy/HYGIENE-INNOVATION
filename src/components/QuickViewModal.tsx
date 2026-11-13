'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingCart, Check, Star, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const handleAdd = () => {
    addToCart(quickViewProduct, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
      openCart();
    }, 700);
  };

  return (
    <AnimatePresence>
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQuickViewProduct(null)}
            className="fixed inset-0 bg-[#021A1D]/70 backdrop-blur-md transition-opacity"
          />

          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 border border-[#EAE3D6]"
            >
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Product Image */}
                <div className="relative aspect-square rounded-2xl bg-[#FAF9F5] p-6 border border-[#EBE5DB] flex items-center justify-center overflow-hidden">
                  <Image
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    fill
                    className="object-contain p-4 hover:scale-106 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  {quickViewProduct.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#023E46] text-white shadow-xs">
                      {quickViewProduct.badge}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-bold text-[#FA7268] uppercase tracking-wider">
                      {quickViewProduct.category}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#052C33] tracking-tight mt-1 leading-snug">
                      {quickViewProduct.name}
                    </h3>
                    <p className="text-xs text-[#6B8084] mt-1 font-medium">
                      {quickViewProduct.size} &bull; {quickViewProduct.color}
                    </p>

                    <div className="flex items-baseline gap-2 mt-3">
                      <span className="text-2xl font-extrabold text-[#052C33]">
                        AED {quickViewProduct.price}
                      </span>
                      {quickViewProduct.originalPrice && (
                        <span className="text-sm text-slate-400 line-through">
                          AED {quickViewProduct.originalPrice}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#52686C] mt-3 leading-relaxed">
                      {quickViewProduct.description}
                    </p>

                    {quickViewProduct.features && quickViewProduct.features.length > 0 && (
                      <div className="mt-3.5 space-y-1.5 pt-3 border-t border-slate-100">
                        {quickViewProduct.features.slice(0, 3).map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#3E5256]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Quantity & Add Button */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-[#DED7CA] rounded-xl bg-[#FAF8F5]">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-3 py-2 text-slate-600 hover:text-[#FA7268] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-[#052C33]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-3 py-2 text-slate-600 hover:text-[#FA7268] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={handleAdd}
                        className={`flex-1 py-3 px-5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98 cursor-pointer ${
                          added
                            ? 'bg-emerald-700 text-white'
                            : 'bg-[#003D47] hover:bg-[#034F5C] text-white'
                        }`}
                      >
                        {added ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Added to Basket</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-4 h-4 stroke-[2.2]" />
                            <span>Add &bull; AED {(quickViewProduct.price * quantity).toFixed(2)}</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#697E82] pt-1">
                      <span className="flex items-center gap-1">
                        <Truck className="w-3 h-3 text-[#0B5D68]" /> Next-day UAE Delivery
                      </span>
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#0B5D68]" /> 100% Commercial Standard
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
