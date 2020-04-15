import Logo from './Logo';
import React from 'react';
import { SUPPORTERS } from '../../../../../config/supporters';
import atexLogoPath from '../../../../../assets/images/supporters/logo_atex.svg';
import podmeSaRozpravatLogoPath from '../../../../../assets/images/supporters/logo_podme_sa_rozpravat.svg';
import sampittkoLogoPath from '../../../../../assets/images/supporters/logo_sampittko.svg';
import skillfulLogoPath from '../../../../../assets/images/supporters/logo_skillful.svg';
import websupportLogoPath from '../../../../../assets/images/supporters/logo_websupport.svg';

// import kingMediaLogoPath from '../../../../../assets/images/supporters/logo_king_media.svg';

const Supporters = () =>
  <React.Fragment>
    <div className="row-span-1">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="font-rustico-regular text-5xl sm:text-4xl xs:text-4xl text-center xs:mt-5 sm:mt-5 md:pt-10 lg:mt-5 xl:mt-7 xs:mb-5 sm:mb-5 md:pb-10 lg:mb-5 xl:mb-7">
          PodPorili nás
        </h1>
      </div>
    </div>
    <div className="row-span-2">
      <div className="xl:flex xl:flex-row xl:items-center xl:justify-center">
        <Logo
          logoPath={podmeSaRozpravatLogoPath}
          href={SUPPORTERS.PODME_SA_ROZPRAVAT[0]}
          className="w-64 md:w-52 sm:w-44 xs:w-36"
          alt={SUPPORTERS.PODME_SA_ROZPRAVAT[1]}
        />
        <Logo
          logoPath={websupportLogoPath}
          href={SUPPORTERS.WEBSUPPORT[0]}
          className="w-56 md:w-50 sm:w-44 xs:w-36"
          alt={SUPPORTERS.WEBSUPPORT[1]}
        />
        {/* <Logo
          logoPath={kingMediaLogoPath}
          href={SUPPORTERS.KING_MEDIA[0]}
          className="w-56 md:w-50 sm:w-44 xs:w-36"
          alt={SUPPORTERS.KING_MEDIA[1]}
        /> */}
        <Logo
          logoPath={atexLogoPath}
          href={SUPPORTERS.ATEX[0]}
          className="w-53 md:w-50 sm:w-44 xs:w-36"
          alt={SUPPORTERS.ATEX[1]}
        />
        <Logo
          logoPath={sampittkoLogoPath}
          href={SUPPORTERS.SAMPITTKO[0]}
          className="w-24 md:w-18 sm:w-16 xs:w-14"
          alt={SUPPORTERS.SAMPITTKO[1]}
        />
        <Logo
          logoPath={skillfulLogoPath}
          href={SUPPORTERS.SKILLFUL[0]}
          className="w-48 md:w-46 sm:w-40 xs:w-32"
          alt={SUPPORTERS.SKILLFUL[1]}
        />
      </div>
    </div>
  </React.Fragment>

export default Supporters;