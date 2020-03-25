import Features from './features/Features';
import Headline from '../../../common/section/Headline';
import React from 'react';
import Text from './Text';

const AboutService = () =>
  <div className="grid grid-rows-8 min-h-full">
    <div className="row-span-2" />
    <Headline text="O službe" />
    <Text />
    <Features />
    <div />
  </div>;

export default AboutService;