import IconButton from '../common/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import menuIconPath from '../../assets/icons/menu.svg';

const MenuButton = props =>
  <div className="col-span-2 sm:col-span-1 xs:col-span-1 flex flex-columns justify-end pr-10 lg:pr-8 md:pr-6 sm:pr-8 xs:pr-8">
    <IconButton
      iconPath={menuIconPath}
      onClick={props.onClick}
      className="w-8 lg:w-6 md:w-4 sm:w-6 xs:w-6"
    />
  </div>;

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default MenuButton;