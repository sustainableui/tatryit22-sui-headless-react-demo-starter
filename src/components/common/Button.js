import { BUTTONS } from '../../config/transitions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { goToTop } from 'react-update-url-on-scroll';

const blueContainedClasses = "bg-blue text-white font-futura-bold hover:bg-white hover:text-blue";
const greenContainedClasses = "bg-green text-black font-futura-bold hover:bg-white hover:text-blue";
const blueOutlinedClasses = "bg-transparent text-blue font-futura-medium border-4 border-blue hover:text-white hover:border-0 hover:bg-blue";
const greenOutlinedClasses = "bg-transparent text-green font-futura-medium border-4 border-green hover:text-white hover:border-0 hover:bg-green";

const Button = props => {
  const getClasses = () => {
    let classes = "";
    if (props.color === 'green') {
      if (props.variant === 'outlined') {
        classes = greenOutlinedClasses;
      }
      else if (props.variant === 'contained') {
        classes = greenContainedClasses;
      }
    }
    else if (props.color === 'blue') {
      if (props.variant === 'outlined') {
        classes = blueOutlinedClasses;
      }
      else if (props.variant === 'contained') {
        classes = blueContainedClasses;
      }
    }
    return classes;
  }

  return (
    <Link to={props.to} onClick={() => goToTop()}>
      <button className={`${BUTTONS} inline-flex items-center focus:outline-none ${props.className} ${getClasses()} px-14 py-3 sm:px-8 sm:py-2 xs:px-8 xs:py-2`}>
        {props.text}
      </button>
    </Link>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    'outlined',
    'contained'
  ]).isRequired,
  color: PropTypes.oneOf([
    'green',
    'blue'
  ]).isRequired,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Button;