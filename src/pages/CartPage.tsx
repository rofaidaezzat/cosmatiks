import { Minus, Plus, X, ShoppingBag } from "lucide-react";

import { useState } from "react";

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white p-12 text-center">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Add some products to get started!
            </p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 transition-colors">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-6 p-6 border-b last:border-b-0"
                  >
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="mb-1">{item.name}</h3>
                          {item.shade && (
                            <p className="text-sm text-gray-600">
                              Shade: {item.shade}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-rose-600 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-300">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-gray-100"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-rose-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon */}
              <div className="bg-white mt-6 p-6">
                <h3 className="mb-4">Have a coupon code?</h3>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 border border-gray-300 px-4 py-2 focus:outline-none focus:border-rose-600"
                  />
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white p-6 sticky top-24">
                <h3 className="text-xl mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {shipping === 0 && (
                    <div className="bg-green-50 text-green-700 p-3 text-sm">
                      You've qualified for free shipping! 🎉
                    </div>
                  )}
                  {shipping > 0 && (
                    <div className="bg-rose-50 text-rose-700 p-3 text-sm">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </div>
                  )}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-xl">
                    <span>Total</span>
                    <span className="text-rose-600">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 mb-4 transition-colors">
                  Proceed to Checkout
                </button>

                <button className="w-full border border-gray-300 hover:border-rose-600 hover:text-rose-600 py-4 transition-colors">
                  Continue Shopping
                </button>

                <div className="mt-6 text-sm text-gray-600">
                  <p className="mb-2">We accept:</p>
                  <div className="flex gap-2">
                    <div className="border border-gray-300 px-3 py-2">VISA</div>
                    <div className="border border-gray-300 px-3 py-2">MC</div>
                    <div className="border border-gray-300 px-3 py-2">AMEX</div>
                    <div className="border border-gray-300 px-3 py-2">
                      PayPal
                    </div>
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
