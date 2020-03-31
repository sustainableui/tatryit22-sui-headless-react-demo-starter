import PropTypes from 'prop-types';
import React from 'react';

const Description = props =>
  <div className="text-2xl sm:text-xl xs:text-xl font-futura-medium xs:p-5 sm:p-10 md:p-10 lg:p-10 xl:p-12">
    <p className={`max-w-sm-paragraph text-center ${props.theme === 'blue' ? 'text-white' : ''}`}>
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