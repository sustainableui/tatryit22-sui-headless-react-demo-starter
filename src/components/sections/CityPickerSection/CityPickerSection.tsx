import React, { useState } from 'react';
import Section from '../../elements/Section';
import CityPickerMap from './CityPickerMap';
import CityPickerList from './CityPickerList';

import { CITIES } from './data.json';

const INITIAL_HIGHLIGHTED_CITY_INDEX = -1;

const CityPickerSection = () => {
  const [highlightedCityIndex, setHighlightedCityIndex] = useState(INITIAL_HIGHLIGHTED_CITY_INDEX);

  const handleCityHighlight = (isHovered, cityIndex) => {
    if (isHovered) {
      setHighlightedCityIndex(cityIndex);
    } else {
      setHighlightedCityIndex(INITIAL_HIGHLIGHTED_CITY_INDEX);
    }
  };

  return (
    <Section title="Vyberte vaše mesto">
      <CityPickerMap
        cities={CITIES}
        onMouse={handleCityHighlight}
        hoveredCityIndex={highlightedCityIndex}
      />
      <CityPickerList
        cities={CITIES}
        onMouse={handleCityHighlight}
        hoveredCityIndex={highlightedCityIndex}
      />
    </Section>
  );
};

export default CityPickerSection;
