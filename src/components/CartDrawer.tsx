'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeFromCart, subtotal, clearCart } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  // Form states for rapid checkout
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Dubai',
    notes: '',
  });

  if (!isCartOpen) return null;

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
      alert('Invalid code. Try "HYGIENE10" for 10% off your first order!');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  const handleFinish = () => {
    clearCart();
    setCheckoutStep('cart');
    closeCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={closeCart}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 bg-[#FAF7F0] border-b border-[#EAE3D2] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-[#023E46] text-white rounded-lg">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-[#023E46]">Your Shopping Cart</h2>
                <p className="text-xs text-slate-500 font-medium">
                  {items.length} {items.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-lg transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Bar */}
          <div className="px-6 py-3 bg-emerald-50/70 border-b border-emerald-100">
            <div className="flex items-center justify-between text-xs font-semibold text-[#023E46] mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                {amountToFreeDelivery === 0
                  ? '🎉 You unlocked Free UAE Delivery!'
                  : `Add AED ${amountToFreeDelivery.toFixed(0)} more for FREE UAE Delivery`}
              </span>
              <span>{deliveryProgress.toFixed(0)}%</span>
            </div>
            <div className="w-full h-1.5 bg-emerald-200/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                style={{ width: `${deliveryProgress}%` }}
              />
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {checkoutStep === 'cart' && (
              <>
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">Your cart is empty</h3>
                    <p className="text-xs text-slate-500 max-w-xs mb-6">
                      Explore our commercial cleaning cloths, dispensers, and food service supplies.
                    </p>
                    <Link
                      href="/shop"
                      onClick={closeCart}
                      className="px-6 py-2.5 rounded-xl bg-[#023E46] text-white text-xs font-bold hover:bg-[#084D57] transition-all flex items-center gap-2"
                    >
                      <span>Browse Products</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map(({ product, quantity }) => (
                      <div
                        key={product.id}
                        className="flex gap-4 p-3.5 rounded-2xl border border-slate-100 bg-[#FCFBF9] hover:border-slate-200 transition-all"
                      >
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white border border-slate-200 flex-shrink-0">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="text-sm font-bold text-slate-800 line-clamp-2 leading-snug">
                                {product.name}
                              </h4>
                              <button
                                onClick={() => removeFromCart(product.id)}
                                className="text-slate-400 hover:text-red-500 transition-colors p-1"
                                title="Remove item"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <span className="text-[11px] font-medium text-slate-500">
                              {product.size}
                            </span>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <span className="text-sm font-extrabold text-[#023E46]">
                              AED {(product.price * quantity).toFixed(2)}
                            </span>

                            {/* Quantity Selector */}
                            <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden shadow-xs">
                              <button
                                onClick={() => updateQuantity(product.id, quantity - 1)}
                                className="px-2 py-1 text-slate-600 hover:bg-slate-100 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2.5 py-1 text-xs font-bold text-slate-800 min-w-7 text-center">
                                {quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(product.id, quantity + 1)}
                                className="px-2 py-1 text-slate-600 hover:bg-slate-100 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Promo Code Input */}
                    <form onSubmit={applyPromo} className="pt-2">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Coupon code (e.g. HYGIENE10)"
                          className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 uppercase focus:outline-none focus:ring-2 focus:ring-[#023E46]"
                        />
                        <button
                          type="submit"
                          className="px-4 py-2 text-xs font-bold bg-slate-800 text-white rounded-xl hover:bg-slate-900 transition-all"
                        >
                          Apply
                        </button>
                      </div>
                      {promoApplied && (
                        <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                          ✓ Coupon applied! 10% discount deducted.
                        </p>
                      )}
                    </form>
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'checkout' && (
              <form onSubmit={handleCompleteOrder} className="space-y-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-slate-800">Delivery Details (UAE & GCC)</h3>
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="text-xs text-[#023E46] font-semibold underline"
                  >
                    Back to Cart
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ahmed Al Mansoori"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#023E46]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ahmed@example.com"
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#023E46]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#023E46]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Emirate / City *</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#023E46] bg-white"
                  >
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Ajman">Ajman</option>
                    <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                    <option value="Fujairah">Fujairah</option>
                    <option value="Umm Al Quwain">Umm Al Quwain</option>
                    <option value="Riyadh / Saudi Arabia">Riyadh / Saudi Arabia (GCC)</option>
                    <option value="Doha / Qatar">Doha / Qatar (GCC)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Delivery Address *</label>
                  <textarea
                    rows={2}
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Building, street, office/apartment number"
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#023E46]"
                  />
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Payment Method: Cash or Corporate Invoice on Delivery</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#023E46] hover:bg-[#084D57] text-white text-sm font-bold transition-all shadow-md active:scale-98"
                >
                  Confirm & Place Order (AED {total.toFixed(2)})
                </button>
              </form>
            )}

            {checkoutStep === 'success' && (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">Order Placed Successfully!</h3>
                <p className="text-xs text-slate-600 max-w-xs mb-4">
                  Thank you, <span className="font-bold">{formData.name || 'Valued Customer'}</span>. Your order reference is <span className="font-mono font-bold text-[#023E46]">#HI-{Math.floor(100000 + Math.random() * 900000)}</span>.
                </p>
                <div className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1 mb-6">
                  <p><span className="font-bold text-slate-700">Delivery:</span> 24-48 Hours to {formData.city}</p>
                  <p><span className="font-bold text-slate-700">Total Due:</span> AED {total.toFixed(2)}</p>
                  <p><span className="font-bold text-slate-700">Confirmation:</span> Sent to {formData.email || 'your email'}</p>
                </div>
                <button
                  onClick={handleFinish}
                  className="px-6 py-2.5 rounded-xl bg-[#023E46] text-white text-xs font-bold hover:bg-[#084D57] transition-all"
                >
                  Done & Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Footer Subtotal and Checkout Button */}
          {items.length > 0 && checkoutStep === 'cart' && (
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-800">AED {subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount (HYGIENE10)</span>
                    <span className="font-semibold">-AED {discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery (UAE)</span>
                  <span className="font-semibold text-slate-800">
                    {deliveryFee === 0 ? <span className="text-emerald-600">FREE</span> : `AED ${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between text-base font-black text-[#023E46]">
                  <span>Total</span>
                  <span>AED {total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => setCheckoutStep('checkout')}
                className="w-full py-3.5 px-4 rounded-xl bg-[#023E46] hover:bg-[#074D57] text-white text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-slate-400">
                Prices inclusive of 5% UAE VAT. Corporate accounts can request consolidated tax invoices.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
