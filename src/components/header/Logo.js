import React from 'react';
import { ReactComponent as SvgLogo } from '../../assets/images/logo/logo_circle_blue.svg';

const Logo = () =>
  <div className="absolute left-3 top-3">
    <SvgLogo className="w-32" />
  </div>;

export default Logo;