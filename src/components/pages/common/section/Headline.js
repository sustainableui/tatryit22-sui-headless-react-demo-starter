import PropTypes from 'prop-types';
import React from 'react';

const Headline = (props) => (
  <div className="text-center break-normal p-16 md:pt-32 lg:pt-36 xl:pt-40">
    <h1 className="font-rustico-regular text-5xl sm:text-4xl xs:text-4xl">{props.text}</h1>
  </div>
);

Headline.propTypes = {
  text: PropTypes.string.isRequired
};

export default Headline;
