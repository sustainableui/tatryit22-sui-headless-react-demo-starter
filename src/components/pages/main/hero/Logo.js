import React from 'react';
import { ReactComponent as SVGElementsBlackLogo } from '../../../../assets/images/logo/black_elements.svg';

const Logo = () =>
  <div className="flex flex-col justify-center items-center">
    <SVGElementsBlackLogo className="xs:h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64" />
  </div>;

export default Logo;