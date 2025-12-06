import { X, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXBzdGljayUyMGNvc21ldGljc3xlbnwxfHx8fDE3NjQ1NzQ2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Luxury Matte Lipstick Collection",
      category: "Makeup",
      price: 28.99,
      rating: 4.8,
      inStock: true,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1625093525885-282384697917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBwYWxldHRlfGVufDF8fHx8MTc2NDUxNDI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Nude Eyeshadow Palette",
      category: "Makeup",
      price: 42.0,
      rating: 4.6,
      inStock: true,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2NDQ3MzYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Signature Eau de Parfum",
      category: "Fragrance",
      price: 89.0,
      rating: 4.9,
      inStock: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1521223344201-d169129f7b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwY3JlYW0lMjBza2luY2FyZXxlbnwxfHx8fDE3NjQ1NzI0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Hydrating Face Cream",
      category: "Skincare",
      price: 45.0,
      rating: 4.9,
      inStock: true,
    },
  ]);

  const removeItem = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl mb-2">My Wishlist</h1>
            <p className="text-gray-600">{wishlistItems.length} items saved</p>
          </div>
          <Heart className="w-12 h-12 text-rose-600 fill-rose-600" />
        </div>

        {wishlistItems.length === 0 ? (
          <div className="bg-white p-12 text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">
              Save your favorite products to buy them later!
            </p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 transition-colors">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white relative group">
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-50"
                >
                  <X className="w-4 h-4 text-gray-700" />
                </button>

                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white text-gray-900 px-4 py-2">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">{item.category}</p>
                  <h3 className="mb-2 line-clamp-2">{item.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-rose-600">
                      ${item.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm text-gray-600">
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  {item.inStock ? (
                    <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 flex items-center justify-center gap-2 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      className="w-full bg-gray-300 text-gray-600 py-3 cursor-not-allowed"
                      disabled
                    >
                      Notify When Available
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {wishlistItems.length > 0 && (
          <div className="mt-8 bg-white p-6 text-center">
            <h3 className="text-xl mb-2">Share Your Wishlist</h3>
            <p className="text-gray-600 mb-4">
              Share your wishlist with friends and family!
            </p>
            <div className="flex gap-4 justify-center">
              <button className="border border-gray-300 hover:border-rose-600 px-6 py-2 transition-colors">
                Copy Link
              </button>
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 transition-colors">
                Share via Email
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default WishlistPage;
