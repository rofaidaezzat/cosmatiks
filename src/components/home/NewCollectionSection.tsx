import {
  ShoppingCart,
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

export function NewCollectionSection() {
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
      countdown: { days: 79, hours: 5, minutes: 50, seconds: 45 },
    },
    {
      id: 2,
      name: "Ceo Afterglow Brightening Vitamin C Cream",
      price: 199,
      image: img2,
      rating: 5,
      countdown: { days: 24, hours: 57, minutes: 0, seconds: 0 },
    },
    {
      id: 3,
      name: "Granactive Retinoid 2% In Squalane 30ml",
      price: 199,
      originalPrice: 249,
      discount: 17,
      image: img3,
      rating: 5,
    },
    {
      id: 4,
      name: "Overnight Glow Dark Spot Sleeping Cream 50ml",
      price: 89,
      image: img4,
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : products.length - 4));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < products.length - 4 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8">
          {/* Left Side - Title */}
          <div className="flex-shrink-0 w-64">
            <p className="text-xs text-gray-500 mb-3 tracking-widest">
              NEW COLLECTION
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              NEW AT CULT
              <br />
              BEAUTY
            </h2>
            <button className="border-2 border-black px-6 py-2.5 hover:bg-black hover:text-white transition-all duration-300 text-sm font-medium tracking-wider">
              Shop All
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1 relative px-12">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  {/* Product Card */}
                  <div className="relative overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    {/* Discount Badge */}
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 text-[10px] font-bold z-10">
                        -{product.discount}%
                      </div>
                    )}

                    {/* Countdown Timer */}
                    {product.countdown && (
                      <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-0.5 text-[10px] font-medium z-10">
                        {product.countdown.days}d : {product.countdown.hours}h :{" "}
                        {product.countdown.minutes}m :{" "}
                        {product.countdown.seconds}s
                      </div>
                    )}

                    {/* Quick Action Icons */}
                    <div className="absolute top-2 right-2 flex flex-col gap-1.5 z-10">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md">
                        <Heart className="w-4 h-4 text-gray-700" />
                      </button>
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md">
                        <BarChart3 className="w-4 h-4 text-gray-700" />
                      </button>
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md">
                        <Eye className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>

                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Add to Cart Button - Appears on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      <button className="w-full bg-white text-black py-2 px-3 font-medium text-xs border-t border-gray-200 hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center gap-1.5">
                        <ShoppingCart className="w-4 h-4" />
                        Add To Cart
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mt-3">
                    <h3 className="text-xs font-medium text-gray-900 mb-1.5 line-clamp-2 hover:text-rose-600 cursor-pointer transition-colors">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-0.5 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${
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
                    <div className="flex items-center gap-1.5">
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-xs">
                          ${product.originalPrice}
                        </span>
                      )}
                      <span className="text-sm font-bold text-gray-900">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewCollectionSection;
