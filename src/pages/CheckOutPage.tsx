import { CreditCard, Lock } from "lucide-react";

import { useState } from "react";

export function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const cartItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXBzdGljayUyMGNvc21ldGljc3xlbnwxfHx8fDE3NjQ1NzQ2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Luxury Matte Lipstick Collection",
      price: 28.99,
      quantity: 2,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1521223344201-d169129f7b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwY3JlYW0lMjBza2luY2FyZXxlbnwxfHx8fDE3NjQ1NzI0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Hydrating Face Cream",
      price: 45.0,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = shippingMethod === "express" ? 12.99 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center">
                1
              </div>
              <span className="ml-2">Shipping</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center text-gray-400">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                2
              </div>
              <span className="ml-2">Payment</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300"></div>
            <div className="flex items-center text-gray-400">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                3
              </div>
              <span className="ml-2">Review</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="bg-white p-6">
              <h2 className="text-2xl mb-6">Shipping Address</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                  />
                </div>

                <div>
                  <label className="block mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                  />
                </div>

                <div>
                  <label className="block mb-2">Street Address *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                  />
                </div>

                <div>
                  <label className="block mb-2">
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-2">City *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">State *</label>
                    <select className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600">
                      <option>Select State</option>
                      <option>New York</option>
                      <option>California</option>
                      <option>Texas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2">ZIP Code *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Shipping Method */}
            <div className="bg-white p-6">
              <h2 className="text-2xl mb-6">Shipping Method</h2>
              <div className="space-y-3">
                <label
                  className={`flex items-center justify-between p-4 border-2 cursor-pointer transition-colors ${
                    shippingMethod === "standard"
                      ? "border-rose-600 bg-rose-50"
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === "standard"}
                      onChange={() => setShippingMethod("standard")}
                      className="w-4 h-4 text-rose-600"
                    />
                    <div>
                      <p>Standard Shipping</p>
                      <p className="text-sm text-gray-600">5-7 business days</p>
                    </div>
                  </div>
                  <span>$5.99</span>
                </label>

                <label
                  className={`flex items-center justify-between p-4 border-2 cursor-pointer transition-colors ${
                    shippingMethod === "express"
                      ? "border-rose-600 bg-rose-50"
                      : "border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === "express"}
                      onChange={() => setShippingMethod("express")}
                      className="w-4 h-4 text-rose-600"
                    />
                    <div>
                      <p>Express Shipping</p>
                      <p className="text-sm text-gray-600">2-3 business days</p>
                    </div>
                  </div>
                  <span>$12.99</span>
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6">
              <h2 className="text-2xl mb-6">Payment Information</h2>

              <div className="space-y-4 mb-6">
                <label
                  className={`flex items-center p-4 border-2 cursor-pointer transition-colors ${
                    paymentMethod === "card"
                      ? "border-rose-600 bg-rose-50"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="w-4 h-4 text-rose-600"
                  />
                  <span className="ml-3">Credit / Debit Card</span>
                </label>

                <label
                  className={`flex items-center p-4 border-2 cursor-pointer transition-colors ${
                    paymentMethod === "paypal"
                      ? "border-rose-600 bg-rose-50"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="w-4 h-4 text-rose-600"
                  />
                  <span className="ml-3">PayPal</span>
                </label>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2">Card Number *</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                      />
                      <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2">Expiry Date *</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">CVV *</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Cardholder Name *</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                    />
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                <Lock className="w-4 h-4" />
                <span>Your payment information is encrypted and secure</span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 sticky top-24">
              <h2 className="text-xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm mb-1">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-xl">
                  <span>Total</span>
                  <span className="text-rose-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 mb-4 transition-colors">
                Place Order
              </button>

              <p className="text-xs text-gray-600 text-center">
                By placing your order, you agree to our Terms & Conditions and
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
