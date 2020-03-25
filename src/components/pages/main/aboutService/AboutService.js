import Features from './features/Features';
import Headline from '../../../common/section/Headline';
import React from 'react';
import Section from '../../../common/section/Section';
import Text from './Text';
import backgroundPath from '../../../../assets/images/backgrounds/pattern_more_elements.svg';

const AboutService = () =>
  <Section
    backgroundPath={backgroundPath}
    className="h-auto min-h-screen overflow-y-visible"
  >
    <div className="grid grid-rows-8 min-h-full">
      <div className="row-span-2" />
      <Headline text="O službe" />
      <Text />
      <Features />
      <div />
    </div>
  </Section>;

export default AboutService;