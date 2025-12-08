import { CreditCard, Lock, Truck, CheckCircle2, Package } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-b border-rose-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
          <div className="text-center mb-8 animate-fade-in">
            <p className="text-xs md:text-sm text-rose-600 mb-3 font-medium tracking-wide">
              Home / Checkout
            </p>
            <h1 className="text-3xl md:text-5xl font-serif text-gray-900 mb-8">
              Checkout
            </h1>

            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-2 md:gap-4 max-w-2xl mx-auto">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="ml-2 md:ml-3 font-medium text-gray-900">
                  Shipping
                </span>
              </div>
              <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full flex items-center justify-center font-semibold shadow-lg">
                  2
                </div>
                <span className="ml-2 md:ml-3 font-medium text-gray-900">
                  Payment
                </span>
              </div>
              <div className="w-12 md:w-16 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-semibold text-gray-600">
                  3
                </div>
                <span className="ml-2 md:ml-3 text-gray-500">Review</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-rose-100 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-rose-100 p-2 rounded-lg">
                  <Package className="w-6 h-6 text-rose-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900">
                  Shipping Address
                </h2>
              </div>
              <form className="space-y-4 md:space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      First Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Last Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Phone Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Street Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                    placeholder="123 Main Street"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Apartment, suite, etc.{" "}
                    <span className="text-gray-400 text-sm">(optional)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                    placeholder="Apt 4B"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      City <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      State <span className="text-rose-600">*</span>
                    </label>
                    <select className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300 cursor-pointer">
                      <option>Select State</option>
                      <option>New York</option>
                      <option>California</option>
                      <option>Texas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      ZIP Code <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Shipping Method */}
            <div
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-rose-100 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-rose-100 p-2 rounded-lg">
                  <Truck className="w-6 h-6 text-rose-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900">
                  Shipping Method
                </h2>
              </div>
              <div className="space-y-3">
                <label
                  className={`flex items-center justify-between p-5 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    shippingMethod === "standard"
                      ? "border-rose-600 bg-rose-50 shadow-md"
                      : "border-gray-300 hover:border-rose-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === "standard"}
                      onChange={() => setShippingMethod("standard")}
                      className="w-5 h-5 text-rose-600"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Standard Shipping
                      </p>
                      <p className="text-sm text-gray-600">5-7 business days</p>
                    </div>
                  </div>
                  <span className="font-bold text-rose-600">$5.99</span>
                </label>

                <label
                  className={`flex items-center justify-between p-5 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    shippingMethod === "express"
                      ? "border-rose-600 bg-rose-50 shadow-md"
                      : "border-gray-300 hover:border-rose-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shippingMethod === "express"}
                      onChange={() => setShippingMethod("express")}
                      className="w-5 h-5 text-rose-600"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Express Shipping
                      </p>
                      <p className="text-sm text-gray-600">2-3 business days</p>
                    </div>
                  </div>
                  <span className="font-bold text-rose-600">$12.99</span>
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-rose-100 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-rose-100 p-2 rounded-lg">
                  <CreditCard className="w-6 h-6 text-rose-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-gray-900">
                  Payment Information
                </h2>
              </div>

              <div className="space-y-3 mb-6">
                <label
                  className={`flex items-center p-5 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    paymentMethod === "card"
                      ? "border-rose-600 bg-rose-50 shadow-md"
                      : "border-gray-300 hover:border-rose-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="w-5 h-5 text-rose-600"
                  />
                  <span className="ml-4 font-semibold text-gray-900">
                    Credit / Debit Card
                  </span>
                </label>

                <label
                  className={`flex items-center p-5 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    paymentMethod === "paypal"
                      ? "border-rose-600 bg-rose-50 shadow-md"
                      : "border-gray-300 hover:border-rose-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="w-5 h-5 text-rose-600"
                  />
                  <span className="ml-4 font-semibold text-gray-900">
                    PayPal
                  </span>
                </label>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4 bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Card Number <span className="text-rose-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full border border-gray-300 px-4 py-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                      />
                      <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        Expiry Date <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">
                        CVV <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Cardholder Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                    />
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-600 bg-green-50 p-4 rounded-lg border border-green-200">
                <Lock className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-green-700">
                  Your payment information is encrypted and secure
                </span>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div
              className="bg-white p-6 rounded-xl shadow-lg border border-rose-100 sticky top-24 animate-fade-in-up"
              style={{ animationDelay: "150ms" }}
            >
              <h2 className="text-xl md:text-2xl font-serif mb-6 text-gray-900">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 rounded-lg hover:bg-rose-50 transition-colors duration-200"
                  >
                    <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        Qty:{" "}
                        <span className="font-semibold">{item.quantity}</span>
                      </p>
                    </div>
                    <span className="text-sm font-bold text-rose-600 flex-shrink-0">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-xl md:text-2xl">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-rose-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <Link
                to="/orderconfirmation"
                className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white py-4 mb-4 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
              >
                Place Order
              </Link>

              <p className="text-xs text-gray-600 text-center leading-relaxed">
                By placing your order, you agree to our{" "}
                <a href="#" className="text-rose-600 hover:underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-rose-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
