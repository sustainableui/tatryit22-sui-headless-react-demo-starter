import React, { useState } from 'react';

import { CITIES } from '../../../config/cities';
import List from './list/List';
import Map from './map/Map';
import Section from '../common/section/Section';
import backgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';

const cities = [CITIES.HUMENNE, CITIES.KYSUCKE_NOVE_MESTO, CITIES.PIESTANY, CITIES.POPRAD];

export const NONE = -1;

const CityPickerPage = () => {
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

export default CityPickerPage;
