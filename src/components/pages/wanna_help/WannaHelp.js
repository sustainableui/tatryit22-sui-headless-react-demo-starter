import Action from '../common/Action';
import Arrow from '../../common/navigation/Arrow';
import Headline from '../common/Headline';
import List from './list/List';
import { ROUTES } from '../../../config/routes';
import React from 'react';
import Section from '../../common/section/Section';
import { VOLUNTEER_FORM_LINK } from '../../../config';
import backgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';

const WannaHelp = () =>
  <Section
    backgroundPath={backgroundPath}
    title="Chcem Pomôcť"
  >
    <div className="flex flex-col justify-center items-center h-full -mt-14 sm:mt-0 xs:mt-0 sm:justify-start xs:justify-start">
      <Headline text="Povinnosti dobrovoľníka"/>
      <List />
      <Action
        redirect
        to={VOLUNTEER_FORM_LINK}
        descriptionText="zapoj sa zaslaním formulára"
        actionText="Formulár"
        buttonColor="blue"
        buttonVariant="contained"
      />
    </div>
    <Arrow
      to={ROUTES.CHCEM_POMOCT_HASH}
      back
      color="blue"
    />
  </Section>;

export default WannaHelp;