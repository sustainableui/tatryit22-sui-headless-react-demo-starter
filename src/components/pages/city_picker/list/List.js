import React, {useEffect} from 'react';

import City from './City';
import PropTypes from 'prop-types';
import { ROUTES } from '../../../../config/routes';
import { setDocumentTitleFromRoute } from '../../../../utils/routesUtils';

const ListComponent = props => {
  useEffect(() => {
    setDocumentTitleFromRoute(ROUTES.VYBERTE_VASE_MESTO);
  }, []);

  return (
    <div className="sm:-mt-8 xs:-mt-8 h-full">
      <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 h-full">
        <div className="col-span-1 sm:hidden xs:hidden" />
        <div className="col-span-1 h-full xl:pr-5 lg:pr-5 md:pr-5">
          <div className="sm:w-full xs:w-full">
            {props.cities.map((city, i) => (i + 1 <= Math.ceil(props.cities.length / 2) && (
              <City
                key={`city-${i}`}
                index={i}
                text={city.NAME}
                hovered={props.hoveredCityIndex === i}
                onMouse={props.onMouse}
              />
            )))}
          </div>
        </div>
        <div className="col-span-1 h-full xl:pl-5 lg:pl-5 md:pl-5">
          <div className="sm:w-full xs:w-full">
            {props.cities.map((city, i) => (i + 1 > Math.ceil(props.cities.length / 2) && (
              <City
                key={`city-${i}`}
                index={i}
                text={city.NAME}
                hovered={props.hoveredCityIndex === i}
                onMouse={props.onMouse}
              />
            )))}
          </div>
        </div>
        <div className="col-span-1 sm:hidden xs:hidden" />
      </div>
    </div>
  );
}

ListComponent.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMouse: PropTypes.func.isRequired,
  hoveredCityIndex: PropTypes.number.isRequired,
}

export default ListComponent;