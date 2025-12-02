import { FiSearch, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="w-full shadow-sm border-b">
      {/* Top strip */}
      <div className="flex justify-between w-full bg-black text-white text-sm py-2 text-center">
        <div className="">Free Express Shipping on orders $100!</div>
        <div>contactus</div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center py-4 px-6 lg:px-12 bg-white">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">
          <span className="border px-2">cosmika</span>
        </h1>

        {/* Middle Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <div className="group relative cursor-pointer">Shop</div>
          <div className="group relative cursor-pointer flex items-center gap-2">
            Categories{" "}
            <span className="text-xs bg-green-100 text-green-600 px-2 rounded">
              SALE
            </span>
          </div>
          <div className="group relative cursor-pointer flex items-center gap-2">
            Products{" "}
            <span className="text-xs bg-pink-100 text-pink-600 px-2 rounded">
              HOT
            </span>
          </div>
          <div className="group relative cursor-pointer">Top Deals</div>
          <div className="group relative cursor-pointer">Elements</div>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl">
          <FiSearch className="cursor-pointer" />
          <FiUser className="cursor-pointer" />
          <div className="relative">
            <FiHeart className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
          <div className="relative">
            <FiShoppingBag className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
