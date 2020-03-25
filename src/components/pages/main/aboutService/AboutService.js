import Features from './features/Features';
import React from 'react';
import Text from './Text';

const AboutService = () =>
  <div className="grid grid-rows-4 min-h-full">
    <div className="row-span-1">
      <Text />
    </div>
    <div className="row-span-3 hidden">
      <Features />
    </div>
  </div>;

export default AboutService;