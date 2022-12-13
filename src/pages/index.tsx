import React from 'react';
import CityPickerSection from '../components/sections/CityPickerSection';
import pageData from './indexData.json';

function IndexPage() {
  return (
    <>
      <CityPickerSection
        title={pageData.cityPickerSection.title}
        cities={pageData.cityPickerSection.cities}
      />
      {/* ... */}
    </>
  );
}

export default IndexPage;
