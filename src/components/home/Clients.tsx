import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const clients = [
  {
    name: 'Al-Futtaim Group DL',
    logo: 'AL-FUTTAIM',
    description: 'Partnership to train and place tech talent'
  },
  {
    name: 'Al-Masood Group',
    logo: 'AL-MASOOD',
    description: 'Talent acquisition for engineering roles'
  },
  {
    name: 'Emirates Group',
    logo: 'EMIRATES',
    description: 'Airline and logistics talent development'
  },
  {
    name: 'Etihad Etisalat JSC (Mobily)',
    logo: 'MOBILY',
    description: 'Telecommunications talent training program'
  },
  {
    name: '	Saudi Arabian Oil Company (Saudi Aramco)',
    logo: 'SAUDI ARAMCO',
    description: 'Energy sector talent development initiative'
  },
  {
    name: '	Saudi National Bank (SNB)',
    logo: 'SAUDI NATIONAL BANK',
    description: 'Banking and finance talent acquisition program'
  }
];

const Clients: React.FC = () => {
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
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Clients</h2>
          <p className="section-subtitle">
            We're proud to partner with leading organizations to provide exceptional talent and training solutions.
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="card border border-gray-100 hover:border-blue-200 text-center"
            >
              <div className="mb-4 h-12 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-400">{client.logo}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{client.name}</h3>
              <p className="text-gray-600">{client.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;