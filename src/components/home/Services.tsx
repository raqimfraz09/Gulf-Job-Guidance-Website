import React from 'react';
import { BookOpen, Users, TrendingUp, Target, Award, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <BookOpen size={24} />,
    title: 'Skills Development',
    description: 'Comprehensive training programs to build industry-relevant skills that employers are looking for.'
  },
  {
    icon: <Users size={24} />,
    title: 'Networking Opportunities',
    description: 'Connect with industry professionals and build valuable relationships to boost your career.'
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Career Advancement',
    description: 'Strategic guidance to help you climb the corporate ladder and achieve your career goals.'
  },
  {
    icon: <Target size={24} />,
    title: 'Job Placement',
    description: 'Direct connections with hiring managers and assistance throughout the application process.'
  },
  {
    icon: <Award size={24} />,
    title: 'Certification Programs',
    description: 'Industry-recognized certifications to enhance your resume and credibility.'
  },
  {
    icon: <UserCheck size={24} />,
    title: 'Interview Preparation',
    description: 'Mock interviews and coaching to help you confidently showcase your skills and experience.'
  }
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a wide range of career development services to help you succeed in today's competitive job market.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="card hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 p-3 bg-blue-100 text-blue-800 inline-block rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;