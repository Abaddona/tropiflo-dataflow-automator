
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Co-Datascientist and how does it work?",
    answer: "Co-Datascientist is an AI-powered platform that automates repetitive tasks in the machine learning R&D cycle. It integrates with your existing ML workflows to handle data preprocessing, feature engineering, model selection, hyperparameter tuning, and result analysis, allowing your data scientists to focus on higher-level strategy and innovation."
  },
  {
    question: "Is Co-Datascientist suitable for small teams?",
    answer: "Absolutely! Co-Datascientist is designed to be valuable for ML teams of all sizes. For smaller teams with limited resources, our automation capabilities effectively multiply your productivity, allowing you to compete with larger organizations. The platform scales with your needs and can be customized to your specific workflows."
  },
  {
    question: "How does Co-Datascientist integrate with our existing ML infrastructure?",
    answer: "Co-Datascientist is built with flexibility in mind and can integrate with most common ML tools and frameworks. We support connections to popular cloud platforms, data warehouses, version control systems, and model registries. Our team will work with you during onboarding to ensure smooth integration with your existing infrastructure."
  },
  {
    question: "What kind of efficiency improvements can we expect?",
    answer: "While results vary by organization, our clients typically report 40-70% reduction in time spent on routine ML tasks. This translates to faster development cycles, more experiments, and ultimately better performing models. Our case studies showcase specific examples of efficiency gains across different industries."
  },
  {
    question: "Is our data safe when using Co-Datascientist?",
    answer: "Data security is our top priority. Co-Datascientist can be deployed in your own secure environment (on-premises or private cloud), ensuring your sensitive data never leaves your control. We also offer SOC 2 compliant cloud options with strong encryption, access controls, and regular security audits."
  },
  {
    question: "How long does implementation take?",
    answer: "Most organizations can be up and running with Co-Datascientist in 2-4 weeks. The exact timeline depends on the complexity of your existing infrastructure and specific customization needs. Our experienced implementation team will guide you through the process step by step, ensuring minimal disruption to your ongoing projects."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about TropiFlo's Co-Datascientist platform and how it can transform your ML workflow.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg shadow-sm bg-white">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? Our team is here to help.
          </p>
          <a href="#contact" className="text-primary font-semibold hover:underline">
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
