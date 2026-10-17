import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Compass, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';

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
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION - Page 21 & Page 22 */}
      <section className="relative overflow-hidden bg-[#023E46] text-white pt-12 sm:pt-16 pb-16 sm:pb-24 border-b border-[#012E34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FA7268] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT HYGIENE INNOVATIONS</span>
              </div>

              {/* Serif Headline matching Page 21 */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[58px] font-bold tracking-tight leading-[1.12]">
                Cleaner spaces. <br className="hidden sm:inline" />
                Brighter tomorrows.
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
                We help homes, workplaces and hospitality teams find dependable essentials for everyday hygiene across the UAE.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/shop"
                  className="px-7 py-4 rounded-xl bg-[#FA7268] hover:bg-[#E85B51] text-white text-sm font-bold transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group active:scale-95"
                >
                  <span>Explore our products</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-bold transition-all text-center"
                >
                  Contact Our Team
                </Link>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 text-xs text-white/70 font-medium">
                <span>• UAE Founded & Managed</span>
                <span>• Global Brand Partnerships</span>
                <span>• Dedicated Logistics Fleet</span>
              </div>
            </div>

            {/* Right Brand Graphic */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/15 p-6 backdrop-blur-xs shadow-2xl">
                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-white/10">
                  <Image
                    src="/images/about-hero-graphic.webp"
                    alt="Hygiene Innovations Brand Visual"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-white/80">
                  <span className="font-bold">Hygiene Innovations Trading</span>
                  <span className="font-mono text-[#FA7268] font-semibold">EST. 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES STRIP - Page 23 */}
      <section className="py-14 sm:py-18 bg-[#FAF7F0] border-b border-[#EAE3D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-white border border-[#EAE3D2] shadow-2xs hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] text-[#023E46] border border-[#EAE3D2] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#023E46]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    {v.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0B5D68] mt-1">
                    {v.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION - Page 24 */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B5D68]">
                  OUR STORY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#023E46] tracking-tight mt-1">
                  The essentials behind every clean space.
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-bold">Hygiene Innovations</strong> was founded with a simple belief: cleaner spaces create healthier, happier lives.
                </p>

                <p>
                  We partner with trusted global brands to supply quality cleaning and food-service essentials across the UAE, serving homes, workplaces and hospitality teams with reliability and care.
                </p>

                <p>
                  From everyday essentials to specialised solutions, we make it easier to keep your spaces clean, safe and ready for what's next. Every product in our catalog undergoes rigorous field testing to guarantee performance under Middle Eastern humidity, temperature, and high-frequency usage.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#EAE3D2]">
                  <span className="text-2xl font-black text-[#023E46]">100%</span>
                  <span className="block text-xs text-slate-500 mt-0.5">Authentic Stock</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#EAE3D2]">
                  <span className="text-2xl font-black text-[#023E46]">24-48h</span>
                  <span className="block text-xs text-slate-500 mt-0.5">UAE Dispatch</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#EAE3D2]">
                  <span className="text-2xl font-black text-[#023E46]">6 GCC</span>
                  <span className="block text-xs text-slate-500 mt-0.5">Countries Served</span>
                </div>
              </div>
            </div>

            {/* Right Story Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-[#FAF9F5] border border-[#EAE3D2] p-6 shadow-xl">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-xs">
                  <Image
                    src="/images/about-story-graphic.webp"
                    alt="Hygiene Innovations Heritage and Mission"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE SECTION - Page 25 */}
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
              <div
                key={idx}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-[#EAE3D2] shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                      className="text-xs font-bold text-[#023E46] hover:text-[#084D57] flex items-center justify-between group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore products</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FA7268]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION - Page 26 */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#023E46] text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#FA7268]">
                HERE TO HELP
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
                Let's make everyday cleaning simpler.
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                Have a question or need help finding the right products? Our team is here to help homes and businesses find the right hygiene solutions.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FA7268] hover:bg-[#E85B51] text-white text-sm font-bold transition-all shadow-md active:scale-95"
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
