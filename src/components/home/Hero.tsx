import React from 'react';
import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 animated-bg overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-blue-200/30 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-[5%] w-64 h-64 rounded-full bg-teal-200/30 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>

      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-4">
                Discover Your <span className="text-teal-600">Perfect Career</span> Path
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                StepUpPlacement is your trusted partner in career development, offering specialized training and guidance to help you reach your professional goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started
                </Link>
                <a href="#services" className="btn-secondary">
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional team discussion" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="font-medium text-gray-700">Success Rate</p>
                </div>
                <p className="text-3xl font-bold text-blue-900">94%</p>
                <p className="text-sm text-gray-600">job placement within 3 months</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured companies */}
        <div className="mt-20">
          <p className="text-center text-gray-500 mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
            <span className="text-xl font-bold text-gray-400">AL-FUTTAIM</span>
            <span className="text-xl font-bold text-gray-400">Emirates Group</span>
            <span className="text-xl font-bold text-gray-400">SAUDI ARAMCO</span>
            <span className="text-xl font-bold text-gray-400">SAUDI NATIONAL BANK</span>
            <span className="text-xl font-bold text-gray-400">AL-MASOOD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;