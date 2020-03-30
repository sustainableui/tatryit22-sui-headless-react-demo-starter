import React, { useState } from 'react';

import PropTypes from 'prop-types';

const Logo = props => {
  const [hovered, setHovered ] = useState(null);

  return (
    <div>
      <div className="mx-auto">
        <a
          href={props.href}
          rel="noopener noreferrer"
          target="_blank"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className=""
        >
          <img
            className={`${hovered ? '' : 'monochromatic'} ${props.className ? props.className : ''}`}
            alt={props.alt}
            src={props.logoPath}
          />
        </a>
      </div>
    </div>
  );
}

Logo.propTypes = {
  logoPath: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Logo;