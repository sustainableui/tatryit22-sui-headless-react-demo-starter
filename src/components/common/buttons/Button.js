import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const blueContainedClasses = "bg-blue text-white font-futura-bold hover:bg-blue-hover";
const greenContainedClasses = "bg-green text-black font-futura-bold hover:bg-green-hover";
const blueOutlinedClasses = "bg-transparent text-blue font-futura-medium border-4 border-blue hover:text-blue-hover hover:border-blue-hover";
const greenOutlinedClasses = "bg-transparent text-blue font-futura-medium border-4 border-green hover:text-green-hover hover:border-green-hover";

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
    <Link to={props.to}>
      <button className={`inline-flex items-center py-2 px-8 focus:outline-none ${props.className} ${getClasses()}`}>
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