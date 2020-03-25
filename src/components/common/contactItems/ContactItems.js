import { CITIES, CITY_INDEXES } from "../../../config/cities";
import ItemButton, { TYPES } from "./ItemButton";

import { GENERAL_EMAIL } from "../../../config";
import React from 'react';

const ContactItems = () =>
  <React.Fragment>
    <ItemButton
      text={CITIES[CITY_INDEXES.POPRAD].name}
      type={TYPES.LOCATION}
    />
    <ItemButton
      text={CITIES[CITY_INDEXES.POPRAD].phone}
      type={TYPES.PHONE}
    />
    <ItemButton
      text={GENERAL_EMAIL}
      type={TYPES.EMAIL}
    />
  </React.Fragment>;

export default ContactItems;