
import React from 'react';
import { Button } from '@/components/ui/button';
import { Cloud, Server } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Flexible <span className="gradient-text">Pricing</span> Options
          </h2>
          <p className="section-subtitle">
            Choose the deployment model that works best for your organization's needs and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SaaS Option */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-cyan-50 p-3 rounded-lg mr-4">
                <Cloud className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Enterprise Cloud Integration</h3>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Quick setup with no infrastructure requirements</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Automatic updates and maintenance</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Flexible scaling to match your needs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure cloud infrastructure</span>
              </li>
            </ul>
            
            <Button asChild className="btn-primary btn-animated-gradient w-full text-2xl px-12 py-8">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          
          {/* On-Prem Option */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-blue-50 p-3 rounded-lg mr-4">
                <Server className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">On-Prem</h3>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Complete data sovereignty and privacy</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Integration with existing security protocols</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Customized deployment options</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Enterprise-grade support</span>
              </li>
            </ul>
            
            <Button asChild className="btn-primary btn-animated-gradient w-full text-2xl px-12 py-8">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
