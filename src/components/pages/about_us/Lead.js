import BistrikMuchaProfileImagePath from '../../../assets/images/people/bystrik_mucha.png';
import { IDS } from '../../../config/routes';
import ProfileImage from './team/profile/Image';
import React from 'react';
import { ReactComponent as SVGPodmeSaRozpravatLogo } from '../../../assets/images/supporters/logo_podme_sa_rozpravat.svg';
import ScrollableSection from 'react-update-url-on-scroll';

const Lead = () =>
  <ScrollableSection hash={IDS.PODME_SA_ROZPRAVAT}>
    <div className="h-full">
      <div className="grid grid-rows-7 h-full overflow-hidden">
        <div className="row-span-1 h-full"/>
        <div className="row-span-3">
          <div className="flex flex-col justify-end items-center h-full">
            <div>
              <SVGPodmeSaRozpravatLogo className="w-64 mx-auto pb-10" />
              <ProfileImage
                imagePath={BistrikMuchaProfileImagePath}
                name="Bistrík Mucha"
                description="Zakladateľ OI Poďme sa rozprávať"
              />
            </div>
          </div>
        </div>
        <div className="row-span-3">
          <div className="flex flex-col justify-start items-center h-full mt-10">
            <p className="font-futura-medium text-center text-lg max-w-xs-paragraph">
              „Prichádzame s iniciatívou POĎME SI POMÁHAŤ, keďže vieme, že hybnou silou v krajine, v dobrom aj zlom, je OBČAN. Teraz sa potrebujeme. Nie kvôli politike, ale kvôli vzájomnej pomoci a ľudskosti. Poprad určite takúto aktivitu potrebuje. Ďakujeme naši mladí!“
              </p>
          </div>
        </div>
      </div>
    </div>
  </ScrollableSection>;

export default Lead;