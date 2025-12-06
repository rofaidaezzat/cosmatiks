import { CheckCircle, Package, Mail, MapPin, CreditCard } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50">
      {/* Success Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl mb-4">Order Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for your order. We've sent a confirmation email to{" "}
              <span className="text-rose-600">{orderDetails.email}</span>
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Order Number:</span>
              <span className="text-rose-600">{orderDetails.orderNumber}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Items */}
              <div className="bg-white p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="w-6 h-6 text-rose-600" />
                  <h2 className="text-2xl">Order Items</h2>
                </div>
                <div className="space-y-4">
                  {orderDetails.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-4 border-b last:border-b-0"
                    >
                      <div className="w-20 h-20 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-rose-600" />
                  <h2 className="text-2xl">Shipping Address</h2>
                </div>
                <div className="text-gray-600">
                  <p>{orderDetails.shippingAddress.name}</p>
                  <p>{orderDetails.shippingAddress.street}</p>
                  <p>{orderDetails.shippingAddress.city}</p>
                  <p>{orderDetails.shippingAddress.country}</p>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-rose-600" />
                  <h2 className="text-2xl">Payment Method</h2>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">
                    VISA
                  </div>
                  <span className="text-gray-600">
                    {orderDetails.paymentMethod}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 sticky top-24">
                <h2 className="text-2xl mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${orderDetails.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>${orderDetails.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${orderDetails.tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between text-xl">
                    <span>Total</span>
                    <span className="text-rose-600">
                      ${orderDetails.total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="bg-green-50 p-4 mb-6">
                  <p className="text-sm text-green-800">
                    <strong>Estimated Delivery:</strong>
                    <br />
                    {orderDetails.estimatedDelivery}
                  </p>
                </div>

                <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 mb-3 transition-colors">
                  Track Your Order
                </button>

                <button className="w-full border border-gray-300 hover:border-rose-600 hover:text-rose-600 py-3 transition-colors">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-white p-8 mt-8">
            <h2 className="text-2xl mb-6">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="mb-2">Order Confirmation</h3>
                <p className="text-sm text-gray-600">
                  You'll receive an email confirmation with your order details
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="mb-2">Order Processing</h3>
                <p className="text-sm text-gray-600">
                  We'll prepare your items for shipment within 1-2 business days
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="mb-2">Delivery</h3>
                <p className="text-sm text-gray-600">
                  Your order will arrive at your doorstep within 5-7 business
                  days
                </p>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-rose-50 p-8 mt-8 text-center">
            <h3 className="text-xl mb-4">Need Help with Your Order?</h3>
            <p className="text-gray-600 mb-6">
              Our customer service team is here to assist you with any questions
              or concerns.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 transition-colors">
                Contact Support
              </button>
              <button className="border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white px-6 py-3 transition-colors">
                View FAQs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
