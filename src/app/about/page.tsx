'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Compass, ShieldCheck, Users, CheckCircle2, Award, Truck } from 'lucide-react';
import { ThreeTiltCard } from '@/components/ThreeTiltCard';
import { FloatingLeaves } from '@/components/FloatingLeaves';
import { WindyLeaf } from '@/components/WindyLeaf';

export default function AboutUsPage() {
  const values = [
    {
      icon: Compass,
      title: 'Practical by design',
      subtitle: 'Thoughtfully sourced essentials for everyday needs.',
      description: 'We curate products engineered for durability, performance, and real-world efficiency across high-traffic UAE environments.',
    },
    {
      icon: ShieldCheck,
      title: 'Reliable supply',
      subtitle: 'Consistent availability for homes, workplaces and hospitality.',
      description: 'With direct warehouse operations in the UAE, we ensure zero stockouts and prompt dispatch for recurring institutional supply.',
    },
    {
      icon: Users,
      title: 'People-first support',
      subtitle: 'A friendly team here to help you find the right solutions.',
      description: 'From single purchases to tailored corporate supply agreements, our customer advisors provide expert, personalized guidance.',
    },
    {
      icon: Award,
      title: 'Certified Standards',
      subtitle: 'HACCP-compliant, food-safe, and ISO-tested reliability.',
      description: 'Every product in our inventory meets rigorous international hygiene and durability requirements before UAE dispatch.',
    },
  ];

  const whoWeServe = [
    {
      title: 'For homes',
      subtitle: 'Everyday essentials for cleaner, healthier living spaces.',
      image: '/images/who-we-serve-homes.webp',
      points: ['Ultra-absorbent microfiber cloths', 'Hands-free soft-close pedal bins', 'Chemical-free surface wiping'],
    },
    {
      title: 'For workplaces',
      subtitle: 'Reliable supplies to help teams stay safe, productive and comfortable.',
      image: '/images/who-we-serve-workplaces.webp',
      points: ['Touchless sanitizer dispensers', 'Multi-surface sanitizing wipes', 'Scheduled consolidated deliveries'],
    },
    {
      title: 'For hospitality',
      subtitle: 'Quality cleaning and food-service essentials for exceptional guest experiences.',
      image: '/images/who-we-serve-hospitality.webp',
      points: ['Wrapmaster dispenser systems', 'Food-grade certified foils & films', 'HACCP compliance documentation'],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* ========================================================= */}
      {/* HERO SECTION - Full-Bleed Exact Reference Background       */}
      {/* ========================================================= */}
      <section className="relative w-full overflow-hidden bg-[#133C3E] text-white min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] xl:min-h-[680px] flex items-center">
        {/* Full-width dark teal team & products background image served unoptimized */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/about_hero_exact_bg.jpg"
            alt="Hygiene Innovations Team and Commercial Product Range"
            fill
            priority
            unoptimized
            className="object-cover object-right lg:object-right w-full h-full"
          />
          {/* Subtle mobile overlay for optimal text contrast on small screens */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#133C3E]/95 via-[#133C3E]/75 to-transparent lg:hidden pointer-events-none" />

          {/* Subtle bottom blend melting into values section (#FAF9F5) */}
          <div className="absolute bottom-0 inset-x-0 h-10 sm:h-14 lg:h-16 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/25 to-transparent pointer-events-none" />
        </div>

        {/* Ambient floating leaves with gentle windy drift (Red, Green, Light Beige) */}
        <FloatingLeaves colors={['red', 'green', 'beige']} preset="hero" opacity={0.85} />

        {/* Gentle botanical leaf at bottom left */}
        <WindyLeaf color="green" position="bottom-left" size="md" opacity={0.7} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-14 sm:py-18 lg:py-20">
          <div className="max-w-xl space-y-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.14, delayChildren: 0.1 },
                },
              }}
              className="space-y-5"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FA7268] text-xs font-bold uppercase tracking-wider backdrop-blur-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT HYGIENE INNOVATIONS</span>
              </motion.div>

              {/* Serif Headline */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="font-serif text-4xl sm:text-6xl lg:text-[58px] font-bold tracking-tight leading-[1.12]"
              >
                Cleaner spaces. <br className="hidden sm:inline" />
                Brighter tomorrows.
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl font-normal"
              >
                We help homes, workplaces and hospitality teams find dependable essentials for everyday hygiene across the UAE.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
              >
                <Link
                  href="/shop"
                  className="px-7 py-3.5 rounded-full bg-[#FA7268] hover:bg-[#E85B51] text-white text-sm font-bold transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group active:scale-95"
                >
                  <span>Explore our products</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-bold transition-all text-center backdrop-blur-xs"
                >
                  Contact Our Team
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="pt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/80 font-medium"
              >
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FA7268]" /> UAE Founded &amp; Managed</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FA7268]" /> Global Brand Partnerships</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FA7268]" /> Dedicated Logistics Fleet</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* VALUES STRIP - 4 Balanced Columns                         */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-[#FAF7F0] border-b border-[#EAE3D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: 16 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.75,
                    delay: i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full"
                >
                  <ThreeTiltCard maxTilt={5} scale={1.02} className="h-full">
                    <div className="p-6 rounded-2xl bg-white border border-[#EAE3D2] shadow-xs hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                      <div>
                        <div className="w-11 h-11 rounded-xl bg-[#FAF7F0] text-[#023E46] border border-[#EAE3D2] flex items-center justify-center mb-4 group-hover:bg-[#023E46] group-hover:text-white transition-all shadow-3xs group-hover:scale-105">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#0B5D68] transition-colors">
                          {v.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#0B5D68] mt-1">
                          {v.subtitle}
                        </p>
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                          {v.description}
                        </p>
                      </div>
                    </div>
                  </ThreeTiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* OUR STORY SECTION - Full-Bleed Exact Reference Background */}
      {/* ========================================================= */}
      <section className="relative w-full overflow-hidden bg-[#043438] text-white min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] flex items-center">
        {/* Full-width background image served unoptimized */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/about_story_exact_bg.jpg"
            alt="Hygiene Innovations Dubai Logistics Team and Supply Mission"
            fill
            priority
            unoptimized
            className="object-cover object-right lg:object-right w-full h-full"
          />
          {/* Seamless blending color gradient overlay on the left to match the teal wall */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#043438] via-[#043438]/90 sm:via-[#043438]/75 to-transparent w-full md:w-[65%] lg:w-[52%] pointer-events-none" />
          {/* Subtle mobile overlay for crystal clear contrast on small screens */}
          <div className="absolute inset-0 bg-black/20 sm:bg-transparent pointer-events-none" />

          {/* Subtle top edge blend */}
          <div className="absolute top-0 inset-x-0 h-8 sm:h-12 bg-gradient-to-b from-[#FAF9F5]/60 via-[#FAF9F5]/20 to-transparent pointer-events-none" />

          {/* Subtle bottom edge blend */}
          <div className="absolute bottom-0 inset-x-0 h-8 sm:h-12 bg-gradient-to-t from-[#FAF9F5]/60 via-[#FAF9F5]/20 to-transparent pointer-events-none" />
        </div>

        {/* Ambient floating leaves with gentle windy drift */}
        <FloatingLeaves colors={['red', 'green', 'beige']} preset="minimal" opacity={0.7} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
          <div className="max-w-xl space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#FA7268]">
                <span className="w-2 h-2 rounded-full bg-[#FA7268] animate-pulse" />
                OUR STORY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.15] mt-2">
                The essentials behind<br className="hidden sm:inline" />
                every clean space.
              </h2>
            </div>

            <div className="space-y-3.5 text-sm sm:text-[15.5px] text-white/90 leading-relaxed font-normal">
              <p>
                <strong className="text-white font-semibold">Hygiene Innovations</strong> was founded on a simple belief: dependable, commercial-grade essentials create healthier, safer environments.
              </p>
              <p className="text-white/80">
                From our Dubai logistics facility, we supply UAE homes, hospitality leaders, and workplaces with field-tested cleaning and food-service solutions engineered for performance.
              </p>
            </div>

            {/* 3 Metric Cards with glassmorphic backdrop */}
            <div className="pt-2 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center transition-transform hover:-translate-y-0.5">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white">100%</span>
                <span className="block text-[11px] sm:text-xs text-white/75 mt-0.5 font-medium">Authentic Stock</span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center transition-transform hover:-translate-y-0.5">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white">24-48h</span>
                <span className="block text-[11px] sm:text-xs text-white/75 mt-0.5 font-medium">UAE Dispatch</span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center transition-transform hover:-translate-y-0.5">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white">6 GCC</span>
                <span className="block text-[11px] sm:text-xs text-white/75 mt-0.5 font-medium">Markets Served</span>
              </div>
            </div>

            {/* Subtle facility badge indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">Dubai Logistics Facility</span>
              <span className="text-white/40">•</span>
              <span>Central UAE Supply Hub</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHO WE SERVE SECTION                                      */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAF9F5] border-t border-[#EAE3D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B5D68]">
              WHO WE SERVE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#023E46] mt-1 tracking-tight">
              Essentials for every space.
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Engineered to meet the stringent demands of residential villas, corporate headquarters, and luxury resort kitchens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoWeServe.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <ThreeTiltCard maxTilt={5} scale={1.015} className="h-full">
                <div className="group flex flex-col h-full rounded-3xl overflow-hidden bg-white border border-[#EAE3D2] shadow-xs hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-106"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#023E46] group-hover:text-[#0B5D68] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {item.subtitle}
                      </p>

                      <ul className="mt-4 space-y-2 text-xs text-slate-600">
                        {item.points.map((pt, pidx) => (
                          <li key={pidx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FA7268] flex-shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#EAE3D2]/60">
                      <Link
                        href="/shop"
                        className="text-xs font-bold text-[#023E46] hover:text-[#FA7268] flex items-center justify-between group-hover:translate-x-1 transition-transform"
                      >
                        <span>Explore products</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#FA7268]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ThreeTiltCard>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CALL TO ACTION                                            */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#023E46] text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#FA7268]">
                HERE TO HELP
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
                Let&apos;s make everyday cleaning simpler.
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-normal">
                Have a question or need help finding the right products? Our team is here to help homes and businesses find the right hygiene solutions.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FA7268] hover:bg-[#E85B51] text-white text-sm font-bold transition-all shadow-md active:scale-95"
                >
                  <span>Get in touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
