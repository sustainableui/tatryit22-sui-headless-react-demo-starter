import Arrow from '../../common/Arrow';
import Button from '../../common/Button';
import { ROUTES } from '../../../../config/routes';
import React from 'react';
import Supporters from './supporters/Supporters';

const AboutUs = () =>
  <div className="grid xl:grid-rows-5 overflow-x-hidden">
    <div className="xl:row-span-2 xs:pb-16 sm:pb-16 md:pb-16 lg:pb-24 xl:pb-34">
      <div className="flex flex-col justify-start items-center h-full">
        <p className="font-futura-medium text-lg text-center max-w-xs-paragraph mx-auto">
          Sme študenti vysokých škôl s podporou
          občianskej iniciatívy Poďme sa rozprávať.
        </p>
        <div className="xs:mt-5 sm:mt-5 md:mt-8 lg:mt-8 xl:mt-8">
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