
import React from 'react';
import { Linkedin } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Oz Kilim",
      position: "Co-Founder, CTO",
      image: "/lovable-uploads/598173eb-ebfa-4c67-88f2-57fac6dbce15.png",
      linkedIn: "https://www.linkedin.com/in/oz-kilim/"
    },
    {
      name: "Jonathan Gdalevich",
      position: "Co-Founder, CEO",
      image: "/lovable-uploads/7fb85065-059d-49d1-ae1f-899b29c53152.png",
      linkedIn: "https://www.linkedin.com/in/jonathan-gdalevich/"
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            The <span className="gradient-text">Team</span>
          </h2>
          <p className="section-subtitle">
            Meet the founders behind Tropiflo's revolutionary Co-Datascientist platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-56 h-56 rounded-full mx-auto object-contain border-4 border-white shadow-lg bg-white"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">
                <a 
                  href={member.linkedIn} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center justify-center"
                >
                  {member.name}
                  <Linkedin className="ml-2 h-5 w-5" />
                </a>
              </h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
