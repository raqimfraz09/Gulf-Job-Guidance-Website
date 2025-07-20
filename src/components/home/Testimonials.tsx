import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "JobHunt completely transformed my career path. The skills I gained through their training program were exactly what employers were looking for.",
    name: "Sarah Johnson",
    position: "Software Developer",
    company: "TechCorp",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "The career coaching I received was invaluable. They helped me identify my strengths and guided me toward opportunities I hadn't even considered.",
    name: "Michael Chen",
    position: "Marketing Director",
    company: "Global Brands",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "As someone changing careers, I was nervous about my prospects. JobHunt's program gave me the confidence and skills to successfully pivot into a new industry.",
    name: "Aisha Williams",
    position: "Data Analyst",
    company: "FinanceIQ",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    quote: "The networking opportunities alone were worth the investment. I connected with industry leaders who eventually became mentors and colleagues.",
    name: "David Rodriguez",
    position: "Project Manager",
    company: "BuildTech Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section className="py-20 bg-blue-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Hear from professionals who have successfully advanced their careers with our help.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 text-blue-200 opacity-50">
            <Quote size={80} />
          </div>
          <div className="absolute -bottom-10 -right-10 text-blue-200 opacity-50 transform rotate-180">
            <Quote size={80} />
          </div>

          {/* Testimonial carousel */}
          <div 
            className="relative overflow-hidden rounded-xl bg-white shadow-lg p-8 md:p-12"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="relative h-[400px] md:h-[300px]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: index === current ? 1 : 0,
                    x: index === current ? 0 : 100,
                    position: index === current ? 'relative' : 'absolute'
                  }}
                  transition={{ duration: 0.5 }}
                  className={`${index === current ? 'block' : 'hidden'} md:flex items-center gap-8`}
                >
                  <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-32 h-32 md:w-full md:h-auto md:max-w-[200px] rounded-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg italic text-gray-700 mb-6">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-blue-900">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-6">
              <button 
                onClick={prev}
                className="p-2 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === current ? 'bg-blue-700' : 'bg-blue-200'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={next}
                className="p-2 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;