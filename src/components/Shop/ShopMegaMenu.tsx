interface MegaMenuProps {
  isOpen: boolean;
  onNavigate: (page: string) => void;
  onClose?: () => void;
  isMobile?: boolean;
}

const MegaMenu = ({ isOpen, onNavigate, onClose, isMobile = false }: MegaMenuProps) => {
  if (!isOpen) return null;

  const shopItems = [
    { id: 1, name: "Shop Page", path: "/shop" },
    { id: 2, name: "Simple Product", path: "/shop/simple" },
    { id: 3, name: "Grouped Product", path: "/shop/grouped" },
    { id: 4, name: "External/Affiliate Product", path: "/shop/external" },
    { id: 5, name: "Variable Product", path: "/shop/variable" },
    { id: 6, name: "Sale Product", path: "/shop/sale" },
    { id: 7, name: "Upsell Products", path: "/shop/upsell" },
    { id: 8, name: "Cross-sell Product", path: "/shop/cross-sell" },
    { id: 9, name: "Category Page", path: "/shop/category" },
    { id: 10, name: "Shopping Cart", path: "/cart" },
    { id: 11, name: "Checkout Page", path: "/checkout" },
    { id: 12, name: "My account", path: "/account" },
    { id: 13, name: "Shop Ajax Filter", path: "/shop/filter" },
    { id: 14, name: "Privacy Policy", path: "/privacy" },
  ];

  const handleItemClick = (path: string) => {
    onNavigate(path);
    onClose?.();
  };

  if (isMobile) {
    return (
      <div className="space-y-1">
        {shopItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item.path)}
            className="w-full text-left px-2 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors rounded"
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute left-0 top-full mt-2 bg-white shadow-2xl border border-gray-200 rounded-lg z-50 min-w-[200px] max-h-[400px] overflow-y-auto">
      <div className="py-2">
        {shopItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item.path)}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
