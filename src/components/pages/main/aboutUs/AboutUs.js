import Arrow from '../../../common/navigation/Arrow';
import Description from './Description';
import { ROUTES } from '../../../../config/routes';
import React from 'react';
import Supporters from './supporters/Supporters';

const AboutUs = () =>
  <div className="grid grid-rows-5">
    <div className="row-span-2">
      <Description />
    </div>
    <div className="row-span-3">
      <Supporters />
    </div>
    <Arrow
      top
      to={ROUTES.VITAJTE}
    />
  </div>;

export default AboutUs;