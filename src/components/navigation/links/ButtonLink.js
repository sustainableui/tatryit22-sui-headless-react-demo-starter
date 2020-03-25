import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import React from 'react';

const ButtonLink = props =>
  <Link
    smooth
    to={props.to}
    className="sm:hidden xs:hidden"
  >
    <button className={`${props.className} focus:outline-none h-full w-full hover:bg-transparent`}>
      <span className="inline-block max-w-3/4 break-normal">
        {props.text}
      </span>
    </button>
  </Link>;

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default ButtonLink;