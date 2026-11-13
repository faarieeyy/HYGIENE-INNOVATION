'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, ShoppingCart, Check, Sparkles } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const inputRef = useRef<HTMLInputElement>(null);
  const { addToCart, setQuickViewProduct } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  // Auto-focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
      setSelectedCategory('All');
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const categories = ['All', 'Cloths & Wipes', 'Kitchen Essentials', 'Bins', 'Dispensers & Refills', 'Food Service'];

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCat =
        selectedCategory === 'All' ||
        (selectedCategory === 'Food Service' ? p.isFoodService || p.category === 'Food Service' : p.category === selectedCategory);
      if (!matchesCat) return false;
      if (!trimmed) return true;
      return (
        p.name.toLowerCase().includes(trimmed) ||
        p.subtitle?.toLowerCase().includes(trimmed) ||
        p.description.toLowerCase().includes(trimmed) ||
        p.category.toLowerCase().includes(trimmed)
      );
    }).slice(0, 8);
  }, [query, selectedCategory]);

  const handleAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#021A1D]/70 backdrop-blur-md transition-opacity"
          />

          <div className="min-h-full flex items-start justify-center p-4 sm:p-6 lg:p-10 pt-16 sm:pt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#EAE3D6] overflow-hidden"
            >
              {/* Top Search Bar */}
              <div className="p-4 sm:p-6 border-b border-[#F0EDE6] bg-[#FAF8F5]">
                <div className="relative flex items-center">
                  <Search className="w-5 h-5 text-[#052C33]/60 absolute left-4 pointer-events-none" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search commercial cleaning, wrap dispensers, cloths..."
                    className="w-full pl-12 pr-12 py-3.5 bg-white rounded-2xl border border-[#E0D8CB] focus:border-[#023E46] focus:ring-2 focus:ring-[#023E46]/10 text-[#052C33] placeholder:text-[#889B9E] text-[15px] font-medium outline-none transition-all shadow-xs"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery('')}
                      className="absolute right-4 p-1 rounded-full text-[#889B9E] hover:text-[#052C33] transition-colors"
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-4 text-xs font-semibold">
                  <span className="text-[#647C80] shrink-0 pr-1">Filter:</span>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-full transition-all shrink-0 cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-[#023E46] text-white shadow-xs'
                          : 'bg-white text-[#446167] border border-[#E2DBD0] hover:border-[#023E46]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Container */}
              <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 divide-y divide-[#F2EFE8]">
                {results.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {results.map((product) => {
                      const isAdded = addedId === product.id;
                      return (
                        <div
                          key={product.id}
                          onClick={() => {
                            setQuickViewProduct(product);
                            onClose();
                          }}
                          className="group flex items-center gap-3.5 p-3 rounded-2xl border border-transparent hover:border-[#EAE3D6] hover:bg-[#FAF8F5] transition-all cursor-pointer"
                        >
                          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-[#F6F4EE] shrink-0 overflow-hidden border border-[#ECE6DB]">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain p-1.5 group-hover:scale-105 transition-transform"
                              sizes="80px"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FA7268] block">
                              {product.category}
                            </span>
                            <h4 className="text-[14px] font-bold text-[#052C33] truncate group-hover:text-[#02565C] transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-[12.5px] text-[#697E82] truncate">
                              {product.size}
                            </p>
                            <span className="text-[13px] font-extrabold text-[#052C33] mt-0.5 block">
                              AED {product.price}
                            </span>
                          </div>

                          <button
                            onClick={(e) => handleAdd(e, product)}
                            aria-label={`Add ${product.name} to cart`}
                            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                              isAdded
                                ? 'bg-emerald-600 text-white'
                                : 'bg-[#052C33] hover:bg-[#FA7268] text-white shadow-xs'
                            }`}
                          >
                            {isAdded ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="py-12 text-center space-y-2">
                    <p className="font-serif text-lg font-bold text-[#052C33]">
                      No products found
                    </p>
                    <p className="text-xs text-[#697E82] max-w-sm mx-auto">
                      Try searching with different terms like &ldquo;microfiber&rdquo;, &ldquo;wrapmaster&rdquo;, or &ldquo;dispenser&rdquo;.
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Quick Footer */}
              <div className="p-4 bg-[#FAF8F5] border-t border-[#F0EDE6] flex items-center justify-between text-xs text-[#5D7377]">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FA7268]" />
                  <span>Showing {results.length} commercial products</span>
                </div>
                <Link
                  href="/shop"
                  onClick={onClose}
                  className="font-bold text-[#023E46] hover:text-[#FA7268] inline-flex items-center gap-1 transition-colors"
                >
                  <span>View full catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

