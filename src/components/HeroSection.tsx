"use client";

import React from 'react';
import DashboardMockup from './DashboardMockup';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold font-space-grotesk leading-tight">
                <span className="text-white">SMART</span>
                <br />
                <span className="gradient-text">MONEY</span>
                <br />
                <span className="text-white">WORK</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Transform your financial future with intelligent money management solutions designed for the modern world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-black px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 pulse-glow">
                Get Started
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-green-400 hover:text-green-400 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Quick stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">$2.5M+</div>
                <div className="text-sm text-gray-400">Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">50K+</div>
                <div className="text-sm text-gray-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard mockup */}
          <div className="relative">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;