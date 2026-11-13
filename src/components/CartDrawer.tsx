'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2, Truck, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeFromCart, subtotal, clearCart } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  // Form states for rapid checkout
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Dubai',
    notes: '',
  });

  const freeDeliveryThreshold = 150;
  const deliveryFee = subtotal >= freeDeliveryThreshold || subtotal === 0 ? 0 : 20;
  const total = Math.max(0, subtotal - discount + deliveryFee);
  const amountToFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const deliveryProgress = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'HYGIENE10') {
      setDiscount(subtotal * 0.1);
      setPromoApplied(true);
    } else {
      alert('Invalid code. Try "HYGIENE10" for 10% off your commercial order!');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'HI-' + Math.floor(100000 + Math.random() * 900000);
    setOrderRef(ref);
    setCheckoutStep('success');
  };

  const handleFinish = () => {
    clearCart();
    setCheckoutStep('cart');
    closeCart();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-[#021A1D]/65 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#EAE3D6]"
            >
              {/* Header */}
              <div className="px-6 py-4 sm:py-5 bg-[#FAF7F0] border-b border-[#EAE3D2] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#023E46] text-white rounded-xl shadow-xs">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#023E46]">Your Shopping Cart</h2>
                    <p className="text-xs text-[#5C7276] font-medium">
                      {items.length} {items.length === 1 ? 'item' : 'items'} in basket
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeCart}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-xl transition-colors cursor-pointer"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free UAE Delivery Bar */}
              <div className="px-6 py-3 bg-[#EBF4F2] border-b border-[#D6E6E3]">
                <div className="flex items-center justify-between text-xs font-semibold text-[#023E46] mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#0B5D68]" />
                    {amountToFreeDelivery === 0
                      ? '🎉 Unlocked Free UAE Delivery!'
                      : `Add AED ${amountToFreeDelivery.toFixed(0)} more for FREE UAE Delivery`}
                  </span>
                  <span>{deliveryProgress.toFixed(0)}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#D2E2DF] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${deliveryProgress}%` }}
                    transition={{ duration: 0.4 }}
                    className="h-full bg-[#0B5D68] rounded-full"
                  />
                </div>
              </div>

              {/* Step 1: Cart Items List */}
              {checkoutStep === 'cart' && (
                <>
                  <div className="flex-1 overflow-y-auto p-6 divide-y divide-slate-100">
                    {items.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                        <div className="w-16 h-16 rounded-3xl bg-[#FAF7F0] flex items-center justify-center text-[#899B9E] border border-[#EAE3D6]">
                          <ShoppingBag className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#052C33]">
                            Your cart is empty
                          </h3>
                          <p className="text-xs text-[#6A8084] max-w-xs mt-1">
                            Browse our professional cleaning, hygiene, and food-service ranges.
                          </p>
                        </div>
                        <button
                          onClick={closeCart}
                          className="px-6 py-2.5 rounded-full bg-[#023E46] hover:bg-[#034F5C] text-white text-xs font-bold transition-all shadow-xs"
                        >
                          Explore Products
                        </button>
                      </div>
                    ) : (
                      items.map((item) => (
                        <div key={item.product.id} className="py-4 flex gap-4 items-center">
                          <div className="relative w-18 h-18 rounded-2xl bg-[#FAF9F5] border border-[#EAE3D6] overflow-hidden shrink-0">
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              className="object-contain p-2"
                              sizes="72px"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-[#052C33] truncate">
                              {item.product.name}
                            </h4>
                            <p className="text-xs text-[#6A8084]">{item.product.size}</p>
                            <p className="text-xs font-bold text-[#052C33] mt-1">
                              AED {item.product.price}
                            </p>

                            <div className="flex items-center gap-2 mt-2">
                              <div className="flex items-center border border-[#E0D8CB] rounded-lg bg-[#FAF8F5]">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                  className="p-1 hover:text-[#FA7268] text-slate-500 transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="w-3.5 h-3.5" />
                                </button>
                                <span className="px-2.5 text-xs font-bold text-[#052C33]">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  className="p-1 hover:text-[#FA7268] text-slate-500 transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors ml-auto"
                                title="Remove item"
                                aria-label="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Summary & Checkout Footer */}
                  {items.length > 0 && (
                    <div className="p-6 bg-[#FAF8F5] border-t border-[#EAE3D6] space-y-4">
                      {/* Promo Code Input */}
                      <form onSubmit={applyPromo} className="flex gap-2">
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Promo code (e.g. HYGIENE10)"
                          className="flex-1 px-3.5 py-2 bg-white rounded-xl border border-[#DED7CA] text-xs outline-none focus:border-[#023E46]"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#023E46] text-white rounded-xl text-xs font-bold hover:bg-[#034F5C] transition-colors"
                        >
                          Apply
                        </button>
                      </form>

                      {promoApplied && (
                        <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" /> 10% Discount Applied!
                        </p>
                      )}

                      <div className="space-y-1.5 text-xs text-[#5C7276]">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span className="font-semibold text-[#052C33]">AED {subtotal.toFixed(2)}</span>
                        </div>
                        {discount > 0 && (
                          <div className="flex justify-between text-emerald-700">
                            <span>Promo Discount</span>
                            <span>-AED {discount.toFixed(2)}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span>UAE Delivery</span>
                          <span className="font-semibold text-[#052C33]">
                            {deliveryFee === 0 ? 'FREE' : `AED ${deliveryFee.toFixed(2)}`}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm font-extrabold text-[#052C33] pt-2 border-t border-[#EAE3D6]">
                          <span>Total</span>
                          <span>AED {total.toFixed(2)}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setCheckoutStep('checkout')}
                        className="w-full py-3.5 rounded-xl bg-[#023E46] hover:bg-[#034F5C] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer active:scale-98"
                      >
                        <span>Proceed to Express Checkout</span>
                        <ArrowRight className="w-4 h-4 text-[#FA7268]" />
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* Step 2: Express Checkout Form */}
              {checkoutStep === 'checkout' && (
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  <button
                    onClick={() => setCheckoutStep('cart')}
                    className="text-xs font-bold text-[#023E46] hover:text-[#FA7268] flex items-center gap-1"
                  >
                    &larr; Back to cart
                  </button>

                  <h3 className="font-serif text-lg font-bold text-[#052C33]">
                    Delivery Details
                  </h3>

                  <form onSubmit={handleCompleteOrder} className="space-y-3 text-xs">
                    <div>
                      <label className="block text-[#475C60] font-semibold mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ahmed Al Mansoori"
                        className="w-full p-2.5 rounded-xl border border-[#DED7CA] focus:border-[#023E46] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[#475C60] font-semibold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ahmed@example.ae"
                        className="w-full p-2.5 rounded-xl border border-[#DED7CA] focus:border-[#023E46] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[#475C60] font-semibold mb-1">Phone Number (UAE) *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full p-2.5 rounded-xl border border-[#DED7CA] focus:border-[#023E46] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[#475C60] font-semibold mb-1">Emirate *</label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-[#DED7CA] bg-white focus:border-[#023E46] outline-none"
                        >
                          <option value="Dubai">Dubai</option>
                          <option value="Abu Dhabi">Abu Dhabi</option>
                          <option value="Sharjah">Sharjah</option>
                          <option value="Ajman">Ajman</option>
                          <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                          <option value="Fujairah">Fujairah</option>
                          <option value="Umm Al Quwain">Umm Al Quwain</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[#475C60] font-semibold mb-1">Payment</label>
                        <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#DED7CA] font-medium text-slate-700">
                          Cash/Card on Delivery
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#475C60] font-semibold mb-1">Street Address &amp; Building *</label>
                      <textarea
                        required
                        rows={2}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Building, street, office/apartment number"
                        className="w-full p-2.5 rounded-xl border border-[#DED7CA] focus:border-[#023E46] outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-[#023E46] hover:bg-[#034F5C] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
                      >
                        <span>Place Commercial Order &bull; AED {total.toFixed(2)}</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 3: Success Screen */}
              {checkoutStep === 'success' && (
                <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#052C33]">
                      Order Confirmed!
                    </h3>
                    <p className="text-xs text-[#5C7276] mt-1">
                      Order Reference: <span className="font-mono font-bold text-[#023E46]">{orderRef}</span>
                    </p>
                    <p className="text-xs text-[#5C7276] mt-2 max-w-xs mx-auto">
                      Thank you, <span className="font-semibold text-[#052C33]">{formData.name}</span>. Our UAE logistics team will dispatch your products promptly to {formData.city}.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D6] text-xs text-left w-full space-y-1">
                    <p className="font-bold text-[#052C33]">Order Summary</p>
                    <p className="text-[#5C7276]">Total Paid: AED {total.toFixed(2)}</p>
                    <p className="text-[#5C7276]">Payment Method: Cash / Card on Delivery</p>
                  </div>

                  <button
                    onClick={handleFinish}
                    className="w-full py-3 rounded-xl bg-[#023E46] text-white text-xs font-bold hover:bg-[#034F5C] transition-colors"
                  >
                    Done &bull; Continue Shopping
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
