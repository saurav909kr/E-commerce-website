import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 mb-12 gap-5 text-gray-700 bg-white border border-gray-200 rounded-2xl px-8 py-10 shadow-sm"
    >
      <div className="inline-flex items-center gap-2">
        <p className="text-2xl font-semibold text-gray-900">{currentState}</p>
        <hr className="h-[1.5px] w-8 bg-gray-800 border-none" />
      </div>

      {currentState !== "Login" && (
        <input
          type="text"
          className="outline-none w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-gray-800 transition-colors"
          placeholder="Name"
          required
        />
      )}

      <input
        type="email"
        className="outline-none w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-gray-800 transition-colors"
        placeholder="example@gmail.com"
        required
      />

      <input
        type="password"
        className="outline-none w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-gray-800 transition-colors"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between items-center text-sm font-medium -mt-1">
        {currentState !== "Sign Up" && (
          <p className="cursor-pointer text-gray-500 hover:text-gray-800 transition-colors">
            Forgot password?
          </p>
        )}
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer text-gray-500 hover:text-gray-800 transition-colors ml-auto"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer text-gray-500 hover:text-gray-800 transition-colors ml-auto"
          >
            Login here
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 active:scale-[0.98] transition-all mt-2"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;