import PropTypes from 'prop-types';
import React from 'react';

const Item = props =>
  <li className="pt-7 sm:pt-3 xs:pt-3">
    {props.text}
  </li>;

Item.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Item;