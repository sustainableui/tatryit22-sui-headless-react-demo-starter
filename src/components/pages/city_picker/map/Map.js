import React, { useEffect, useState } from "react";
import { geoBounds, geoMercator, geoPath } from "d3-geo";

import City from "./City";
import Gradient from "./defs/gradient";
import Loader from "./Loader";
import PropTypes from 'prop-types';
import { ROUTES } from "../../../../config/routes";
import Shadow from "./defs/shadow";
import { feature } from "topojson-client";
import { setDocumentTitleFromRoute } from "../../../../utils/routesUtils";

const projection = geoMercator();

const slovakia = {
  arcs: [[-650,-1256,1256,-955,1257]],
  type: "Polygon",
  properties: {
    name:"Slovakia"
  },
  id:"703"
};

const width = 1000;
const height = 350;

const MapComponent = props => {
  const [geoFeature, setGeoFeature] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDocumentTitleFromRoute(ROUTES.VYBERTE_VASE_MESTO);

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + "http://podmesipomahat.sk/static/countries.json").then((response) => {
      if (response.status !== 200) {
        console.error(`There was a problem: ${response.status}`);
        return;
      }

      response.json().then((countries) => {
        let mapFeature = feature(countries, slovakia);
        let mapBounds = geoPath().bounds(mapFeature);
        let scale =
          30 /
          Math.max(
            (mapBounds[1][0] - mapBounds[0][0]) / width,
            (mapBounds[1][1] - mapBounds[0][1]) / height
          );
        mapBounds = geoBounds(mapFeature);
        projection.center([
          (mapBounds[1][0] + mapBounds[0][0]) / 2,
          (mapBounds[1][1] + mapBounds[0][1]) / 2,
        ]);
        projection.scale(scale);
        projection.translate([width / 2, height / 2]);

        setGeoFeature(mapFeature);
        setIsLoading(false);
      });
    });
    setIsLoading(true);
  }, []);

  return (
    <React.Fragment>
      <svg
        className="w-full h-auto sm:hidden xs:hidden"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        {!isLoading ? (
          <React.Fragment>
            <defs>
              <Gradient />
              <Shadow />
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
          </React.Fragment>
        ) : (
          <Loader projection={projection} />
        )}
      </svg>
    </React.Fragment>
  );
};

MapComponent.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMouse: PropTypes.func.isRequired,
  hoveredCityIndex: PropTypes.number.isRequired,
}

export default MapComponent;
