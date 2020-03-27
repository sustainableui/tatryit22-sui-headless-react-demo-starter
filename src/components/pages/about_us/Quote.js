import PropTypes from 'prop-types';
import React from 'react';

const Quote = props =>
  <div className="flex flex-col justify-start items-center h-full mt-10">
    <p className="font-futura-medium text-center text-lg max-w-xs-paragraph">
      {props.text}
    </p>
  </div>;

Quote.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Quote;