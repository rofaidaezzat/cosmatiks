import { Heart, BarChart2, Eye } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number | string;
  originalPrice?: number;
  rating: number;
  sale?: boolean;
  salePercent?: string;
  countdown?: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export function ProductCard({
  image,
  name,
  price,
  originalPrice,
  rating,
  sale,
  salePercent,
  countdown,
}: ProductCardProps) {
  return (
    <div className="group relative bg-white overflow-hidden transition-all duration-300 border border-gray-100 hover:border-rose-200 hover:shadow-xl rounded-lg transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-rose-50 to-pink-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
        />

        {/* Sale Badge */}
        {sale && salePercent && (
          <div className="absolute top-3 right-3 bg-rose-600 text-white text-xs px-3 py-1.5 font-bold z-10 rounded-full shadow-lg animate-pulse">
            {salePercent}
          </div>
        )}

        {/* Hover Icons - Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all duration-200 shadow-lg transform hover:scale-110">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all duration-200 shadow-lg transform hover:scale-110">
            <BarChart2 className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all duration-200 shadow-lg transform hover:scale-110">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Countdown Timer */}
        {countdown && (
          <div className="absolute bottom-3 left-3 right-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-3 py-2 text-center shadow-lg rounded-md">
            <div className="text-xs font-bold">
              {countdown.days}d : {countdown.hours}h : {countdown.minutes}m : {countdown.seconds}s
            </div>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-5 text-center">
        <h3 className="text-sm text-gray-900 mb-3 line-clamp-2 min-h-[40px] hover:text-rose-600 cursor-pointer transition-colors font-medium group-hover:font-semibold">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-sm transition-transform duration-200 ${
                i < rating 
                  ? "text-yellow-400 group-hover:scale-110" 
                  : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-center gap-2 mb-4">
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${originalPrice}
            </span>
          )}
          <span className="text-lg font-bold text-rose-600">${price}</span>
        </div>

        {/* Add To Cart Button */}
        <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-3 px-4 text-sm font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
