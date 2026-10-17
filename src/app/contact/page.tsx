'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Clock, MapPin, CheckCircle2, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { ReassuranceStrip } from '@/components/ReassuranceStrip';
import { useCart } from '@/context/CartContext';

export default function ContactPage() {
  const { openEnquiry } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });

  const gccCountries = [
    { name: 'UAE', active: true },
    { name: 'SAUDI ARABIA', active: true },
    { name: 'OMAN', active: true },
    { name: 'QATAR', active: true },
    { name: 'BAHRAIN', active: true },
    { name: 'KUWAIT', active: true },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFBF9]">
      {/* HERO SECTION - Page 28 & Page 29 */}
      <section className="relative overflow-hidden bg-[#023E46] text-white pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-[#012E34]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FA7268] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CONTACT HYGIENE INNOVATIONS</span>
              </div>

              {/* Serif Headline matching Page 28 */}
              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight">
                We're here to help.
              </h1>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
                Questions about products, orders or business supply? Our team is ready to help with tailored guidance for domestic and corporate accounts.
              </p>

              <div className="pt-2 flex items-center gap-6 text-xs text-white/70 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FA7268]" /> Rapid 24h Response
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FA7268]" /> Direct WhatsApp Support
                </span>
              </div>
            </div>

            {/* Right Customer Support Visual */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/15 p-6 backdrop-blur-xs shadow-2xl">
                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-white/10">
                  <Image
                    src="/images/about-hero-graphic.webp"
                    alt="Hygiene Innovations Customer Support Team"
                    fill
                    priority
                    className="object-cover"
                    sizes="450px"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-white/80">
                  <span className="font-bold">Customer Care & B2B Solutions</span>
                  <span className="font-mono text-[#FA7268] font-semibold">DUBAI, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM AND DETAILS - Page 30 */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Form: Send us a message */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE3D2] shadow-sm">
              <div className="mb-8">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B5D68]">
                  REACH OUT DIRECTLY
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#023E46] mt-1 tracking-tight">
                  Send us a message
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below and an account representative will respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-[#023E46]">Message Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold">{formData.name}</span>. We have received your enquiry regarding <span className="font-semibold text-[#023E46]">{formData.topic || 'your inquiry'}</span>. Our support team will respond to <span className="font-bold">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', topic: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#023E46] text-white text-xs font-bold hover:bg-[#074D57] transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#EAE3D2] focus:outline-none focus:ring-2 focus:ring-[#023E46] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your email address"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#EAE3D2] focus:outline-none focus:ring-2 focus:ring-[#023E46] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#EAE3D2] focus:outline-none focus:ring-2 focus:ring-[#023E46] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Topic Select */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      How can we help? *
                    </label>
                    <select
                      required
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#EAE3D2] focus:outline-none focus:ring-2 focus:ring-[#023E46] bg-white transition-all cursor-pointer"
                    >
                      <option value="">Please select an option</option>
                      <option value="General Product Enquiry">General Product Enquiry</option>
                      <option value="Bulk Order / B2B Supply">Bulk Order / B2B Supply</option>
                      <option value="Food Service & Wrapmaster Equipment">Food Service & Wrapmaster Equipment</option>
                      <option value="Delivery, Shipping & Tracking">Delivery, Shipping & Tracking</option>
                      <option value="Corporate Account Setup">Corporate Account Setup</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your enquiry..."
                      className="w-full px-4 py-3 text-sm rounded-xl border border-[#EAE3D2] focus:outline-none focus:ring-2 focus:ring-[#023E46] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-[#023E46] hover:bg-[#074D57] text-white text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 group active:scale-98 disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send message</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#FA7268]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Right Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FAF7F0] rounded-3xl p-6 sm:p-8 border border-[#EAE3D2] space-y-6">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B5D68]">
                    CONTACT INFORMATION
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#023E46] mt-1">
                    Contact details
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#023E46] border border-[#E4DEC9] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <Mail className="w-4 h-4 text-[#023E46]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Email us</p>
                      <a href="mailto:info@hygieneinnovations.ae" className="text-sm font-bold text-[#023E46] hover:underline">
                        info@hygieneinnovations.ae
                      </a>
                      <p className="text-[11px] text-slate-500">Corporate: sales@hygieneinnovations.ae</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#023E46] border border-[#E4DEC9] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <Phone className="w-4 h-4 text-[#023E46]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Call us</p>
                      <a href="tel:+97142345678" className="text-sm font-bold text-[#023E46] hover:underline">
                        +971 4 234 5678
                      </a>
                      <p className="text-[11px] text-slate-500">Mobile / WhatsApp: +971 50 123 4567</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#023E46] border border-[#E4DEC9] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <Clock className="w-4 h-4 text-[#023E46]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Business hours</p>
                      <p className="text-sm font-bold text-slate-800">Monday – Friday: 8:00 AM – 6:00 PM</p>
                      <p className="text-[11px] text-slate-500">Saturday: 9:00 AM – 2:00 PM (GST)</p>
                    </div>
                  </div>

                  {/* Serving */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#023E46] border border-[#E4DEC9] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <Globe className="w-4 h-4 text-[#023E46]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Serving</p>
                      <p className="text-sm font-bold text-slate-800">UAE and GCC</p>
                      <p className="text-[11px] text-slate-500">Central distribution from Dubai Industrial City</p>
                    </div>
                  </div>
                </div>

                {/* Looking for supply support prompt card */}
                <div className="pt-4 border-t border-[#E4DEC9] space-y-3">
                  <div>
                    <h4 className="text-sm font-bold text-[#023E46]">
                      Looking for supply support for your business?
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Tell us about your requirements for wholesale volume pricing.
                    </p>
                  </div>
                  <button
                    onClick={() => openEnquiry('Business Supply Enquiry')}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#023E46] hover:text-[#095763] group"
                  >
                    <span>Business enquiries</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#FA7268]" />
                  </button>
                </div>

                {/* GCC Country Badges exactly matching PDF Page 30 */}
                <div className="pt-4 border-t border-[#E4DEC9]">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                    Regional Operations
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {gccCountries.map((c, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-white border border-[#E0D9C2] text-xs font-black text-[#023E46] tracking-wider shadow-2xs"
                      >
                        {c.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REASSURANCE STRIP - Page 31 */}
      <ReassuranceStrip />
    </div>
  );
}
