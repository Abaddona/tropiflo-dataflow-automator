import React from 'react';

const integrations = [
  { name: 'Databricks', logo: '/integrations/databricks.png', width: '200px' },
  { name: 'Google Vertex', logo: '/integrations/v.png', width: '80px' },
  { name: 'Amazon Sagemaker', logo: '/integrations/sage.png', width: '80px' },
  { name: 'Snowflake', logo: '/integrations/snowflake.png', width: '180px' },
  { name: 'Azure ML', logo: '/integrations/azure_text_bw.png', width: '180px' },
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-8 bg-gray-50">
      <div className="container-section py-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="section-title">
          <span className="gradient-text">Zero friction</span> integration into your workflows
          </h2>
          <p className="section-subtitle">
            We support all your favorite data and cloud platforms. 
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center">
          {integrations.map((integration) => (
            <div key={integration.name} className="flex justify-center items-center">
              {integration.name === 'Azure ML' ? (
                <img
                  src={integration.logo}
                  alt={integration.name + ' logo'}
                  className="object-contain"
                  style={{ width: integration.width || '80px' }}
                />
              ) : (
                <img
                  src={integration.logo}
                  alt={integration.name + ' logo'}
                  className="object-contain filter grayscale brightness-0 invert-0"
                  style={{ filter: 'grayscale(1) brightness(0.2)', width: integration.width || '80px' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection; 