import {
  ShoppingCart,
  Search,
  User,
  Heart,
  Menu,
  ChevronDown,
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { CategoriesModal } from "./Category/CategoriesModal";

import ShopMegaMenu from "./Shop/ShopMegaMenu";
import { Link } from "react-router-dom";

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

function Navbar({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const shopMenuRef = useRef<HTMLDivElement>(null);
  const categoryMenuRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        shopMenuRef.current &&
        !shopMenuRef.current.contains(event.target as Node)
      ) {
        setIsShopMenuOpen(false);
      }
      if (
        categoryMenuRef.current &&
        !categoryMenuRef.current.contains(event.target as Node)
      ) {
        setIsCategoryMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        setIsShopMenuOpen(false);
        setIsCategoryMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  // Close other menus when opening a new one
  const handleShopClick = () => {
    setIsShopMenuOpen(!isShopMenuOpen);
    setIsCategoryMenuOpen(false);
  };

  const handleCategoryClick = () => {
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
    setIsShopMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 md:py-4">
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex-1 lg:flex-initial">
            <button className="flex items-center">
              <h1 className="text-xl md:text-2xl tracking-wider text-rose-600">
                COSMIKA
              </h1>
            </button>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to={"shop"}>
              <div ref={shopMenuRef} className="relative">
                <button
                  onClick={handleShopClick}
                  className={`hover:text-rose-600 transition-colors flex items-center gap-1 ${
                    currentPage === "shop" || isShopMenuOpen
                      ? "text-rose-600"
                      : ""
                  }`}
                >
                  Shop
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isShopMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <ShopMegaMenu
                  isOpen={isShopMenuOpen}
                  onNavigate={onNavigate}
                  onClose={() => setIsShopMenuOpen(false)}
                />
              </div>
            </Link>

            <div ref={categoryMenuRef} className="relative">
              <button
                onClick={handleCategoryClick}
                className={`hover:text-rose-600 transition-colors flex items-center gap-1 ${
                  currentPage === "categories" || isCategoryMenuOpen
                    ? "text-rose-600"
                    : ""
                }`}
              >
                Categories
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isCategoryMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <CategoriesModal
                isOpen={isCategoryMenuOpen}
                onClose={() => setIsCategoryMenuOpen(false)}
                onNavigate={onNavigate}
              />
            </div>
            <div>
              <Link
                to={"about"}
                className="hover:text-rose-600 transition-colors"
              >
                About Us
              </Link>
            </div>
            <div>
              <Link
                to={"contact"}
                className="hover:text-rose-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              className="hover:text-rose-600 transition-colors p-1"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate("account")}
              className="hover:text-rose-600 transition-colors p-1"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate("wishlist")}
              className="hover:text-rose-600 transition-colors p-1 relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate("cart")}
              className="hover:text-rose-600 transition-colors p-1 relative"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-[10px] md:text-xs">
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-2xl`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-rose-600">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col space-y-4">
              {/* Shop */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={handleShopClick}
                  className="w-full flex items-center justify-between text-left hover:text-rose-600 transition-colors"
                >
                  <span className="font-medium">Shop</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isShopMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isShopMenuOpen && (
                  <div className="mt-2 ml-4">
                    <ShopMegaMenu
                      isOpen={isShopMenuOpen}
                      isMobile={true}
                      onNavigate={(path) => {
                        onNavigate(path);
                        setIsMenuOpen(false);
                        setIsShopMenuOpen(false);
                      }}
                      onClose={() => setIsShopMenuOpen(false)}
                    />
                  </div>
                )}
              </div>

              {/* Categories */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={handleCategoryClick}
                  className="w-full flex items-center justify-between text-left hover:text-rose-600 transition-colors"
                >
                  <span className="font-medium">Categories</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isCategoryMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isCategoryMenuOpen && (
                  <div className="mt-2 ml-4">
                    <CategoriesModal
                      isOpen={isCategoryMenuOpen}
                      isMobile={true}
                      onClose={() => setIsCategoryMenuOpen(false)}
                      onNavigate={(path) => {
                        onNavigate(path);
                        setIsMenuOpen(false);
                        setIsCategoryMenuOpen(false);
                      }}
                    />
                  </div>
                )}
              </div>

              {/* About Us */}
              <Link
                to={"about"}
                onClick={() => setIsMenuOpen(false)}
                className="font-medium hover:text-rose-600 transition-colors py-2"
              >
                About Us
              </Link>

              {/* Contact Us */}
              <Link
                to={"contact"}
                onClick={() => setIsMenuOpen(false)}
                className="font-medium hover:text-rose-600 transition-colors py-2"
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center justify-around">
              <button
                onClick={() => {
                  onNavigate("account");
                  setIsMenuOpen(false);
                }}
                className="flex flex-col items-center gap-1 hover:text-rose-600 transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="text-xs">Account</span>
              </button>
              <button
                onClick={() => {
                  onNavigate("wishlist");
                  setIsMenuOpen(false);
                }}
                className="flex flex-col items-center gap-1 hover:text-rose-600 transition-colors"
              >
                <Heart className="w-5 h-5" />
                <span className="text-xs">Wishlist</span>
              </button>
              <button
                onClick={() => {
                  onNavigate("cart");
                  setIsMenuOpen(false);
                }}
                className="flex flex-col items-center gap-1 hover:text-rose-600 transition-colors relative"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="text-xs">Cart</span>
                <span className="absolute top-0 right-0 bg-rose-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
