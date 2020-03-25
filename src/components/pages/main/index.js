import AboutService from './aboutService/AboutService';
import AboutUs from './about_us/AboutUs';
import Contact from './Contact';
import Customer from './Customer';
import Hero from './hero/Hero';
import Procedure from './procedure/Procedure';
import React from 'react';
import Volunteer from './Volunteer';

const MainPage = () =>
  <div>
    <Hero />
    <AboutService />
    <Procedure />
    <Customer />
    <Volunteer />
    <Contact />
    <AboutUs />
  </div>;

export default MainPage;