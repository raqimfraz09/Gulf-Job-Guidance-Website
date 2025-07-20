import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Clients from '../components/home/Clients';
import Testimonials from '../components/home/Testimonials';
import TrainingPrograms from '../components/home/TrainingPrograms';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <Testimonials />
      <TrainingPrograms />
      <CallToAction />
    </>
  );
};

export default Home;