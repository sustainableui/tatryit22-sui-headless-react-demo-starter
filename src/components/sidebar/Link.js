import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const LinkComponent = props =>
  <div className="flex flex-col justify-center items-center">
    <Link
      to={props.to}
      className="font-futura-bold text-2xl focus:text-blue text-black hover:text-gray-hover"
      onClick={props.onClick}
    >
      {props.text}
    </Link>
  </div>;

LinkComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
}

export default LinkComponent;