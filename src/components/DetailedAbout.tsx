import React from 'react';
import { ArrowRight, Leaf, Recycle, Globe, LineChart, Map, Plane } from 'lucide-react';

const DetailedAbout = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8 text-olive-900" />,
      title: "Sustainable Aviation Fuel (SAF) Production",
      points: [
        "Converting municipal waste into high-quality SAF, tackling both waste management and aviation emissions reduction.",
        "Implementing efficient, environmentally friendly production methods to maximize SAF yield while curbing aviation's contribution to global carbon emissions.",
        "Collaborating with local communities to build sustainable waste supply chains that contribute to cleaner cities and greener skies."
      ]
    },
    {
      icon: <LineChart className="w-8 h-8 text-olive-900" />,
      title: "CLEWS Modeling",
      points: [
        "Using CLEWS (Climate, Land, Energy, Water, and Sustainability) modeling to assess the environmental and socioeconomic impacts of SAF production from municipal waste.",
        "Identifying key opportunities to optimize resource use, reduce waste, and curtail emissions in the aviation sector and beyond."
      ]
    },
    {
      icon: <Recycle className="w-8 h-8 text-olive-900" />,
      title: "Waste Management Solutions",
      points: [
        "Developing innovative waste management strategies to address the growing accumulation of municipal waste, while promoting circular economy principles and sustainable resource use.",
        "Partnering with local communities to design and implement efficient waste collection, recycling, and repurposing systems, turning waste into a resource that supports a sustainable future."
      ]
    },
    {
      icon: <Map className="w-8 h-8 text-olive-900" />,
      title: "GIS and Spatial Analysis",
      points: [
        "Applying GIS (Geographic Information Systems) and remote sensing technologies to map, analyze, and monitor environmental changes on a broader scale, including urban planning, land-use management, natural resource management, and more.",
        "Supporting sustainability initiatives across various sectors by providing critical insights into spatial patterns, environmental trends, and resource management strategies."
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-olive-900" />,
      title: "Environmental Consulting",
      points: [
        "Conducting Environmental Impact Assessments (EIAs) for a wide range of projects, including construction, infrastructure development, and natural resource management, in addition to SAF production and waste management.",
        "Offering expert advice on climate change mitigation, environmental conservation, and sustainable development strategies for diverse industries."
      ]
    },
    {
      icon: <Leaf className="w-8 h-8 text-olive-900" />,
      title: "Agricultural Consulting",
      points: [
        "Providing expert advice on sustainable agricultural practices that minimize environmental impact while optimizing crop yields and enhancing food security, contributing to overall sustainability."
      ]
    }
  ];

  const commitments = [
    {
      title: "Sustainability",
      description: "We are committed to sustainable practices across all aspects of our operations, from feedstock sourcing to SAF production and waste management."
    },
    {
      title: "Community Engagement",
      description: "Working closely with local communities to create shared value by transforming waste into a resource while addressing both environmental and social challenges."
    },
    {
      title: "Innovation",
      description: "Continuously exploring cutting-edge technologies and methods to improve waste-to-energy processes, reduce emissions, and drive long-term sustainability in aviation and beyond."
    },
    {
      title: "Ethical Business Practices",
      description: "Upholding the highest ethical standards, ensuring that our operations respect human rights, promote community empowerment, and deliver positive environmental impact."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-olive-50">
      {/* Hero Section */}
      <div className="relative bg-olive-900 text-white py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2074"
            alt="Sustainable Future"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Driving a Sustainable Future</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-olive-100">
            Leading the way in sustainable aviation and environmental conservation
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-olive-900 mb-6">Who We Are</h2>
            <p className="text-lg text-olive-900 mb-8">
              Sustainascope is an innovative leader dedicated to solving global challenges through sustainable
              energy solutions and environmental conservation. We specialize in producing Sustainable
              Aviation Fuel (SAF) from repurposed municipal waste, transforming a major environmental
              issue into a valuable resource for aviation.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-olive-900 mb-3">Our Mission</h3>
                <p className="text-olive-900">
                  To accelerate the transition to a low-carbon future through sustainable energy solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-olive-900 mb-3">Our Vision</h3>
                <p className="text-olive-900">
                  A world where clean energy and environmental sustainability lead the way.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2070"
              alt="Sustainable Technology"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-olive-900 p-8 rounded-lg shadow-xl">
              <div className="text-4xl font-bold text-white mb-2">Sustainable Solutions</div>
              <div className="text-olive-100">For a Changing World</div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-olive-900 text-center mb-16">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-olive-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-olive-900 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-olive-900 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-olive-900">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Commitments Section */}
        <div>
          <h2 className="text-4xl font-bold text-olive-900 text-center mb-16">Our Commitments</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-olive-900 mb-4">{commitment.title}</h3>
                <p className="text-olive-900">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <p className="text-lg text-olive-900">
            By repurposing municipal waste into SAF, Sustainascope is addressing two key global
            challenges—reducing waste and curbing emissions in the aviation sector—helping to pave the
            way for a cleaner, more sustainable future for both the environment and the aviation industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailedAbout;