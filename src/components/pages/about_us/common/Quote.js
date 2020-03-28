import PropTypes from 'prop-types';
import React from 'react';

const Quote = props =>
  <div className={props.className}>
    <p className="font-futura-medium text-center text-lg max-w-xs-paragraph">
      {props.text}
    </p>
  </div>;

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Quote;