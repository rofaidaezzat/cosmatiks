import { CheckCircle, Package, Mail, MapPin, CreditCard, Truck, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function OrderConfirmationPage() {
  const orderDetails = {
    orderNumber: "ORD-2024-12345",
    orderDate: "December 1, 2024",
    estimatedDelivery: "December 8-10, 2024",
    email: "emma.johnson@email.com",
    items: [
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
    ],
    shippingAddress: {
      name: "Emma Johnson",
      street: "123 Main Street, Apt 4B",
      city: "New York, NY 10001",
      country: "United States",
    },
    paymentMethod: "•••• •••• •••• 4242",
    subtotal: 102.98,
    shipping: 5.99,
    tax: 8.24,
    total: 117.21,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-gray-50">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-green-100 border-b border-green-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                <CheckCircle className="w-14 h-14 md:w-16 md:h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-rose-500 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">Order Confirmed!</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
              Thank you for your order. We've sent a confirmation email to{" "}
              <span className="text-rose-600 font-semibold">{orderDetails.email}</span>
            </p>
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-green-200">
              <span className="text-gray-600 font-medium">Order Number:</span>
              <span className="text-rose-600 font-bold text-lg">{orderDetails.orderNumber}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Items */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-rose-100 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <Package className="w-6 h-6 text-rose-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif text-gray-900">Order Items</h2>
                </div>
                <div className="space-y-4">
                  {orderDetails.items.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 rounded-lg border border-gray-100 hover:bg-rose-50 hover:border-rose-200 transition-all duration-200"
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
                        <h3 className="font-semibold text-gray-900 mb-1 hover:text-rose-600 transition-colors">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          Quantity: <span className="font-semibold text-gray-900">{item.quantity}</span>
                        </p>
                      </div>
                      <span className="text-lg font-bold text-rose-600 flex-shrink-0">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-rose-100 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <MapPin className="w-6 h-6 text-rose-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif text-gray-900">Shipping Address</h2>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 space-y-2">
                  <p className="font-semibold text-gray-900">{orderDetails.shippingAddress.name}</p>
                  <p className="text-gray-700">{orderDetails.shippingAddress.street}</p>
                  <p className="text-gray-700">{orderDetails.shippingAddress.city}</p>
                  <p className="text-gray-700">{orderDetails.shippingAddress.country}</p>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-rose-100 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <CreditCard className="w-6 h-6 text-rose-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif text-gray-900">Payment Method</h2>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="w-14 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-md">
                    VISA
                  </div>
                  <span className="text-gray-700 font-medium">
                    {orderDetails.paymentMethod}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-rose-100 sticky top-24 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
                <h2 className="text-xl md:text-2xl font-serif mb-6 text-gray-900">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">${orderDetails.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">${orderDetails.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span className="font-semibold">${orderDetails.tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-xl md:text-2xl">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-bold text-rose-600">
                      ${orderDetails.total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-5 rounded-lg mb-6">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-green-800 mb-1">
                        Estimated Delivery:
                      </p>
                      <p className="text-sm text-green-700">
                        {orderDetails.estimatedDelivery}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/account"
                  className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white py-4 mb-3 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Truck className="w-5 h-5" />
                  Track Your Order
                </Link>

                <Link
                  to="/shop"
                  className="w-full border-2 border-gray-300 hover:border-rose-600 hover:text-rose-600 py-4 transition-all duration-300 font-medium rounded-lg text-center flex items-center justify-center gap-2"
                >
                  Continue Shopping
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-rose-100 mt-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center text-gray-900">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-6 rounded-xl hover:bg-rose-50 transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-10 h-10 text-rose-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Order Confirmation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  You'll receive an email confirmation with your order details
                </p>
              </div>
              <div className="text-center p-6 rounded-xl hover:bg-rose-50 transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-10 h-10 text-rose-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Order Processing</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We'll prepare your items for shipment within 1-2 business days
                </p>
              </div>
              <div className="text-center p-6 rounded-xl hover:bg-rose-50 transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-rose-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Delivery</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your order will arrive at your doorstep within 5-7 business days
                </p>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 md:p-10 rounded-xl shadow-lg border border-rose-200 mt-8 text-center animate-fade-in-up" style={{ animationDelay: "500ms" }}>
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-4 text-gray-900">Need Help with Your Order?</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Our customer service team is here to assist you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-3 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Support
              </Link>
              <Link
                to="/faq"
                className="border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white px-8 py-3 transition-all duration-300 font-semibold rounded-lg"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
