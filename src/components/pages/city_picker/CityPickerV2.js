import React, { useEffect, useState } from "react";
import { geoBounds, geoMercator, geoPath } from "d3-geo";

import { feature } from "topojson-client";

const cities = [
  { name: "Poprad", coordinates: [49.0587, 20.2274] },
  { name: "Humenné", coordinates: [48.9437, 21.8694] },
  { name: "Kysucké Nové Mesto", coordinates: [49.3055, 18.7771] },
  { name: "Piešťany", coordinates: [48.6002, 17.7723] },
];

const projection = geoMercator();

const CityPickerPage = () => {
  const [geography, setGeography] = useState(null);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((response) => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`);
          return;
        }
        response
          .json()
          .then((worlddata) => {
            let mapGeometry = worlddata.objects.countries.geometries.find((country) => country.id === "703");
            let mapFeature = feature(worlddata, mapGeometry);
            let mapBounds = geoPath().bounds(mapFeature);
            let scale = 50 / Math.max(
              (mapBounds[1][0] - mapBounds[0][0]) / 1000,
              (mapBounds[1][1] - mapBounds[0][1]) / 1000
            );

            mapBounds = geoBounds(mapFeature);
            projection.center([
              (mapBounds[1][0] + mapBounds[0][0]) / 2,
              (mapBounds[1][1] + mapBounds[0][1]) / 2
            ]);
            projection.scale(scale);
            projection.translate([1000 / 2, 1000 / 2]);
            
            setGeography(mapFeature);
          });
      });
  }, []);

  return (
    <svg width={1000} height={1000} viewBox="0 0 1000 1000">
      <g>
        <path
          d={geoPath().projection(projection)(geography)}
          fill={`rgb(0,0,0)`}
          stroke="#FFFFFF"
          strokeWidth={0.5}
        />
      </g>
      <g>
        {cities.map((city, i) => (
          <circle
            key={`marker-${i}`}
            cx={projection(city.coordinates)[0]}
            cy={projection(city.coordinates)[1]}
            r={10}
            fill="#E91E63"
            stroke="#FFFFFF"
          />
        ))}
      </g>
    </svg>
  );
};

export default CityPickerPage;
