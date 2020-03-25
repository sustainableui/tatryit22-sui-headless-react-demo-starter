import { CITIES, CITY_INDEXES } from "../../../config/cities";
import ItemButton, { TYPES } from "./ItemButton";

import { GENERAL_EMAIL } from "../../../config";
import PropTypes from 'prop-types';
import React from 'react';

const ContactItems = props =>
  <React.Fragment>
    <ItemButton
      text={CITIES[CITY_INDEXES.POPRAD].name}
      type={TYPES.LOCATION}
      bold={props.bold}
      dense={props.dense}
    />
    <ItemButton
      text={CITIES[CITY_INDEXES.POPRAD].phone}
      type={TYPES.PHONE}
      bold={props.bold}
      dense={props.dense}
    />
    <ItemButton
      text={GENERAL_EMAIL}
      type={TYPES.EMAIL}
      bold={props.bold}
      dense={props.dense}
    />
  </React.Fragment>;

ContactItems.propTypes = {
  bold: PropTypes.bool,
  dense: PropTypes.bool,
}

export default ContactItems;