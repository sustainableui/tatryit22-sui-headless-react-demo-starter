import React, { useState } from "react";

import CITIES from "./cities.json";
import List from "./List";
import Map from "./Map";
import Section from "./Section";

import backgroundPath from "../../assets/images/backgrounds/pattern_elements.svg";

const cities = [CITIES.HUMENNE, CITIES.KYSUCKE_NOVE_MESTO, CITIES.PIESTANY, CITIES.POPRAD, CITIES.PRESOV, CITIES.TRNAVA];

export const NONE = -1;

const CityPicker = () => {
  const [hoveredCityIndex, setHoveredCityIndex] = useState(NONE);

  const handleMouse = (hovered, index) => {
    if (hovered) {
      setHoveredCityIndex(index);
    } else {
      setHoveredCityIndex(NONE);
    }
  };

  return (
    <Section fullscreen backgroundPath={backgroundPath} title="Vyberte vaše mesto">
      <Map cities={cities} onMouse={handleMouse} hoveredCityIndex={hoveredCityIndex} />
      <List cities={cities} onMouse={handleMouse} hoveredCityIndex={hoveredCityIndex} />
    </Section>
  );
};

export default CityPicker;
