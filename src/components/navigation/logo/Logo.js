import Circle from './Circle';
import { HashLink as Link } from 'react-router-hash-link';
import { ROUTES } from '../../../config/routes';
import React from 'react';
import { ReactComponent as SVGElementsBlackLogo } from '../../../assets/images/logo/black_elements.svg';

const Logo = () =>
  <div className="relative col-span-2 flex flex-columns justify-start sm:col-span-1 pl-10 lg:pl-8 md:pl-6 sm:pl-8 xs:pl-8 xs:col-span-1">
    <Link
      smooth
      to={ROUTES.VITAJTE}
      className="flex flex-col justify-center items-center w-20 lg:w-16 md:w-12 sm:w-12 xs:w-12 sm:-ml-5 sm:-mt-2 xs:-ml-5 xs:-mt-2 z-41"
    >
      <SVGElementsBlackLogo/>
    </Link>
    <Circle />
  </div>;

export default Logo;