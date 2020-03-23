import ButtonLink from './links/ButtonLink';
import Link from './links/Link';
import Logo from './Logo';
import MenuButton from './MenuButton';
import PropTypes from 'prop-types';
import React from 'react';

const Navigation = props =>
  <nav className="absolute w-full grid grid-cols-9 bg-white shadow-xl h-24 text-lg font-rustico text-center xs:grid-cols-2 xs:bg-transparent xs:shadow-none xs:h-20 sm:grid-cols-2 sm:bg-transparent sm:shadow-none sm:h-20 md:h-16 md:text-sm lg:h-20 lg:text-base z-40">
    <Logo />
    <Link text="O službe" />
    <Link text="PostuP" />
    <ButtonLink
      text="Potrebujem Pomoc"
      className="bg-green text-black hover:text-green"
    />
    <ButtonLink
      text="Chcem Pomôcť"
      className="bg-blue text-white hover:text-blue"
    />
    <Link text="Kontakt" />
    <MenuButton onClick={props.onSidebarToggle}/>
  </nav>;

Navigation.propTypes = {
  onSidebarToggle: PropTypes.func.isRequired,
}

export default Navigation;