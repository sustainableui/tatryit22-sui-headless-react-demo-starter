import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import RedirectArrowButton from './RedirectArrowButton';
import ScrollArrowButton from './ScrollArrowButton';

export const POSITIONS = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right',
}

const Arrow = props => {
  const isVertical = props.position === POSITIONS.TOP || props.position === POSITIONS.BOTTOM;

  return (
    <div className={`flex justify-center items-center ${isVertical ? 'w-full flex-col' : 'h-full flex-row'}`}>
      {isVertical ? (
        <ScrollArrowButton position={props.position} link={props.link} />
      ) : (
        <RedirectArrowButton position={props.position} link={props.link} />
      )}
    </div>
  );
}

Arrow.propTypes = {
  position: PropTypes.oneOf([
    POSITIONS.TOP,
    POSITIONS.BOTTOM,
    POSITIONS.LEFT,
    POSITIONS.RIGHT
  ]).isRequired,
  link: PropTypes.instanceOf(Link).isRequired,
}

export default Arrow;