"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Pangram Gibran',
      role: 'CEO, Tech Startup',
      image: 'https://i.pravatar.cc/150?img=1',
      quote: 'Oh Gary When I Need Extra Energy To Get Through My Tasks, This Drink Is My Go-To. It\'s Refreshing And Keeps Me Alert Without Making Me Feel Wired.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Investment Manager',
      image: 'https://i.pravatar.cc/150?img=2',
      quote: 'Finestra has completely transformed how I manage my investments. The platform is intuitive and the returns have exceeded my expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Small Business Owner',
      image: 'https://i.pravatar.cc/150?img=3',
      quote: 'The commercial banking services have been a game-changer for my business. Professional support and competitive rates.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold font-space-grotesk">
            <span className="text-white">CLIENT</span>
            <br />
            <span className="gradient-text">ABOUT</span>
            <br />
            <span className="text-white">OUR WORK</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="glass-effect rounded-3xl p-8 lg:p-12 relative">
            <Quote className="w-12 h-12 text-green-400 mb-6" />
            
            <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                  style={{ width: '64px', height: '64px' }}
                />
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1 mt-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-green-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Additional client logos/avatars */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            <div className="text-center">
              <img
                src="https://i.pravatar.cc/150?img=4"
                alt="Client"
                className="w-12 h-12 rounded-full mx-auto mb-2"
                style={{ width: '48px', height: '48px' }}
              />
              <span className="text-xs text-gray-400">PRESENT</span>
            </div>
            <div className="text-center">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="Client"
                className="w-12 h-12 rounded-full mx-auto mb-2"
                style={{ width: '48px', height: '48px' }}
              />
              <span className="text-xs text-gray-400">PRESENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;