import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col bg-blue-500 text-white fixed w-full shadow-md">
      <header className="py-8">
        <nav className="flex justify-between items-center px-6">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-8 mr-2" />{" "}
            {/* Replace with your logo */}
            <h1 className="text-2xl font-bold">Awesome Social App</h1>
          </div>
          <div className="flex space-x-4">
            <Link to={"/login"}>
              <button className="bg-white text-blue-500 py-2 px-4 rounded-lg">
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <button className="bg-white text-blue-500 py-2 px-4 rounded-lg">
                Signup
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
