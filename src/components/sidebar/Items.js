import { CITIES, CITY_INDEXES } from '../../config/cities';
import ContactItemButton, { TYPES } from './ContactItemButton';

import Facebook from './facebook/Facebook';
import { GENERAL_EMAIL } from '../../config/';
import Link from './Link';
import PropTypes from 'prop-types';
import { ROUTES } from '../../config/routes';
import React from 'react';

const Items = props =>
  <div className="grid grid-rows-5 h-full -mt-24 overflow-y-hidden">
    <div className="row-span-4">
      <div className="grid grid-rows-9 h-full">
        <div></div>
        <Link
          text="Domov"
          to={ROUTES.DOMOV}
          onClick={props.onClick}
        />
        <Link
          text="O Nás"
          to={ROUTES.O_NAS}
          onClick={props.onClick}
        />
        <ContactItemButton
          text={CITIES[CITY_INDEXES.POPRAD].name}
          type={TYPES.LOCATION}
        />
        <ContactItemButton
          text={CITIES[CITY_INDEXES.POPRAD].phone}
          type={TYPES.PHONE}
        />
        <ContactItemButton
          text={GENERAL_EMAIL}
          type={TYPES.EMAIL}
        />
      </div>
    </div>
    <Facebook onClick={props.onClick}/>
  </div>;

Items.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Items;