import React from 'react';
import CityPickerSection from '../components/sections/CityPickerSection';

import pageData from './indexData.json';

const IndexPage = () => {
  return <CityPickerSection cities={pageData.cities} />;
};

export default IndexPage;
