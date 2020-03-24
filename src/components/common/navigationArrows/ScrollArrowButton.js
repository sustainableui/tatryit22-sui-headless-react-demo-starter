import { Link } from 'react-router-dom';
import { POSITIONS } from './Arrow';
import PropTypes from 'prop-types';
import React from 'react';
import { ReactComponent as SVGArrowIcon } from '../../../assets/icons/arrow.svg';

const ScrollArrowButton = props =>
  <button className={`absolute focus:outline-none flex flex-col justify-center items-center w-12 h-12 bg-blue hover:bg-transparent hover:border-blue ${props.position === POSITIONS.BOTTOM ? 'bottom-0' : 'top-0'}`}>
    <SVGArrowIcon className={`w-4 group-hover:fill-blue transform ${props.position === POSITIONS.BOTTOM ? 'rotate-0' : 'rotate-180'}`} />
  </button>;

ScrollArrowButton.propTypes = {
  position: PropTypes.oneOf([
    'bottom',
    'top'
  ]).isRequired,
  link: PropTypes.instanceOf(Link).isRequired,
}

export default ScrollArrowButton;