import React from 'react';
import { ReactComponent as SVGDeliverySetIcon } from '../../../../assets/icons/delivery_set.svg';

const DeliverySet = () =>
  <div className="flex flex-col justify-center items-center">
    <SVGDeliverySetIcon className="xs:h-6 sm:h-7 md:h-8 lg:h-10 xl:h-14" />
  </div>;

export default DeliverySet;