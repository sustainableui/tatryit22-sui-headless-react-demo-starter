import React, { useState } from 'react';

import { FACEBOOK_LINK } from '../../../config';
import IconButton from '../../common/IconButton';
import PropTypes from 'prop-types';
import facebookIconPath from '../../../assets/icons/facebook.svg';

const Link = props => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="row-span-2 flex flex-col justify-center items-center h-full">
      <a
        href={FACEBOOK_LINK}
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-col justify-center items-center"
        onMouseEnter={() => setHovered(!hovered)}
        onMouseLeave={() => setHovered(!hovered)}
      >
        <IconButton
          iconPath={facebookIconPath}
          onClick={props.onClick}
        />
        <span className={`${hovered ? 'text-gray-hover' : 'text-black'} block font-futura-medium pt-6 text-2xl`}>
          Facebook
        </span>
      </a>
    </div>
  );
}

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Link;