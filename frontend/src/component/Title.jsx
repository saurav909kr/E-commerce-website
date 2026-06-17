import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="text-center mb-4 px-6">
      <div className="inline-block">
        <p className="text-2xl sm:text-3xl md:text-3.5xl font-bold text-gray-900 tracking-tight">
          {text1}
          <span className="text-red-600 ml-2">{text2}</span>
        </p>
        <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mt-4 md:mt-2 rounded-full"></div>
      </div>
    </div>
  );
};

export default Title;
