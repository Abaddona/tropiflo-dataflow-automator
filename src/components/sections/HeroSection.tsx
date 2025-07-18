
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="flex items-center min-h-[calc(100vh-64px)] pt-0 pb-0 md:pt-0 md:pb-0 overflow-hidden">
      <div className="container-section relative">
        {/* Subtle animated gradient background blob */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-4xl max-h-[48rem] bg-gradient-to-tr from-cyan-200 via-blue-200 to-purple-200 opacity-30 blur-3xl animate-blob -z-10"
          style={{ filter: 'blur(100px)' }}
        />
        {/* Background gradients */}
        
        <div className="w-full text-center">
            <h1 className="flex flex-wrap justify-center items-baseline gap-3 text-center">
              <span className="text-6xl md:text-7xl font-extrabold text-gray-900 font-dmsans">Meet <span className="underline decoration-2 decoration-blue-600 underline-offset-4">your</span></span>
              <span className="text-7xl md:text-8xl lg:text-9xl font-extrabold gradient-text animate-gradient-move font-dmsans">Co-Datascientist</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-700 font-medium text-center">
            Built to make you an ML Hero. Co-Datascientist is the best way to build scalable AI models.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="btn-primary text-2xl px-12 py-8 btn-animated-gradient">
                <a href="#contact">
                  Request a Demo
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" className="text-2xl px-12 py-8">
                <a href="#how-it-works">
                  How It Works
                </a>
              </Button>
            </div>
          </div>
          {/* Removed video and its container. Optionally, you can add a placeholder or leave this column empty for layout balance. */}
          <div className="relative flex items-center justify-center">
            {/* Optionally, add an illustration or leave empty for now */}
          </div>
        </div>
    </section>
  );
};

export default HeroSection;

