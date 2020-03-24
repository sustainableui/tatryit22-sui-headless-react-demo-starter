import DeliverySet from './DeliverySet';
import Headline from './Headline';
import Logo from './Logo';
import React from 'react';
import backgroundPath from '../../../../assets/images/backgrounds/pattern_more_elements.svg';

const Hero = () =>
  <div
    className="w-screen h-screen overflow-hidden bg-fixed bg-no-repeat bg-cover"
    style={{ backgroundImage: `url(${backgroundPath})` }}
  >
    <div className="grid grid-rows-10 h-full overflow-hidden">
      <div className="row-span-3" />
      <Logo />
      <DeliverySet />
      <Headline />
      <div className="row-span-3" />
    </div>
  </div>;

export default Hero;