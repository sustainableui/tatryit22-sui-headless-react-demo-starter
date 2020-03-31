import PropTypes from 'prop-types';
import React from 'react';

const Step = props =>
  <li className={`relative min-h-20 ${props.number === 1 || props.number === 6 ? '' : 'xl:pt-14 lg:pt-12 md:pt-12'} sm:pt-8 xs:pt-8 ${props.className ? props.className : ''}`}>
    <div className={`absolute top-0 left-0 w-24 ${props.number === 1 || props.number === 6 ? '' : 'xl:pt-14 lg:pt-12 md:pt-12'} sm:pt-8 xs:pt-8`}>
      <span className="inline-block w-full font-rustico-regular text-5xl text-blue text-right pr-8">
        {props.number}.
      </span>
    </div>
    <p className="inline-block ml-24 pr-5 pt-2 max-w-paragraph">
      {props.children}
    </p>
  </li>;

Step.propTypes = {
  number: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  className: PropTypes.string,
}

export default Step;