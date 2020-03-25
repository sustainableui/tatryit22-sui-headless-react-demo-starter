import PropTypes from 'prop-types';
import React from 'react';

const Headline = props => 
  <div className={`${props.className} text-center flex flex-col justify-center items-center`}>
    <h1 className="font-rustico-regular text-5xl xl:pt-5 sm:pt-12 xs:pt-12 sm:pb-6 xs:pb-6">{props.text}</h1>
  </div>;

Headline.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Headline;