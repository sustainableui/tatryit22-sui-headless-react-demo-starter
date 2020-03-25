import AboutService from './aboutService/AboutService';
import AboutUs from './aboutUs/AboutUs';
import CallTo from './callTo/CallTo';
import Contact from './Contact';
import Hero from './hero/Hero';
import Procedure from './procedure/Procedure';
import { ROUTES } from '../../../config/routes';
import React from 'react';
import Section from '../../common/section/Section';
import aboutServiceBackgroundPath from '../../../assets/images/backgrounds/pattern_more_elements.svg';
import callToCustomerBackgroundPath from '../../../assets/images/backgrounds/pattern_elements_green.svg';
import callToVolunteerBackgroundPath from '../../../assets/images/backgrounds/pattern_elements_blue.svg';
import contactBackgroundPath from '../../../assets/images/backgrounds/pattern_more_elements.svg';
import heroBackgroundPath from '../../../assets/images/backgrounds/hero.svg';

const MainPage = () => {
  const HeroSection = (
    <Section
      id="vitajte"
      backgroundPath={heroBackgroundPath}
      uniqueLayout
    >
      <Hero />
    </Section>
  );

  const AboutSection = (
    <Section
      id="o-sluzbe"
      backgroundPath={aboutServiceBackgroundPath}
      scrollable
      title="O službe"
    >
      <AboutService />
    </Section>
  );

  const ProcedureSection = (
    <Section
      id="postup"
      scrollable
      title="Postup"
    >
      <Procedure />
    </Section>
  );

  const CustomerSection = (
    <Section
      id="potrebujem-pomoc"
      backgroundPath={callToCustomerBackgroundPath}
      uniqueLayout
    >
      <CallTo
        headline="Potrebujem Pomoc"
        description="Ak Ste Starší, Zdravotne Postihnutý Alebo Človek V Núdzi, Radi Vám Pomôžeme S Vašim Nákupom Alebo Donáškou Liekov. Stačí Nás Kontaktovať."
        theme="green"
        action="Pomôžte mi"
        actionTo={ROUTES.MESTA}
      />
    </Section>
  );

  const VolunteerSection = (
    <Section
      id="chcem-pomoct"
      backgroundPath={callToVolunteerBackgroundPath}
      uniqueLayout
    >
      <CallTo
        headline="Chcem Pomôcť"
        description="Ak Si Študent Alebo Jednoducho Hocikto Kto Chce Pomôcť Dobrej Veci, Vyplň Formulár Pre Dobrovoľníka A Pridaj Sa K Nám!"
        theme="blue"
        action="Viac"
        actionTo={ROUTES.POVINNOSTI_DOBROVOLNIKA}
      />
    </Section>
  );

  const ContactSection = (
    <Section
      id="kontakt"
      backgroundPath={contactBackgroundPath}
      title="Kontakt"
    >
      <Contact />
    </Section>
  );

  const AboutUsSection = (
    <Section
      id="o-nas"
      title="O nás"
    >
      <AboutUs />
    </Section>
  );

  return (
    <React.Fragment>
      {HeroSection}
      {AboutSection}
      {/* {ProcedureSection}
      {CustomerSection}
      {VolunteerSection}
      {ContactSection}
      {AboutUsSection} */}
    </React.Fragment>
  );
}

export default MainPage;