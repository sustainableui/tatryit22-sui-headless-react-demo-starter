import Arrow from '../../common/navigation/Arrow';
import { ROUTES } from '../../../config/routes';
import React from 'react';
import Section from '../../common/section/Section';
import backgroundPath from '../../../assets/images/backgrounds/pattern_more_elements.svg';

const AboutUs = () =>
  <Section
    backgroundPath={backgroundPath}
    title="O nás"
  >
    <Arrow
      to={ROUTES.O_NAS_HASH}
      back
      color="blue"
    />
  </Section>;

export default AboutUs;