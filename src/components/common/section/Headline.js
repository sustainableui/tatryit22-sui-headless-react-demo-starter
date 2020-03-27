import PropTypes from 'prop-types';
import React from 'react';

const Headline = props => 
  <div className="flex flex-col justify-center items-center h-full break-normal text-center pr-5 pl-5">
    <h1 className="font-rustico-regular text-5xl xl:pt-24 lg:pt-20 md:pt-16 sm:pt-0 xs:pt-0">
      {props.text}
    </h1>
  </div>;

Headline.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Headline;