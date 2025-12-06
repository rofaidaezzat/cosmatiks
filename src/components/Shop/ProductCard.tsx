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
    <div className="group relative bg-white overflow-hidden transition-all duration-300 border border-gray-100 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Sale Badge */}
        {sale && salePercent && (
          <div className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 font-medium z-10">
            {salePercent}
          </div>
        )}

        {/* Hover Icons - Top Left */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors shadow-md">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors shadow-md">
            <BarChart2 className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors shadow-md">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Countdown Timer */}
        {countdown && (
          <div className="absolute bottom-3 left-3 right-3 bg-white px-3 py-2 text-center shadow-sm">
            <div className="text-xs font-medium text-red-600">
              {countdown.days}d : {countdown.hours}h : {countdown.minutes}m : {countdown.seconds}s
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="text-sm text-gray-900 mb-2 line-clamp-2 min-h-[40px] hover:text-orange-500 cursor-pointer transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-sm ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-center gap-2 mb-3">
          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${originalPrice}
            </span>
          )}
          <span className="text-base font-semibold text-gray-900">${price}</span>
        </div>

        {/* Add To Cart Button */}
        <button className="w-full bg-white border border-gray-300 text-gray-700 py-2.5 px-4 text-sm font-medium hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors rounded">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
