import ContactButton, { TYPES } from "./Button";

import { CITIES } from "../../../config/cities";
import { GENERAL_EMAIL } from "../../../config";
import PropTypes from 'prop-types';
import React from 'react';

const Contacts = props => {
  const LocationButton = (
    <ContactButton
      text={CITIES.POPRAD.NAME}
      type={TYPES.LOCATION}
      bold={props.bold}
    />
  );

  const PhoneButton = (
    <ContactButton
      text={CITIES.POPRAD.PHONE}
      type={TYPES.PHONE}
      bold={props.bold}
    />
  );

  const EmailButton = (
    <ContactButton
      text={GENERAL_EMAIL}
      type={TYPES.EMAIL}
      bold={props.bold}
    />
  );

  const FacebookButton = (
    <ContactButton
      text="Facebook"
      type={TYPES.FACEBOOK}
      bold={props.bold}
    />
  );

  return (
    <React.Fragment>
      {props.inSidebar && props.onlyFacebook ? (
        <React.Fragment>
          {FacebookButton}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className='row-span-2'>
            {LocationButton}
          </div>
          <div className='row-span-2'>
            {PhoneButton}
          </div>
          <div className='row-span-2'>
            {EmailButton}
          </div>
          {!props.inSidebar && (
            <div className='row-span-2'>
              {FacebookButton}
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

Contacts.propTypes = {
  bold: PropTypes.bool,
  onlyFacebook: PropTypes.bool,
  inSidebar: PropTypes.bool,
}

export default Contacts;