import { User, Package, Heart, MapPin, CreditCard, Settings, LogOut, Edit, Plus, Trash2, Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const orders = [
    {
      id: "ORD-2024-001",
      date: "Nov 25, 2024",
      status: "Delivered",
      total: 156.99,
      items: 3
    },
    {
      id: "ORD-2024-002",
      date: "Nov 18, 2024",
      status: "In Transit",
      total: 89.50,
      items: 2
    },
    {
      id: "ORD-2024-003",
      date: "Nov 10, 2024",
      status: "Delivered",
      total: 234.00,
      items: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-b border-rose-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 animate-fade-in">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <User className="w-10 h-10 md:w-12 md:h-12 text-rose-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-serif mb-2 text-gray-900">Emma Johnson</h1>
              <p className="text-gray-600 mb-2">emma.johnson@email.com</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Member since</span>
                <span className="font-semibold text-rose-600">January 2024</span>
              </div>
            </div>
            <button className="bg-white border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold flex items-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105">
              <Edit className="w-5 h-5" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-rose-100 sticky top-24 animate-fade-in-up">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === "profile"
                      ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md"
                      : "hover:bg-rose-50 text-gray-700 hover:text-rose-600"
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === "orders"
                      ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md"
                      : "hover:bg-rose-50 text-gray-700 hover:text-rose-600"
                  }`}
                >
                  <Package className="w-5 h-5" />
                  <span className="font-medium">Orders</span>
                </button>
                <button
                  onClick={() => setActiveTab("wishlist")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === "wishlist"
                      ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md"
                      : "hover:bg-rose-50 text-gray-700 hover:text-rose-600"
                  }`}
                >
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">Wishlist</span>
                </button>
                <button
                  onClick={() => setActiveTab("addresses")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === "addresses"
                      ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md"
                      : "hover:bg-rose-50 text-gray-700 hover:text-rose-600"
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Addresses</span>
                </button>
                <button
                  onClick={() => setActiveTab("payment")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === "payment"
                      ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md"
                      : "hover:bg-rose-50 text-gray-700 hover:text-rose-600"
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="font-medium">Payment</span>
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === "settings"
                      ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md"
                      : "hover:bg-rose-50 text-gray-700 hover:text-rose-600"
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">Settings</span>
                </button>
                <div className="border-t border-gray-200 mt-4 pt-2">
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-rose-600 hover:bg-rose-50 rounded-lg transition-all duration-200 font-medium">
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "profile" && (
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-rose-100 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-serif mb-6 text-gray-900">Profile Information</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">First Name</label>
                      <input
                        type="text"
                        defaultValue="Emma"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Johnson"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      defaultValue="emma.johnson@email.com"
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Date of Birth</label>
                    <input
                      type="date"
                      defaultValue="1990-05-15"
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-3 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="border-2 border-gray-300 hover:border-rose-600 hover:text-rose-600 px-8 py-3 transition-all duration-300 font-medium rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "orders" && (
              <div>
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-rose-100 mb-6 animate-fade-in-up">
                  <h2 className="text-2xl md:text-3xl font-serif mb-2 text-gray-900">Order History</h2>
                  <p className="text-gray-600">View and track all your orders</p>
                </div>

                <div className="space-y-4">
                  {orders.map((order, index) => (
                    <div
                      key={order.id}
                      className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-rose-100 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-1 text-gray-900">Order {order.id}</h3>
                          <p className="text-sm text-gray-600">{order.date} • {order.items} {order.items === 1 ? 'item' : 'items'}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-semibold ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-700 border border-green-200"
                                : "bg-blue-100 text-blue-700 border border-blue-200"
                            }`}
                          >
                            {order.status}
                          </span>
                          <span className="text-xl font-bold text-rose-600">${order.total.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <button className="border-2 border-gray-300 hover:border-rose-600 hover:text-rose-600 px-6 py-2 transition-all duration-300 font-medium rounded-lg flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                        {order.status === "Delivered" && (
                          <button className="border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white px-6 py-2 transition-all duration-300 font-medium rounded-lg">
                            Reorder
                          </button>
                        )}
                        {order.status === "In Transit" && (
                          <button className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-6 py-2 transition-all duration-300 font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 flex items-center gap-2">
                            <Package className="w-4 h-4" />
                            Track Order
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "addresses" && (
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-rose-100 animate-fade-in-up">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                  <h2 className="text-2xl md:text-3xl font-serif text-gray-900">Saved Addresses</h2>
                  <button className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-6 py-3 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add New Address
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl relative shadow-md">
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-4 py-1.5 text-sm font-semibold rounded-full shadow-md">
                      Default
                    </span>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-rose-100 p-2 rounded-lg">
                        <MapPin className="w-5 h-5 text-rose-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Home</h3>
                    </div>
                    <div className="bg-white p-4 rounded-lg mb-4 border border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        123 Main Street<br />
                        Apartment 4B<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-2 hover:underline transition-colors">
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <button className="text-gray-600 hover:text-red-600 font-medium flex items-center gap-2 hover:underline transition-colors">
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="border-2 border-gray-200 p-6 rounded-xl hover:border-rose-200 transition-all duration-200">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <MapPin className="w-5 h-5 text-gray-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Work</h3>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        456 Business Ave<br />
                        Suite 200<br />
                        New York, NY 10002<br />
                        United States
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-2 hover:underline transition-colors">
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <button className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-2 hover:underline transition-colors">
                        Set as Default
                      </button>
                      <button className="text-gray-600 hover:text-red-600 font-medium flex items-center gap-2 hover:underline transition-colors">
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "payment" && (
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-rose-100 animate-fade-in-up">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                  <h2 className="text-2xl md:text-3xl font-serif text-gray-900">Payment Methods</h2>
                  <button className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-6 py-3 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add New Card
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl relative shadow-md">
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-4 py-1.5 text-sm font-semibold rounded-full shadow-md">
                      Default
                    </span>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-md">
                        VISA
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">•••• •••• •••• 4242</p>
                        <p className="text-sm text-gray-600">Expires 12/25</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-2 hover:underline transition-colors">
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <button className="text-gray-600 hover:text-red-600 font-medium flex items-center gap-2 hover:underline transition-colors">
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="border-2 border-gray-200 p-6 rounded-xl hover:border-rose-200 transition-all duration-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-md">
                        MC
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">•••• •••• •••• 8888</p>
                        <p className="text-sm text-gray-600">Expires 06/26</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-2 hover:underline transition-colors">
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <button className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-2 hover:underline transition-colors">
                        Set as Default
                      </button>
                      <button className="text-gray-600 hover:text-red-600 font-medium flex items-center gap-2 hover:underline transition-colors">
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-rose-100 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-serif mb-8 text-gray-900">Account Settings</h2>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Email Preferences</h3>
                    <div className="space-y-4">
                      <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-colors">
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500" />
                        <span className="text-gray-700">Promotional emails and special offers</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-colors">
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500" />
                        <span className="text-gray-700">Order updates and shipping notifications</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-colors">
                        <input type="checkbox" className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500" />
                        <span className="text-gray-700">Product recommendations</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-white transition-colors">
                        <input type="checkbox" className="w-5 h-5 text-rose-600 rounded focus:ring-rose-500" />
                        <span className="text-gray-700">Beauty tips and tutorials</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Change Password</h3>
                    <div className="space-y-4 max-w-md">
                      <input
                        type="password"
                        placeholder="Current password"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                      />
                      <input
                        type="password"
                        placeholder="New password"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                      />
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200 hover:border-rose-300"
                      />
                      <button className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-3 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                        Update Password
                      </button>
                    </div>
                  </div>

                  <div className="border-t-2 border-red-200 pt-8 bg-red-50 p-6 rounded-xl">
                    <h3 className="mb-4 text-red-600 font-semibold text-lg">Danger Zone</h3>
                    <p className="text-sm text-gray-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                    <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 transition-all duration-300 font-semibold rounded-lg">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "wishlist" && (
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-rose-100 animate-fade-in-up">
                <div className="text-center py-12">
                  <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-rose-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif mb-4 text-gray-900">Your Wishlist is Empty</h2>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Start adding products you love to your wishlist!
                  </p>
                  <Link
                    to="/shop"
                    className="inline-block bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-3 transition-all duration-300 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Browse Products
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
