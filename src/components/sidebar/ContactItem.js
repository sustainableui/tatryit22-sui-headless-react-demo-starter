import PropTypes from 'prop-types';
import React from 'react';
import locationIconPath from '../../assets/icons/location.svg';
import mailIconPath from '../../assets/icons/mail.svg';
import phoneIconPath from '../../assets/icons/phone.svg';

export const TYPES = {
  LOCATION: 'location',
  PHONE: 'phone',
  EMAIL: 'mail',
}

const ContactItem = props => {
  const getIconPath = (itemType) => {
    switch (itemType) {
      case TYPES.LOCATION: return locationIconPath;
      case TYPES.PHONE: return phoneIconPath;
      case TYPES.EMAIL: return mailIconPath;
      default: return "";
    }
  }

  return (
    <div className="row-span-2 flex flex-col justify-center items-center">
      <img
        alt=""
        src={getIconPath(props.type)}
        className=""
      />
      <span className="font-futura-medium pt-6 text-xl">
        {props.text}
      </span>
    </div>
  );
}

ContactItem.propTypes = {
  type: PropTypes.oneOf([
    TYPES.LOCATION,
    TYPES.PHONE,
    TYPES.EMAIL
  ]).isRequired,
  text: PropTypes.string.isRequired,
}

export default ContactItem;