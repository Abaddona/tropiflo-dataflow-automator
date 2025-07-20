
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="flex items-center min-h-[calc(100vh-64px)] py-12 md:py-24 overflow-hidden">
      <div className="container-section relative">
        {/* Subtle animated gradient background blob */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-4xl max-h-[48rem] bg-gradient-to-tr from-cyan-200 via-blue-200 to-purple-200 opacity-30 blur-3xl animate-blob -z-10"
          style={{ filter: 'blur(100px)' }}
        />
        
        <div className="w-full text-center">
            <h1 className="flex flex-col sm:flex-row flex-wrap justify-center items-baseline gap-2 sm:gap-3 text-center">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 font-dmsans">
                Meet <span className="underline decoration-2 decoration-blue-600 underline-offset-4">your</span>
              </span>
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold gradient-text animate-gradient-move font-dmsans">
                Co-Datascientist
              </span>
            </h1>
            <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-gray-700 font-medium text-center max-w-4xl mx-auto px-4">
              Built to make you an ML Hero. Co-Datascientist is the best way to build scalable AI models.
            </p>
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Button asChild className="btn-primary text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 btn-animated-gradient w-full sm:w-auto">
                <a href="#contact">
                  Request a Demo
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" className="text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 w-full sm:w-auto">
                <a href="#how-it-works">
                  How It Works
                </a>
              </Button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;

