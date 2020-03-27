import Features from './features/Features';
import React from 'react';
import Text from './Text';

const AboutService = () =>
  <div className="lg:flex lg:flex-col lg:justify-center lg:items-center xl:flex xl:flex-col xl:justify-center xl:items-center md:flex md:flex-col md:justify-center md:items-center h-full -mt-20 md:mt-0 sm:mt-0 xs:mt-0 sm:overflow-y-auto xs:overflow-y-auto">
    <Text />
    <Features />
  </div>;

export default AboutService;