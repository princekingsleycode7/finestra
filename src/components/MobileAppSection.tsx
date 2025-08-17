"use client";

import React from 'react';
import { Download, Star, Shield } from 'lucide-react';

const MobileAppSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold font-space-grotesk leading-tight">
                <span className="text-white">TAKE CONTROL</span>
                <br />
                <span className="text-white">YOUR </span>
                <span className="gradient-text">MONEY</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-lg">
                Download our mobile app and take control of your finances on the go. 
                Track spending, set goals, and manage your money with ease.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="text-white">Bank-level security</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-white">4.9★ App Store rating</span>
              </div>
              <div className="flex items-center space-x-3">
                <Download className="w-6 h-6 text-blue-400" />
                <span className="text-white">500K+ downloads</span>
              </div>
            </div>

            {/* App info card */}
            <div className="glass-effect rounded-2xl p-6 max-w-sm">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Spending Goal</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white">$1,540 / $2,000</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{ width: '77%' }}></div>
                  </div>
                  <p className="text-green-400 text-sm">77% of monthly goal achieved</p>
                </div>
              </div>
            </div>

            {/* Download button */}
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-400/25 transition-all duration-300 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download App</span>
            </button>
          </div>

          {/* Right content - Mobile mockups */}
          <div className="relative">
            <div className="flex justify-center space-x-6">
              {/* First phone */}
              <div className="relative floating-animation">
                <div className="w-64 h-96 bg-gray-800 rounded-3xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1633431871820-ca72e0da2e2b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFwcCUyMGZpbmFuY2lhbCUyMGludGVyZmFjZXxlbnwwfDF8fHwxNzU1NDM5MTUxfDA&ixlib=rb-4.1.0&q=85"
                    alt="Mobile phone mockup showing financial app interface with spending goals and charts - Hakan Nural on Unsplash"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ width: '240px', height: '360px' }}
                  />
                </div>
              </div>

              {/* Second phone */}
              <div className="relative floating-animation" style={{ animationDelay: '1s' }}>
                <div className="w-64 h-96 bg-gray-800 rounded-3xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1611967564293-9cc64a2fd3dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxzbWFydHBob25lJTIwZmluYW5jaWFsJTIwYXBwJTIwZGFzaGJvYXJkJTIwbW9uZXl8ZW58MHwxfHx8MTc1NTQzOTE1MXww&ixlib=rb-4.1.0&q=85"
                    alt="Mobile phone showing financial tracking app with money sources and transactions - Clay Banks on Unsplash"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ width: '240px', height: '360px' }}
                  />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 -left-4 glass-effect rounded-xl p-3">
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">$18,100</div>
                <div className="text-xs text-gray-400">Total Saved</div>
              </div>
            </div>

            <div className="absolute bottom-10 -right-4 glass-effect rounded-xl p-3">
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400">+$2,340</div>
                <div className="text-xs text-gray-400">This Month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;