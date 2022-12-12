import React, { useState } from "react";
import List from "./CityPickerList";
import Map from "./Map";
import Section from "./Section";

import backgroundPath from "../../assets/images/backgrounds/pattern_elements.svg";

import CITIES from "./cities.json";

export const CITY_NOT_SELECTED_INDEX = -1;

const CityPicker = () => {
  const [hoveredCityIndex, setHoveredCityIndex] = useState(CITY_NOT_SELECTED_INDEX);

  const handleMouse = (hovered, index) => {
    if (hovered) {
      setHoveredCityIndex(index);
    } else {
      setHoveredCityIndex(CITY_NOT_SELECTED_INDEX);
    }
  };

  return (
    <Section fullscreen backgroundPath={backgroundPath} title="Vyberte vaše mesto">
      <Map cities={CITIES} onMouse={handleMouse} hoveredCityIndex={hoveredCityIndex} />
      <List cities={CITIES} onMouse={handleMouse} hoveredCityIndex={hoveredCityIndex} />
    </Section>
  );
};

export default CityPicker;
