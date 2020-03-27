import React, {useEffect} from 'react';

import Arrow from '../../common/navigation/Arrow';
import { CITIES } from '../../../config/cities';
import City from './City';
import { ROUTES } from '../../../config/routes';
import Section from '../../common/section/Section';
import backgroundPath from '../../../assets/images/backgrounds/pattern_more_elements.svg';
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
      <div className="grid grid-rows-3 h-full">
        <div className="row-span-2">
          <div className="grid grid-cols-4 h-full">
            <div className="col-span-1" />
            <div className="col-span-1 flex flex-col justify-center items-center h-full pr-5">
              <div>
                <City text={CITIES.POPRAD.NAME} />
                <City text={CITIES.PIESTANY.NAME} />
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center h-full pl-5">
              <div>
                <City text={CITIES.TRNAVA.NAME} />
                <City text={CITIES.HUMENNE.NAME} />
              </div>
            </div>
            <div className="col-span-1" />
          </div>
        </div>
        <div className="row-span-1" />
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