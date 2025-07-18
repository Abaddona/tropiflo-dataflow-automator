
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="container-section relative">
        {/* Background gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full filter blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full filter blur-2xl -z-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Meet Your <span className="gradient-text">Co-Datascientist 2</span> for ML Excellence
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 md:text-xl max-w-lg mx-auto md:mx-0">
              Maximize R&D efficiency with AI-powered automation. TropiFlo helps ML teams deliver better results faster, no matter your organization's size.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="btn-primary text-lg px-8 py-6">
                <a href="#contact">
                  Get in Touch
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" className="text-lg px-8 py-6">
                <a href="#how-it-works">
                  How It Works
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-3xl transform rotate-2 blur-2xl -z-10" />
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-200">
              <div className="w-full h-64 md:h-80 bg-gray-100 rounded-2xl overflow-hidden">
                <video 
                  // poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  controls
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/run_co_data_scientist_5_ideas_paralell.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Demo</h3>
                    <p className="text-sm text-gray-500">See Co-Datascientist in action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
