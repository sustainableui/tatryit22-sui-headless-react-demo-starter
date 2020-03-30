import ButtonLink from './links/ButtonLink';
import Link from './links/Link';
import Logo from './logo/Logo';
import MenuButton from './MenuButton';
import PropTypes from 'prop-types';
import { ROUTES } from '../../config/routes';
import React from 'react';
import { withRouter } from 'react-router-dom';

const outsideSidebarClasses = "fixed h-24 xs:h-20 sm:h-20 lg:h-20 md:h-16 w-full grid grid-cols-10 bg-white shadow-xl xs:grid-cols-2 xs:bg-transparent xs:shadow-none sm:grid-cols-2 sm:bg-transparent sm:shadow-none md:text-sm lg:text-base z-40";
const inSidebarClasses = "flex flex-col justify-center items-center h-full";

const Menu = props => {
  const routeMatches = hashRoute => hashRoute === `${props.location.pathname}${props.location.hash}`;

  return (
    <nav className={`text-lg font-rustico-regular text-center ${props.inSidebar ? inSidebarClasses : outsideSidebarClasses}`}>
      {!props.inSidebar && <Logo />}
      <Link
        text="O službe"
        to={ROUTES.O_SLUZBE}
        isActive={routeMatches(ROUTES.O_SLUZBE)}
        menuInSidebar={props.inSidebar}
        onClick={props.onSidebarToggle}
      />
      <Link
        text="PostuP"
        to={ROUTES.POSTUP}
        isActive={routeMatches(ROUTES.POSTUP)}
        menuInSidebar={props.inSidebar}
        onClick={props.onSidebarToggle}
      />
      <ButtonLink
        text="Potrebujem Pomoc"
        to={ROUTES.POTREBUJEM_POMOC_HASH}
        color="green"
        isActive={routeMatches(ROUTES.POTREBUJEM_POMOC_HASH)}
        menuInSidebar={props.inSidebar}
        onClick={props.onSidebarToggle}
      />
      <ButtonLink
        text="Chcem Pomôcť"
        to={ROUTES.CHCEM_POMOCT_HASH}
        color="blue"
        isActive={routeMatches(ROUTES.CHCEM_POMOCT_HASH)}
        menuInSidebar={props.inSidebar}
        onClick={props.onSidebarToggle}
      />
      <Link
        text="Kontakt"
        to={ROUTES.KONTAKT}
        isActive={routeMatches(ROUTES.KONTAKT)}
        menuInSidebar={props.inSidebar}
        onClick={props.onSidebarToggle}
      />
      <Link
        text="O nás"
        to={ROUTES.O_NAS_HASH}
        isActive={routeMatches(ROUTES.O_NAS_HASH)}
        menuInSidebar={props.inSidebar}
        onClick={props.onSidebarToggle}
      />
      {!props.inSidebar && <div className="col-span-2 sm:hidden xs:hidden" />}
      {!props.inSidebar && <MenuButton onClick={props.onSidebarToggle} />}
    </nav>
  );
}

Menu.propTypes = {
  onSidebarToggle: PropTypes.func.isRequired,
  inSidebar: PropTypes.bool,
}

export default withRouter(Menu);