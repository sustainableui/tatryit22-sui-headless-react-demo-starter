import AboutService from './aboutService/AboutService';
import AboutUs from './aboutUs/AboutUs';
import CallTo from './callTo/CallTo';
import Contacts from '../../common/contacts/Contacts';
import Hero from './hero/Hero';
import Procedure from './procedure/Procedure';
import { ROUTES } from '../../../config/routes';
import React from 'react';
import Section from '../../common/section/Section';
import aboutServiceBackgroundPath from '../../../assets/images/backgrounds/pattern_more_elements.svg';
import aboutUsBackgroundPath from '../../../assets/images/backgrounds/pattern_more_elements.svg';
import callToCustomerBackgroundPath from '../../../assets/images/backgrounds/pattern_elements_green.svg';
import callToVolunteerBackgroundPath from '../../../assets/images/backgrounds/pattern_elements_blue.svg';
import contactBackgroundPath from '../../../assets/images/backgrounds/pattern_more_elements.svg';
import heroBackgroundPath from '../../../assets/images/backgrounds/hero.svg';
import procedureBackgroundPath from '../../../assets/images/backgrounds/pattern_more_elements.svg';

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
      backgroundPath={procedureBackgroundPath}
      scrollable
      title="PostuP"
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
      <div className="grid grid-rows-8 h-full overflow-hidden xl:-mt-10 lg:-mt-12 md:-mt-14 sm:-mt-14 xs:-mt-14">
        <Contacts bold />
      </div>
    </Section>
  );

  const AboutUsSection = (
    <Section
      id="o-nas"
      backgroundPath={aboutUsBackgroundPath}
      title="O nás"
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