import ButtonLink from './links/ButtonLink';
import Link from './links/Link';
import Logo from './logo/Logo';
import MenuButton from './MenuButton';
import PropTypes from 'prop-types';
import { ROUTES } from '../../config/routes';
import React from 'react';

const Navigation = props =>
  <nav className="fixed h-24 xs:h-20 sm:h-20 lg:h-20 md:h-16 w-full grid grid-cols-9 bg-white shadow-xl text-lg font-rustico-regular text-center xs:grid-cols-2 xs:bg-transparent xs:shadow-none sm:grid-cols-2 sm:bg-transparent sm:shadow-none md:text-sm lg:text-base z-40">
    <Logo />
    <Link
      text="O službe"
      to={ROUTES.O_SLUZBE}
    />
    <Link
      text="PostuP"
      to={ROUTES.POSTUP}
    />
    <ButtonLink
      text="Potrebujem Pomoc"
      className="bg-green text-black hover:text-green"
      to={ROUTES.POTREBUJEM_POMOC_HASH}
    />
    <ButtonLink
      text="Chcem Pomôcť"
      className="bg-blue text-white hover:text-blue"
      to={ROUTES.CHCEM_POMOCT_HASH}
    />
    <Link
      text="Kontakt"
      to={ROUTES.KONTAKT}
    />
    <MenuButton onClick={props.onSidebarToggle}/>
  </nav>;

Navigation.propTypes = {
  onSidebarToggle: PropTypes.func.isRequired,
}

export default Navigation;