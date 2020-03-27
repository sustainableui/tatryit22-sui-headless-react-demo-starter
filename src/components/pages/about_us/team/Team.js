import Profiles from './Profiles';
import Quote from '../Quote';
import React from 'react';
import { SECTION_IDS } from '../../../../config/routes';
import ScrollableSection from 'react-update-url-on-scroll';

const Team = () =>
  <ScrollableSection hash={SECTION_IDS.TEAM}>
    <div className="h-full">
      <div className="grid grid-rows-5 h-full overflow-hidden">
        <div className="row-span-1"/>
        <div className="row-span-2">
          <Profiles />
        </div>
        <div className="row-span-1">
          <Quote text="„Celá myšlienka je pomôcť. Pomôcť tým, ktorí to najviac potrebujú. Už v prvých dňoch sme sa na fakulte rozprávali so spolužiakmi o tom, že treba niečo urobiť. Niečo, znamená POMÁHAŤ. Budem rád, ak sa k tejto iniciatíve pridajú aj ďalší mladí ľudia.“"/>
        </div>
        <div className="row-span-1" />
      </div>
    </div>
  </ScrollableSection>;

export default Team;