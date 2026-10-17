'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Search, Menu, X, ArrowRight, User } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '@/context/CartContext';

export function Navbar() {
  const pathname = usePathname();
  const { totalItems, openCart, openEnquiry } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop All', href: '/shop' },
    { label: 'Cleaning', href: '/cleaning' },
    { label: 'Food Service', href: '/food-service' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar - Blueprint Header */}
      <div className="w-full bg-[#01595B] text-white/95 text-[12px] sm:text-[13px] py-2 text-center font-normal tracking-wide">
        Professional essentials. Everyday clean.
      </div>

      <header className="sticky top-0 z-50 w-full bg-white border-b border-[#F0EDE6] transition-all">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 py-4 sm:py-5 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex items-center">
            <Logo variant="dark" />
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 text-[14.5px] font-bold tracking-tight transition-colors duration-150 ${
                    isActive
                      ? 'text-[#052C33]'
                      : 'text-[#446167] hover:text-[#052C33]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#FA7268] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Search, User & Cart matching Blueprint */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Search Icon */}
            <Link
              href="/shop"
              className="p-1 text-[#052C33] hover:text-[#083E48] transition-colors"
              title="Search products"
              aria-label="Search products"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </Link>

            {/* User Account Icon */}
            <Link
              href="/contact"
              className="p-1 text-[#052C33] hover:text-[#083E48] transition-colors"
              title="My Account"
              aria-label="My Account"
            >
              <User className="w-5 h-5 stroke-[2.2]" />
            </Link>

            {/* Shopping Cart Icon with Coral Badge */}
            <button
              onClick={openCart}
              className="relative p-1 text-[#052C33] hover:text-[#083E48] transition-transform active:scale-95"
              aria-label="Open Shopping Cart"
            >
              <ShoppingCart className="w-[22px] h-[22px] stroke-[2.2]" />
              <span className="absolute -top-1.5 -right-2 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-[#FA7268] text-white text-[11px] font-black leading-none shadow-xs">
                {totalItems}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 text-[#052C33]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[70px] bottom-0 bg-black/40 backdrop-blur-xs z-50">
            <div className="bg-white border-b border-slate-200 p-6 shadow-xl animate-in slide-in-from-top duration-300">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`px-4 py-3 rounded-xl text-base font-bold transition-all ${
                        isActive
                          ? 'bg-[#052C33] text-white'
                          : 'text-[#052C33] hover:bg-[#F8F6F2]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openEnquiry('Mobile Menu Bulk Enquiry');
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#052C33] text-white text-sm font-bold flex items-center justify-center gap-2"
                >
                  <span>Request Bulk Business Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#FA7268]" />
                </button>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 px-1">
                  <span>Customer Support:</span>
                  <span className="font-semibold text-slate-800">+971 4 234 5678</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
