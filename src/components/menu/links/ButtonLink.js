import { BUTTONS } from '../../../config/transitions';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import React from 'react';
import { setDocumentTitleFromRoute } from '../../../utils/routesUtils';

const ButtonLink = props => {
  const getClasses = () => {
    let classes = "";
    if (props.color === 'blue') {
      if (props.isActive) {
        classes = "text-blue bg-transparent";
      }
      else {
        classes = "bg-blue text-white hover:text-blue";
      }
    }
    else if (props.color === 'green') {
      if (props.isActive) {
        classes = "text-green bg-transparent";
      }
      else {
        classes = "bg-green text-black hover:text-green";
      }
    }
    return classes;
  }

  const handleClick = () => {
    setDocumentTitleFromRoute(props.to);
    if (props.menuInSidebar) {
      props.onClick();
    }
  }

  return (
    <Link
      smooth
      to={props.to}
      onClick={handleClick}
      className={`${props.menuInSidebar ? 'leading-24' : 'sm:hidden xs:hidden'} ${props.isActive ? 'pointer-events-none' : '' }`}
      style={props.menuInSidebar ? { display: 'contents' } : {}}
    >
      <button className={`${BUTTONS} ${getClasses()} ${props.menuInSidebar ? 'max-h-24' : ''} hover:bg-transparent focus:outline-none h-full w-full`}>
        <span className="inline-block max-w-3/4 break-normal">
          {props.text}
        </span>
      </button>
    </Link>
  );
}

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'blue',
    'green',
  ]).isRequired,
  isActive: PropTypes.bool.isRequired,
  menuInSidebar: PropTypes.bool,
  onClick: PropTypes.func,
}

export default ButtonLink;