import PropTypes from 'prop-types';
import React from 'react';

const Image = props =>
  <div className="inline-block w-72 ml-16 mr-16">
    <img
      alt=""
      src={props.imagePath}
      className="mx-auto mb-6"
    />
    <div className="font-rustico-regular text-center">
      <h2 className="text-3xl">{props.name}</h2>
      <h3 className="text-lg">({props.description})</h3>
    </div>
  </div>;

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Image;