"use client";
import React from 'react';
import { TrendingUp, DollarSign, BarChart3 } from 'lucide-react';

const DashboardMockup: React.FC = () => {
  return (
    <div className="relative floating-animation">
      {/* Main dashboard card */}
      <div className="glass-effect rounded-2xl p-6 space-y-6 max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Online Money Exchange</h3>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Balance */}
        <div className="space-y-2">
          <p className="text-gray-400 text-sm">Total Balance</p>
          <p className="text-3xl font-bold text-white">$2,600.00</p>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm">+12.5%</span>
            <span className="text-gray-400 text-sm">vs last month</span>
          </div>
        </div>

        {/* Currency pairs */}
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-medium">USD</p>
                <p className="text-gray-400 text-xs">US Dollar</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white">1.0000</p>
              <p className="text-green-400 text-xs">+0.25%</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">€</span>
              </div>
              <div>
                <p className="text-white font-medium">EUR</p>
                <p className="text-gray-400 text-xs">Euro</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white">0.8456</p>
              <p className="text-red-400 text-xs">-0.12%</p>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-white font-medium">Performance</p>
            <BarChart3 className="w-4 h-4 text-gray-400" />
          </div>
          <div className="h-20 flex items-end space-x-1">
            {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 65, 85].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-green-400 to-green-600 rounded-sm opacity-80"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 glass-effect rounded-lg p-3">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white text-sm">Live</span>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 glass-effect rounded-lg p-3">
        <div className="text-center">
          <p className="text-green-400 font-bold">+$1,250</p>
          <p className="text-gray-400 text-xs">Today</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;