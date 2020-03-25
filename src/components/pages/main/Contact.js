import ContactItems from '../../common/contactItems/ContactItems';
import Facebook from '../../common/contactItems/facebook/Facebook';
import React from 'react';

const Contact = () =>
  <div className="grid grid-rows-8 h-full overflow-hidden">
    <ContactItems bold dense />
    <Facebook bold />
  </div>;

export default Contact;