import { BUTTONS, OPACITY } from '../../../config/transitions';
import React, { useState } from 'react';

import GradientDivider from './GradientDivider';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import { setDocumentTitleFromRoute } from '../../../utils/routesUtils';

const ELEMENTS = {
  ROOT: 1,
  SVG: 2,
  LINK: 3,
  SVG_WRAPPER: 4,
};

const Arrow = props => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(false);

  const getClasses = element => {
    let classes = "";
    if (element === ELEMENTS.ROOT) {
      if (props.scroll || props.top) {
        classes = "w-screen";
      }
      else if (props.back) {
        classes = "h-screen top-1/2";
      }
    }
    else if (element === ELEMENTS.SVG) {
      if (props.top) {
        classes = hovered ? 'fill-black' : 'fill-white';
      }
      else {
        if (props.color === 'green') {
          classes = hovered ? "fill-green" : "fill-white";
        }
        else if (props.color === 'blue') {
          classes = hovered ? "fill-blue" : "fill-white";
        }
      }
    }
    else if (element === ELEMENTS.LINK) {
      if (props.top) {
        classes = "bg-black hover:border-black mx-auto w-12 h-12 sm:w-8 sm:h-8 xs:w-8 xs:h-8";
      }
      else {
        if (props.color === 'green') {
          if (props.scroll) {
            classes = "bg-green hover:border-green mx-auto w-12 h-12 sm:w-8 sm:h-8 xs:w-8 xs:h-8";
          }
          else if (props.back) {
            classes = "bg-green hover:border-green w-24 h-24 md:w-16 md:h-16 sm:w-12 sm:h-12 xs:w-12 xs:h-12";
          }
        }
        else if (props.color === 'blue') {
          if (props.scroll) {
            classes = "bg-blue hover:border-blue mx-auto w-12 h-12 sm:w-8 sm:h-8 xs:w-8 xs:h-8";
          }
          else if (props.back) {
            classes = "bg-blue hover:border-blue w-24 h-24 md:w-16 md:h-16 sm:w-12 sm:h-12 xs:w-12 xs:h-12";
          }
        }
      }
    }
    else if (element === ELEMENTS.SVG_WRAPPER) {
      if (props.scroll || props.top) {
        classes = "w-4 sm:w-3 xs:w-3";
      }
      else if (props.back) {
        classes = "w-8 md:w-5 sm:w-4 xs:w-4 mr-1";
      }
    }
    return classes;
  }

  const handleClick = () => {
    setDocumentTitleFromRoute(props.to);
    setHovered(false);
    setClicked(true);
  }

  return (
    <React.Fragment>
      <div className={`${OPACITY} ${clicked && props.scroll ? 'opacity-0' : 'opacity-100'} ${props.back ? 'fixed' : 'absolute'} left-0 bottom-0 ${props.scroll ? 'mb-2' : ''} ${getClasses(ELEMENTS.ROOT)} z-30`}>
        <Link
          smooth
          to={props.to}
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`${BUTTONS} ${getClasses(ELEMENTS.LINK)} hover:bg-transparent hover:border-4 border-4 border-transparent focus:outline-none flex flex-col justify-center items-center`}
        >
          <svg
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${props.back ? 'transform rotate-90' : (props.top ? 'transform rotate-180' : '')} ${getClasses(ELEMENTS.SVG_WRAPPER)}`}
          >
            <path
              className={`${BUTTONS} ${getClasses(ELEMENTS.SVG)}`}
              d="M12 20.8461L0.00888643 0.0769199L23.9911 0.0769178L12 20.8461Z"
            />
          </svg>
        </Link>
      </div>
      {props.scroll && <GradientDivider />}
    </React.Fragment>
  );
}

Arrow.propTypes = {
  scroll: PropTypes.bool,
  back: PropTypes.bool,
  top: PropTypes.bool,
  to: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'green',
    'blue',
  ]),
}

export default Arrow;