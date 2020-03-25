import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import React from 'react';

const LinkComponent = props =>
  <div className="sm:hidden xs:hidden">
    <Link
      smooth
      to={props.to}
      className="leading-24 lg:leading-20 md:leading-16 align-middle focus:text-blue text-black hover:text-gray-hover"
    >
      {props.text}
    </Link>
  </div>;

LinkComponent.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default LinkComponent;