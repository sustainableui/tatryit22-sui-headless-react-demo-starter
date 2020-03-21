import React from 'react';
import { ReactComponent as SvgLogo } from '../../assets/images/logo/logo_white.svg';

const Logo = () =>
  <div className="flex flex-col justify-center items-center h-full">
    <SvgLogo className="w-32" />
  </div>;

export default Logo;