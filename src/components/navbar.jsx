import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-3xl font-bold text-white">
              ShoeStop
            </a>
          </div>
          <div className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Men's Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Women's Shoes
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-4 py-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Men's Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Women's Shoes
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
