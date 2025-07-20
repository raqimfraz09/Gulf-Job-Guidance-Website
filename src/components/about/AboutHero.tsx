import React from 'react';
import { motion } from 'framer-motion';

const AboutHero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About StepUpPlacement</h1>
            <p className="text-lg text-gray-700 mb-8">
              We're on a mission to connect talented professionals with their dream careers and help companies find the perfect candidates.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;