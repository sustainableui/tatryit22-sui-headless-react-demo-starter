import React from 'react';
import ListItem from './ListItem';

interface CityPickerListProps {
  cities: Array<{ name: string; coordinates: number[] }>;
  onMouse: (isHovered: boolean, cityIndex: number) => void;
  hoveredCityIndex: number;
}

function List({ cities, onMouse, hoveredCityIndex }: CityPickerListProps) {
  return (
    <div className="sm:-mt-8 xs:-mt-8">
      <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 h-full">
        <div className="col-span-1 sm:hidden xs:hidden" />
        <div className="col-span-1 h-full xl:pr-5 lg:pr-5 md:pr-5">
          <div className="sm:w-full xs:w-full">
            {cities.map(
              (city, i) =>
                i + 1 <= Math.ceil(cities.length / 2) && (
                  <ListItem
                    key={city.name}
                    index={i}
                    text={city.name}
                    isHovered={hoveredCityIndex === i}
                    onMouse={onMouse}
                  />
                )
            )}
          </div>
        </div>
        <div className="col-span-1 h-full xl:pl-5 lg:pl-5 md:pl-5">
          <div className="sm:w-full xs:w-full">
            {cities.map(
              (city, i) =>
                i + 1 > Math.ceil(cities.length / 2) && (
                  <ListItem
                    key={city.name}
                    index={i}
                    text={city.name}
                    isHovered={hoveredCityIndex === i}
                    onMouse={onMouse}
                  />
                )
            )}
          </div>
        </div>
        <div className="col-span-1 sm:hidden xs:hidden" />
      </div>
    </div>
  );
}

export default List;
