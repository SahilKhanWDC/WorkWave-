import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-800 flex flex-col items-center justify-center text-white">
      <div className="text-center mt-16">
        <h1 className="text-6xl font-bold mb-6">
          Welcome to Work<span className="text-gray-400">Wave</span>
        </h1>
        <p className="text-2xl mb-4">
          An Employee Time-Entry Management System
        </p>
        <Link to="/login">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-sm opacity-50 group-hover:opacity-80 transition duration-300 group-hover:blur-md"></div>
            <button className="relative bg-white text-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-300 font-semibold tracking-wide">
              Get Started
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
