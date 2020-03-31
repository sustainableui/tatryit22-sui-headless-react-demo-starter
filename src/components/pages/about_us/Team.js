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
    <div className="xl:grid lg:grid md:grid xl:grid-rows-5 lg:grid-rows-5 xs:mb-7 sm:mb-20 md:mb-16 lg:mb-20 xs:pl-7 xs:pr-7 sm:pl-20 sm:pr-20 xs:pt-16 sm:pt-16 md:pt-32 lg:pt-36 xl:pt-40">
      <div className="row-span-3">
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
              className="md:block md:mx-auto sm:block sm:mx-auto xs:block xs:mx-auto md:mt-32"
            />
            <Quote
              text="„Celá myšlienka je pomôcť. Pomôcť tým, ktorí to najviac potrebujú. Už v prvých dňoch sme sa na fakulte rozprávali so spolužiakmi o tom, že treba niečo urobiť. Niečo, znamená POMÁHAŤ. Budem rád, ak sa k tejto iniciatíve pridajú aj ďalší mladí ľudia.“"
              className="xl:hidden lg:hidden xs:mt-5 sm:mt-5 md:mt-4 lg:mt-5 xl:mt-7 md:mb-16 lg:mb-20 xl:mb-24 xs:mb-16 sm:mb-16"
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
          className="flex flex-col justify-start items-center h-full xl:mt-0 lg:mt-0 md:hidden sm:hidden xs:hidden"
        />
        <div className="xl:hidden lg:hidden flex flex-col justify-start items-center">
          <div className="inline">
            <Profile
              imagePath={SamuelMuchaProfileImagePath}
              name="Samuel Mucha"
              description="Študent, Graphic Designer"
              className="md:block md:mx-auto sm:block sm:mx-auto xs:block xs:mx-auto md:mb-16 lg:mb-20 xl:mb-24 xs:mb-16 sm:mb-16"
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
  </ScrollableSection>;

export default Team;