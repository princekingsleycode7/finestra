"use client";

import React, { useEffect, useState } from 'react';

const StatisticsSection: React.FC = () => {
  const [counts, setCounts] = useState({ customers: 0, satisfaction: 0, success: 0 });

  useEffect(() => {
    const animateCount = (target: number, key: keyof typeof counts) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 20);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCount(20, 'customers');
        animateCount(98, 'satisfaction');
        animateCount(89, 'success');
      }
    });

    const element = document.getElementById('statistics-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="statistics-section" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold font-space-grotesk">
            <span className="text-white">WHY</span>
            <br />
            <span className="gradient-text">CHOOSE</span>
            <br />
            <span className="text-white">US</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their financial future. 
            Our track record speaks for itself.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* 20K+ Customers */}
          <div className="text-center space-y-4 group">
            <div className="relative">
              <div className="text-6xl lg:text-7xl font-bold font-space-grotesk count-up">
                <span className="text-white">{counts.customers}</span>
                <span className="text-orange-400">K+</span>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Happy Customers</h3>
              <p className="text-gray-400">
                Over 20,000 customers trust our platform for their financial management needs.
              </p>
            </div>
          </div>

          {/* 98% Satisfaction */}
          <div className="text-center space-y-4 group">
            <div className="relative">
              <div className="text-6xl lg:text-7xl font-bold font-space-grotesk count-up">
                <span className="text-white">{counts.satisfaction}</span>
                <span className="text-green-400">%</span>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Satisfaction Rate</h3>
              <p className="text-gray-400">
                98% of our clients are satisfied with our services and recommend us to others.
              </p>
            </div>
          </div>

          {/* 89% Success */}
          <div className="text-center space-y-4 group">
            <div className="relative">
              <div className="text-6xl lg:text-7xl font-bold font-space-grotesk count-up">
                <span className="text-white">{counts.success}</span>
                <span className="text-yellow-400">%</span>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Success Rate</h3>
              <p className="text-gray-400">
                89% of our investment strategies deliver positive returns for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;