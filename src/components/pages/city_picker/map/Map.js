import React, { useEffect, useState } from "react";
import { geoBounds, geoMercator, geoPath } from "d3-geo";
import { slovakia, world } from "../../../../config/map";

import City from "./City";
import PropTypes from 'prop-types';
import { ROUTES } from "../../../../config/routes";
import { feature } from "topojson-client";
import { setDocumentTitleFromRoute } from "../../../../utils/routesUtils";

const projection = geoMercator();

const width = 1000;
const height = 350;

const MapComponent = props => {
  const [geography, setGeography] = useState(null);

  useEffect(() => {
    setDocumentTitleFromRoute(ROUTES.VYBERTE_VASE_MESTO);

    let mapFeature = feature(world, slovakia);
    let mapBounds = geoPath().bounds(mapFeature);
    let scale = 30 / Math.max(
      (mapBounds[1][0] - mapBounds[0][0]) / width,
      (mapBounds[1][1] - mapBounds[0][1]) / height
    );
    mapBounds = geoBounds(mapFeature);
    projection.center([
      (mapBounds[1][0] + mapBounds[0][0]) / 2,
      (mapBounds[1][1] + mapBounds[0][1]) / 2
    ]);
    projection.scale(scale);
    projection.translate([width / 2, height / 2]);
    
    setGeography(mapFeature);
  }, []);

  return (
    <svg
      className="w-full h-auto sm:hidden xs:hidden"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: "rgb(46, 102, 255)", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgb(44, 235, 173)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <g>
        <path
          d={geoPath().projection(projection)(geography)}
          fill="url(#grad1)"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        />
      </g>
      <g>
        {props.cities.map((city, i) => (
          <City
            index={i}
            key={`city-${i}`}
            projection={projection}
            data={city}
            hovered={props.hoveredCityIndex === i}
            onMouse={props.onMouse}
          />
        ))}
      </g>
    </svg>
  );
};

MapComponent.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMouse: PropTypes.func.isRequired,
  hoveredCityIndex: PropTypes.number.isRequired,
}

export default MapComponent;
