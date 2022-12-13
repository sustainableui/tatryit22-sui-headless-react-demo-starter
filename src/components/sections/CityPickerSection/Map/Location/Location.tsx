import React from 'react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { ReactComponent as MapLocationIconSVG } from '../../../../../assets/icons/map_location.svg';

interface LocationProps {
  projection: (coordinates: number[]) => number[];
  city: { coordinates: number[]; name: string };
  isHovered: boolean;
  index: number;
  onMouse: (isHovered: boolean, index: number) => void;
}

function Location({ onMouse, projection, city, index, isHovered }: LocationProps) {
  function handleMouse(isHovered: boolean) {
    return () => onMouse(isHovered, index);
  }

  return (
    <Link to="#" onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)}>
      <text
        textAnchor="middle"
        className={cns(
          { 'fill-gray': isHovered, 'fill-white': !isHovered },
          'font-rustico-regular text-xxs'
        )}
        x={projection(city.coordinates)[0] + 13}
        y={projection(city.coordinates)[1] + 30}>
        {city.name}
      </text>
      <MapLocationIconSVG
        height={23}
        x={projection(city.coordinates)[0] - 7}
        y={projection(city.coordinates)[1]}
      />
    </Link>
  );
}

export default Location;
