import React from 'react';
import { Leaf, Recycle, Map, LineChart, Plane, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Leaf className="w-12 h-12 text-olive-900" />,
      title: "Sustainable Aviation Fuel",
      description: "Leading the aviation industry's transition to sustainable fuel through innovative production methods.",
    },
    {
      icon: <LineChart className="w-12 h-12 text-olive-900" />,
      title: "CLEWS Modeling",
      description: "Advanced modeling solutions for comprehensive environmental and socioeconomic impact assessment.",
    },
    {
      icon: <Recycle className="w-12 h-12 text-olive-900" />,
      title: "Waste Management",
      description: "Transforming waste into valuable resources through innovative circular economy solutions.",
    },
    {
      icon: <Map className="w-12 h-12 text-olive-900" />,
      title: "GIS Analysis",
      description: "Cutting-edge spatial analysis for environmental monitoring and resource management.",
    },
    {
      icon: <Globe className="w-12 h-12 text-olive-900" />,
      title: "Environmental Consulting",
      description: "Expert guidance for sustainable development and environmental impact assessment.",
    },
    {
      icon: <Plane className="w-12 h-12 text-olive-900" />,
      title: "Agricultural Solutions",
      description: "Sustainable farming practices that optimize yields while protecting the environment.",
    }
  ];

  return (
    <section id="services" className="py-24 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-olive-900 mb-4">Our Solutions</h2>
          <p className="text-lg text-olive-900 max-w-3xl mx-auto">
            Comprehensive sustainable solutions that drive environmental innovation and create lasting positive impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 p-4 bg-olive-50 rounded-full inline-block">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-olive-900 mb-4">{service.title}</h3>
              <p className="text-olive-900">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;