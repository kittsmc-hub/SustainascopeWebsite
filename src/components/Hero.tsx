import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=2074"
          alt="Airplane Takeoff"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-olive-900/60"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Creating a 
              <span className="text-olive-300 block">Sustainable Future</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Leading the transition to sustainable aviation through innovative solutions
              and environmental stewardship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('#services')}
                className="bg-olive-900 text-white px-8 py-4 rounded-full hover:bg-olive-800 transition duration-300 text-lg"
              >
                Explore Our Solutions
              </button>
              <Link 
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition duration-300 text-lg text-center"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-olive-900 to-transparent h-32"></div>
    </section>
  );
};

export default Hero;