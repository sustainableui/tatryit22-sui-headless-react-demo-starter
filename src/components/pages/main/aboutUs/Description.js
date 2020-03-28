import Button from '../../../common/Button';
import { ROUTES } from '../../../../config/routes';
import React from 'react';

const Description = () =>
  <div className="grid grid-rows-2 h-full">
    <div className="row-span-1">
      <div className="flex flex-col justify-center items-center font-futura-medium text-lg text-center h-full">
        <p className="max-w-xs-paragraph p-5">
          Sme študenti vysokých škôl s podporou
          občianskej iniciatívy Poďme sa rozprávať.
        </p>
      </div>
    </div>
    <div className="row-span-1">
      <div className="flex flex-col justify-center items-center h-full">
        <Button
          variant="outlined"
          text="Zistite Viac"
          to={ROUTES.O_NAS}
          color="blue"
        />
      </div>
    </div>
  </div>;

export default Description;