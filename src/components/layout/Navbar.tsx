import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase as BriefcaseBusiness } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <BriefcaseBusiness size={32} className="text-blue-800" />
          <span className="text-2xl font-bold text-blue-900">StepUpPlacement</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className={`font-medium transition-colors hover:text-blue-700 ${
                  location.pathname === '/' ? 'text-blue-700' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`font-medium transition-colors hover:text-blue-700 ${
                  location.pathname === '/about' ? 'text-blue-700' : 'text-gray-700'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`font-medium transition-colors hover:text-blue-700 ${
                  location.pathname === '/contact' ? 'text-blue-700' : 'text-gray-700'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/contact" className="hidden md:block btn-primary">
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-custom py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className={`block font-medium transition-colors hover:text-blue-700 ${
                    location.pathname === '/' ? 'text-blue-700' : 'text-gray-700'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block font-medium transition-colors hover:text-blue-700 ${
                    location.pathname === '/about' ? 'text-blue-700' : 'text-gray-700'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block font-medium transition-colors hover:text-blue-700 ${
                    location.pathname === '/contact' ? 'text-blue-700' : 'text-gray-700'
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block btn-primary w-full text-center">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;