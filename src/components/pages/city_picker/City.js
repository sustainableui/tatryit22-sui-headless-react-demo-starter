import React, { useState } from 'react';

import { BUTTONS } from '../../../config/transitions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getRouteFromCity } from '../../../utils/routesUtils';

const City = props => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={getRouteFromCity(props.text)}>
      <div
        onMouseEnter={() => setHovered(!hovered)}
        onMouseLeave={() => setHovered(!hovered)}
        className={`${hovered ? 'shadow-2xl' : 'shadow-lg'} inline-block w-full rounded-gradient-box p-1 mt-10 font-futura-medium text-blue text-4xl text-center`}
        style={hovered ? { backgroundImage: 'linear-gradient(to right, #2cebad, #2e66ff)' } : {}}
      >
        <div className={`${BUTTONS} rounded-gradient-box bg-white hover:text-green pl-10 pr-10 pt-8 pb-8`}>
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