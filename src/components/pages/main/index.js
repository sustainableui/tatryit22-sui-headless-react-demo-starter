import { ROUTES, SECTION_IDS, TITLES } from '../../../config/routes';

import AboutService from './aboutService/AboutService';
import AboutUs from './aboutUs/AboutUs';
import CallTo from './callTo/CallTo';
import Contact from './contact/Contact';
import Hero from './hero/Hero';
import Procedure from './procedure/Procedure';
import React from 'react';
import Section from '../../common/section/Section';
import aboutServiceBackgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';
import aboutUsBackgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';
import callToCustomerBackgroundPath from '../../../assets/images/backgrounds/pattern_elements_green.svg';
import callToVolunteerBackgroundPath from '../../../assets/images/backgrounds/pattern_elements_blue.svg';
import contactBackgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';
import heroBackgroundPath from '../../../assets/images/backgrounds/hero.svg';
import procedureBackgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';

const MainPage = () => {
  const HeroSection = (
    <Section
      id={SECTION_IDS.VITAJTE}
      backgroundPath={heroBackgroundPath}
      customLayout
    >
      <Hero />
    </Section>
  );

  const AboutSection = (
    <Section
      id={SECTION_IDS.O_SLUZBE}
      backgroundPath={aboutServiceBackgroundPath}
      scrollable
      title={TITLES.O_SLUZBE}
    >
      <AboutService />
    </Section>
  );

  const ProcedureSection = (
    <Section
      id={SECTION_IDS.POSTUP}
      backgroundPath={procedureBackgroundPath}
      scrollable
      title={TITLES.POSTUP}
    >
      <Procedure />
    </Section>
  );

  const CustomerSection = (
    <Section
      id={SECTION_IDS.POTREBUJEM_POMOC}
      backgroundPath={callToCustomerBackgroundPath}
      customLayout
    >
      <CallTo
        id={SECTION_IDS.POTREBUJEM_POMOC}
        headline={TITLES.POTREBUJEM_POMOC}
        description="Ak Ste Starší, Zdravotne Postihnutý Alebo Človek V Núdzi, Radi Vám Pomôžeme S Vašim Nákupom Alebo Donáškou Liekov."
        theme="green"
        action="Pomôžte mi"
        actionTo={ROUTES.VYBERTE_VASE_MESTO}
      />
    </Section>
  );

  const VolunteerSection = (
    <Section
      id={SECTION_IDS.CHCEM_POMOCT}
      backgroundPath={callToVolunteerBackgroundPath}
      customLayout
    >
      <CallTo
        id={SECTION_IDS.CHCEM_POMOCT}
        headline={TITLES.CHCEM_POMOCT}
        description="Ak Si Študent Alebo Jednoducho Hocikto Kto Chce Pomôcť Dobrej Veci, Vyplň Formulár Pre Dobrovoľníka A Pridaj Sa K Nám!"
        theme="blue"
        action="Viac"
        actionTo={ROUTES.CHCEM_POMOCT}
      />
    </Section>
  );

  const ContactSection = (
    <Section
      id={SECTION_IDS.KONTAKT}
      backgroundPath={contactBackgroundPath}
      title={TITLES.KONTAKT}
    >
      <Contact />
    </Section>
  );

  const AboutUsSection = (
    <Section
      id={SECTION_IDS.O_NAS_HASH}
      backgroundPath={aboutUsBackgroundPath}
      title={TITLES.O_NAS}
    >
      <AboutUs />
    </Section>
  );

  return (
    <React.Fragment>
      {HeroSection}
      {AboutSection}
      {ProcedureSection}
      {CustomerSection}
      {VolunteerSection}
      {ContactSection}
      {AboutUsSection}
    </React.Fragment>
  );
}

export default MainPage;