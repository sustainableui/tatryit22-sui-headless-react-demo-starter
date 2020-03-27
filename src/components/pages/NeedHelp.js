import React, {useEffect} from 'react';
import { getCityFromRoute, setDocumentTitleFromRoute } from '../../utils/routesUtils';

import Arrow from '../common/navigation/Arrow';
import Button from '../common/Button';
import { ROUTES } from '../../config/routes';
import Section from '../common/section/Section';
import backgroundPath from '../../assets/images/backgrounds/pattern_elements.svg';
import history from '../../history';

const ContactPage = () => {
  useEffect(() => {
    setDocumentTitleFromRoute(history.location.pathname);
  }, []);

  return (
    <Section
      backgroundPath={backgroundPath}
      title="Potrebujem Pomoc"
    >
      <div className="flex flex-col justify-center items-center h-full -mt-14 md:-mt-18 sm:-mt-24 xs:-mt-24">
        <h2 className="font-futura-bold text-5xl md:text-4xl sm:text-3xl xs:text-3xl">
          {getCityFromRoute(history.location.pathname)}
        </h2>

        <div className="text-center pt-14 md:pt-10 sm:pt-6 xs:pt-6">
          <span className="font-futura-medium text-md md:text-sm sm:text-sm xs:text-sm text-gray-hover">
            objednávka cez tel. č.
          </span>
          <h1 className="font-futura-bold text-6xl md:text-5xl sm:text-4xl xs:text-4xl text-blue">
            +421 911 000 000
          </h1>
        </div>

        <div className="text-center text-5xl md:text-4xl sm:text-3xl xs:text-3xl font-futura-bold pt-14 md:pt-10 sm:pt-6 xs:pt-6">
          <span className="pr-14 md:pr-10 sm:pr-8 xs:pr-8">
            Po - Pia
          </span>
          <span>
            12:00 - 17:00
          </span>
        </div>

        <div className="text-center max-w-paragraph sm:max-w-sm-paragraph xs:max-w-xs-paragraph text-3xl md:text-2xl sm:text-xl xs:text-xl font-rustico-regular pt-14 md:pt-10 sm:pt-6 xs:pt-6">
          <p>
            Pri prebraní liekov alebo nákupu <span className="text-blue">majte ochranné rúško</span>
          </p>
          <p>
            <span className="text-green">(</span>Ideálne aj rukavice<span className="text-green">)</span>
          </p>
        </div>

        <div className="text-center pt-14 md:pt-10 sm:pt-6 xs:pt-6">
          <span className="font-futura-medium text-md md:text-sm sm:text-sm xs:text-sm text-gray-hover">
            objednávka cez formulár
          </span>
          <div className="pt-3">
            <Button
              variant="contained"
              color="green"
              text="Formulár"
              to={ROUTES.VYBERTE_VASE_MESTO}
              bigger
            />
          </div>
        </div>
      </div>
      <Arrow back color="green" to={ROUTES.VYBERTE_VASE_MESTO} />
    </Section>
  );
}

export default ContactPage;