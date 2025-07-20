import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase as BriefcaseBusiness, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BriefcaseBusiness size={28} className="text-teal-400" />
              <span className="text-xl font-bold">StepUpPlacement</span>
            </div>
            <p className="text-blue-100 mb-6">
              Connecting talented professionals with their dream careers and helping companies find the perfect candidates.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Career Coaching</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Resume Building</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Skills Training</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Interview Preparation</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Job Placement</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Corporate Training</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-blue-100">Bharat Nagar New Friends Colony
                  Jamia Nagar, New Delhi India</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-blue-100">+(91) 9162285891</span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-blue-100">infostepupplacement@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} StepUpPlacement. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;