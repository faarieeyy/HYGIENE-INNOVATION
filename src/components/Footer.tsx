'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  // Dedicated Blueprint Footer for Food Service Page (Exact 1:1 match to Page 20 Blueprint)
  if (pathname === '/food-service') {
    return (
      <footer className="relative bg-[#012E28] text-white pt-14 pb-10 border-t border-white/10 overflow-hidden">
        {/* Botanical Leaf Watermark at Bottom-Left */}
        <div className="absolute -bottom-10 -left-10 w-72 h-72 pointer-events-none opacity-20">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full text-emerald-300">
            <path d="M 20 180 C 40 120, 80 80, 150 30" strokeWidth="2" strokeLinecap="round" />
            <path d="M 80 80 C 120 70, 160 50, 170 30 C 150 70, 130 90, 80 80 Z" strokeWidth="1.8" />
            <path d="M 50 120 C 30 90, 20 60, 40 40 C 60 50, 70 80, 50 120 Z" strokeWidth="1.8" />
            <path d="M 110 110 C 140 120, 170 130, 180 160 C 150 160, 130 140, 110 110 Z" strokeWidth="1.8" />
            <path d="M 80 80 L 150 40" strokeWidth="1.2" strokeDasharray="3 3" />
            <path d="M 50 120 L 35 55" strokeWidth="1.2" strokeDasharray="3 3" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Main 3-Section Layout */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-0">
            {/* Section 1: Brand (Left) */}
            <div className="w-full lg:w-[26%] flex flex-col items-start pr-0 lg:pr-6">
              <Link href="/" aria-label="Hygiene Innovations">
                <div className="relative w-[190px] sm:w-[215px] h-auto">
                  <Image
                    src="/images/footer_logo.webp"
                    alt="Hygiene Innovations - Cleaner spaces. Brighter tomorrows."
                    width={420}
                    height={210}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Vertical Divider 1 */}
            <div className="hidden lg:block w-[1px] bg-white/20 self-stretch my-2" />

            {/* Section 2: Newsletter Community (Center) */}
            <div className="w-full lg:w-[42%] flex flex-col items-start px-0 lg:px-10">
              <h3 className="font-serif text-[26px] sm:text-[30px] font-bold text-white tracking-tight leading-tight">
                Stay kitchen-ready
              </h3>
              <p className="text-[14.5px] text-white/85 font-normal mt-2 mb-6 leading-relaxed">
                Get product updates and practical tips for food-service teams.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full max-w-[430px]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-[#012520] border border-white/25 text-white placeholder-white/50 px-4 py-2.5 text-[14.5px] rounded-[3px] focus:outline-none focus:border-[#EF6F69] transition-colors flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#EF6F69] hover:bg-[#E55B4C] text-white font-semibold text-[14.5px] px-6 py-2.5 rounded-[3px] shrink-0 transition-colors shadow-sm"
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>

            {/* Vertical Divider 2 */}
            <div className="hidden lg:block w-[1px] bg-white/20 self-stretch my-2" />

            {/* Section 3: Links (Right - Explore & Support) */}
            <div className="w-full lg:w-[28%] grid grid-cols-2 gap-8 pl-0 lg:pl-10">
              {/* Explore */}
              <div>
                <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-white tracking-tight mb-3.5">
                  Explore
                </h4>
                <ul className="space-y-2.5 text-[14px] text-white/80 font-normal">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
                  <li><Link href="/cleaning" className="hover:text-white transition-colors">Cleaning</Link></li>
                  <li><Link href="/food-service" className="text-white font-medium hover:text-white transition-colors">Food Service</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-white tracking-tight mb-3.5">
                  Support
                </h4>
                <ul className="space-y-2.5 text-[14px] text-white/80 font-normal">
                  <li><Link href="/contact#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Delivery</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Returns</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Full-width Divider Line */}
          <div className="border-t border-white/15 mt-10 mb-6" />

          {/* Bottom Bar: Copyright & Social Icons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13.5px] text-white/70 font-normal">
              &copy; 2026 Hygiene Innovations. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-white/85">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-[#EF6F69] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#EF6F69] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-[#EF6F69] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // Dedicated Blueprint Footer for Cleaning Page (Exact 1:1 match to Image 2)
  if (pathname === '/cleaning') {
    return (
      <footer className="bg-[#03423C] text-white pt-14 pb-10 border-t border-[#023530]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Main 3-Section Layout */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-0">
            {/* Section 1: Brand (Left) */}
            <div className="w-full lg:w-[26%] flex flex-col items-start pr-0 lg:pr-6">
              <Link href="/" aria-label="Hygiene Innovations">
                <div className="relative w-[190px] sm:w-[215px] h-auto">
                  <Image
                    src="/images/footer_logo.webp"
                    alt="Hygiene Innovations - Cleaner spaces. Brighter tomorrows."
                    width={420}
                    height={210}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* Vertical Divider 1 */}
            <div className="hidden lg:block w-[1px] bg-white/20 self-stretch my-2" />

            {/* Section 2: Newsletter Community (Center) */}
            <div className="w-full lg:w-[42%] flex flex-col items-start px-0 lg:px-10">
              <h3 className="font-serif text-[26px] sm:text-[28px] font-bold text-white tracking-tight leading-tight">
                Join our community
              </h3>
              <p className="text-[14.5px] text-white/85 font-normal mt-2 mb-6 leading-relaxed">
                Get the latest products, cleaning tips and exclusive updates.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full max-w-[430px]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-[#02332E] border border-white/25 text-white placeholder-white/50 px-4 py-2.5 text-[14.5px] rounded-[3px] focus:outline-none focus:border-[#EF6F69] transition-colors flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#EF6F69] hover:bg-[#E55B4C] text-white font-semibold text-[14.5px] px-6 py-2.5 rounded-[3px] shrink-0 transition-colors shadow-sm"
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>

            {/* Vertical Divider 2 */}
            <div className="hidden lg:block w-[1px] bg-white/20 self-stretch my-2" />

            {/* Section 3: Links (Right - Quick Links & Support) */}
            <div className="w-full lg:w-[28%] grid grid-cols-2 gap-8 pl-0 lg:pl-10">
              {/* Quick Links */}
              <div>
                <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-white tracking-tight mb-3.5">
                  Quick Links
                </h4>
                <ul className="space-y-2.5 text-[14px] text-white/80 font-normal">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
                  <li><Link href="/cleaning" className="text-white font-medium hover:text-white transition-colors">Cleaning</Link></li>
                  <li><Link href="/food-service" className="hover:text-white transition-colors">Food Service</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-serif text-[18px] sm:text-[20px] font-bold text-white tracking-tight mb-3.5">
                  Support
                </h4>
                <ul className="space-y-2.5 text-[14px] text-white/80 font-normal">
                  <li><Link href="/contact#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Delivery</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Returns</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Full-width Divider Line */}
          <div className="border-t border-white/15 mt-10 mb-6" />

          {/* Bottom Bar: Copyright & Social Icons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13.5px] text-white/70 font-normal">
              &copy; 2024 Hygiene Innovations. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-white/85">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-[#EF6F69] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#EF6F69] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-[#EF6F69] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#01595B] text-white pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-[#014749]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Main 4-Column Layout */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-0">
          {/* Column 1: Brand (exact logo with coral dot and tagline) */}
          <div className="w-full lg:w-[27%] flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="inline-block group" aria-label="Hygiene Innovations Home">
              <div className="relative w-[210px] sm:w-[235px] h-auto">
                <Image
                  src="/images/footer_logo.webp"
                  alt="Hygiene Innovations - Cleaner spaces. Brighter tomorrows."
                  width={480}
                  height={320}
                  className="w-full h-auto object-contain transition-opacity duration-200 group-hover:opacity-95"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Divider 1 */}
          <div className="hidden lg:block w-[1px] bg-white/20 self-stretch my-2" />

          {/* Column 2: Newsletter */}
          <div className="w-full lg:w-[38%] flex flex-col items-start px-0 lg:px-10">
            <h3 className="font-serif text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-white tracking-tight leading-tight">
              Join our newsletter
            </h3>
            <p className="text-white/90 text-[15px] sm:text-[16px] font-normal mt-2.5 leading-relaxed">
              Get the latest products, offers and cleaning tips.
            </p>

            <form onSubmit={handleSubscribe} className="flex w-full max-w-[460px] mt-6 shadow-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 min-w-0 px-4 sm:px-5 py-3 sm:py-3.5 bg-[#FAF9F5] text-[#1A2426] placeholder-[#78828A] text-[15px] rounded-l-xl focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#FA7268] hover:bg-[#E85B51] active:scale-[0.98] text-white font-medium text-[15px] rounded-r-xl transition-all duration-150 flex-shrink-0 cursor-pointer"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>

          {/* Divider 2 */}
          <div className="hidden lg:block w-[1px] bg-white/20 self-stretch my-2" />

          {/* Column 3: Quick Links */}
          <div className="w-full lg:w-[17%] flex flex-col items-start px-0 lg:px-8">
            <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-white tracking-tight leading-snug mb-4 sm:mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-3.5 text-[15px] text-white/90">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors duration-150">
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  href="/cleaning"
                  className="hover:text-white transition-colors duration-150"
                >
                  Cleaning
                </Link>
              </li>
              <li>
                <Link href="/food-service" className="hover:text-white transition-colors duration-150">
                  Food Service
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-150">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Divider 3 */}
          <div className="hidden lg:block w-[1px] bg-white/20 self-stretch my-2" />

          {/* Column 4: Support */}
          <div className="w-full lg:w-[18%] flex flex-col items-start pl-0 lg:pl-8">
            <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-white tracking-tight leading-snug mb-4 sm:mb-5">
              Support
            </h3>
            <ul className="space-y-3 sm:space-y-3.5 text-[15px] text-white/90">
              <li>
                <Link href="/contact#faq" className="hover:text-white transition-colors duration-150">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-150">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-150">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-150">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-150">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-white/90 font-normal">
            &copy; 2024 Hygiene Innovations. All rights reserved.
          </p>

          <div className="flex items-center gap-6 sm:gap-7">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-[#FA7268] transition-colors duration-150"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-[#FA7268] transition-colors duration-150"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-[#FA7268] transition-colors duration-150"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
