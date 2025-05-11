
import React from 'react';
import { Button } from '@/components/ui/button';

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Prepare your ML pipeline",
      description: "Set up your data and ML pipeline requirements with our simple configuration wizard. Co-Datascientist works with your existing infrastructure."
    },
    {
      title: "Connect the Co-DataScientist",
      description: "Integrate the Co-Datascientist with your workflow through our API or user-friendly interface. A seamless connection is established in minutes."
    },
    {
      title: "Run to get new systems",
      description: "Let the Co-Datascientist automate your ML development. It will read literature, generate ideas, implement, and benchmark them automatically."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            How <span className="gradient-text">Co-Datascientist</span> Works
          </h2>
          <p className="section-subtitle">
            Our platform seamlessly integrates into your workflow, automating complex processes 
            while adapting to your team's specific needs and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600 text-lg mb-6">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild className="btn-primary">
            <a href="#contact">Get Started Today</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
