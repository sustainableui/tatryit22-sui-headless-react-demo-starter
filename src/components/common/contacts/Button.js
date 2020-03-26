import React, { useState } from 'react';

import Divider from './Divider';
import { FACEBOOK_LINK } from '../../../config';
import PropTypes from 'prop-types';
import facebookIconPath from '../../../assets/icons/facebook.svg';
import locationIconPath from '../../../assets/icons/location.svg';
import mailIconPath from '../../../assets/icons/mail.svg';
import phoneIconPath from '../../../assets/icons/phone.svg';

export const TYPES = {
  LOCATION: 'location',
  PHONE: 'phone',
  EMAIL: 'mail',
  FACEBOOK: 'facebook',
}

const Button = props => {
  const [hovered, setHovered] = useState(false);

  const getIconPath = () => {
    switch (props.type) {
      case TYPES.LOCATION: return locationIconPath;
      case TYPES.PHONE: return phoneIconPath;
      case TYPES.EMAIL: return mailIconPath;
      case TYPES.FACEBOOK: return facebookIconPath;
      default: return "";
    }
  }

  const getHref = () => {
    switch (props.type) {
      case TYPES.LOCATION: return `http://maps.google.com/?q=${props.text}`;
      case TYPES.PHONE: return `tel:${props.text.replace(/\s/g, "")}`;
      case TYPES.EMAIL: return `mailto:${props.text}`;
      case TYPES.FACEBOOK: return FACEBOOK_LINK;
      default: return "";
    }
  }

  return (
    <div className="h-full">
      {props.type === TYPES.FACEBOOK && <Divider />}
      <div className="flex flex-col justify-center items-center h-full">
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
            <span className={`${hovered ? 'text-gray-hover' : 'text-black'} ${props.bold ? 'font-futura-bold' : 'font-futura-medium'} block font-futura-medium pt-6 text-2xl`}>
              {props.text}
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf([
    TYPES.LOCATION,
    TYPES.PHONE,
    TYPES.EMAIL,
    TYPES.FACEBOOK,
  ]).isRequired,
  text: PropTypes.string.isRequired,
  bold: PropTypes.bool,
}

export default Button;