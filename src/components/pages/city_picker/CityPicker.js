import React, {useEffect} from 'react';

import Arrow from '../../common/navigation/Arrow';
import { CITIES } from '../../../config/cities';
import City from './City';
import { ROUTES } from '../../../config/routes';
import Section from '../../common/section/Section';
import backgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';
import { setDocumentTitleFromRoute } from '../../../utils/routesUtils';

const CityPickerPage = () => {
  useEffect(() => {
    setDocumentTitleFromRoute(ROUTES.VYBERTE_VASE_MESTO);
  }, []);

  return (
    <Section
      backgroundPath={backgroundPath}
      title="Vyberte vaše mesto"
    >
      <div className="xl:grid xl:grid-rows-5 lg:grid lg:grid-rows-5 md:grid md:grid-rows-5 h-full sm:-mt-8 xs:-mt-8">
          <div className="row-span-1"/>
          <div className="row-span-3">
          <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 h-full">
            <div className="col-span-1 sm:hidden xs:hidden" />
            <div className="col-span-1 flex flex-col justify-center items-center h-full xl:pr-5 lg:pr-5 md:pr-5">
              <div className="sm:w-full xs:w-full">
                <City text={CITIES.POPRAD.NAME} />
                <City text={CITIES.PIESTANY.NAME} />
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center h-full xl:pl-5 lg:pl-5 md:pl-5">
              <div className="sm:w-full xs:w-full">
                <City text={CITIES.HUMENNE.NAME} />
                <City text={CITIES.POPRAD.NAME} hidden />
              </div>
            </div>
            <div className="col-span-1 sm:hidden xs:hidden" />
          </div>
        </div>
        <div className="row-span-1 sm:hidden xs:hidden" />
      </div>
      <Arrow
        to={ROUTES.POTREBUJEM_POMOC_HASH}
        back
        color="green"
      />
    </Section>
  );
}

export default CityPickerPage;