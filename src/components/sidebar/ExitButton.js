import IconButton from '../common/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import exitIconPath from '../../assets/icons/exit.svg';

const ExitButton = props =>
  <div className="absolute h-24 pr-8 pt-7 top-0 right-0">
    <IconButton
      onClick={props.onClick}
      iconPath={exitIconPath}
      className="w-8 sm:w-6 xs:w-6"
    />
  </div>;

ExitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ExitButton;