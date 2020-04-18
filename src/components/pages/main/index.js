import { ROUTES, SECTION_IDS, TITLES } from '../../../config/routes';

import AboutService from './aboutService/AboutService';
import AboutUs from './aboutUs/AboutUs';
import CallTo from './callTo/CallTo';
import Contact from './contact/Contact';
import Hero from './hero/Hero';
import Procedure from './procedure/Procedure';
import React from 'react';
import Section from '../common/section/Section';
import Stats from './stats/Stats';
import aboutServiceBackgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';
import aboutUsBackgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';
import callToCustomerBackgroundPath from '../../../assets/images/backgrounds/pattern_elements_green.svg';
import callToVolunteerBackgroundPath from '../../../assets/images/backgrounds/pattern_elements_blue.svg';
import contactBackgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';
import heroBackgroundPath from '../../../assets/images/backgrounds/hero.svg';
import procedureBackgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';
import statsBackgroundPath from '../../../assets/images/backgrounds/pattern_elements_blue_stats.svg';

const MainPage = () => {
  const HeroSection = (
    <Section
      id={SECTION_IDS.VITAJTE}
      backgroundPath={heroBackgroundPath}
      customLayout
      fullscreen
    >
      <Hero />
    </Section>
  );

  const StatsSection = (
    <Section
      backgroundPath={statsBackgroundPath}
      customLayout
      noBottom
    >
      <Stats />
    </Section>
  );

  const AboutSection = (
    <Section
      id={SECTION_IDS.O_SLUZBE}
      backgroundPath={aboutServiceBackgroundPath}
      title={TITLES.O_SLUZBE}
      backgroundPositionClass="bg-bottom"
      noBottom
    >
      <AboutService />
    </Section>
  );

  const ProcedureSection = (
    <Section
      id={SECTION_IDS.POSTUP}
      backgroundPath={procedureBackgroundPath}
      title={TITLES.POSTUP}
      backgroundPositionClass="bg-top"
    >
      <Procedure />
    </Section>
  );

  const CustomerSection = (
    <Section
      id={SECTION_IDS.POTREBUJEM_POMOC}
      backgroundPath={callToCustomerBackgroundPath}
      customLayout
      fullscreen
    >
      <CallTo
        id={SECTION_IDS.POTREBUJEM_POMOC}
        headline={TITLES.POTREBUJEM_POMOC}
        description="Ak ste starší, zdravotne postihnutý, alebo človek v núdzi, radi vám pomôžeme s vašim nákupom alebo donáškou liekov."
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
      fullscreen
    >
      <CallTo
        id={SECTION_IDS.CHCEM_POMOCT}
        headline={TITLES.CHCEM_POMOCT}
        description="Ak si študent alebo jednoducho hocikto, kto chce pomôcť dobrej veci, vyplň formulár pre dobrovoľníka a pridaj sa k nám!"
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
      noBottom
      backgroundPositionClass="bg-bottom"
    >
      <Contact />
    </Section>
  );

  const AboutUsSection = (
    <Section
      id={SECTION_IDS.O_NAS_HASH}
      backgroundPath={aboutUsBackgroundPath}
      title={TITLES.O_NAS}
      backgroundPositionClass="bg-top"
    >
      <AboutUs />
    </Section>
  );

  return (
    <React.Fragment>
      {HeroSection}
      {StatsSection}
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