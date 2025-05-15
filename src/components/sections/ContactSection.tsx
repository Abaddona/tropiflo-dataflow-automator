
import React from 'react';
import ContactForm from '../ui/ContactForm';
import { Mail, PhoneCall, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have questions about TropiFlo's Co-Datascientist? Our team is ready to help you
            transform your ML workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyan-50 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a>
                      info@tropiflo.io
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-50 p-3 rounded-lg mr-4">
                    <PhoneCall className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">----------</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-50 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Offices</h4>
                    <address className="not-italic text-gray-600">
                      US, Delaware<br />
                      Israel,
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-900 mb-4">Connect with us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'linkedin', 'github'].map((platform) => (
                    <a 
                      key={platform}
                      href="#" 
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    >
                      <span className="sr-only">{platform}</span>
                      <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6" id="demo">Request a Demo</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
