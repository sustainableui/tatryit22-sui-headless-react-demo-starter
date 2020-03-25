import ContactItems from '../../common/contactItems/ContactItems';
import Facebook from '../../common/contactItems/facebook/Facebook';
import Headline from '../../common/section/Headline';
import React from 'react';

const Contact = () =>
  <div className="grid grid-rows-11 h-full overflow-hidden">
    <Headline text="Kontakt" />
    <ContactItems />
    <Facebook />
    <div />
  </div>;

export default Contact;