import Description from './Description';
import React from 'react';
import Supporters from './supporters/Supporters';

const AboutUs = () =>
  <div className="grid grid-rows-5 h-full overflow-hidden">
    <div className="row-span-2">
      <Description />
    </div>
    <div className="row-span-3">
      <Supporters />
    </div>
  </div>;

export default AboutUs;