import React, {useEffect} from 'react';

import Arrow from '../common/Arrow';
import { CITIES } from '../../../config/cities';
import City from './City';
import { ROUTES } from '../../../config/routes';
import Section from '../common/section/Section';
import backgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';
import { setDocumentTitleFromRoute } from '../../../utils/routesUtils';

const CityPickerPage = () => {
  useEffect(() => {
    setDocumentTitleFromRoute(ROUTES.VYBERTE_VASE_MESTO);
  }, []);

  return (
    <Section fullscreen backgroundPath={backgroundPath} title="Vyberte vaše mesto">
      <div className="sm:-mt-8 xs:-mt-8 h-full">
        <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 h-full">
          <div className="col-span-1 sm:hidden xs:hidden" />
          <div className="col-span-1 h-full xl:pr-5 lg:pr-5 md:pr-5">
            <div className="sm:w-full xs:w-full">
              <City text={CITIES.POPRAD.NAME} />
              <City text={CITIES.PIESTANY.NAME} />
            </div>
          </div>
          <div className="col-span-1 h-full xl:pl-5 lg:pl-5 md:pl-5">
            <div className="sm:w-full xs:w-full">
              <City text={CITIES.HUMENNE.NAME} />
              <City text={CITIES.KYSUCKE_NOVE_MESTO.NAME} />
            </div>
          </div>
          <div className="col-span-1 sm:hidden xs:hidden" />
        </div>
      </div>
      <Arrow to={ROUTES.POTREBUJEM_POMOC_HASH} back color="green" />
    </Section>
  );
}

export default CityPickerPage;