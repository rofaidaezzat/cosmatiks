import { Minus, Plus,  ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXBzdGljayUyMGNvc21ldGljc3xlbnwxfHx8fDE3NjQ1NzQ2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Luxury Matte Lipstick Collection",
      price: 28.99,
      quantity: 2,
      shade: "Ruby Red",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1521223344201-d169129f7b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwY3JlYW0lMjBza2luY2FyZXxlbnwxfHx8fDE3NjQ1NzI0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Hydrating Face Cream",
      price: 45.0,
      quantity: 1,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1625093525885-282384697917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBwYWxldHRlfGVufDF8fHx8MTc2NDUxNDI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Nude Eyeshadow Palette",
      price: 42.0,
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-b border-rose-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
          <div className="text-center animate-fade-in">
            <p className="text-xs md:text-sm text-rose-600 mb-2 font-medium tracking-wide">Home / Shopping Cart</p>
            <h1 className="text-3xl md:text-5xl font-serif text-gray-900">Shopping Cart</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">

        {cartItems.length === 0 ? (
          <div className="bg-white p-12 md:p-16 text-center rounded-xl shadow-lg border border-rose-100 animate-fade-in-up">
            <div className="bg-rose-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-rose-600" />
            </div>
            <h2 className="text-2xl md:text-3xl mb-4 font-serif text-gray-900">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-lg border border-rose-100 overflow-hidden">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex gap-4 md:gap-6 p-4 md:p-6 border-b border-gray-100 last:border-b-0 hover:bg-rose-50/50 transition-colors duration-200 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2 gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-1 hover:text-rose-600 transition-colors cursor-pointer">{item.name}</h3>
                          {item.shade && (
                            <p className="text-sm text-gray-600">
                              Shade: <span className="font-medium text-gray-900">{item.shade}</span>
                            </p>
                          )}
                          <p className="text-lg font-bold text-rose-600 mt-2 md:hidden">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-rose-600 hover:bg-rose-50 p-2 rounded-full transition-all duration-200 flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 font-medium min-w-[3rem] text-center">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-lg md:text-xl font-bold text-rose-600 hidden md:block">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon */}
              <div className="bg-white rounded-xl shadow-lg border border-rose-100 p-6 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Have a coupon code?</h3>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                  />
                  <button className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-rose-100 sticky top-24 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl md:text-2xl font-serif mb-6 text-gray-900">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  {shipping === 0 && (
                    <div className="bg-green-50 border border-green-200 text-green-700 p-3 text-sm rounded-lg flex items-center gap-2">
                      <span>🎉</span>
                      <span>You've qualified for free shipping!</span>
                    </div>
                  )}
                  {shipping > 0 && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-700 p-3 text-sm rounded-lg">
                      Add <span className="font-semibold">${(50 - subtotal).toFixed(2)}</span> more for free shipping!
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-xl md:text-2xl">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-bold text-rose-600">${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white py-4 mb-4 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  to="/shop"
                  className="w-full border-2 border-gray-300 hover:border-rose-600 hover:text-rose-600 py-4 transition-all duration-300 font-medium rounded-lg text-center block"
                >
                  Continue Shopping
                </Link>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3 font-medium">We accept:</p>
                  <div className="flex flex-wrap gap-2">
                    {['VISA', 'MC', 'AMEX', 'PayPal'].map((method) => (
                      <div
                        key={method}
                        className="border border-gray-300 px-3 py-2 rounded-md text-xs font-medium text-gray-700 hover:border-rose-600 hover:text-rose-600 transition-colors"
                      >
                        {method}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
