import React from 'react';
import Section from '../../elements/Section';
import Map from './Map';
import List from './List';
import useCityHighlight from './hooks/useCityHighlight';

import mapData from './mapData.json';

interface CityPickerSectionProps {
  title: string;
  cities: Array<{ name: string; coordinates: number[] }>;
}

function CityPickerSection({ title, cities }: CityPickerSectionProps) {
  const { highlightedCityIndex, handleCityHighlight } = useCityHighlight();

  return (
    <Section title={title}>
      <Map
        topologyData={mapData}
        cities={cities}
        onMouse={handleCityHighlight}
        highlightedCityIndex={highlightedCityIndex}
      />
      <List
        cities={cities}
        onMouse={handleCityHighlight}
        highlightedCityIndex={highlightedCityIndex}
      />
    </Section>
  );
}

export default CityPickerSection;
