import ContactItems from '../common/contactItems/ContactItems';
import Facebook from '../common/contactItems/facebook/Facebook';
import Links from './links/Links';
import PropTypes from 'prop-types';
import React from 'react';

const Items = props =>
  <div className="grid grid-rows-5 h-full -mt-24 overflow-y-hidden">
    <div className="row-span-4">
      <div className="grid grid-rows-9 h-full">
        <div></div>
        <Links onClick={props.onClick} />
        <ContactItems />
      </div>
    </div>
    <Facebook />
  </div>;

Items.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Items;