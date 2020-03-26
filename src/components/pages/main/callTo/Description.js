import PropTypes from 'prop-types';
import React from 'react';

const Description = props =>
  <div className="text-2xl sm:text-xl xs:text-xl font-futura-medium pr-10 pl-10 pt-10 pb-14">
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