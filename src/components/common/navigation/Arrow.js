import React, { useState } from 'react';

import { BUTTONS } from '../../../config/transitions';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import { setDocumentTitleFromRoute } from '../../../config/routes';

const ELEMENTS = {
  ROOT: 1,
  SVG: 2,
  LINK: 3,
  SVG_WRAPPER: 4,
};

const Arrow = props => {
  const [hovered, setHovered] = useState();

  const getClasses = element => {
    let classes = "";
    if (element === ELEMENTS.ROOT) {
      if (props.scroll) {
        classes = "w-screen";
      }
      else if (props.back) {
        classes = "h-screen top-1/2";
      }
    }
    else if (element === ELEMENTS.SVG) {
      if (props.color === 'green') {
        classes = hovered ? "fill-green" : "fill-white";
      }
      else if (props.color === 'blue') {
        classes = hovered ? "fill-blue" : "fill-white";
      }
    }
    else if (element === ELEMENTS.LINK) {
      if (props.color === 'green') {
        if (props.scroll) {
          classes = "bg-green hover:border-green mx-auto w-12 h-12";
        }
        else if (props.back) {
          classes = "bg-green hover:border-green w-24 h-24 md:w-16 md:h-16";
        }
      }
      else if (props.color === 'blue') {
        if (props.scroll) {
          classes = "bg-blue hover:border-blue mx-auto w-12 h-12";
        }
        else if (props.back) {
          classes = "bg-blue hover:border-blue w-24 h-24 md:w-16 md:h-16";
        }
      }
    }
    else if (element === ELEMENTS.SVG_WRAPPER) {
      if (props.scroll) {
        classes = "w-4";
      }
      else if (props.back) {
        classes = "w-8 md:w-4";
      }
    }
    return classes;
  }

  return (
    <div className={`absolute left-0 bottom-0 ${getClasses(ELEMENTS.ROOT)} sm:hidden xs:hidden`}>
      <Link
        smooth
        to={props.to ? props.to : ''}
        onClick={() => setDocumentTitleFromRoute(props.to)}
        onMouseEnter={() => setHovered(!hovered)}
        onMouseLeave={() => setHovered(!hovered)}
        className={`${BUTTONS} ${getClasses(ELEMENTS.LINK)} hover:bg-transparent hover:border-4 border-4 border-transparent focus:outline-none flex flex-col justify-center items-center`}
      >
        <svg
          viewBox="0 0 24 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${props.back ? 'transform rotate-90' : ''} ${getClasses(ELEMENTS.SVG_WRAPPER)}`}
        >
          <path
            className={`${BUTTONS} ${getClasses(ELEMENTS.SVG)}`}
            d="M12 20.8461L0.00888643 0.0769199L23.9911 0.0769178L12 20.8461Z"
          />
        </svg>
      </Link>
    </div>
  );
}

Arrow.propTypes = {
  scroll: PropTypes.bool,
  back: PropTypes.bool,
  to: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'green',
    'blue',
  ]).isRequired,
}

export default Arrow;