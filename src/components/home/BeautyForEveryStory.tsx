import {
  ChevronLeft,
  ChevronRight,
  Heart,
  BarChart3,
  Eye,
} from "lucide-react";
import { useState } from "react";
import img1 from "../../assets/da852720586700f5548eb4c50b55c8fe.jpg";
import img2 from "../../assets/680d5c717c4f11943420d79b1387b6c0.jpg";
import img3 from "../../assets/5f65cf6e3b041c144505740e960c2be9.jpg";
import img4 from "../../assets/604d618118094a2132099c4924b50f2c.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  rating: number;
  countdown?: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export function BeautyForEveryStory() {
  const [, setCurrentIndex] = useState(0);

  // Sample products - replace with your actual product data
  const products: Product[] = [
    {
      id: 1,
      name: "Laneige Lip Sleeping Mask Nuit Pure 20g",
      price: 249,
      originalPrice: 299,
      discount: 17,
      image: img1,
      rating: 5,
      countdown: { days: 79, hours: 5, minutes: 0, seconds: 35 },
    },
    {
      id: 2,
      name: "Ren Hyaluronic Acid 2% + B5 30ml",
      price: 249,
      originalPrice: 300,
      discount: 17,
      image: img2,
      rating: 5,
      countdown: { days: 78, hours: 24, minutes: 0, seconds: 35 },
    },
    {
      id: 3,
      name: "Glycolic Acid 7% Toning Solution 240ml",
      price: 13,
      originalPrice: 9,
      image: img3,
      rating: 4,
    },
    {
      id: 4,
      name: "Moon Fruit 1% Bakuchiol Alternative Serum",
      price: 300,
      image: img4,
      rating: 4,
    },
    {
      id: 5,
      name: "Overnight Glow Dark Spot Sleeping Cream 50ml",
      price: 140,
      originalPrice: 120,
      image: img4,
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : products.length - 5));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < products.length - 5 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-gray-500 mb-3 tracking-widest uppercase">
            NEW COLLECTION
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            BEAUTY FOR EVERY STORY
          </h2>
        </div>

        {/* Products Grid with Navigation */}
        <div className="relative px-12">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                {/* Product Card */}
                <div className="relative overflow-hidden bg-gray-50 hover:shadow-xl transition-shadow duration-300">
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-3 left-3 bg-black text-white px-2.5 py-1 text-xs font-bold z-10">
                      -{product.discount}%
                    </div>
                  )}

                  {/* Countdown Timer */}
                  {product.countdown && (
                    <div className="absolute bottom-3 left-3 bg-black/80 text-white px-2.5 py-1 text-[10px] font-medium z-10">
                      {product.countdown.days}d : {product.countdown.hours}h :{" "}
                      {product.countdown.minutes}m : {product.countdown.seconds}
                      s
                    </div>
                  )}

                  {/* Quick Action Icons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
                      <Heart className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
                      <BarChart3 className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
                      <Eye className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>

                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Add to Cart Button - Appears on Hover at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-20">
                    <button className="w-full bg-white text-black py-3 px-4 font-medium text-sm border-t border-gray-200 hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                      Add To Cart
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-4 px-1">
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 hover:text-rose-600 cursor-pointer transition-colors min-h-[40px]">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < product.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.originalPrice}
                      </span>
                    )}
                    <span className="text-base font-bold text-gray-900">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeautyForEveryStory;
