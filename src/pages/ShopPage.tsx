import { Grid, List, ChevronDown, Filter, X } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "../components/Shop/ProductCard";

export function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("default");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXBzdGljayUyMGNvc21ldGljc3xlbnwxfHx8fDE3NjQ1NzQ2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Ascorbic Acid 8% + Alpha Arbutin 2% 30ml",
      price: 200,
      rating: 4,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBqYXJ8ZW58MXx8fHwxNzY0NTcyNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Cell Revitalise Night Moisturiser 60ml",
      price: 59,
      originalPrice: 65,
      rating: 5,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhbSUyMGphciUyMGNvc21ldGljc3xlbnwxfHx8fDE3NjQ1MDE1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Ceo Afterglow Brightening Vitamin C Cream",
      price: 199,
      rating: 5,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1571875257727-256c39da42af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBwcm9kdWN0JTIwYm94fGVufDF8fHx8MTc2NDUwOTcyMXww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Charlotte Tilbury Magic Skin Duo",
      price: 69,
      originalPrice: 71,
      rating: 5,
      sale: true,
      salePercent: "-3%",
      countdown: {
        days: 799,
        hours: 15,
        minutes: 23,
        seconds: 39,
      },
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJvdHRsZXxlbnwxfHx8fDE3NjQ1MTQyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Clarins Bright Plus Advanced Brightening Dark Spot",
      price: 145,
      rating: 4,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBwcm9kdWN0fGVufDF8fHx8MTc2NDQ3MzYyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Clinique Dramatically Different Moisturizing Lotion",
      price: 89,
      rating: 5,
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1617897903246-719242758050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHR1YmV8ZW58MXx8fHwxNzY0NTc2OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Dermalogica Daily Microfoliant Exfoliator",
      price: 125,
      rating: 4,
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1570194065650-d99fb4b8f7b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBib3R0bGV8ZW58MXx8fHwxNzY0NTg3NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Drunk Elephant C-Firma Fresh Day Serum",
      price: 178,
      rating: 5,
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHNldHxlbnwxfHx8fDE3NjQ1ODc3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Elizabeth Arden Ceramide Capsules Daily Youth",
      price: 98,
      rating: 5,
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwY3JlYW18ZW58MXx8fHwxNzY0NTg3NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Estee Lauder Advanced Night Repair Serum",
      price: 215,
      rating: 5,
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1556228852-80a6e5e6c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwcm9kdWN0fGVufDF8fHx8MTc2NDU4NzcyOHww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Fresh Rose Deep Hydration Face Cream",
      price: 156,
      rating: 4,
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1571875257727-256c39da42af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYWtldXAlMjBwcm9kdWN0JTIwYm94fGVufDF8fHx8MTc2NDUwOTcyMXww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Glow Recipe Watermelon Glow Niacinamide Dew Drops",
      price: 134,
      rating: 5,
    },
    {
      id: 13,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjcmVhbSUyMGphciUyMGNvc21ldGljc3xlbnwxfHx8fDE3NjQ1MDE1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Kiehl's Ultra Facial Cream",
      price: 112,
      rating: 5,
      sale: true,
      salePercent: "-17%",
    },
    {
      id: 14,
      image:
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxza2luY2FyZSUyMGJvdHRsZXxlbnwxfHx8fDE3NjQ1MTQyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "La Mer The Moisturizing Soft Cream",
      price: 445,
      rating: 5,
    },
    {
      id: 15,
      image:
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjb3NtZXRpY3MlMjBwcm9kdWN0fGVufDF8fHx8MTc2NDQ3MzYyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Lancome Absolue Premium Bx Replenishing Cream",
      price: 389,
      rating: 4,
    },
    {
      id: 16,
      image:
        "https://images.unsplash.com/photo-1617897903246-719242758050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxza2luY2FyZSUyMHR1YmV8ZW58MXx8fHwxNzY0NTc2OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      name: "Neutrogena Hydro Boost Water Gel",
      price: 45,
      rating: 5,
    },
  ];

  const categories = [
    { name: "Our Store", count: 24 },
    { name: "Concealer", count: 13 },
    { name: "Cosmeceutical", count: 10 },
    { name: "Creams", count: 15 },
    { name: "Foundation", count: 14 },
    { name: "Moisturiser", count: 15 },
    { name: "Serum", count: 16 },
  ];

  const brands = [
    { name: "Creative", count: 3 },
    { name: "Design", count: 3 },
    { name: "Gallery", count: 3 },
    { name: "Golden", count: 3 },
    { name: "Highlight", count: 3 },
    { name: "Modern", count: 3 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="text-center">
            <p className="text-xs md:text-sm text-gray-600 mb-2">Home / Shop</p>
            <h1 className="text-2xl md:text-4xl font-serif">Shop</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="flex gap-4 md:gap-8">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden fixed bottom-4 right-4 z-40 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
            aria-label="Open filters"
          >
            <Filter className="w-5 h-5" />
          </button>

          {/* Sidebar Overlay (Mobile) */}
          {isSidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <div
            className={`${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            } fixed lg:static top-0 left-0 h-full lg:h-auto w-64 bg-white z-50 lg:z-auto transition-transform duration-300 ease-in-out lg:flex-shrink-0 overflow-y-auto`}
          >
            <div className="p-4 lg:p-0">
              {/* Mobile Close Button */}
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Shop By Categories */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-black">
                  <h3 className="text-base md:text-lg font-semibold">Shop By Categories</h3>
                  <button className="hidden lg:block">
                    <span className="text-xl">−</span>
                  </button>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between text-sm py-1 cursor-pointer hover:text-orange-500"
                    >
                      <span>{category.name}</span>
                      <span className="text-gray-400">({category.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-black">
                  <h3 className="text-base md:text-lg font-semibold">Brands</h3>
                  <button className="hidden lg:block">
                    <span className="text-xl">−</span>
                  </button>
                </div>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div
                      key={brand.name}
                      className="flex items-center justify-between text-sm py-1 cursor-pointer hover:text-orange-500"
                    >
                      <span>{brand.name}</span>
                      <span className="text-gray-400">({brand.count})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 w-full lg:w-auto">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 md:mb-6 pb-4 border-b">
              <p className="text-xs sm:text-sm text-gray-600">
                Showing 1–16 of 24 results
              </p>
              <div className="flex items-center gap-2 sm:gap-4">
                {/* View Toggle */}
                <div className="flex items-center gap-1 border border-gray-300">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${
                      viewMode === "grid"
                        ? "bg-black text-white"
                        : "bg-white text-gray-600"
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${
                      viewMode === "list"
                        ? "bg-black text-white"
                        : "bg-white text-gray-600"
                    }`}
                    aria-label="List view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <div className="relative flex-1 sm:flex-initial">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full sm:w-auto appearance-none border border-gray-300 px-3 sm:px-4 py-2 pr-8 sm:pr-10 text-xs sm:text-sm focus:outline-none focus:border-gray-400 cursor-pointer"
                  >
                    <option value="default">Default sorting</option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="latest">Sort by latest</option>
                    <option value="price-low">Sort by price: low to high</option>
                    <option value="price-high">Sort by price: high to low</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-4 sm:gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
