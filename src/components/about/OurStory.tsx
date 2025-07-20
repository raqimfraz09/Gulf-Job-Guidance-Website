import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurStory: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 animated-bg overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-blue-100/50 blur-3xl"
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
          className="absolute bottom-20 right-[5%] w-64 h-64 rounded-full bg-teal-100/40 blur-3xl"
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
        <div className="text-center mb-16">
          <h2 className="section-title">Our Story</h2>
          <p className="section-subtitle">
            How we became a leading career development platform
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <img 
              src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="JobHunt team members collaborating" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Founded with a Purpose</h3>
            <p className="text-gray-700 mb-4">
              StepUpPlacement was founded in 2020 by a team of career counselors and industry professionals who saw a critical gap in the job market: a disconnect between the skills employers needed and the training job seekers received.
            </p>
            <p className="text-gray-700 mb-4">
              What began as a small consulting firm has grown into a comprehensive career development platform that has helped over 50,000 professionals advance their careers and find fulfilling roles at leading companies.
            </p>
            <p className="text-gray-700 mb-4">
              Our approach combines industry-specific training, personalized career coaching, and direct connections with employers to create a seamless path from skill development to job placement.
            </p>
            <p className="text-gray-700">
              Today, StepUpPlacement partners with hundreds of companies across multiple industries to provide tailored training solutions and connect them with exceptional talent.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-20 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
          
          <div className="grid grid-cols-1 gap-8">
            <TimelineItem 
              year="2018" 
              title="Founded in New York"
              description="JobHunt begins as a career consulting firm with a team of 5 industry experts."
              isLeft={true}
            />
            
            <TimelineItem 
              year="2019" 
              title="First Training Program"
              description="Launched our first specialized training program focused on software development skills."
              isLeft={false}
            />
            
            <TimelineItem 
              year="2020" 
              title="Online Expansion"
              description="Pivoted to fully online training during the pandemic, reaching clients nationwide."
              isLeft={true}
            />
            
            <TimelineItem 
              year="2022" 
              title="Corporate Partnerships"
              description="Established partnerships with Fortune 500 companies for tailored training solutions."
              isLeft={false}
            />
            
            <TimelineItem 
              year="2024" 
              title="Global Reach"
              description="Expanded operations to serve professionals and companies globally, with training programs in 12 countries."
              isLeft={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLeft }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -30 : 30 }}
      transition={{ duration: 0.6 }}
      className={`flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className={`hidden md:block md:w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <div className={`p-4 bg-white rounded-lg shadow-md ${isLeft ? 'ml-auto' : 'mr-auto'} max-w-sm`}>
          <h4 className="text-xl font-semibold text-blue-900 mb-2">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      
      <div className="relative flex-shrink-0">
        <div className="h-10 w-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold relative z-10">
          {year.slice(2)}
        </div>
      </div>
      
      <div className="md:hidden ml-4 p-4 bg-white rounded-lg shadow-md max-w-sm">
        <span className="text-sm font-bold text-blue-800">{year}</span>
        <h4 className="text-xl font-semibold text-blue-900 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="hidden md:block md:w-5/12 relative">
        <div className={`absolute top-0 ${isLeft ? '-left-8' : '-right-8'}`}>
          <span className="text-sm font-bold text-blue-800 bg-blue-100 px-3 py-1 rounded-full">{year}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default OurStory;