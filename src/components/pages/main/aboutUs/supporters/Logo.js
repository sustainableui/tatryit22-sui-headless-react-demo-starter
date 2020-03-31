import React, { useState } from 'react';

import PropTypes from 'prop-types';

const Logo = props => {
  const [hovered, setHovered ] = useState(null);

  return (
    <a
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=""
    >
      <img
        className={`block xl:inline-block mx-auto xs:mt-5 sm:mt-5 md:pt-4 lg:mt-5 xl:mt-7 xs:mb-5 sm:mb-5 md:pb-4 lg:mb-5 xl:mb-7 xl:mr-5 xl:ml-5 ${hovered ? '' : 'monochromatic'} ${props.className ? props.className : ''}`}
        alt={props.alt}
        src={props.logoPath}
      />
    </a>
  );
}

Logo.propTypes = {
  logoPath: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Logo;