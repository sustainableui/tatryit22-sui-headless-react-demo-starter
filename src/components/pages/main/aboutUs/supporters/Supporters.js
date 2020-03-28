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
      <div className="xl:flex lg:flex xl:flex-row lg:flex-row xl:items-center lg:items-center xl:justify-center lg:justify-center h-full -mt-10 lg:-mt-14 lg:w-8/12 lg:mx-auto md:overflow-y-auto sm:overflow-y-auto xs:overflow-y-auto md:pt-12">
        <Logo
          logoPath={podmeSaRozpravatLogoPath}
          href={SUPPORTERS.PODME_SA_ROZPRAVAT[0]}
          className="w-64 md:w-44 sm:w-44 xs:w-40 md:block md:mx-auto sm:block sm:mx-auto xs:block xs:mx-auto md:pb-3 sm:pb-3 xs:pb-3"
          alt={SUPPORTERS.PODME_SA_ROZPRAVAT[1]}
        />
        <Logo
          logoPath={atexLogoPath}
          href={SUPPORTERS.ATEX[0]}
          className="w-53 md:w-40 sm:w-40 xs:w-32 md:block md:mx-auto sm:block sm:mx-auto xs:block xs:mx-auto md:pb-3 sm:pb-3 xs:pb-3"
          alt={SUPPORTERS.ATEX[1]}
        />
        <Logo
          logoPath={kingMediaLogoPath}
          href={SUPPORTERS.KING_MEDIA[0]}
          className="w-53 md:w-40 sm:w-40 xs:w-32 md:block md:mx-auto sm:block sm:mx-auto xs:block xs:mx-auto md:pb-3 sm:pb-3 xs:pb-3"
          alt={SUPPORTERS.KING_MEDIA[1]}
        />
        <Logo
          logoPath={skillfulLogoPath}
          href={SUPPORTERS.SKILLFUL[0]}
          className="w-48 md:w-32 sm:w-36 xs:w-24 md:block md:mx-auto sm:block sm:mx-auto xs:block xs:mx-auto md:pb-3 sm:pb-3 xs:pb-3"
          alt={SUPPORTERS.SKILLFUL[1]}
        />
        <Logo
          logoPath={sampittkoLogoPath}
          href={SUPPORTERS.SAMPITTKO[0]}
          className="w-26 md:w-14 sm:w-14 xs:w-10 md:block md:mx-auto sm:block sm:mx-auto xs:block xs:mx-auto md:pb-3 sm:pb-3 xs:pb-3"
          alt={SUPPORTERS.SAMPITTKO[1]}
        />
      </div>
    </div>
  </div>;

export default Supporters;