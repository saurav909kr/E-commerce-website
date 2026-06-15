import React from "react";

const NewLatterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <style>{`
        @keyframes blink {
          0%, 49% { border-right: 3px solid #dc2626; }
          50%, 100% { border-right: 3px solid transparent; }
        }
        .blinking-cursor {
          animation: blink 1s infinite;
          padding-right: 5px;
        }
      `}</style>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-2 font-semibold">
          Get 20% OFF on your first order
        </p>
        <p className="text-gray-400 text-sm sm:text-base mb-8">
          Join thousands of customers and receive exclusive deals, updates, and
          special offers directly in your inbox.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-3 sm:gap-0 w-full max-w-md mx-auto"
          onSubmit={onSubmitHandler}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="blinking-cursor flex-1 px-5 py-3 sm:py-4 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 focus:outline-none bg-gray-800"
          />
          <button
            type="submit"
            className="px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg sm:rounded-l-none sm:rounded-r-lg whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <p className="text-gray-500 text-xs sm:text-sm mt-4">
          ✓ No spam, we promise. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default NewLatterBox;
