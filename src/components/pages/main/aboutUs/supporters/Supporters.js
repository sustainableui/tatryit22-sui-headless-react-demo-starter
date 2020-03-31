import Logo from './Logo';
import React from 'react';
import { SUPPORTERS } from '../../../../../config/supporters';
import atexLogoPath from '../../../../../assets/images/supporters/logo_atex.svg';
import kingMediaLogoPath from '../../../../../assets/images/supporters/logo_king_media.svg';
import podmeSaRozpravatLogoPath from '../../../../../assets/images/supporters/logo_podme_sa_rozpravat.svg';
import sampittkoLogoPath from '../../../../../assets/images/supporters/logo_sampittko.svg';
import skillfulLogoPath from '../../../../../assets/images/supporters/logo_skillful.svg';

const Supporters = () =>
  <React.Fragment>
    <div className="row-span-1">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="font-rustico-regular text-5xl sm:text-3xl xs:text-3xl text-center xs:mt-5 sm:mt-5 md:pt-10 lg:mt-5 xl:mt-7 xs:mb-5 sm:mb-5 md:pb-10 lg:mb-5 xl:mb-7">
          PodPorili nás
        </h1>
      </div>
    </div>
    <div className="row-span-2">
      <div className="xl:flex xl:flex-row xl:items-center xl:justify-center">
        <Logo
          logoPath={podmeSaRozpravatLogoPath}
          href={SUPPORTERS.PODME_SA_ROZPRAVAT[0]}
          className="w-64 md:w-44 sm:w-44 xs:w-40"
          alt={SUPPORTERS.PODME_SA_ROZPRAVAT[1]}
        />
        <Logo
          logoPath={atexLogoPath}
          href={SUPPORTERS.ATEX[0]}
          className="w-53 md:w-40 sm:w-40 xs:w-32"
          alt={SUPPORTERS.ATEX[1]}
        />
        <Logo
          logoPath={kingMediaLogoPath}
          href={SUPPORTERS.KING_MEDIA[0]}
          className="w-53 md:w-40 sm:w-40 xs:w-32"
          alt={SUPPORTERS.KING_MEDIA[1]}
        />
        <Logo
          logoPath={skillfulLogoPath}
          href={SUPPORTERS.SKILLFUL[0]}
          className="w-48 md:w-32 sm:w-36 xs:w-24"
          alt={SUPPORTERS.SKILLFUL[1]}
        />
        <Logo
          logoPath={sampittkoLogoPath}
          href={SUPPORTERS.SAMPITTKO[0]}
          className="w-16 md:w-14 sm:w-14 xs:w-10"
          alt={SUPPORTERS.SAMPITTKO[1]}
        />
      </div>
    </div>
  </React.Fragment>

export default Supporters;