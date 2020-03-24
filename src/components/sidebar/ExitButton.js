import IconButton from '../common/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import exitIconPath from '../../assets/icons/exit.svg';

const ExitButton = props =>
  <div className="h-24 flex flex-columns justify-end pr-10">
    <IconButton
      onClick={props.onClick}
      iconPath={exitIconPath}
      className="w-8"
    />
  </div>;

ExitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ExitButton;