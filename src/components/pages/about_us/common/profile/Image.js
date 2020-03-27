import PropTypes from 'prop-types';
import React from 'react';

const Image = props =>
  <img
    alt=""
    src={props.imagePath}
    className="mx-auto mb-6 "
  />;

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
}

export default Image;