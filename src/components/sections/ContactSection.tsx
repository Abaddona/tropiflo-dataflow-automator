import React from 'react';
import ContactForm from '../ui/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Request a <span className="gradient-text">Demo</span>
          </h2>
          <p className="section-subtitle">
            Ready to see TropiFlo's Co-Datascientist in action? Fill out the form below and our team will reach out to schedule your personalized demo.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
