import { ROUTES, SECTION_IDS } from '../../../../config/routes';

import Arrow from '../../../common/navigation/Arrow';
import Graphic from './Graphic';
import Quote from '../common/Quote';
import React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';

const Lead = () =>
  <ScrollableSection hash={SECTION_IDS.PODME_SA_ROZPRAVAT}>
    <div className="h-full sm:pt-8 xs:pt-8">
      <div className="xl:grid lg:grid md:grid xl:grid-rows-7 lg:grid-rows-7 md:grid-rows-7 h-full overflow-hidden sm:overflow-y-auto xs:overflow-y-auto">
        <div className="row-span-1 h-full sm:hidden xs:hidden"/>
        <div className="xl:row-span-3 lg:row-span-3 md:row-span-3">
          <Graphic />
        </div>
        <div className="xl:row-span-3 lg:row-span-3 md:row-span-3">
          <Quote
            text="„Prichádzame s iniciatívou POĎME SI POMÁHAŤ, keďže vieme, že hybnou silou v krajine, v dobrom aj zlom, je OBČAN. Teraz sa potrebujeme. Nie kvôli politike, ale kvôli vzájomnej pomoci a ľudskosti. Poprad určite takúto aktivitu potrebuje. Ďakujeme naši mladí!“"
            className="flex flex-col justify-center items-center pt-10 sm:p-5 xs:p-5"
          />
        </div>
      </div>
      <Arrow
        top
        to={ROUTES.O_NAS_PAGE_HASH}
      />
    </div>
  </ScrollableSection>;

export default Lead;