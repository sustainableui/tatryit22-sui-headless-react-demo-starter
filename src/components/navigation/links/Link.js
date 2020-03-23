import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const LinkComponent = props =>
  <div className="sm:hidden xs:hidden">
    <Link
      to={props.to}
      className="leading-24 lg:leading-20 md:leading-16 align-middle focus:text-blue text-black hover:text-gray-hover"
      onClick={props.onClick}
    >
      {props.text}
    </Link>
  </div>;

LinkComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  to: PropTypes.object.isRequired,
}

export default LinkComponent;