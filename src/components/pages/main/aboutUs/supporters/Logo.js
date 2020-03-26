import React, { useState } from 'react';

import PropTypes from 'prop-types';

const Logo = props => {
  const [hovered, setHovered ] = useState(false);

  return (
    <a
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
      onMouseEnter={() => setHovered(!hovered)}
      onMouseLeave={() => setHovered(!hovered)}
    >
      <img
        className={`inline-block mr-7 ml-7 ${hovered ? '' : 'monochromatic'} ${props.className}`}
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