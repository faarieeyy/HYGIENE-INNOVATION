'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Menu, X, ArrowRight, User, ChevronDown, Phone, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '@/context/CartContext';
import { SearchModal } from './SearchModal';
import { CATEGORIES } from '@/data/products';

export function Navbar() {
  const pathname = usePathname();
  const { totalItems, openCart, openEnquiry } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  // Scroll detection for dynamic elevation & blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setAccountMenuOpen(false);
    setShopDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop All', href: '/shop', hasDropdown: true },
    { label: 'Cleaning', href: '/cleaning' },
    { label: 'Food Service', href: '/food-service' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          pathname === '/food-service'
            ? isScrolled
              ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-[#E2DBD0]'
              : 'bg-[#FAF7F2] border-[#ECE6D8]'
            : isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-[#EAE6DE]'
            : 'bg-white border-[#F0EDE6]'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 py-3.5 sm:py-4 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex items-center">
            <Logo variant="dark" />
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    onMouseEnter={() => setShopDropdownOpen(true)}
                    onMouseLeave={() => setShopDropdownOpen(false)}
                    className="relative py-1"
                  >
                    <Link
                      href={link.href}
                      className={`relative py-1 text-[14.5px] font-bold tracking-tight transition-colors duration-150 inline-flex items-center gap-1 ${
                        isActive ? 'text-[#052C33]' : 'text-[#446167] hover:text-[#052C33]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          shopDropdownOpen ? 'rotate-180 text-[#FA7268]' : 'text-[#899B9E]'
                        }`}
                      />
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#FA7268] rounded-full"
                        />
                      )}
                    </Link>

                    {/* Mega Dropdown Menu */}
                    <AnimatePresence>
                      {shopDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute top-full -left-12 w-[460px] bg-white rounded-2xl shadow-xl border border-[#EAE3D6] p-4 z-50 mt-1"
                        >
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#FA7268] px-2 pb-2 border-b border-[#F0EDE6] flex items-center justify-between">
                            <span>Browse Categories</span>
                            <Link
                              href="/shop"
                              className="text-[#052C33] hover:text-[#FA7268] capitalize font-semibold inline-flex items-center gap-1 text-[11.5px]"
                            >
                              <span>All products</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-2 pt-2.5">
                            {CATEGORIES.map((cat) => (
                              <Link
                                key={cat.id}
                                href={`/shop?category=${encodeURIComponent(cat.name)}`}
                                className="group/item flex items-center gap-3 p-2 rounded-xl hover:bg-[#FAF8F5] transition-all"
                              >
                                <div className="relative w-11 h-11 rounded-lg bg-[#F5F2EB] shrink-0 overflow-hidden border border-[#EAE3D6]">
                                  <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover group-hover/item:scale-105 transition-transform"
                                    sizes="44px"
                                  />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-[13px] font-bold text-[#052C33] truncate group-hover/item:text-[#FA7268] transition-colors">
                                    {cat.name}
                                  </p>
                                  <p className="text-[11px] text-[#7A8E91] truncate">
                                    {cat.count} items
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-3 p-3 rounded-xl bg-[#052C33] text-white flex items-center justify-between">
                            <div>
                              <p className="text-xs font-bold">Commercial Supply</p>
                              <p className="text-[11px] text-white/70">Bulk orders across UAE & GCC</p>
                            </div>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setShopDropdownOpen(false);
                                openEnquiry('Bulk Commercial Supply');
                              }}
                              className="px-3 py-1.5 rounded-lg bg-[#FA7268] text-white text-[11px] font-bold hover:bg-[#E85B51] transition-colors"
                            >
                              Get Quote
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 text-[14.5px] font-bold tracking-tight transition-colors duration-150 ${
                    isActive ? 'text-[#052C33]' : 'text-[#446167] hover:text-[#052C33]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#FA7268] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Search, Account & Cart matching Blueprint */}
          <div className="flex items-center gap-3.5 sm:gap-4.5">
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-1.5 text-[#052C33] hover:text-[#FA7268] transition-colors rounded-full hover:bg-black/5"
              title="Search products"
              aria-label="Search products"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Account / Support Menu */}
            <div className="relative">
              <button
                onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                className="p-1.5 text-[#052C33] hover:text-[#FA7268] transition-colors rounded-full hover:bg-black/5"
                title="Account & Support"
                aria-label="Account & Support"
              >
                <User className="w-5 h-5 stroke-[2.2]" />
              </button>

              <AnimatePresence>
                {accountMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.16 }}
                    className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#EAE3D6] p-3 z-50"
                  >
                    <div className="px-3 py-2 border-b border-[#F0EDE6]">
                      <p className="text-xs font-bold text-[#052C33]">Customer Support & Orders</p>
                      <p className="text-[11px] text-[#6E8286]">UAE & GCC Dedicated Team</p>
                    </div>

                    <div className="py-1 text-xs space-y-0.5">
                      <Link
                        href="/contact"
                        onClick={() => setAccountMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#052C33] hover:bg-[#FAF8F5] transition-colors font-medium"
                      >
                        <FileText className="w-4 h-4 text-[#FA7268]" />
                        <span>Track Your Order</span>
                      </Link>

                      <button
                        onClick={() => {
                          setAccountMenuOpen(false);
                          openEnquiry('Commercial Account Support');
                        }}
                        className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#052C33] hover:bg-[#FAF8F5] transition-colors font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Business Supply Account</span>
                      </button>

                      <a
                        href="tel:+97142345678"
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#052C33] hover:bg-[#FAF8F5] transition-colors font-medium"
                      >
                        <Phone className="w-4 h-4 text-[#0B5D68]" />
                        <span>Call +971 4 234 5678</span>
                      </a>

                      <a
                        href="mailto:support@hygieneinnovations.ae"
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-[#052C33] hover:bg-[#FAF8F5] transition-colors font-medium"
                      >
                        <Mail className="w-4 h-4 text-[#0B5D68]" />
                        <span>Email Support</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Shopping Cart Icon with Animated Coral Badge */}
            <button
              onClick={openCart}
              className="relative p-1.5 text-[#052C33] hover:text-[#FA7268] transition-transform active:scale-95 rounded-full hover:bg-black/5"
              aria-label="Open Shopping Cart"
            >
              <ShoppingCart className="w-[22px] h-[22px] stroke-[2.2]" />
              <motion.span
                key={totalItems}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                className="absolute -top-1 -right-1.5 flex items-center justify-center min-w-[19px] h-[19px] px-1 rounded-full bg-[#FA7268] text-white text-[10.5px] font-black leading-none shadow-xs"
              >
                {totalItems}
              </motion.span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#052C33] rounded-lg hover:bg-black/5"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-black/50 backdrop-blur-xs z-50"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="bg-white border-b border-slate-200 p-6 shadow-xl max-h-[85vh] overflow-y-auto"
              >
                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-[#052C33] text-white'
                            : 'text-[#052C33] hover:bg-[#F8F6F2]'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <div className="w-2 h-2 rounded-full bg-[#FA7268]" />}
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
                    className="w-full py-3.5 px-4 rounded-xl bg-[#052C33] text-white text-sm font-bold flex items-center justify-center gap-2 active:scale-98 transition-transform"
                  >
                    <span>Request Bulk Business Quote</span>
                    <ArrowRight className="w-4 h-4 text-[#FA7268]" />
                  </button>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 px-1">
                    <span>Customer Support:</span>
                    <a href="tel:+97142345678" className="font-semibold text-slate-800">
                      +971 4 234 5678
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Interactive Instant Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
