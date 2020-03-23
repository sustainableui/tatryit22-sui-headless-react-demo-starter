import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const LinkComponent = props =>
  <Link
    to="#"
    className="sm:hidden xs:hidden leading-24 lg:leading-20 md:leading-16 align-middle focus:text-blue text-black hover:text-gray-hover"
    onClick={props.onClick}
  >
    {props.text}
  </Link>;

LinkComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default LinkComponent;