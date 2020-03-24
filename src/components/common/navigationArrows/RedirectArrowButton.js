import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const RedirectArrowButton = () => {
  return (
    <div>

    </div>
  );
}

RedirectArrowButton.propTypes = {
  position: PropTypes.oneOf([
    'right',
    'left'
  ]).isRequired,
  link: PropTypes.instanceOf(Link).isRequired,
}

export default RedirectArrowButton;