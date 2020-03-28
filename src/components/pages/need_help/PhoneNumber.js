import PropTypes from 'prop-types';
import React from 'react';

const PhoneNumber = props =>
  <div className="text-center pt-14 md:pt-10 sm:pt-3 xs:pt-3">
    <span className="font-futura-medium text-md md:text-sm sm:text-sm xs:text-sm text-gray-hover">
      objednávka cez tel. č.
    </span>
    <h1 className="font-futura-bold text-6xl md:text-5xl sm:text-3xl xs:text-3xl text-blue">
      {props.number}
    </h1>
  </div>;

PhoneNumber.propTypes = {
  number: PropTypes.string.isRequired,
};

export default PhoneNumber;