import Logo from './Logo';
import React from 'react';
import { SUPPORTERS } from '../../../../../config/supporters';
import atexLogoPath from '../../../../../assets/images/supporters/logo_atex.svg';
import kingMediaLogoPath from '../../../../../assets/images/supporters/logo_king_media.svg';
import podmeSaRozpravatLogoPath from '../../../../../assets/images/supporters/logo_podme_sa_rozpravat.svg';
import sampittkoLogoPath from '../../../../../assets/images/supporters/logo_sampittko.svg';
import skillfulLogoPath from '../../../../../assets/images/supporters/logo_skillful.svg';

const Supporters = () =>
  <div className="grid grid-rows-3 h-full relative">
    <div className="row-span-1">
      <div className="flex flex-col justify-center items-center h-full break-normal text-center pr-5 pl-5">
        <h1 className="font-rustico-regular text-5xl sm:text-3xl xs:text-3xl sm:pb-10 xs:pb-10">
          PodPorili nás
        </h1>
      </div>
    </div>
    <div className="row-span-2">
      <div className="flex flex-row items-center justify-center h-full -mt-10 lg:-mt-14 lg:w-8/12 lg:mx-auto md:-mt-18 md:w-9/12 md:mx-auto">
        <div className="xl:inline-flex lg:inline-flex md-inline-flex sm:block xs:block sm:mx-auto xs:mx-auto md:mr-2 sm:mr-2 xs:mr-2">
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
        </div>
        <div className="xl:inline-flex lg:inline-flex md-inline-flex sm:block xs:block sm:mx-auto xs:mx-auto md:ml-2 sm:ml-2 xs:ml-2">
          <Logo
            logoPath={skillfulLogoPath}
            href={SUPPORTERS.SKILLFUL[0]}
            className="w-44 md:w-32 sm:w-32 xs:w-24"
            alt={SUPPORTERS.SKILLFUL[1]}
          />
          <Logo
            logoPath={sampittkoLogoPath}
            href={SUPPORTERS.SAMPITTKO[0]}
            className="w-26 md:w-14 sm:w-14 xs:w-10"
            alt={SUPPORTERS.SAMPITTKO[1]}
          />
        </div>
      </div>
    </div>
  </div>;

export default Supporters;