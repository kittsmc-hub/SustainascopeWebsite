import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (path.startsWith('#') && window.location.pathname === '/') {
      const element = document.querySelector(path);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else if (path === '/about') {
      navigate('/about');
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(path);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="/" onClick={(e) => handleNavClick(e, '/')}>
              <img 
                src="/SunstainascopeLogo.png" 
                alt="Sustainascope" 
                className="h-17 w-60 object-contain"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, '#home')}
                className={`${isScrolled ? 'text-olive-900' : 'text-white'} hover:text-olive-800 transition-colors font-medium`}
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')}
                className={`${isScrolled ? 'text-olive-900' : 'text-white'} hover:text-olive-800 transition-colors font-medium`}
              >
                About
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, '#services')}
                className={`${isScrolled ? 'text-olive-900' : 'text-white'} hover:text-olive-800 transition-colors font-medium`}
              >
                Solutions
              </a>
              <a 
                href="#footer" 
                onClick={(e) => handleNavClick(e, '#footer')}
                className={`${isScrolled ? 'text-olive-900' : 'text-white'} hover:text-olive-800 transition-colors font-medium`}
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-olive-900' : 'text-white'} hover:text-olive-800`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="block px-3 py-2 text-olive-900 hover:text-olive-800"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="block px-3 py-2 text-olive-900 hover:text-olive-800"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, '#services')}
              className="block px-3 py-2 text-olive-900 hover:text-olive-800"
            >
              Solutions
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block px-3 py-2 text-olive-900 hover:text-olive-800"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;