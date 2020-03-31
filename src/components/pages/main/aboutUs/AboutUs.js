import Arrow from '../../../common/navigation/Arrow';
import Button from '../../../common/Button';
import { ROUTES } from '../../../../config/routes';
import React from 'react';
import Supporters from './supporters/Supporters';

const AboutUs = () =>
  <div className="grid grid-rows-5 overflow-x-hidden">
    <div className="col-span-1">
      <div className="flex flex-col justify-center items-center h-full">
        <p className="font-futura-medium text-lg text-center max-w-xs-paragraph mx-auto">
          Sme študenti vysokých škôl s podporou
          občianskej iniciatívy Poďme sa rozprávať.
        </p>
      </div>
    </div>
    <div className="col-span-1">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="xs:mt-5 sm:mt-5 md:mt-4 lg:mt-5 xl:mt-7 xs:mb-5 sm:mb-5 md:mb-4 lg:mb-5 xl:mb-7">
          <Button
            variant="outlined"
            text="Zistite Viac"
            to={ROUTES.O_NAS}
            color="blue"
          />
        </div>
      </div>
    </div>
    <Supporters />
    <Arrow
      top
      to={ROUTES.VITAJTE}
    />
  </div>;

export default AboutUs;