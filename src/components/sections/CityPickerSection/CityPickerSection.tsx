import React from 'react';
import Section from '../../elements/Section';
import Map from './Map';
import List from './List';
import useCityHighlight from './hooks/useCityHighlight';

interface CityPickerSectionProps {
  title: string;
  cities: Array<{ name: string; coordinates: number[] }>;
}

function CityPickerSection({ title, cities }: CityPickerSectionProps) {
  const { highlightedCityIndex, handleCityHighlight } = useCityHighlight();

  return (
    <Section title={title}>
      <Map cities={cities} onMouse={handleCityHighlight} hoveredCityIndex={highlightedCityIndex} />
      <List cities={cities} onMouse={handleCityHighlight} hoveredCityIndex={highlightedCityIndex} />
    </Section>
  );
}

export default CityPickerSection;
