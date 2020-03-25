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
        <ScrollArrowButton position={props.position} to={props.to} />
      ) : (
        <RedirectArrowButton position={props.position} to={props.to} />
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
  to: PropTypes.string.isRequired,
}

export default Arrow;