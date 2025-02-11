import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin as LinkedIn, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-olive-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <Link to="/">
                <img src="/SunstainascopeLogo.png" alt="Sustainascope" className="h-16" />
              </Link>
              <p className="text-olive-100">
                Leading the way in sustainable energy solutions and environmental conservation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-olive-100 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-olive-100 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://www.linkedin.com/company/sustainascope/" className="text-olive-100 hover:text-white transition-colors">
                  <LinkedIn size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Solutions</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/#services" className="text-olive-100 hover:text-white flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-2" />
                    Sustainable Aviation Fuel
                  </Link>
                </li>
                <li>
                  <Link to="/#services" className="text-olive-100 hover:text-white flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-2" />
                    CLEWS Modeling
                  </Link>
                </li>
                <li>
                  <Link to="/#services" className="text-olive-100 hover:text-white flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-2" />
                    Waste Management
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-olive-100 hover:text-white flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-2" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-olive-100 hover:text-white flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-2" />
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-olive-100 hover:text-white flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-2" />
                    News & Media
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-olive-100">
                  <Mail className="w-5 h-5 mr-3" />
                  <a href="mailto:info@sustainascope.com" className="hover:text-white">
                    info@sustainascope.com
                  </a>
                </li>
                <li className="flex items-center text-olive-100">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+254722834500</span>
                </li>
                <li className="flex items-center text-olive-100">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Mawensi Road, UpperHill</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-olive-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-olive-100 text-sm">
              © {new Date().getFullYear()} Sustainascope. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-olive-100 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-olive-100 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/cookies" className="text-olive-100 hover:text-white text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;