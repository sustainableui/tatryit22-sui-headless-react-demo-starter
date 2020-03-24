import PropTypes from 'prop-types';
import React from 'react';

const Feature = props =>
  <div
    className={`${props.className} shadow-md rounded-gradient-box p-1 mb-5 w-full`}
    style={{ backgroundImage: 'linear-gradient(to right, #2cebad, #2e66ff)' }}
  >
    <p className="bg-white rounded-gradient-box p-7">
      {props.children}
    </p>
  </div>;

Feature.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]).isRequired,
  className: PropTypes.string,
}

export default Feature;