import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, Eye, BarChart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  endTime?: Date;
}

const ProductShowcase = () => {
  const [, setCurrentIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Laneige Lip Sleeping Mask Nuit Pure 20g",
      image: "/src/assets/65330366e9d2ee118d7acd6a933e0293.jpg",
      price: 249,
      originalPrice: 299,
      discount: 17,
      rating: 5,
      endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    },
    {
      id: 2,
      name: "Ascorbic Acid 8% + Alpha Arbutin 2% 30ml",
      image: "/src/assets/14f7f9257bae0c720cedb764146f9cff.jpg",
      price: 200,
      rating: 4,
    },
    {
      id: 3,
      name: "Ceo Afterglow Brightening Vitamin C Cream",
      image: "/src/assets/65330366e9d2ee118d7acd6a933e0293.jpg",
      price: 199,
      rating: 5,
    },
    {
      id: 4,
      name: "Granactive Retinoid 2% In Squalane 30ml",
      image: "/src/assets/14f7f9257bae0c720cedb764146f9cff.jpg",
      price: 199,
      originalPrice: 249,
      discount: 12,
      rating: 4,
    },
    {
      id: 5,
      name: "Charlotte Tilbury Magic Skin Duo",
      image: "/src/assets/65330366e9d2ee118d7acd6a933e0293.jpg",
      price: 69,
      originalPrice: 71,
      discount: 31,
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const CountdownTimer = ({ endTime }: { endTime: Date }) => {
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    useEffect(() => {
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime.getTime() - now;

        if (distance > 0) {
          setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          });
        }
      }, 1000);

      return () => clearInterval(timer);
    }, [endTime]);

    return (
      <div className="flex gap-2 text-xs text-red-500 font-medium">
        <span>{timeLeft.days}d</span>
        <span>:</span>
        <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
        <span>:</span>
        <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
        <span>:</span>
        <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
      </div>
    );
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-serif text-center mb-12 tracking-wide">
          FOR ALL WALKS OF LIFE
        </h2>

        {/* Products Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all"
            aria-label="Next products"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-2 py-1 z-10">
                    -{product.discount}%
                  </div>
                )}

                {/* Product Image */}
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Action Icons - Top Right */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-md">
                      <Heart className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-md">
                      <BarChart className="w-4 h-4 text-gray-700" />
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-md">
                      <Eye className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>

                  {/* Add to Cart Button - Appears on Hover */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
                      hoveredProduct === product.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }`}
                  >
                    <button className="w-full bg-white text-white py-3 font-medium hover:bg-black transition-colors border-t border-gray-200">
                      Add To Cart
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Countdown Timer */}
                  {product.endTime && (
                    <div className="mb-2">
                      <CountdownTimer endTime={product.endTime} />
                    </div>
                  )}

                  {/* Product Name */}
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 min-h-[40px]">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="mb-2">{renderStars(product.rating)}</div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.originalPrice}
                      </span>
                    )}
                    <span className="text-lg font-bold text-gray-900">
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
};

export default ProductShowcase;
