import Arrow from '../common/navigation/Arrow';
import { ROUTES } from '../../config/routes';
import React from 'react';
import Section from '../common/section/Section';
import backgroundPath from '../../assets/images/backgrounds/pattern_more_elements.svg';

const WannaHelp = () =>
  <Section
    backgroundPath={backgroundPath}
    title="Chcem Pomôcť"
  >
    <Arrow
      to={ROUTES.CHCEM_POMOCT_HASH}
      back
      color="blue"
    />
  </Section>;

export default WannaHelp;