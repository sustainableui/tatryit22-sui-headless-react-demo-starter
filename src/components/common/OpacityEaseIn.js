import PropTypes from 'prop-types';
import React from 'react';

const OpacityEaseIn = (props) => {
  return (
    <div
      className={`transition-opacity ease-in duration-500 overflow-x-hidden opacity-0 ${
        props.perform ? 'opacity-100' : ''
      }`}
    >
      {props.children}
    </div>
  );
};

OpacityEaseIn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  perform: PropTypes.bool.isRequired
};

export default OpacityEaseIn;
