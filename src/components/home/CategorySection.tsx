import img1 from "../../assets/65330366e9d2ee118d7acd6a933e0293.jpg";
import img2 from "../../assets/14f7f9257bae0c720cedb764146f9cff.jpg";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Foundation',
      image: img1,
    },
    {
      id: 2,
      name: 'Creams',
      image: img2,
    },
    {
      id: 3,
      name: 'Cosmeceutical',
      image: img1,
    },
    {
      id: 4,
      name: 'Exfoliating',
      image: img2,
    },
    {
      id: 5,
      name: 'Emollients',
      image: img1,
    },
    {
      id: 6,
      name: 'Retinoids',
      image: img2,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center gap-3 cursor-pointer group"
            >
              {/* Circular Image Container */}
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Category Name */}
              <p className="text-sm font-medium text-gray-800 text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
