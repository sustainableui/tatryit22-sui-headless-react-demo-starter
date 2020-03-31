import PropTypes from 'prop-types';
import React from 'react';

const Headline = props =>
  <h2 className={`text-center font-futura-bold text-5xl md:text-4xl md:text-3xl sm:text-2xl xs:text-2xl ${props.className}`}>
    {props.text}
  </h2>;

Headline.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Headline;