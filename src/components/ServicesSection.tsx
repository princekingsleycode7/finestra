"use client";

import React from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  CreditCard, 
  Building, 
  Home, 
  BadgeDollarSign 
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Consulting',
      description: 'Expert financial advice tailored to your needs',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: TrendingUp,
      title: 'Investment',
      description: 'Smart investment strategies for maximum returns',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: CreditCard,
      title: 'Credit Cards',
      description: 'Premium credit solutions with exclusive benefits',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Building,
      title: 'Banking',
      description: 'Comprehensive banking services for all your needs',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: Home,
      title: 'Home Loans',
      description: 'Competitive rates for your dream home',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: BadgeDollarSign,
      title: 'Commercial',
      description: 'Business financial solutions that scale',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-500/10'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold font-space-grotesk">
            <span className="text-white">CHOOSE</span>
            <br />
            <span className="text-white">THE </span>
            <span className="gradient-text">RIGHT</span>
            <br />
            <span className="text-white">SERVICES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We provide the right financial tools to help you achieve your goals. 
            From consulting to investments, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl p-8 ${service.bgColor} border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                      Learn more
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Check our product services
            </h3>
            <p className="text-gray-300 mb-6">
              Discover how our comprehensive financial services can transform your financial journey.
            </p>
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-400/25 transition-all duration-300">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;