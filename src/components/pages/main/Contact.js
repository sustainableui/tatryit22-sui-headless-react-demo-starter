import ContactItems from '../../common/contactItems/ContactItems';
import Facebook from '../../common/contactItems/facebook/Facebook';
import Headline from '../../common/section/Headline';
import React from 'react';
import Section from "../../common/section/Section";
import backgroundPath from '../../../assets/images/backgrounds/pattern_more_elements.svg';

const Contact = () =>
  <Section
    id="kontakt"
    backgroundPath={backgroundPath}
  >
    <div className="grid grid-rows-12 h-full overflow-hidden">
      <div className="row-span-2" />
      <Headline text="Kontakt" />
      <ContactItems />
      <Facebook />
      <div />
    </div>
  </Section>;

export default Contact;