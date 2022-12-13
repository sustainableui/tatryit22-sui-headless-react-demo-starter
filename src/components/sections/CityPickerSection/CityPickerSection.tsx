import React, { Suspense } from 'react';
import Headline from '../../elements/Headline';
import Section from '../Section';
import Map from './CarbonMap';
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
      <Suspense fallback={<Headline text="Mapa sa načítava" />}>
        <Map
          cities={cities}
          onMouse={handleCityHighlight}
          highlightedCityIndex={highlightedCityIndex}
        />
      </Suspense>
      <List
        cities={cities}
        onMouse={handleCityHighlight}
        highlightedCityIndex={highlightedCityIndex}
      />
    </Section>
  );
}

export default CityPickerSection;
