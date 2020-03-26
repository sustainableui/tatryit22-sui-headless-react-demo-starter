import Contacts from '../common/contacts/Contacts';
import Links from './links/Links';
import PropTypes from 'prop-types';
import React from 'react';

const Items = props =>
  <div className="grid grid-rows-5 h-full -mt-24 overflow-y-hidden">
    <div className="row-span-4">
      <div className="grid grid-rows-9 h-full">
        <div className="row-span-1"/>
        <Links onClick={props.onClick}/>
        <Contacts inSidebar first />
      </div>
    </div>
    <Contacts inSidebar onlyFacebook />
  </div>;

Items.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Items;