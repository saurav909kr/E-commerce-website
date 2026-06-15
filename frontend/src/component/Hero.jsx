import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between min-h-1.2 bg-gray-50 px-6 sm:px-8 md:px-12 lg:px-16 gap-6 md:gap-10 py-12 lg:py-0">
      {/* Hero Left Side */}
      <div className="flex-1 flex flex-col justify-center w-full lg:w-auto">
        <p className="text-xs sm:text-sm font-semibold text-red-600 uppercase tracking-widest mb-3 sm:mb-5">
          🌟 OUR BESTSELLER
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Latest Collection
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-10 leading-relaxed">
          Discover our newest and most exclusive designs. Premium quality
          products curated just for you.
        </p>
        <div className="flex gap-5 items-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-sm sm:text-base">
            SHOP NOW →
          </button>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="flex-1 flex justify-center items-center w-full lg:w-auto">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
          alt="Latest Collection"
          className="w-full sm:w-96 md:w-full lg:max-w-md h-auto rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
