import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-1" 
          : "bg-transparent py-2"
      )}
    >
      <div className="container-section">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img src="/Logo.png" alt="TropiFlo Logo" className="h-10 w-auto" />
            <a href="/" className="text-2xl md:text-3xl font-bold text-primary">
              <span>Tropi</span>
              <span className="gradient-text">Flo</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors text-lg px-4 py-1">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors text-lg px-4 py-1">Pricing</a>
            <a href="#team" className="text-gray-700 hover:text-primary transition-colors text-lg px-4 py-1">Team</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors text-lg px-4 py-1">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors text-lg px-4 py-1">FAQ</a>
            <Button asChild className="btn-primary btn-animated-gradient text-lg px-6 py-3">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#team" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button asChild className="btn-primary btn-animated-gradient w-full text-lg px-6 py-3">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Get in Touch</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
