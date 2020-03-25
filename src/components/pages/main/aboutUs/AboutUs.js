import ContactItems from '../../../common/contactItems/ContactItems';
import Facebook from '../../../common/contactItems/facebook/Facebook';
import React from 'react';

const AboutUs = () =>
  <div className="grid grid-rows-9 h-full overflow-hidden">
    <ContactItems />
    <Facebook />
    <div />
  </div>;

export default AboutUs;