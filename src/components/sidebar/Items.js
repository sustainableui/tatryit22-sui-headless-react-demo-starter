import ContactItem, { TYPES } from './ContactItem';

import Facebook from './facebook/Facebook';
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
        <ContactItem
          text="Poprad"
          type={TYPES.LOCATION}
        />
        <ContactItem
          text="+421 911 222 222"
          type={TYPES.PHONE}
        />
        <ContactItem
          text="info@podmesipomahat.sk"
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