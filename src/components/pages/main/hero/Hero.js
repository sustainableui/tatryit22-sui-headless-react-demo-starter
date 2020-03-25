import Arrow, { POSITIONS } from '../../../common/navigationArrows/Arrow';

import DeliverySet from './DeliverySet';
import Headline from './Headline';
import Logo from './Logo';
import { ROUTES } from '../../../../config/routes';
import React from 'react';
import Section from '../../../common/section/Section';
import backgroundPath from '../../../../assets/images/backgrounds/hero.svg';

const Hero = () =>
  <Section
    id="vitajte"
    backgroundPath={backgroundPath}
  >
    <div className="grid grid-rows-10 sm:grid-rows-9 xs:grid-rows-9 h-full overflow-hidden">
      <div className="row-span-3 xs:row-span-2 sm:row-span-2" />
      <Logo />
      <DeliverySet />
      <Headline />
      <div className="row-span-3" />
    </div>
    <Arrow
      position={POSITIONS.BOTTOM}
      to={ROUTES.O_SLUZBE}
    />
  </Section>;

export default Hero;