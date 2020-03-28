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
      className="sm:mx-auto xs:mx-auto md:mx-auto md:mt-5 sm:mt-5 xs:mt-5"
    >
      <img
        className={`pr-7 pl-7 md:pr-0 md:pl-0 sm:pr-0 sm:pl-0 xs:pr-0 xs:pl-0 ${hovered ? '' : 'monochromatic'} ${props.className}`}
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