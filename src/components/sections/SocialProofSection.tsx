import React from 'react';

const companies = [
  // { name: 'MPP&E', logo: '/partners/mppe.png' }, ##TODO ask first!
  { name: 'Tlv', logo: '/partners/hms.png' },
  { name: 'Tol', logo: '/partners/tol1.svg' },
  { name: 'Combinable', logo: '/partners/combinable.png' },
  { name: 'stealth', logo: '/partners/stealth.jpeg' },
];

const SocialProofSection = () => {
  return (
    <section id="social-proof" className="py-6 bg-white">
      <div className="container-section py-2">
        <div className="max-w-2xl mx-auto text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Trusted by <span className="gradient-text">ML engineers</span> at
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center h-[60px]"
            >
              <img
                src={company.logo}
                alt={company.name + ' logo'}
                className="max-h-14 object-contain mx-auto"
                style={{ maxWidth: '140px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection; 