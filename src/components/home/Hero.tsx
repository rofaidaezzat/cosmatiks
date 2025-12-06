import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/Återuppliva huden efter vintern_ En komplett rutin för vårhud.jpg";

export function Hero() {
  const navigate = useNavigate();

  const handlePrevSlide = () => {
    // Add carousel previous slide logic here
    console.log("Previous slide");
  };

  const handleNextSlide = () => {
    // Add carousel next slide logic here
    console.log("Next slide");
  };

  return (
    <section className="relative h-[600px] flex items-center overflow-hidden bg-[#9B8B7E]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beauty cosmetics hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-all"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-all"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="container mx-auto lg:pl-24 px-4 relative z-10">
        <div className="max-w-xl">
          <p className="text-white/80 font-bold mb-4 tracking-[0.3em] text-xs  uppercase">
            SHINE BRIGHT EVERYDAY
          </p>
          <h2 className="text-5xl md:text-6xl text-white mb-8 font-serif leading-tight">
            FLAWLESS FINISH
          </h2>
          <button
            onClick={() => navigate("/shop")}
            className="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-[#9B8B7E] transition-all duration-300 tracking-wider text-sm font-medium"
          >
            Discover Now
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
