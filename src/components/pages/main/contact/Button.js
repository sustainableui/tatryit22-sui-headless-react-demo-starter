import React, { useState } from 'react';

import { BUTTONS } from '../../../../config/transitions';
import Divider from './Divider';
import { FACEBOOK_LINK } from '../../../../config';
import PropTypes from 'prop-types';
import facebookIconPath from '../../../../assets/icons/facebook.svg';
import locationIconPath from '../../../../assets/icons/location.svg';
import mailIconPath from '../../../../assets/icons/mail.svg';
import phoneIconPath from '../../../../assets/icons/phone.svg';

export const TYPES = {
  LOCATION: 'location',
  PHONE: 'phone',
  EMAIL: 'mail',
  FACEBOOK: 'facebook',
}

const Button = props => {
  const [hovered, setHovered] = useState(null);

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
    <React.Fragment>
      {props.type === TYPES.FACEBOOK && <Divider />}
      <div className="flex flex-col justify-center items-center xs:mt-5 sm:mt-5 md:mt-4 lg:mt-5 xl:mt-7 xs:mb-5 sm:mb-5 md:mb-4 lg:mb-5 xl:mb-7">
        <a
          target="_blank"
          href={getHref()}
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <button className="focus:outline-none">
            <img
              alt=""
              src={getIconPath()}
              className="mx-auto"
            />
            <span className={`${BUTTONS} ${hovered ? 'text-gray-hover' : 'text-black'} font-futura-bold block font-futura-medium pt-6 sm:pt-2 xs:pt-2 text-2xl sm:text-lg xs:text-lg`}>
              {props.text}
            </span>
          </button>
        </a>
      </div>
    </React.Fragment>
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
}

export default Button;