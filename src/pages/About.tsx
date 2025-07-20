import React from 'react';
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import OurValues from '../components/about/OurValues';
import Team from '../components/about/Team';
import CallToAction from '../components/home/CallToAction';

const About: React.FC = () => {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurValues />
      <Team />
      <CallToAction />
    </>
  );
};

export default About;