import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const TrainingPrograms: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Training Programs</h2>
          <p className="section-subtitle">
            Specialized career development programs designed for professionals at every stage of their career journey.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* For Freshers */}
          <motion.div 
            variants={itemVariants}
            className="relative group"
          >
            <div className="card border-t-4 border-blue-500 h-full group-hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 text-blue-700 p-3 rounded-full inline-block mb-4">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Freshers</h3>
              <p className="text-gray-600 mb-6">
                Launch your career with confidence through our entry-level training programs designed specifically for recent graduates.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Industry fundamentals and practical skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Resume building and interview preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Internship placement assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Professional networking workshops</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="inline-block text-blue-700 font-medium hover:text-blue-800 transition-colors"
              >
                Learn More →
              </a>
            </div>
          </motion.div>

          {/* For Young Professionals */}
          <motion.div 
            variants={itemVariants}
            className="relative group"
          >
            <div className="card border-t-4 border-teal-500 h-full group-hover:shadow-xl transition-all duration-300">
              <div className="bg-teal-100 text-teal-700 p-3 rounded-full inline-block mb-4">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Young Professionals</h3>
              <p className="text-gray-600 mb-6">
                Accelerate your career growth with specialized training designed for professionals with 2-5 years of experience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Advanced technical and soft skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Leadership development programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Project management certifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Career advancement strategies</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="inline-block text-teal-700 font-medium hover:text-teal-800 transition-colors"
              >
                Learn More →
              </a>
            </div>
          </motion.div>

          {/* For Experienced Professionals */}
          <motion.div 
            variants={itemVariants}
            className="relative group"
          >
            <div className="card border-t-4 border-orange-500 h-full group-hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-100 text-orange-700 p-3 rounded-full inline-block mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Experienced Professionals</h3>
              <p className="text-gray-600 mb-6">
                Elevate your expertise and leadership capabilities with our executive-level training programs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Executive leadership development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Strategic decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Industry-specific masterclasses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>C-suite transition preparation</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="inline-block text-orange-700 font-medium hover:text-orange-800 transition-colors"
              >
                Learn More →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingPrograms;