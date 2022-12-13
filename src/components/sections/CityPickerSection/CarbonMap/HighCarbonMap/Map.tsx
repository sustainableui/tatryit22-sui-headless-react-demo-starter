import React from 'react';
import { geoMercator, geoPath } from 'd3-geo';

import Location from './Location';
import useSlovakMap from './hooks/useSlovakMap';

import mapData from './mapData.json';

const projection = geoMercator();

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 350;

interface MapProps {
  cities: Array<{ name: string; coordinates: number[] }>;
  onMouse: (isHovered: boolean, index: number) => void;
  highlightedCityIndex: number;
}

function Map({ cities, onMouse, highlightedCityIndex }: MapProps) {
  const geoFeature = useSlovakMap({
    topologyData: mapData,
    projection,
    width: MAP_WIDTH,
    height: MAP_HEIGHT
  });

  return (
    <svg
      className="w-full h-auto sm:hidden xs:hidden"
      width={MAP_WIDTH}
      height={MAP_HEIGHT}
      viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}>
      {geoFeature ? (
        <React.Fragment>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'rgb(46, 102, 255)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(44, 235, 173)', stopOpacity: 1 }} />
            </linearGradient>
            <filter id="drop-shadow" height="130%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.30" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g>
            <path
              d={geoPath().projection(projection)(geoFeature)}
              fill="url(#grad1)"
              strokeWidth={0.5}
              filter="url(#drop-shadow)"
            />
          </g>
          <g>
            {cities.map((city, i) => (
              <Location
                index={i}
                key={city.name}
                projection={projection}
                city={city}
                isHovered={highlightedCityIndex === i}
                onMouse={onMouse}
              />
            ))}
          </g>
        </React.Fragment>
      ) : null}
    </svg>
  );
}

export default Map;
