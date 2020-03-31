import { BUTTONS } from '../../../config/transitions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { goToTop } from 'react-update-url-on-scroll';

const invertedBlueContainedClasses = "bg-blue text-white font-futura-bold hover:bg-green hover:text-blue";
const blueContainedClasses = "bg-blue text-white font-futura-bold hover:bg-white hover:text-blue";
const invertedGreenContainedClasses = "bg-green text-black font-futura-bold hover:bg-blue hover:text-green";
const greenContainedClasses = "bg-green text-black font-futura-bold hover:bg-white hover:text-blue";
const invertedBlueOutlinedClasses = "bg-transparent text-blue font-futura-medium border-4 border-blue hover:text-blue hover:border-0 hover:bg-white";
const blueOutlinedClasses = "bg-transparent text-blue font-futura-medium border-4 border-blue hover:text-white hover:border-0 hover:bg-blue";
const invertedGreenOutlinedClasses = "bg-transparent text-green font-futura-medium border-4 border-green hover:text-green hover:border-0 hover:bg-white";
const greenOutlinedClasses = "bg-transparent text-green font-futura-medium border-4 border-green hover:text-white hover:border-0 hover:bg-green";
const disabledClasses = "bg-gray-hover text-white font-futura-bold pointer-events-none";

const Button = props => {
  const getClasses = () => {
    let classes = "";
    if (props.disabled) {
      classes = disabledClasses;
    }
    else {
      if (props.color === 'green') {
        if (props.variant === 'outlined') {
          classes = props.invertedHover ? invertedGreenOutlinedClasses : greenOutlinedClasses;
        }
        else if (props.variant === 'contained') {
          classes = props.invertedHover ? invertedGreenContainedClasses : greenContainedClasses;
        }
      }
      else if (props.color === 'blue') {
        if (props.variant === 'outlined') {
          classes = props.invertedHover ? invertedBlueOutlinedClasses : blueOutlinedClasses;
        }
        else if (props.variant === 'contained') {
          classes = props.invertedHover ? invertedBlueContainedClasses : blueContainedClasses;
        }
      }
    }
    return classes;
  }

  const button = (
    <button className={`${BUTTONS} inline-flex items-center focus:outline-none ${getClasses()} px-14 py-3 sm:px-8 sm:py-2 xs:px-8 xs:py-2 ${props.className ? props.className : ''}`}>
      {props.text}
    </button>
  );

  return (
    <React.Fragment>
      {props.disabled ? (
        <React.Fragment>
          {button}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {props.redirect ? (
            <a
              href={props.to}
              rel="noopener noreferrer"
              target="_blank"
            >
              {button}
            </a>
          ) : (
            <Link to={props.to} onClick={() => goToTop()}>
              {button}
            </Link>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
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
  redirect: PropTypes.bool,
  disabled: PropTypes.bool,
  invertedHover: PropTypes.bool,
}

export default Button;