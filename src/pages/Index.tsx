
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import EvolveSection from '@/components/sections/EvolveSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import IntegrationsSection from '@/components/sections/IntegrationsSection';
import PricingSection from '@/components/sections/PricingSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';
import SocialProofSection from '@/components/sections/SocialProofSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SocialProofSection />
        <EvolveSection />
        <FeaturesSection />
        <HowItWorksSection />
        <IntegrationsSection />
        <PricingSection />
        <TeamSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
