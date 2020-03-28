import React, { useState } from 'react';

import { BUTTONS } from '../../../config/transitions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getRouteFromCity } from '../../../utils/routesUtils';

const City = props => {
  const [hovered, setHovered] = useState(null);

  return (
    <Link to={getRouteFromCity(props.text)}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${hovered ? 'shadow-2xl-sheer' : 'shadow-xl-sheer'} ${BUTTONS} inline-block sm:block xs:block w-full p-1 mt-10 sm:mt-4 xs:mt-4 font-futura-medium text-blue text-4xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-2xl text-center`}
        style={hovered ? { backgroundImage: 'linear-gradient(to right, rgba(44,235,173, 1), rgba(46,102,255, 1))' } : {}}
      >
        <div className={`${BUTTONS} bg-white hover:text-green pl-10 pr-10 pt-8 pb-8 sm:pl-5 sm:pr-5 sm:pt-3 sm:pb-3 xs:pl-5 xs:pr-5 xs:pt-2 xs:pb-2`}>
          {props.text}
        </div>
      </div>
    </Link>
  );
}

City.propTypes = {
  text: PropTypes.string.isRequired,
}

export default City;