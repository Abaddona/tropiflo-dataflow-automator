
import React from 'react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    content: "Co-Datascientist is revolutionizing our approach to ML development. We've reduced our R&D cycle time by more than 60% while improving model performance across the board.",
    author: "Sarah Johnson",
    position: "Head of Quantitative analytics",
    company: "Tech-focused HedgeFund",
    image: "https://randomuser.me/api/portraits/women/23.jpg"
  },
  {
    content: "Co-Datascientist is not an optionary tool for our team anymore - It's an integral part of our R&D pipeline. Any ML Engineer that doesn't use it will simply be left behind. ",
    author: "Michael Chang",
    position: "ML Engineering Lead",
    company: "Big Firm - AI section",
    image: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    content: "Thanks to Co-Datascientist we are staying ahead of the curve even against cutting edge FinTech startups. It has revolutionized our R&D process.",
    author: "Elena Rodriguez",
    position: "VP of Data Science",
    company: "International Banking Establishment",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="flex-shrink-0">
          <img 
            src={testimonial.image} 
            alt={testimonial.author} 
            className="w-14 h-14 rounded-full object-cover" 
          />
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-lg">{testimonial.author}</h4>
          <div className="text-sm text-gray-600">
            {testimonial.position}, {testimonial.company}
          </div>
        </div>
      </div>
      <blockquote>
        <p className="text-gray-700 leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
      </blockquote>
      <div className="mt-6 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg 
            key={star} 
            className="w-5 h-5 text-yellow-400" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            What <span className="gradient-text">Our Users</span> Say
          </h2>
          <p className="section-subtitle">
            Our users are already enjoying Co-DataScientist's automated ML Engineering workflows—don't be left behind!!!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="md:flex items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Ready to transform your ML workflow?
                  </h3>
                  <p className="text-cyan-100 text-lg">
                    Join our users improving their data science productivity with automation.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button asChild className="btn-primary btn-animated-gradient text-2xl px-12 py-8">
                    <a href="#contact">Get in Touch</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
