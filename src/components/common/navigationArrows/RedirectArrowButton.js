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
  to: PropTypes.string.isRequired,
}

export default RedirectArrowButton;