import ButtonLink from './links/ButtonLink';
import Link from './links/Link';
import Logo from './logo/Logo';
import MenuButton from './MenuButton';
import PropTypes from 'prop-types';
import { ROUTES } from '../../config/routes';
import React from 'react';
import { withRouter } from 'react-router-dom';

const Navigation = props => {
  const routeMatches = hashRoute => hashRoute === `${props.location.pathname}${props.location.hash}`;

  return (
    <nav className="fixed h-24 xs:h-20 sm:h-20 lg:h-20 md:h-16 w-full grid grid-cols-8 bg-white shadow-xl text-lg font-rustico-regular text-center xs:grid-cols-2 xs:bg-transparent xs:shadow-none sm:grid-cols-2 sm:bg-transparent sm:shadow-none md:text-sm lg:text-base z-40">
      <Logo />
      <Link
        text="O službe"
        to={ROUTES.O_SLUZBE}
        isActive={routeMatches(ROUTES.O_SLUZBE)}
      />
      <Link
        text="PostuP"
        to={ROUTES.POSTUP}
        isActive={routeMatches(ROUTES.POSTUP)}
      />
      <ButtonLink
        text="Potrebujem Pomoc"
        to={ROUTES.POTREBUJEM_POMOC_HASH}
        color="green"
        isActive={routeMatches(ROUTES.POTREBUJEM_POMOC_HASH)}
      />
      <ButtonLink
        text="Chcem Pomôcť"
        to={ROUTES.CHCEM_POMOCT_HASH}
        color="blue"
        isActive={routeMatches(ROUTES.CHCEM_POMOCT_HASH)}
      />
      <Link
        text="Kontakt"
        to={ROUTES.KONTAKT}
        isActive={routeMatches(ROUTES.KONTAKT)}
      />
      <Link
        text="O nás"
        to={ROUTES.O_NAS_HASH}
        isActive={routeMatches(ROUTES.O_NAS_HASH)}
      />
      <MenuButton onClick={props.onSidebarToggle} />
    </nav>
  );
}

Navigation.propTypes = {
  onSidebarToggle: PropTypes.func.isRequired,
}

export default withRouter(Navigation);