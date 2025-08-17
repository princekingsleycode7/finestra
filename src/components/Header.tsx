"use client";

import React from 'react';
import { Search, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold text-white font-space-grotesk">Finestra</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-green-400 transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Reviews</a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Predictions</a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Blog</a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-gray-300" />
              <span className="text-gray-300 text-sm">Sign In</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;