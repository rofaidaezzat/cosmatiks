import { useState } from "react";
import {
  Heart,
  Share2,
  Star,
  ShoppingCart,
  Minus,
  Plus,
  Check,
} from "lucide-react";
import { ProductCard } from "../components/Shop/ProductCard";

export function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const productImages = [
    "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXBzdGljayUyMGNvc21ldGljc3xlbnwxfHx8fDE3NjQ1NzQ2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1614159102369-effd79eadadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2NDUwOTcyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYWtldXB8ZW58MXx8fHwxNzY0NTg3NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  const relatedProducts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1521223344201-d169129f7b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwY3JlYW0lMjBza2luY2FyZXxlbnwxfHx8fDE3NjQ1NzI0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Hydrating Face Cream",
      category: "Skincare",
      price: 45.0,
      rating: 4.9,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1618331680655-5c23b9c4d29b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBtYWtldXAlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjQ1MDE1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Professional Makeup Brush Set",
      category: "Tools",
      price: 65.0,
      rating: 4.7,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1614159102369-effd79eadadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2NDUwOTcyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Vitamin C Serum Bundle",
      category: "Skincare",
      price: 52.0,
      rating: 4.9,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1625093525885-282384697917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBwYWxldHRlfGVufDF8fHx8MTc2NDUxNDI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      name: "Nude Eyeshadow Palette",
      category: "Makeup",
      price: 42.0,
      rating: 4.6,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="#" className="hover:text-rose-600">
              Home
            </a>
            <span>/</span>
            <a href="#" className="hover:text-rose-600">
              Makeup
            </a>
            <span>/</span>
            <span className="text-gray-900">
              Luxury Matte Lipstick Collection
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={productImages[selectedImage]}
                alt="Product"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 ${
                    selectedImage === index
                      ? "border-rose-600"
                      : "border-gray-200"
                  } overflow-hidden`}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-600">(4.8) 245 Reviews</span>
            </div>

            <h1 className="text-4xl mb-4">Luxury Matte Lipstick Collection</h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl text-rose-600">$28.99</span>
              <span className="text-xl text-gray-400 line-through">$35.99</span>
              <span className="bg-rose-100 text-rose-600 px-3 py-1">
                20% OFF
              </span>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Experience long-lasting, vibrant color with our luxurious matte
              lipstick collection. Enriched with nourishing ingredients, these
              lipsticks provide intense pigmentation while keeping your lips
              soft and hydrated all day long.
            </p>

            {/* Features */}
            <div className="bg-gray-50 p-6 mb-6">
              <h3 className="mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Long-lasting formula (up to 12 hours)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Enriched with Vitamin E and natural oils
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cruelty-free and vegan</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Available in 12 stunning shades
                  </span>
                </li>
              </ul>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="mb-3">Select Shade</h3>
              <div className="flex gap-2">
                {[
                  "#8B0000",
                  "#DC143C",
                  "#FF1493",
                  "#C71585",
                  "#8B4513",
                  "#CD5C5C",
                ].map((color, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-rose-600"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-gray-600">In Stock</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-6">
              <button className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-4 flex items-center justify-center gap-2 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="border border-gray-300 hover:border-rose-600 hover:text-rose-600 p-4 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
              <button className="border border-gray-300 hover:border-rose-600 hover:text-rose-600 p-4 transition-colors">
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 transition-colors">
              Buy Now
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t pt-12">
          <div className="flex gap-8 border-b mb-8">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-4 ${
                activeTab === "description"
                  ? "border-b-2 border-rose-600 text-rose-600"
                  : "text-gray-600"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("ingredients")}
              className={`pb-4 ${
                activeTab === "ingredients"
                  ? "border-b-2 border-rose-600 text-rose-600"
                  : "text-gray-600"
              }`}
            >
              Ingredients
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-4 ${
                activeTab === "reviews"
                  ? "border-b-2 border-rose-600 text-rose-600"
                  : "text-gray-600"
              }`}
            >
              Reviews (245)
            </button>
          </div>

          {activeTab === "description" && (
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Luxury Matte Lipstick Collection offers an exquisite blend
                of high-performance color and caring ingredients. Each shade has
                been carefully formulated to provide intense, transfer-resistant
                color that lasts throughout your day.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The unique matte formula glides on smoothly without drying,
                thanks to our proprietary blend of nourishing oils and vitamin
                E. Whether you're looking for a bold statement lip or an
                everyday nude, this collection has the perfect shade for every
                occasion.
              </p>
            </div>
          )}

          {activeTab === "ingredients" && (
            <div>
              <p className="text-gray-700 mb-4">
                Dimethicone, Bis-Diglyceryl Polyacyladipate-2, Diisostearyl
                Malate, Phenyl Trimethicone, Vitamin E, Jojoba Oil, Shea Butter,
                [+/- May Contain: CI 77891, CI 15850, CI 45410, CI 77491, CI
                77492, CI 77499]
              </p>
              <p className="text-sm text-gray-600">
                *Free from parabens, sulfates, and phthalates
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              {[1, 2, 3].map((review) => (
                <div key={review} className="border-b pb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4>Sarah Johnson</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          Verified Purchase
                        </span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-gray-700">
                    Absolutely love this lipstick! The color is gorgeous and it
                    really does last all day. My lips don't feel dry at all
                    which is amazing for a matte formula.
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
