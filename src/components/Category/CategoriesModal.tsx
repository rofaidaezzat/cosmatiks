interface CategoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: string) => void;
  isMobile?: boolean;
}

export function CategoriesModal({
  isOpen,
  onClose,
  onNavigate,
  isMobile = false,
}: CategoriesModalProps) {
  if (!isOpen) return null;

  const categories = [
    { id: 1, name: "Foundation" },
    { id: 2, name: "Creams" },
    { id: 3, name: "Cosmeceutical" },
    { id: 4, name: "Exfoliating" },
    { id: 5, name: "Emollients" },
    { id: 6, name: "Retinoids" },
    { id: 7, name: "Concealer" },
    { id: 8, name: "Serum" },
    { id: 9, name: "Moisturiser" },
    { id: 10, name: "Night Creams" },
  ];

  const handleCategoryClick = (categoryName: string) => {
    onNavigate?.(`/shop/category/${categoryName.toLowerCase()}`);
    onClose();
  };

  if (isMobile) {
    return (
      <div className="space-y-1">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className="w-full text-left px-2 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors rounded"
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute left-0 top-full mt-2 bg-white shadow-2xl border border-gray-200 rounded-lg z-50 min-w-[200px]">
      <div className="py-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.name)}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

