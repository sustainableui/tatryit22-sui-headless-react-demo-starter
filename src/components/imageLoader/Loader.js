import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as SVGLoaderIcon } from '../../assets/icons/loader.svg';

const Loader = props =>
  <div className="absolute top-0 left-0 h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
    <SVGLoaderIcon className="w-1/12" />
    <div className="hidden">
      {props.children}
    </div>
  </div>;

Loader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
};

export default Loader;