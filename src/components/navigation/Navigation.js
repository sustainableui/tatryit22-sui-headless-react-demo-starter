import ButtonLink from './links/ButtonLink';
import IconButton from '../common/IconButton';
import Link from './links/Link';
import Logo from './Logo';
import PropTypes from 'prop-types';
import React from 'react';
import menuIconPath from '../../assets/icons/menu.svg';

const Navigation = props =>
  <nav className="absolute w-full grid grid-cols-9 bg-white shadow-xl h-24 text-lg font-rustico text-center xs:grid-cols-2 xs:bg-transparent xs:shadow-none xs:h-20 sm:grid-cols-2 sm:bg-transparent sm:shadow-none sm:h-20 md:h-16 md:text-sm lg:h-20 lg:text-base z-40">
    <Logo />
    <Link text="O službe" />
    <Link text="PostuP" />
    <ButtonLink text="Potrebujem Pomoc" />
    <ButtonLink text="Chcem Pomôcť" />
    <Link text="Kontakt" />
    <div className="col-span-2 sm:col-span-1 xs:col-span-1 flex flex-columns justify-end pr-10 lg:pr-8 md:pr-6 sm:pr-8 xs:pr-8">
      <IconButton
        iconPath={menuIconPath}
        onClick={props.onSidebarToggle}
        className="w-8 lg:w-6 md:w-4 sm:w-6 xs:w-6"
      />
    </div>
  </nav>;

Navigation.propTypes = {
  onSidebarToggle: PropTypes.func.isRequired,
}

export default Navigation;