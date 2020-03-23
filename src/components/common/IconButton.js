import PropTypes from 'prop-types';
import React from 'react';

const ActionButton = props =>
  <button className="focus:outline-none pointer-events-none">
    <img
      alt=""
      src={props.iconPath}
      className={`${props.className} hover:cursor-pointer pointer-events-auto hover:fill-gray-hover`}
      onClick={props.onClick}
    />
  </button>;

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  iconPath: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default ActionButton;