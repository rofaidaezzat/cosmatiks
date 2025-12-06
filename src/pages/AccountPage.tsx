import { User, Package, Heart, MapPin, CreditCard, Settings, LogOut } from "lucide-react";
import { useState } from "react";

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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-rose-600" />
            </div>
            <div>
              <h1 className="text-3xl mb-1">Emma Johnson</h1>
              <p className="text-gray-600">emma.johnson@email.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-4 sticky top-24">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                    activeTab === "profile" ? "bg-rose-50 text-rose-600" : "hover:bg-gray-50"
                  }`}
                >
                  <User className="w-5 h-5" />
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                    activeTab === "orders" ? "bg-rose-50 text-rose-600" : "hover:bg-gray-50"
                  }`}
                >
                  <Package className="w-5 h-5" />
                  Orders
                </button>
                <button
                  onClick={() => setActiveTab("wishlist")}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                    activeTab === "wishlist" ? "bg-rose-50 text-rose-600" : "hover:bg-gray-50"
                  }`}
                >
                  <Heart className="w-5 h-5" />
                  Wishlist
                </button>
                <button
                  onClick={() => setActiveTab("addresses")}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                    activeTab === "addresses" ? "bg-rose-50 text-rose-600" : "hover:bg-gray-50"
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  Addresses
                </button>
                <button
                  onClick={() => setActiveTab("payment")}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                    activeTab === "payment" ? "bg-rose-50 text-rose-600" : "hover:bg-gray-50"
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  Payment Methods
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                    activeTab === "settings" ? "bg-rose-50 text-rose-600" : "hover:bg-gray-50"
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  Settings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-rose-600 hover:bg-gray-50 transition-colors border-t mt-4">
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "profile" && (
              <div className="bg-white p-8">
                <h2 className="text-2xl mb-6">Profile Information</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="Emma"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Johnson"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue="emma.johnson@email.com"
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">Date of Birth</label>
                    <input
                      type="date"
                      defaultValue="1990-05-15"
                      className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button type="submit" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 transition-colors">
                      Save Changes
                    </button>
                    <button type="button" className="border border-gray-300 hover:border-rose-600 px-8 py-3 transition-colors">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "orders" && (
              <div>
                <div className="bg-white p-6 mb-6">
                  <h2 className="text-2xl mb-4">Order History</h2>
                  <p className="text-gray-600">View and track all your orders</p>
                </div>

                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="bg-white p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="mb-1">Order {order.id}</h3>
                          <p className="text-sm text-gray-600">{order.date} • {order.items} items</p>
                        </div>
                        <div className="flex items-center gap-4 mt-4 md:mt-0">
                          <span className={`px-4 py-1 ${
                            order.status === "Delivered" 
                              ? "bg-green-100 text-green-700" 
                              : "bg-blue-100 text-blue-700"
                          }`}>
                            {order.status}
                          </span>
                          <span className="text-rose-600">${order.total.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button className="border border-gray-300 hover:border-rose-600 hover:text-rose-600 px-6 py-2 transition-colors">
                          View Details
                        </button>
                        {order.status === "Delivered" && (
                          <button className="border border-gray-300 hover:border-rose-600 hover:text-rose-600 px-6 py-2 transition-colors">
                            Reorder
                          </button>
                        )}
                        {order.status === "In Transit" && (
                          <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 transition-colors">
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
              <div className="bg-white p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl">Saved Addresses</h2>
                  <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 transition-colors">
                    Add New Address
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-300 p-6 relative">
                    <span className="absolute top-4 right-4 bg-rose-100 text-rose-600 px-3 py-1 text-sm">
                      Default
                    </span>
                    <h3 className="mb-2">Home</h3>
                    <p className="text-gray-600 mb-4">
                      123 Main Street<br />
                      Apartment 4B<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                    <div className="flex gap-4">
                      <button className="text-rose-600 hover:underline">Edit</button>
                      <button className="text-gray-600 hover:underline">Remove</button>
                    </div>
                  </div>

                  <div className="border border-gray-300 p-6">
                    <h3 className="mb-2">Work</h3>
                    <p className="text-gray-600 mb-4">
                      456 Business Ave<br />
                      Suite 200<br />
                      New York, NY 10002<br />
                      United States
                    </p>
                    <div className="flex gap-4">
                      <button className="text-rose-600 hover:underline">Edit</button>
                      <button className="text-rose-600 hover:underline">Set as Default</button>
                      <button className="text-gray-600 hover:underline">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "payment" && (
              <div className="bg-white p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl">Payment Methods</h2>
                  <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 transition-colors">
                    Add New Card
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-300 p-6 relative">
                    <span className="absolute top-4 right-4 bg-rose-100 text-rose-600 px-3 py-1 text-sm">
                      Default
                    </span>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                        VISA
                      </div>
                      <div>
                        <p>•••• •••• •••• 4242</p>
                        <p className="text-sm text-gray-600">Expires 12/25</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button className="text-rose-600 hover:underline">Edit</button>
                      <button className="text-gray-600 hover:underline">Remove</button>
                    </div>
                  </div>

                  <div className="border border-gray-300 p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">
                        MC
                      </div>
                      <div>
                        <p>•••• •••• •••• 8888</p>
                        <p className="text-sm text-gray-600">Expires 06/26</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button className="text-rose-600 hover:underline">Edit</button>
                      <button className="text-rose-600 hover:underline">Set as Default</button>
                      <button className="text-gray-600 hover:underline">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white p-8">
                <h2 className="text-2xl mb-6">Account Settings</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4">Email Preferences</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-rose-600" />
                        <span>Promotional emails and special offers</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-rose-600" />
                        <span>Order updates and shipping notifications</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-rose-600" />
                        <span>Product recommendations</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-rose-600" />
                        <span>Beauty tips and tutorials</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4">Change Password</h3>
                    <div className="space-y-4 max-w-md">
                      <input
                        type="password"
                        placeholder="Current password"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                      />
                      <input
                        type="password"
                        placeholder="New password"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                      />
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-rose-600"
                      />
                      <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 transition-colors">
                        Update Password
                      </button>
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="mb-4 text-rose-600">Danger Zone</h3>
                    <button className="border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white px-6 py-3 transition-colors">
                      Delete Account
                    </button>
                  </div>
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
