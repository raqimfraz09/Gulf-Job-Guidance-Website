import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Lightbulb, Heart, Eye } from 'lucide-react';

const values = [
  {
    icon: <Users size={28} />,
    title: "User-Centric Approach",
    description: "We put job seekers and employers at the center of everything we do, creating features that solve real problems."
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Innovation",
    description: "We constantly evolve our platform with cutting-edge technology to provide the best job search experience."
  },
  {
    icon: <Heart size={28} />,
    title: "Inclusivity",
    description: "We believe everyone deserves access to great opportunities, regardless of background or circumstances."
  },
  {
    icon: <Eye size={28} />,
    title: "Transparency",
    description: "We provide clear, honest information about jobs, companies, and the hiring process."
  }
];

const OurValues: React.FC = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do at StepUpPlacement
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="card hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 text-blue-800 rounded-lg">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;