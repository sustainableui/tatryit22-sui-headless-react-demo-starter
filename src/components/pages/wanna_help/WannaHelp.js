import Action from '../common/Action';
import Arrow from '../common/Arrow';
import Headline from '../common/Headline';
import List from './list/List';
import { ROUTES } from '../../../config/routes';
import React from 'react';
import Section from '../common/section/Section';
import { VOLUNTEER_FORM_LINK } from '../../../config';
import backgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';

const WannaHelp = () =>
  <Section
    backgroundPath={backgroundPath}
    title="Chcem Pomôcť"
    fullscreen
  >
    <Headline
      text="Povinnosti dobrovoľníka"
      className="text-blue"
    />
    <List />
    <Action
      redirect
      to={VOLUNTEER_FORM_LINK}
      descriptionText="zapoj sa zaslaním formulára"
      actionText="Formulár"
      buttonColor="blue"
      buttonVariant="contained"
    />
    <Arrow
      to={ROUTES.CHCEM_POMOCT_HASH}
      back
      color="blue"
    />
  </Section>;

export default WannaHelp;