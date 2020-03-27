import PropTypes from 'prop-types';
import React from 'react';

const Description = props => 
  <div className="font-rustico-regular text-center">
    <h2 className="text-3xl">{props.name}</h2>
    <h3 className="text-lg">({props.text})</h3>
  </div>;

Description.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Description;