import ContactItems from '../../../common/contactItems/ContactItems';
import Facebook from '../../../common/contactItems/facebook/Facebook';
import Headline from '../../../common/section/Headline';
import React from 'react';
import Section from "../../../common/section/Section";

const AboutUs = () =>
  <Section id="o-nas">
    <div className="grid grid-rows-12 h-full overflow-hidden">
      <div className="row-span-2" />
      <Headline text="O nás" />
      <ContactItems />
      <Facebook />
      <div />
    </div>
  </Section>;

export default AboutUs;