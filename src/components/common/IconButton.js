import PropTypes from 'prop-types';
import React from 'react';

const IconButton = props =>
  <button className="focus:outline-none pointer-events-none">
    <img
      alt=""
      src={props.iconPath}
      className={`${props.className} hover:cursor-pointer pointer-events-auto fill-black`}
      onClick={props.onClick}
    />
  </button>;

IconButton.propTypes = {
  onClick: PropTypes.func,
  iconPath: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default IconButton;