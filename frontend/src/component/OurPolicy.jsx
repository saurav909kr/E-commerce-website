import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Exchange Policy */}
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-full">
                <img
                  src={assets.exchange_icon}
                  alt="Exchange Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              Easy Exchange Policy
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We offer hassle-free exchange policy to ensure your complete
              satisfaction
            </p>
          </div>

          {/* Return Policy */}
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-full">
                <img
                  src={assets.quality_icon}
                  alt="Quality Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              7 Days Return Policy
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We offer 7 days free return and exchange policy for your peace of
              mind
            </p>
          </div>

          {/* Customer Support */}
          <div className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-full">
                <img
                  src={assets.support_img}
                  alt="Support Icon"
                  className="w-12 h-12 sm:w-14 sm:h-14"
                />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We provide round-the-clock customer support to assist you anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
