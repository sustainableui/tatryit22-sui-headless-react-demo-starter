import Arrow from '../common/navigation/Arrow';
import { ROUTES } from '../../config/routes';
import React from 'react';
import Section from '../common/section/Section';
import backgroundPath from '../../assets/images/backgrounds/pattern_more_elements.svg';

const CityPickerPage = () =>
  <Section
    backgroundPath={backgroundPath}
    title="Vyberte vaše mesto"
  >
    <Arrow
      to={ROUTES.POTREBUJEM_POMOC_HASH}
      back
      color="green"
    />
  </Section>;

export default CityPickerPage;