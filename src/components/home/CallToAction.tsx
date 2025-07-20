import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Your Career to the Next Level?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of professionals who have accelerated their careers with JobHunt's specialized training programs and career services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn-primary bg-white text-blue-900 hover:bg-blue-50"
            >
              Get Started Today
            </Link>
            <Link 
              to="/about" 
              className="btn-secondary bg-transparent border-2 border-white hover:bg-blue-800"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;