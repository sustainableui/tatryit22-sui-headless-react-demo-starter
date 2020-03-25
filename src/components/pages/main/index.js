import AboutService from './aboutService/AboutService';
import AboutUs from './aboutUs/AboutUs';
import CallTo from './callTo/CallTo';
import Contact from './Contact';
import Hero from './hero/Hero';
import Procedure from './procedure/Procedure';
import { ROUTES } from '../../../config/routes';
import React from 'react';

const MainPage = () =>
  <div>
    <Hero />
    <AboutService />
    <Procedure />
    <CallTo
      id="potrebujem-pomoc"
      headline="Potrebujem Pomoc"
      description="Ak Ste Starší, Zdravotne Postihnutý Alebo Človek V Núdzi, Radi Vám Pomôžeme S Vašim Nákupom Alebo Donáškou Liekov. Stačí Nás Kontaktovať."
      theme="green"
      action="Pomôžte mi"
      actionTo={ROUTES.MESTA}
    />
    <CallTo
      id="chcem-pomoct"
      headline="Chcem Pomôcť"
      description="Ak Si Študent Alebo Jednoducho Hocikto Kto Chce Pomôcť Dobrej Veci, Vyplň Formulár Pre Dobrovoľníka A Pridaj Sa K Nám!"
      theme="blue"
      action="Viac"
      actionTo={ROUTES.POVINNOSTI_DOBROVOLNIKA}
    />
    <Contact />
    <AboutUs />
  </div>;

export default MainPage;