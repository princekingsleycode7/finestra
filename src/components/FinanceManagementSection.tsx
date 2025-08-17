"use client";
import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const FinanceManagementSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold font-space-grotesk leading-tight">
                <span className="text-white">MANAGE</span>
                <br />
                <span className="text-white">YOUR </span>
                <span className="gradient-text">FINANCES</span>
                <br />
                <span className="text-white">EFFECTIVELY</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-lg">
                Master the art of Financial Management. 
                Streamline your finances to Optimize Expenses, 
                Increase Savings, and Achieve your Financial Goals.
              </p>
            </div>

            {/* Analytics card */}
            <div className="glass-effect rounded-2xl p-6 space-y-4 max-w-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">Analytics</h3>
                <BarChart3 className="w-5 h-5 text-green-400" />
              </div>
              
              <div className="space-y-2">
                <p className="text-4xl font-bold text-white count-up">$132,321</p>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">+15.3%</span>
                  <span className="text-gray-400 text-sm">from last month</span>
                </div>
              </div>

              {/* Mini chart */}
              <div className="flex items-end space-x-1 h-12">
                {[30, 45, 35, 60, 40, 55, 70, 50, 65, 80].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-green-400 to-green-600 rounded-sm"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content - Professional image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1600878459081-02f46f27b406?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxidXNpbmVzc21hbiUyMHN1aXQlMjBwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGV8ZW58MHwxfHx8MTc1NTQzOTE1MHww&ixlib=rb-4.1.0&q=85"
                alt="Professional businessman in dark suit, confident pose, corporate setting, modern office background - itay verchik on Unsplash"
                className="w-full h-96 object-cover"
                style={{ width: '400px', height: '500px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Floating success metric */}
            <div className="absolute top-6 right-6 glass-effect rounded-xl p-4 floating-animation">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">200+</div>
                <div className="text-sm text-gray-300">Successful</div>
                <div className="text-sm text-gray-300">Investments</div>
              </div>
            </div>

            {/* Floating chart */}
            <div className="absolute bottom-6 left-6 glass-effect rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="space-y-1">
                  <div className="w-8 h-2 bg-green-400 rounded"></div>
                  <div className="w-12 h-2 bg-green-500 rounded"></div>
                  <div className="w-6 h-2 bg-green-600 rounded"></div>
                  <div className="w-16 h-2 bg-green-400 rounded"></div>
                </div>
                <div className="text-white text-sm">Growth Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceManagementSection;