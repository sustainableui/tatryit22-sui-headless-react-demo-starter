import PropTypes from 'prop-types';
import React from 'react';

const Item = props =>
  <li className={`relative min-h-20 ${props.className}`}>
    <div className="absolute top-0 left-0 w-24">
      <span className="inline-block w-full font-rustico-regular text-5xl text-blue text-right pr-8">
        {props.number}.
      </span>
    </div>
    <p className="inline-block ml-24 pr-5 pt-2 max-w-paragraph">
      {props.children}
    </p>
  </li>;

Item.propTypes = {
  number: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  className: PropTypes.string,
}

export default Item;