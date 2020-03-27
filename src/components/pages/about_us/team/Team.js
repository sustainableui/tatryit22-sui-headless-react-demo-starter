import { IDS } from '../../../../config/routes';
import ProfileImage from './profile/Image';
import React from 'react';
import SamuelMuchaProfileImagePath from '../../../../assets/images/people/samuel_mucha.png';
import SamuelPitonakProfileImagePath from '../../../../assets/images/people/samuel_pitonak.png';
import ScrollableSection from 'react-update-url-on-scroll';
import TimotejMuchaProfileImagePath from '../../../../assets/images/people/timotej_mucha.png';

const Team = () =>
  <ScrollableSection hash={IDS.TEAM}>
    <div className="h-full">
      <div className="grid grid-rows-5 h-full overflow-hidden">
        <div className="row-span-1"/>
        <div className="row-span-2">
          <div className="flex flex-col justify-center items-center h-full">
            <div>
              <ProfileImage
                imagePath={SamuelPitonakProfileImagePath}
                name="Samuel Pitoňák"
                description="IT Študent"
              />
              <ProfileImage
                imagePath={TimotejMuchaProfileImagePath}
                name="Timotej Mucha"
                description="Zakladateľ iniciatívy, Študent LF"
              />
              <ProfileImage
                imagePath={SamuelMuchaProfileImagePath}
                name="Samuel Mucha"
                description="Študent, Graphic Designer"
              />
            </div>
          </div>
        </div>
        <div className="row-span-1">
          <div className="flex flex-col justify-start items-center h-full mt-10">
            <p className="font-futura-medium text-center text-lg max-w-xs-paragraph">
              „Celá myšlienka je pomôcť. Pomôcť tým, ktorí to najviac potrebujú. Už v prvých dňoch sme sa na fakulte rozprávali so spolužiakmi o tom, že treba niečo urobiť. Niečo, znamená POMÁHAŤ. Budem rád, ak sa k tejto iniciatíve pridajú aj ďalší mladí ľudia.“
              </p>
          </div>
        </div>
        <div className="row-span-1" />
      </div>
    </div>
  </ScrollableSection>;

export default Team;