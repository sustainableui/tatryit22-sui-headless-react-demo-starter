import IconButton from '../../common/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import facebookIconPath from '../../../assets/icons/facebook.svg';

const Link = props =>
  <div className="row-span-2 flex flex-col justify-center items-center h-full">
    <IconButton
      iconPath={facebookIconPath}
      onClick={props.onClick}
    />
    <span className="font-futura-medium pt-6 text-xl">
      Facebook
    </span>
  </div>;

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Link;