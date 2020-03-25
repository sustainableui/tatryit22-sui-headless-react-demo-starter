import ContactItems from '../../common/contactItems/ContactItems';
import Facebook from '../../common/contactItems/facebook/Facebook';
import Headline from '../../common/section/Headline';
import React from 'react';

const Contact = () =>
  <div className="grid grid-rows-12 h-full overflow-hidden">
    <div className="row-span-2" />
    <Headline text="Kontakt" />
    <ContactItems />
    <Facebook />
    <div />
  </div>;

export default Contact;