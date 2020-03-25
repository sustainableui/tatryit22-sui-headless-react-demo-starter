import AboutService from './aboutService/AboutService';
import Hero from './hero/Hero';
import Procedure from './procedure/Procedure';
import React from 'react';

const MainPage = () =>
  <div>
    <Hero />
    <AboutService />
    <Procedure />
  </div>;

export default MainPage;