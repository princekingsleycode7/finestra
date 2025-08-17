import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FinanceManagementSection from '@/components/FinanceManagementSection';
import StatisticsSection from '@/components/StatisticsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MobileAppSection from '@/components/MobileAppSection';
import Footer from '@/components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <FinanceManagementSection />
      <StatisticsSection />
      <ServicesSection />
      <TestimonialsSection />
      <MobileAppSection />
      <Footer />
    </div>
  );
};

export default App;
