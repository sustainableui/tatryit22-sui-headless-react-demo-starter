import React, {useEffect, useState} from 'react';

import Arrow from '../common/Arrow';
import { CITIES } from '../../../config/cities';
import List from './list/List';
import Map from './map/Map';
import { ROUTES } from '../../../config/routes';
import Section from '../common/section/Section';
import backgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';
import { setDocumentTitleFromRoute } from '../../../utils/routesUtils';

const cities = [
  CITIES.HUMENNE,
  CITIES.KYSUCKE_NOVE_MESTO,
  CITIES.PIESTANY,
  CITIES.POPRAD,
];

export const NONE = -1;

const CityPickerPage = () => {
  const [hoveredCityIndex, setHoveredCityIndex] = useState(NONE);

  useEffect(() => {
    setDocumentTitleFromRoute(ROUTES.VYBERTE_VASE_MESTO);
  }, []);

  const handleMouse = (hovered, index) => {
    if (hovered) {
      setHoveredCityIndex(index);
    }
    else {
      setHoveredCityIndex(NONE);
    }
  }

  return (
    <Section
      fullscreen
      backgroundPath={backgroundPath}
      title="Vyberte vaše mesto"
    >
      <Map
        cities={cities}
        onMouse={handleMouse}
        hoveredCityIndex={hoveredCityIndex}
      />
      <List
        cities={cities}
        onMouse={handleMouse}
        hoveredCityIndex={hoveredCityIndex}
      />
      <Arrow
        to={ROUTES.POTREBUJEM_POMOC_HASH}
        back
        color="green"
      />
    </Section>
  );
}

export default CityPickerPage;