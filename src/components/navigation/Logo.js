import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as SVGBlackLogo } from '../../assets/images/logo/black.svg';
import { ReactComponent as SVGElementsBlackLogo } from '../../assets/images/logo/black_elements.svg';

const Logo = props =>
  <div className="col-span-2 flex flex-columns justify-start sm:col-span-1 pl-10 lg:pl-8 md:pl-6 sm:pl-8 xs:pl-8 xs:col-span-1">
    <SVGElementsBlackLogo
      className="w-20 lg:w-16 md:w-12 sm:hidden xs:hidden"
      onClick={props.onClick}
    />
    <SVGBlackLogo
      className="w-20 xl:hidden lg:hidden md:hidden sm:w-16 xs:w-16"
      onClick={props.onClick}
    />
  </div>;

Logo.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Logo;