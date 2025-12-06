import img1 from "../../assets/4a89fb7260da5fbfe8028b0704511d2c.jpg";
import img2 from "../../assets/67bafc261a12b312b9454bfef82f6849.jpg";

export function TwoImageSection() {
  return (
    <section className="py-8 px-4 mx-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Image - Shield and Shine */}
          <div className="relative overflow-hidden group h-[400px]">
            <img
              src={img1}
              alt="Shield and Shine"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 ease-in-out"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
              <h3 className="text-white text-3xl md:text-4xl font-serif font-bold mb-4 tracking-wide">
                SHIELD AND
                <br />
                SHINE
              </h3>
              <a
                href="#"
                className="text-white text-sm font-medium underline underline-offset-4 hover:text-white/80 transition-colors inline-block w-fit"
              >
                Discover Now
              </a>
            </div>
          </div>

          {/* Right Image - Someone Special */}
          <div className="relative overflow-hidden group h-[400px]">
            <img
              src={img2}
              alt="Someone Special"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 ease-in-out"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
              <h3 className="text-white text-3xl md:text-4xl font-bold font-serif mb-4 tracking-wide">
                SOMEONE
                <br />
                SPECIAL
              </h3>
              <a
                href="#"
                className="text-white text-sm font-medium underline underline-offset-4 hover:text-white/80 transition-colors inline-block w-fit"
              >
                Discover Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TwoImageSection;
