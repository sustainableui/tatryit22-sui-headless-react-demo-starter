import React from 'react';

import CityPickerListItem from './CityPickerListItem';
import PropTypes from 'prop-types';

const CityPickerList = (props) => {
  return (
    <div className="sm:-mt-8 xs:-mt-8">
      <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 h-full">
        <div className="col-span-1 sm:hidden xs:hidden" />
        <div className="col-span-1 h-full xl:pr-5 lg:pr-5 md:pr-5">
          <div className="sm:w-full xs:w-full">
            {props.cities.map(
              (city, i) =>
                i + 1 <= Math.ceil(props.cities.length / 2) && (
                  <CityPickerListItem
                    key={city.name}
                    index={i}
                    text={city.name}
                    hovered={props.hoveredCityIndex === i}
                    onMouse={props.onMouse}
                  />
                )
            )}
          </div>
        </div>
        <div className="col-span-1 h-full xl:pl-5 lg:pl-5 md:pl-5">
          <div className="sm:w-full xs:w-full">
            {props.cities.map(
              (city, i) =>
                i + 1 > Math.ceil(props.cities.length / 2) && (
                  <CityPickerListItem
                    key={city.name}
                    index={i}
                    text={city.name}
                    hovered={props.hoveredCityIndex === i}
                    onMouse={props.onMouse}
                  />
                )
            )}
          </div>
        </div>
        <div className="col-span-1 sm:hidden xs:hidden" />
      </div>
    </div>
  );
};

CityPickerList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMouse: PropTypes.func.isRequired,
  hoveredCityIndex: PropTypes.number.isRequired
};

export default CityPickerList;
