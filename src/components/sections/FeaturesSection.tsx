
import React from 'react';
import { Code, Compass, ArrowRight, Target, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Feature card component
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  primaryColor = "text-cyan-500", 
  bgColor = "bg-cyan-50" 
}) => {
  return (
    <div className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className={`${bgColor} p-3 rounded-lg inline-block mb-4`}>
        <Icon className={`${primaryColor} h-6 w-6`} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Code,
      title: "Automate ML Pipelines",
      description: "Streamline repetitive ML tasks with intelligent automation, from data preprocessing to model deployment.",
      primaryColor: "text-cyan-500",
      bgColor: "bg-cyan-50"
    },
    {
      icon: Compass,
      title: "Accelerate R&D Cycles",
      description: "Reduce research time with automated experimentation, hyperparameter tuning, and result analysis.",
      primaryColor: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Target,
      title: "Optimize Model Performance",
      description: "Automatically identify performance bottlenecks and receive intelligent recommendations for improvements.",
      primaryColor: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Calendar,
      title: "Time-Saving Workflows",
      description: "Cut development time by up to 70% with intelligent automation of routine ML engineering tasks.",
      primaryColor: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Collaborative Intelligence",
      description: "Enhance team productivity with shared insights, automated documentation, and knowledge transfer.",
      primaryColor: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      icon: Code,
      title: "Enterprise Integration",
      description: "Seamlessly integrate with your existing ML stack and data infrastructure with minimal setup.",
      primaryColor: "text-red-500",
      bgColor: "bg-red-50"
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Turnkey <span className="gradient-text">agentic</span> workflow
          </h2>
          <p className="section-subtitle">
            Co-DataScientist reads literature, generates modeling ideas, implements them, and benchmarks – all in parallel and automatically!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              primaryColor={feature.primaryColor}
              bgColor={feature.bgColor}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild className="btn-primary">
            <a href="#contact">
              Get in Touch
              <ArrowRight size={16} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
