import Button from '../../../common/Button';
import { ROUTES } from '../../../../config/routes';
import React from 'react';

const Description = () =>
  <div className="flex flex-col justify-center items-center h-full">
      <p className="font-futura-medium text-lg text-center max-w-xs-paragraph mx-auto">
        Sme študenti vysokých škôl s podporou
        občianskej iniciatívy Poďme sa rozprávať.
      </p>
      <div className="xs:mt-5 sm:mt-5 md:mt-4 lg:mt-5 xl:mt-7 xs:mb-5 sm:mb-5 md:mb-4 lg:mb-5 xl:mb-7">
        <Button
          variant="outlined"
          text="Zistite Viac"
          to={ROUTES.O_NAS}
          color="blue"
        />
      </div>
  </div>;

export default Description;