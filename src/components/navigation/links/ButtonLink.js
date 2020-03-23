import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const ButtonLink = props =>
  <Link
    to="#"
    className="sm:hidden xs:hidden"
    onClick={props.onClick}
  >
    <button className={`${props.className} focus:outline-none h-full w-full hover:bg-transparent`}>
      <span className="inline-block max-w-3/4 break-normal">
        {props.text}
      </span>
    </button>
  </Link>;

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
}

export default ButtonLink;