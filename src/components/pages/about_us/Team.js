import Profile from './common/profile/Profile';
import Quote from './common/Quote';
import React from 'react';
import { SECTION_IDS } from '../../../config/routes';
import SamuelMuchaProfileImagePath from '../../../assets/images/people/samuel_mucha.png';
import SamuelPitonakProfileImagePath from '../../../assets/images/people/samuel_pitonak.png';
import ScrollableSection from 'react-update-url-on-scroll';
import TimotejMuchaProfileImagePath from '../../../assets/images/people/timotej_mucha.png';

const Team = () =>
  <ScrollableSection hash={SECTION_IDS.TEAM}>
    <div className="h-full">
      <div className="xl:grid lg:grid md:grid xl:grid-rows-5 lg:grid-rows-5 md:grid-rows-3 h-full overflow-hidden md:overflow-y-auto sm:overflow-y-auto xs:overflow-y-auto">
        <div className="row-span-1 md:hidden sm:hidden xs:hidden"/>
        <div className="row-span-2">
          <div className="flex flex-col justify-center items-center h-full">
            <div>
              <Profile
                imagePath={SamuelPitonakProfileImagePath}
                name="Samuel Pitoňák"
                description="IT Študent, Programátor"
                className="md:hidden sm:hidden xs:hidden"
              />
              <Profile
                imagePath={TimotejMuchaProfileImagePath}
                name="Timotej Mucha"
                description="Zakladateľ iniciatívy, Študent LF"
                className="md:block md:mx-auto sm:block sm:mx-auto xs:block xs:mx-auto sm:pt-5 xs:pt-5"
              />
              <Quote
                text="„Celá myšlienka je pomôcť. Pomôcť tým, ktorí to najviac potrebujú. Už v prvých dňoch sme sa na fakulte rozprávali so spolužiakmi o tom, že treba niečo urobiť. Niečo, znamená POMÁHAŤ. Budem rád, ak sa k tejto iniciatíve pridajú aj ďalší mladí ľudia.“"
                className="xl:hidden lg:hidden md:pt-5 sm:pt-5 xs:pt-5 sm:pb-10 xs:pb-10 sm:pr-10 sm:pl-10 xs:pr-5 xs:pl-5"
              />
              <Profile
                imagePath={SamuelMuchaProfileImagePath}
                name="Samuel Mucha"
                description="Študent, Graphic Designer"
                className="md:hidden sm:hidden xs:hidden"
              />
            </div>
          </div>
        </div>
        <div className="row-span-1">
          <Quote
            text="„Celá myšlienka je pomôcť. Pomôcť tým, ktorí to najviac potrebujú. Už v prvých dňoch sme sa na fakulte rozprávali so spolužiakmi o tom, že treba niečo urobiť. Niečo, znamená POMÁHAŤ. Budem rád, ak sa k tejto iniciatíve pridajú aj ďalší mladí ľudia.“"
            className="flex flex-col justify-start items-center h-full mt-10 md:hidden sm:hidden xs:hidden"
          />
          <div className="xl:hidden lg:hidden flex flex-col justify-start items-center pb-10 md:-mt-10">
            <div className="inline">
              <Profile
                imagePath={SamuelMuchaProfileImagePath}
                name="Samuel Mucha"
                description="Študent, Graphic Designer"
                className="md:block md:mx-auto sm:block sm:mx-auto xs:block xs:mx-auto mb-8"
              />
              <Profile
                imagePath={SamuelPitonakProfileImagePath}
                name="Samuel Pitoňák"
                description="IT Študent, Programátor"
                className="md:block md:mx-auto sm:block sm:mx-auto xs:block xs:mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="row-span-1 md:hidden sm:hidden xs:hidden" />
      </div>
    </div>
  </ScrollableSection>;

export default Team;