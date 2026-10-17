'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Utensils, CheckCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface BusinessCTAProps {
  variant?: 'general' | 'foodservice';
}

export function BusinessCTA({ variant = 'general' }: BusinessCTAProps) {
  const { openEnquiry } = useCart();

  if (variant === 'foodservice') {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#023E46] text-white p-8 sm:p-12 lg:p-14 shadow-xl border border-[#012E34]">
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FA7268] text-xs font-bold uppercase tracking-wider">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>FOR PROFESSIONAL KITCHENS</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
                  Built for busy kitchens.
                </h2>

                <p className="text-white/80 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Reliable food-service essentials, ready for every shift. Outfit your commercial line with authentic Wrapmaster dispensers, certified food-grade foils, and HACCP compliance support.
                </p>

                <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/75 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#FA7268]" /> Wrapmaster Official Partner
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#FA7268]" /> Scheduled Kitchen Supply
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#FA7268]" /> UAE Regional Invoicing
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <button
                  onClick={() => openEnquiry('Food Service Commercial Kitchen Supply')}
                  className="px-6 py-4 rounded-xl bg-[#FA7268] hover:bg-[#E85B51] text-white font-bold text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 group active:scale-95"
                >
                  <span>Talk to our team</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all duration-200 text-center border border-white/20"
                >
                  View Corporate Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#023E46] text-white p-8 sm:p-12 shadow-lg border border-[#012E34]">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#FA7268]">
                FOR BUSINESS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Need supplies for your whole team?
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                Ask us about larger quantities and product options for your workplace or hospitality business across the UAE and GCC.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openEnquiry('Bulk Order Enquiry')}
                className="px-6 py-3.5 rounded-xl bg-[#FA7268] hover:bg-[#E85B51] text-white font-bold text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Enquire about bulk orders</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all text-center border border-white/20"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
