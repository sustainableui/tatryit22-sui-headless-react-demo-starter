import { MercatorMap } from '@salocreative/interactive-map';
import React from 'react';

const cities = [
  { name: 'Trnava', lat: 48.52, lon: 17.58 },
  { name: 'Poprad', lat: 49.20, lon: 20.22 },
  { name: 'Humenné', lat: 49.08, lon: 21.91 }
];

const Slovakia = () =>
  <MercatorMap
    zoom={50}
    center={{ lat: 48.67, lon: 19.69 }}
    baseColor='#e6e6e6'
    hideAntarctica={true}
  >
    {({ evalCoordinates }) => cities.map(location => {
      const { lat, lon, name } = location;
      const coords = evalCoordinates({ lat, lon });
      return (
        <span
          key={name}
          className="bg-blue"
          style={{
            height: '6px',
            width: '6px',
            borderRadius: '50%',
            position: 'absolute',
            left: `calc(${coords.x}% - 3px)`,
            top: `calc(${coords.y}% - 3px)`
          }}
        >
          {name}
        </span>
      );
    })}
  </MercatorMap>
  
export default Slovakia;