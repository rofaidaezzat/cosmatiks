export function FeelingBlushBanner() {
  return (
    <section className="relative m-14 h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/d22cfe54abaefd314a1bb3db3f6b8ef2.jpg"
          alt="Feeling Blush Huda Beauty"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          {/* Small Text */}
          <p className="text-xs md:text-sm tracking-[0.3em] mb-4 font-light uppercase">
            NEW WEEK - NEW ARRIVALS
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
            FEELING BLUSH
            <br />
            HUDA BEAUTY
          </h2>

          {/* CTA Button */}
          <button className="bg-white text-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-300 text-sm font-medium tracking-wider border-2 border-white">
            See Collection
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeelingBlushBanner;
