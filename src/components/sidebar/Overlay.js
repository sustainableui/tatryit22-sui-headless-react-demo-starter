import PropTypes from 'prop-types';
import React from 'react';

const Overlay = props =>
  <div
    className="fixed w-screen h-screen overflow-hidden z-40 bg-black opacity-25"
    onClick={props.onClick}
  />;

Overlay.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Overlay;