'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin, Building2, Truck, ShieldCheck, Leaf, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { GccCoverageMap } from '@/components/GccCoverageMap';
import { WindyLeaf } from '@/components/WindyLeaf';
import { FloatingLeaves } from '@/components/FloatingLeaves';
import { ThreeTiltCard } from '@/components/ThreeTiltCard';

export default function ContactPage() {
  const { openEnquiry } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    howCanWeHelp: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F2] overflow-x-hidden">
      {/* ========================================================= */}
      {/* SECTION 3: WIDE HERO SECTION                              */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#FDF6EE] text-[#052C33] w-full min-h-[440px] sm:min-h-[480px] md:aspect-[1024/445] max-h-[760px] flex items-center">
        {/* Full Hero Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/contact-hero-banner-v5-2x.webp"
            alt="Customer service representative ready to help"
            fill
            priority
            quality={100}
            className="object-cover object-right md:object-center w-full h-full pointer-events-none"
            sizes="100vw"
          />
          {/* Subtle mobile text readability scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDF6EE] via-[#FDF6EE]/90 sm:via-[#FDF6EE]/60 to-transparent sm:hidden pointer-events-none" />

          {/* Subtle bottom blend melting into contact form section (#FAF7F2) */}
          <div className="absolute bottom-0 inset-x-0 h-8 sm:h-12 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/25 to-transparent pointer-events-none" />
        </div>

        {/* Ambient floating leaves with windy movement in coral red, botanical green, and light beige */}
        <FloatingLeaves colors={['red', 'green', 'beige']} preset="hero" opacity={0.85} />

        {/* Pale sage leaf decoration at lower left with smooth windy breeze movement */}
        <WindyLeaf color="green" position="bottom-left" size="lg" />

        {/* Delicate light beige leaf branch in top right corner */}
        <WindyLeaf color="light-beige" position="top-right" size="sm" opacity={0.65} />

        {/* Hero Content (Left Side) with Smooth Staggered Entrance Animation */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.16,
                  delayChildren: 0.12,
                },
              },
            }}
            className="max-w-xl"
          >
            {/* Small coral uppercase label */}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-[11px] sm:text-[12px] font-bold text-[#FA7268] tracking-[0.14em] uppercase block mb-3"
            >
              CONTACT HYGIENE INNOVATIONS
            </motion.span>

            {/* Large dark navy serif heading on two lines */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-medium text-[#052C33] tracking-tight leading-[1.08] mb-4"
            >
              We’re here<br />to help.
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-[#3E5F66] text-sm sm:text-base leading-relaxed max-w-md font-normal"
            >
              Questions about products, orders or business supply? Our team is ready to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: TWO-COLUMN CONTACT SECTION (3D Card Elevation)  */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left Card: Send us a message (Magnetic Slide From Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <ThreeTiltCard maxTilt={3} scale={1.008}>
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E7E2D8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300">
                <h2 className="font-serif text-2xl sm:text-[26px] font-medium text-[#052C33] tracking-tight mb-6">
                  Send us a message
                </h2>

                {submitted ? (
                  <div className="py-12 px-6 rounded-2xl bg-[#EBF2EE] border border-[#CBD8D2] text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#013D38] text-white flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#052C33]">
                      Message Sent Successfully
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3E5F66] max-w-sm mx-auto">
                      Thank you, <span className="font-semibold text-[#052C33]">{formData.name}</span>. We have received your message and will get back to you within 2 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', howCanWeHelp: '', message: '' });
                      }}
                      className="mt-2 px-5 py-2.5 rounded-xl bg-[#013D38] text-white text-xs font-semibold hover:bg-[#024F49] transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name * */}
                    <div>
                      <label className="block text-xs font-semibold text-[#052C33] mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D9D3C7] focus:outline-none focus:ring-2 focus:ring-[#013D38]/15 focus:border-[#013D38] bg-white text-[#052C33] placeholder-slate-400 transition-all shadow-2xs"
                      />
                    </div>

                    {/* Email * */}
                    <div>
                      <label className="block text-xs font-semibold text-[#052C33] mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your email address"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D9D3C7] focus:outline-none focus:ring-2 focus:ring-[#013D38]/15 focus:border-[#013D38] bg-white text-[#052C33] placeholder-slate-400 transition-all shadow-2xs"
                      />
                    </div>

                    {/* Phone (optional) */}
                    <div>
                      <label className="block text-xs font-semibold text-[#052C33] mb-1.5">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your phone number"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D9D3C7] focus:outline-none focus:ring-2 focus:ring-[#013D38]/15 focus:border-[#013D38] bg-white text-[#052C33] placeholder-slate-400 transition-all shadow-2xs"
                      />
                    </div>

                    {/* How can we help? * (select) */}
                    <div>
                      <label className="block text-xs font-semibold text-[#052C33] mb-1.5">
                        How can we help? *
                      </label>
                      <select
                        required
                        value={formData.howCanWeHelp}
                        onChange={(e) => setFormData({ ...formData, howCanWeHelp: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D9D3C7] focus:outline-none focus:ring-2 focus:ring-[#013D38]/15 focus:border-[#013D38] bg-white text-[#052C33] transition-all cursor-pointer shadow-2xs"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="General Product Enquiry">General Product Enquiry</option>
                        <option value="Business Supply Support">Business Supply Support</option>
                        <option value="Order & Delivery Tracking">Order &amp; Delivery Tracking</option>
                        <option value="Hygiene & Safety Guidance">Hygiene &amp; Safety Guidance</option>
                        <option value="Other Requirements">Other Requirements</option>
                      </select>
                    </div>

                    {/* Message * */}
                    <div>
                      <label className="block text-xs font-semibold text-[#052C33] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#D9D3C7] focus:outline-none focus:ring-2 focus:ring-[#013D38]/15 focus:border-[#013D38] bg-white text-[#052C33] placeholder-slate-400 transition-all resize-none shadow-2xs"
                      />
                    </div>

                    {/* Full-width dark teal “Send message” button with right arrow */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#013D38] hover:bg-[#024F49] text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group active:scale-[0.99] disabled:opacity-70 mt-2 shadow-sm cursor-pointer"
                    >
                      <span>{loading ? 'Sending message...' : 'Send message'}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </ThreeTiltCard>
          </motion.div>

          {/* Right Card: Contact details (Magnetic Slide From Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <ThreeTiltCard maxTilt={3} scale={1.008}>
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E7E2D8] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 space-y-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-[26px] font-medium text-[#052C33] tracking-tight mb-6">
                    Contact details
                  </h2>

                  {/* Four contact rows with circular pale-sage icon backgrounds */}
                  <div className="space-y-4">
                    {/* Row 1: Email us */}
                    <a
                      href="mailto:support@hygieneinnovations.ae"
                      className="flex items-center gap-3.5 group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#EBF2EE] text-[#013D38] flex items-center justify-center shrink-0 group-hover:bg-[#013D38] group-hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#052C33]">Email us</p>
                        <p className="text-xs text-[#5C757B] group-hover:text-[#FA7268] transition-colors">
                          support@hygieneinnovations.ae
                        </p>
                      </div>
                    </a>

                    {/* Row 2: Call us */}
                    <a
                      href="tel:+97142345678"
                      className="flex items-center gap-3.5 group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#EBF2EE] text-[#013D38] flex items-center justify-center shrink-0 group-hover:bg-[#013D38] group-hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#052C33]">Call us</p>
                        <p className="text-xs text-[#5C757B] group-hover:text-[#FA7268] transition-colors">
                          +971 4 234 5678
                        </p>
                      </div>
                    </a>

                    {/* Row 3: Business hours */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#EBF2EE] text-[#013D38] flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-[#013D38]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#052C33]">Business hours</p>
                        <p className="text-xs text-[#5C757B]">Mon – Sat: 8:00 AM – 6:00 PM GST</p>
                      </div>
                    </div>

                    {/* Row 4: Serving */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#EBF2EE] text-[#013D38] flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-[#013D38]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#052C33]">Serving</p>
                        <p className="text-xs text-[#5C757B]">UAE and GCC</p>
                      </div>
                    </div>
                  </div>

                  {/* Coral-tinted business enquiry callout */}
                  <div className="rounded-2xl bg-[#FDF2F0] border border-[#FADCD7] p-4 sm:p-5 flex items-start gap-3.5 mt-6 mb-5">
                    <Building2 className="w-5 h-5 text-[#FA7268] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-[#052C33]">
                        Looking for supply support for your business?
                      </p>
                      <p className="text-xs text-[#5C757B] mt-0.5">
                        Tell us about your requirements.
                      </p>
                      <button
                        type="button"
                        onClick={() => openEnquiry('Business Supply Support')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FA7268] hover:underline mt-2 cursor-pointer"
                      >
                        <span>Business enquiries &rarr;</span>
                      </button>
                    </div>
                  </div>

                  {/* Crisp Vector UAE and GCC Map beneath callout */}
                  <GccCoverageMap />
                </div>
              </div>
            </ThreeTiltCard>
          </motion.div>
        </div>
      </div>
    </section>

      {/* ========================================================= */}
      {/* SECTION 5: NARROW BENEFITS STRIP                          */}
      {/* ========================================================= */}
      <section className="bg-white border-y border-[#ECE7DE] py-7 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
            {/* Benefit 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center shrink-0 border border-[#EAE3D6]">
                <Truck className="w-5 h-5 text-[#013D38] stroke-[1.8]" />
              </div>
              <span className="text-xs sm:text-[13px] font-medium text-[#052C33] leading-snug">
                Trusted by businesses across the UAE &amp; GCC
              </span>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center shrink-0 border border-[#EAE3D6]">
                <ShieldCheck className="w-5 h-5 text-[#013D38] stroke-[1.8]" />
              </div>
              <span className="text-xs sm:text-[13px] font-medium text-[#052C33] leading-snug">
                Quality products for cleaner, safer spaces
              </span>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center shrink-0 border border-[#EAE3D6]">
                <Leaf className="w-5 h-5 text-[#013D38] stroke-[1.8]" />
              </div>
              <span className="text-xs sm:text-[13px] font-medium text-[#052C33] leading-snug">
                Reliable supply for every industry
              </span>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center shrink-0 border border-[#EAE3D6]">
                <Users className="w-5 h-5 text-[#013D38] stroke-[1.8]" />
              </div>
              <span className="text-xs sm:text-[13px] font-medium text-[#052C33] leading-snug">
                A partner in a cleaner tomorrow
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
