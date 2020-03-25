import PropTypes from 'prop-types';
import React from 'react';

const Description = props =>
  <div className="flex flex-col justify-center items-center text-2xl font-futura-medium">
    <p className={`max-w-sm-paragraph capitalize text-center ${props.theme === 'blue' ? 'text-white' : ''}`}>
      {props.text}
    </p>
  </div>;

Description.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([
    'green',
    'blue'
  ]).isRequired,
}

export default Description;