import React, { useState } from 'react';

import { HashLink as Link } from 'react-router-hash-link';
import { POSITIONS } from './Arrow';
import PropTypes from 'prop-types';

const ScrollArrowButton = props => {
  const [hovered, setHovered] = useState();
  
  return (
    <Link
      smooth
      to={props.to}
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
    >
      <button className={`absolute focus:outline-none flex flex-col justify-center items-center -ml-6 w-12 h-12 bg-blue hover:bg-transparent ${props.position === POSITIONS.BOTTOM ? 'bottom-0' : 'top-0'} ${hovered ? 'border-blue border-4' : ''}`}>
        <svg
          viewBox="0 0 24 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 transform ${props.position === POSITIONS.BOTTOM ? 'rotate-0' : 'rotate-180'}`}
        >
          <path
            className={hovered ? 'fill-blue' : 'fill-white'}
            d="M12 20.8461L0.00888643 0.0769199L23.9911 0.0769178L12 20.8461Z"
          />
        </svg>
      </button>
    </Link>
  );
}

ScrollArrowButton.propTypes = {
  position: PropTypes.oneOf([
    'bottom',
    'top'
  ]).isRequired,
  to: PropTypes.string.isRequired,
}

export default ScrollArrowButton;