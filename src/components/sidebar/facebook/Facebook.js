import Divider from './Divider';
import Link from './Link';
import PropTypes from 'prop-types';
import React from 'react';

const Facebook = props =>
  <div>
    <Divider />
    <Link onClick={props.onClick}/>
  </div>;

Facebook.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Facebook;