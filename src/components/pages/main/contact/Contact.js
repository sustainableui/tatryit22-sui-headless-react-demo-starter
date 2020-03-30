import ContactButton, { TYPES } from './Button';

import { CITIES } from '../../../../config/cities';
import { GENERAL_EMAIL } from '../../../../config';
import React from 'react';

const Contact = () => {
  const LocationButton = (
    <ContactButton
      text={CITIES.POPRAD.NAME}
      type={TYPES.LOCATION}
    />
  );

  const PhoneButton = (
    <ContactButton
      text={CITIES.POPRAD.PHONE}
      type={TYPES.PHONE}
    />
  );

  const EmailButton = (
    <ContactButton
      text={GENERAL_EMAIL}
      type={TYPES.EMAIL}
    />
  );

  const FacebookButton = (
    <ContactButton
      text="Facebook"
      type={TYPES.FACEBOOK}
    />
  );

  return (
    <div className="grid grid-rows-4">
      <div className="row-span-1">
        {LocationButton}
      </div>
      <div className="row-span-1">
        {PhoneButton}
      </div>
      <div className="row-span-1">
        {EmailButton}
      </div>
      <div className="row-span-1">
        {FacebookButton}
      </div>
    </div>
  );
};

export default Contact;