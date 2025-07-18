import React from 'react';

const integrations = [
  { name: 'Databricks', logo: '/integrations/databricks.png' },
  { name: 'Google Vertex', logo: '/integrations/vertex.jpg' },
  { name: 'Amazon Sagemaker', logo: '/integrations/sagemaker.png' },
  { name: 'Snowflake', logo: '/integrations/snowflake.png' },
  { name: 'Azure ML', logo: '/integrations/azure_ml.png' },
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-8 bg-gray-50">
      <div className="container-section py-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="section-title">
            Integrations
          </h2>
          <p className="section-subtitle">
            Connect with your favorite data and cloud platforms. More integrations coming soon!
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center">
          {integrations.map((integration) => (
            <div key={integration.name} className="flex flex-col items-center p-3 bg-white rounded-xl shadow border border-gray-100">
              <img
                src={integration.logo}
                alt={integration.name + ' logo'}
                className="w-44 h-44 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection; 