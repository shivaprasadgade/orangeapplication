import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../assets/orangelogo.png'; // Consider renaming the file to avoid issues


const Navbar = () => {
  return (
    <nav className="bg-orange-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={pic1} alt="Orange Logo" className="h-8 w-8 rounded-full" />
            <span className="text-xl font-bold">Orange Fashion</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-orange-200 transition">Home</Link>
            <Link to="/products" className="hover:text-orange-200 transition">Products</Link>
            <Link to="/contact" className="hover:text-orange-200 transition">Contact</Link>
          </div>
          <button className="md:hidden focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
