import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-olive-900 mb-8">
              Pioneering Sustainable Solutions for a Better World
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-olive-900">
                Sustainascope is at the forefront of renewable energy innovation, developing cutting-edge solutions 
                that transform how we power our world.
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-olive-50 rounded-lg group hover:bg-olive-100 transition duration-300 cursor-pointer">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-olive-900 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">01</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-olive-900 mb-1">Our Mission</h3>
                    <p className="text-olive-900">Accelerating the transition to a low-carbon future through sustainable energy solutions.</p>
                  </div>
                  <ArrowRight className="ml-auto text-olive-900 group-hover:text-olive-800 transition-colors" />
                </div>
                <div className="flex items-center p-4 bg-olive-50 rounded-lg group hover:bg-olive-100 transition duration-300 cursor-pointer">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-olive-900 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">02</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-olive-900 mb-1">Our Vision</h3>
                    <p className="text-olive-900">A world where clean energy and environmental sustainability lead the way.</p>
                  </div>
                  <ArrowRight className="ml-auto text-olive-900 group-hover:text-olive-800 transition-colors" />
                </div>
              </div>
              <Link 
                to="/about"
                className="inline-block mt-6 bg-olive-900 text-white px-6 py-3 rounded-full hover:bg-olive-800 transition duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Sustainable Energy"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-olive-900 p-8 rounded-lg shadow-xl">
              <div className="text-4xl font-bold text-white mb-2">Sustainable Solutions</div>
              <div className="text-olive-100"> For a changing World </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;