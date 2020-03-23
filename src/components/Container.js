import PropTypes from 'prop-types';
import React from 'react';

const Container = props =>
  <div>
    {props.children}
  </div>;

Container.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Container;