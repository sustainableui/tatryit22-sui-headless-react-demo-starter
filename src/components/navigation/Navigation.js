import ButtonLink from './links/ButtonLink';
import { HASH_ROUTES } from '../../config/routes';
import Link from './links/Link';
import Logo from './Logo';
import MenuButton from './MenuButton';
import PropTypes from 'prop-types';
import React from 'react';

const Navigation = props =>
  <nav className="fixed h-24 xs:h-20 sm:h-20 lg:h-20 md:h-16 w-full grid grid-cols-9 bg-white shadow-xl text-lg font-rustico-regular text-center xs:grid-cols-2 xs:bg-transparent xs:shadow-none sm:grid-cols-2 sm:bg-transparent sm:shadow-none md:text-sm lg:text-base z-40">
    <Logo />
    <Link
      text="O službe"
      to={HASH_ROUTES.O_SLUZBE}
    />
    <Link
      text="PostuP"
      to={HASH_ROUTES.POSTUP}
    />
    <ButtonLink
      text="Potrebujem Pomoc"
      className="bg-green text-black hover:text-green"
      to={HASH_ROUTES.POTREBUJEM_POMOC}
    />
    <ButtonLink
      text="Chcem Pomôcť"
      className="bg-blue text-white hover:text-blue"
      to={HASH_ROUTES.CHCEM_POMOCT}
    />
    <Link
      text="Kontakt"
      to={HASH_ROUTES.KONTAKT}
    />
    <MenuButton onClick={props.onSidebarToggle}/>
  </nav>;

Navigation.propTypes = {
  onSidebarToggle: PropTypes.func.isRequired,
}

export default Navigation;