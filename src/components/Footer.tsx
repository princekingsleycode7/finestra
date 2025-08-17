"use client"

import React, { useState } from 'react';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Newsletter section */}
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-space-grotesk">
            <span className="text-white">LET'S TALK</span>
            <br />
            <span className="gradient-text">TOGETHER</span>
          </h2>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                required
              />
              <button
                type="submit"
                className="px-6 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-r-full hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Footer links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">API</a></li>
            </ul>
          </div>

          {/* Help Center */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Help Center</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Address</h3>
            <div className="text-gray-400 space-y-2">
              <p>123 Finance St, Suite 100</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
              <p className="text-green-400">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Social media */}
        <div className="text-center space-y-6">
          <h3 className="text-lg font-semibold text-white">Social media</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Twitter className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold text-white font-space-grotesk">Finestra</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>© 2024 Copyright By Finestra - Finestra</span>
            <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-green-400 transition-colors">Cookies</a>
            <a href="#" className="hover:text-green-400 transition-colors">Legal</a>
            <a href="#" className="hover:text-green-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;