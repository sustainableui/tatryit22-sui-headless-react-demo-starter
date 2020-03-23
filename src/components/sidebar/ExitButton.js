import IconButton from '../common/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import exitIconPath from '../../assets/icons/exit.svg';

const ExitButton = props =>
  <div className="xs:h-20 sm:h-20 md:h-16 lg:h-20 h-24 flex flex-columns justify-end pr-10 lg:pr-8 md:pr-6 sm:pr-8 xs:pr-8">
    <IconButton
      onClick={props.onClick}
      iconPath={exitIconPath}
      className="w-8 lg:w-6 md:w-4 sm:w-6 xs:w-6"
    />
  </div>;

ExitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ExitButton;