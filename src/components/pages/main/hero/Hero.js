import { ROUTES, SECTION_IDS } from '../../../../config/routes';

import Arrow from '../../../common/navigation/Arrow';
import DeliverySet from './DeliverySet';
import Headline from './Headline';
import Logo from './Logo';
import React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';

const Hero = () =>
  <ScrollableSection hash={SECTION_IDS.VITAJTE}>
    <div className="h-full">
      <div className="grid grid-rows-10 sm:grid-rows-9 xs:grid-rows-9 h-full overflow-hidden">
        <div className="row-span-3 xs:row-span-2 sm:row-span-2" />
        <Logo />
        <DeliverySet />
        <Headline />
        <div className="row-span-3" />
      </div>
      <Arrow
        scroll
        to={ROUTES.O_SLUZBE}
        color="blue"
      />
    </div>
  </ScrollableSection>;

export default Hero;