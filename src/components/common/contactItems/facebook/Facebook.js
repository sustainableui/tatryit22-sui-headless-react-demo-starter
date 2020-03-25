import React, { useState } from 'react';

import Divider from './Divider';
import { FACEBOOK_LINK } from '../../../../config';
import IconButton from '../../buttons/IconButton';
import PropTypes from 'prop-types';
import iconPath from '../../../../assets/icons/facebook.svg';

const Facebook = props => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="row-span-2">
      <Divider />
      <div className="flex flex-col justify-center items-center h-full">
        <a
          href={FACEBOOK_LINK}
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-col justify-center items-center"
          onMouseEnter={() => setHovered(!hovered)}
          onMouseLeave={() => setHovered(!hovered)}
        >
          <IconButton iconPath={iconPath} />
          <span className={`${hovered ? 'text-gray-hover' : 'text-black'} ${props.bold ? 'font-futura-bold' : 'font-futura-medium'} block font-futura-medium pt-6 text-2xl`}>
            Facebook
          </span>
        </a>
      </div>
    </div>
  );
}

Facebook.propTypes = {
  bold: PropTypes.bool,
}

export default Facebook;