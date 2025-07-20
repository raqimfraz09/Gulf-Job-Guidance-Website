import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: "Jennifer Martinez",
    role: "CEO & Founder",
    bio: "Former HR Director with 15+ years of experience in talent acquisition and development.",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Michael Thompson",
    role: "Chief Training Officer",
    bio: "Specialized in developing curriculum for technical and leadership skills training.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Sarah Chen",
    role: "Head of Career Services",
    bio: "Career coach with expertise in helping professionals navigate career transitions.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "David Wilson",
    role: "Corporate Partnerships Director",
    bio: "Builds relationships with companies to create customized training and hiring solutions.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Team: React.FC = () => {
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
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">
            Meet the experts behind StepUpPlacement's success
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="text-center group"
            >
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="bg-white p-2 rounded-full text-blue-800 hover:bg-blue-100 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a 
                      href="#" 
                      className="bg-white p-2 rounded-full text-blue-800 hover:bg-blue-100 transition-colors"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
              <p className="text-teal-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;