import React, { useState } from "react";
import Section from "../../elements/Section";
import List from "./CityPickerList";
import Map from "./CityPickerMap";

import { CITIES } from './data.json';

export const NO_CITY_HIGHLIGHTED_INDEX = -1;

const CityPickerSection = () => {
  const [highlightedCityIndex, setHighlightedCityIndex] = useState(NO_CITY_HIGHLIGHTED_INDEX);

  const handleMouse = (isHovered, cityIndex) => {
    if (isHovered) {
      setHighlightedCityIndex(cityIndex);
    } else {
      setHighlightedCityIndex(NO_CITY_HIGHLIGHTED_INDEX);
    }
  };

  return (
    <Section title="Vyberte vaše mesto">
      <Map cities={CITIES} onMouse={handleMouse} hoveredCityIndex={highlightedCityIndex} />
      <List cities={CITIES} onMouse={handleMouse} hoveredCityIndex={highlightedCityIndex} />
    </Section>
  );
};

export default CityPickerSection;
