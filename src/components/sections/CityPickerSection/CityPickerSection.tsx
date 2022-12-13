import React from 'react';
import Section from '../../elements/Section';
import CityPickerMap from './CityPickerMap';
import CityPickerList from './CityPickerList';
import useCityHighlight from './hooks/useCityHighlight';

interface CityPickerSectionProps {
  cities: Array<{ name: string; coordinates: number[] }>;
}

function CityPickerSection({ cities }: CityPickerSectionProps) {
  const { highlightedCityIndex, handleCityHighlight } = useCityHighlight();

  return (
    <Section title="Vyberte vaše mesto">
      <CityPickerMap
        cities={cities}
        onMouse={handleCityHighlight}
        hoveredCityIndex={highlightedCityIndex}
      />
      <CityPickerList
        cities={cities}
        onMouse={handleCityHighlight}
        hoveredCityIndex={highlightedCityIndex}
      />
    </Section>
  );
}

export default CityPickerSection;
