import React, { useState } from 'react';

import PropTypes from 'prop-types';
import locationIconPath from '../../../assets/icons/location.svg';
import mailIconPath from '../../../assets/icons/mail.svg';
import phoneIconPath from '../../../assets/icons/phone.svg';

export const TYPES = {
  LOCATION: 'location',
  PHONE: 'phone',
  EMAIL: 'mail',
}

const ContactItemButton = props => {
  const [hovered, setHovered] = useState(false);

  const getIconPath = () => {
    switch (props.type) {
      case TYPES.LOCATION: return locationIconPath;
      case TYPES.PHONE: return phoneIconPath;
      case TYPES.EMAIL: return mailIconPath;
      default: return "";
    }
  }

  const getHref = () => {
    switch (props.type) {
      case TYPES.LOCATION: return `http://maps.google.com/?q=${props.text}`;
      case TYPES.PHONE: return `tel:${props.text.replace(/\s/g, "")}`;
      case TYPES.EMAIL: return `mailto:${props.text}`;
      default: return "";
    }
  }

  return (
    <div className="row-span-2 flex flex-col justify-center items-center">
      <a
        target="_blank"
        href={getHref()}
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(!hovered)}
        onMouseLeave={() => setHovered(!hovered)}
      >
        <button className="focus:outline-none">
          <img
            alt=""
            src={getIconPath()}
            className="mx-auto"
          />
          <span className={`${hovered ? 'text-gray-hover' : 'text-black'} block font-futura-medium pt-6 text-2xl`}>
            {props.text}
          </span>
        </button>
      </a>
    </div>
  );
}

ContactItemButton.propTypes = {
  type: PropTypes.oneOf([
    TYPES.LOCATION,
    TYPES.PHONE,
    TYPES.EMAIL
  ]).isRequired,
  text: PropTypes.string.isRequired,
}

export default ContactItemButton;