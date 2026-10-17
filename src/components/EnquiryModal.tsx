'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building, ShieldCheck, Mail, Phone } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function EnquiryModal() {
  const { isEnquiryOpen, closeEnquiry, enquirySubject } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'United Arab Emirates',
    category: enquirySubject || 'Bulk Supplies for Business',
    message: '',
  });

  if (!isEnquiryOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep visible
    }, 500);
  };

  const handleClose = () => {
    setSubmitted(false);
    closeEnquiry();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        onClick={handleClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#023E46]">
                  CORPORATE & BULK ORDERS
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  Request a Business Quote
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Outfit your workplace, hotel, catering kitchen or facility with wholesale pricing.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Mansoor"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#023E46]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Jumeirah Hospitality Group"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#023E46]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tariq@hospitality.ae"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#023E46]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 234 5678"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#023E46]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Location / Country</label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#023E46] bg-white"
                    >
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Oman">Oman</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Interest Category</label>
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="e.g. Wrapmaster Dispenser supply"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#023E46]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Quantities & Specific Requirements</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the number of locations, monthly supply estimates, or delivery schedule needed..."
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#023E46]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#023E46] hover:bg-[#084D57] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Corporate Enquiry</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Our B2B key account team replies within 4 business hours with customized tiered pricing.
                </p>
              </form>
            </div>
          ) : (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">Enquiry Received!</h3>
              <p className="text-xs text-slate-600 max-w-sm mb-6">
                Thank you, <span className="font-bold">{formData.name}</span>. A dedicated commercial hygiene specialist will review your request and contact you at <span className="font-bold text-[#023E46]">{formData.email}</span> with wholesale pricing.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-[#023E46] text-white text-xs font-bold hover:bg-[#084D57] transition-all"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
