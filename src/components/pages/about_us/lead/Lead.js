import { ROUTES, SECTION_IDS } from '../../../../config/routes';

import Arrow from '../../common/Arrow';
import Graphic from './Graphic';
import Quote from '../common/Quote';
import React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';

const Lead = () =>
  <ScrollableSection hash={SECTION_IDS.PODME_SA_ROZPRAVAT}>
    <div className="xl:grid lg:grid md:grid xl:grid-rows-7 lg:grid-rows-7 md:grid-rows-7 xs:pt-8 sm:pt-8 md:pt-16 lg:pt-20 xl:pt-24 xs:row-span-7 xs:pl-7 xs:pr-7 xs:pb-20 sm:pl-20 sm:pr-20 sm:pb-20 md:pl-16 md:pr-16 md:pb-32 lg:pl-20 lg:pr-20 lg:pb-36 xl:pl-24 xl:pr-24 xl:pb-40">
      <div className="row-span-1 sm:hidden xs:hidden"/>
      <div className="xl:row-span-3 lg:row-span-3 md:row-span-3">
        <Graphic />
      </div>
      <div className="xl:row-span-3 lg:row-span-3 md:row-span-3">
        <Quote
          text="„Prichádzame s iniciatívou POĎME SI POMÁHAŤ, keďže vieme, že hybnou silou v krajine, v dobrom aj zlom, je OBČAN. Teraz sa potrebujeme. Nie kvôli politike, ale kvôli vzájomnej pomoci a ľudskosti. Poprad určite takúto aktivitu potrebuje. Ďakujeme naši mladí!“"
          className="flex flex-col justify-center items-center pt-10"
        />
      </div>
    </div>
    <Arrow
      top
      to={ROUTES.O_NAS_PAGE_HASH}
    />
  </ScrollableSection>;

export default Lead;