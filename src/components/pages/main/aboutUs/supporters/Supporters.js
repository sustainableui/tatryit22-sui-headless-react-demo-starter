import Headline from '../../../../common/section/Headline';
import Logo from './Logo';
import React from 'react';
import { SUPPORTERS } from '../../../../../config';
import atexLogoPath from '../../../../../assets/images/supporters/logo_atex.svg';
import kingMediaLogoPath from '../../../../../assets/images/supporters/logo_king_media.svg';
import podmeSaRozpravatLogoPath from '../../../../../assets/images/supporters/logo_podme_sa_rozpravat.svg';
import sampittkoLogoPath from '../../../../../assets/images/supporters/logo_sampittko.svg';
import skillfulLogoPath from '../../../../../assets/images/supporters/logo_skillful.svg';

const Supporters = () =>
  <div className="grid grid-rows-3 h-full">
    <div className="row-span-1">
      <Headline text="PodPorili nás" paddingless />
    </div>
    <div className="row-span-2">
      <div className="flex flex-col items-center justify-center h-full">
        <div>
          <Logo
            logoPath={podmeSaRozpravatLogoPath}
            href={SUPPORTERS.PODME_SA_ROZPRAVAT[0]}
            className="w-64"
            alt={SUPPORTERS.PODME_SA_ROZPRAVAT[1]}
          />
          <Logo
            logoPath={atexLogoPath}
            href={SUPPORTERS.ATEX[0]}
            className="w-53"
            alt={SUPPORTERS.ATEX[1]}
          />
          <Logo
            logoPath={kingMediaLogoPath}
            href={SUPPORTERS.KING_MEDIA[0]}
            className="w-53"
            alt={SUPPORTERS.KING_MEDIA[1]}
          />
          <Logo
            logoPath={skillfulLogoPath}
            href={SUPPORTERS.SKILLFUL[0]}
            className="w-44"
            alt={SUPPORTERS.SKILLFUL[1]}
          />
          <Logo
            logoPath={sampittkoLogoPath}
            href={SUPPORTERS.SAMPITTKO[0]}
            className="w-16"
            alt={SUPPORTERS.SAMPITTKO[1]}
          />
        </div>
      </div>
    </div>
  </div>;

export default Supporters;