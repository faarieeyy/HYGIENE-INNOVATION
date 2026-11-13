'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Building, ShieldCheck, Mail, Phone, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function EnquiryModal() {
  const { isEnquiryOpen, closeEnquiry, enquirySubject } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setSubmitted(false);
    closeEnquiry();
  };

  return (
    <AnimatePresence>
      {isEnquiryOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#021A1D]/70 backdrop-blur-md transition-opacity"
          />

          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 border border-[#EAE3D6]"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors z-10 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <div>
                  <div className="mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FA7268] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>COMMERCIAL &amp; BULK SUPPLY</span>
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#052C33] mt-1 tracking-tight">
                      Request Business Outfitting Quote
                    </h3>
                    <p className="text-xs text-[#5C7276] mt-1">
                      Our commercial supply specialists respond within 2 business hours across UAE &amp; GCC.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#475C60] font-semibold mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Contact person"
                          className="w-full p-2.5 rounded-xl border border-[#DED7CA] focus:border-[#023E46] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[#475C60] font-semibold mb-1">Company / Facility *</label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Organization name"
                          className="w-full p-2.5 rounded-xl border border-[#DED7CA] focus:border-[#023E46] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#475C60] font-semibold mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="corporate@domain.ae"
                          className="w-full p-2.5 rounded-xl border border-[#DED7CA] focus:border-[#023E46] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[#475C60] font-semibold mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 123 4567"
                          className="w-full p-2.5 rounded-xl border border-[#DED7CA] focus:border-[#023E46] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#475C60] font-semibold mb-1">Requirement Category</label>
                      <input
                        type="text"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-[#DED7CA] bg-[#FAF8F5] focus:border-[#023E46] outline-none font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[#475C60] font-semibold mb-1">Requirements &amp; Estimated Quantity *</label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please tell us which products, recurring volume, and delivery location you require..."
                        className="w-full p-2.5 rounded-xl border border-[#DED7CA] focus:border-[#023E46] outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl bg-[#023E46] hover:bg-[#034F5C] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-98"
                    >
                      {loading ? (
                        <span>Submitting enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Commercial Request</span>
                          <Send className="w-3.5 h-3.5 text-[#FA7268]" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#052C33]">
                      Enquiry Submitted Successfully
                    </h3>
                    <p className="text-xs text-[#5C7276] mt-2 max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-[#052C33]">{formData.name}</span>. A dedicated commercial account manager will contact {formData.company} with wholesale pricing within 2 business hours.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-xl bg-[#023E46] text-white text-xs font-bold hover:bg-[#034F5C] transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
