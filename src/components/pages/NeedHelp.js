import { ROUTES, getCityFromRoute, setDocumentTitleFromRoute } from '../../config/routes';
import React, {useEffect} from 'react';

import Arrow from '../common/navigation/Arrow';
import Button from '../common/Button';
import Section from '../common/section/Section';
import backgroundPath from '../../assets/images/backgrounds/pattern_more_elements.svg';
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
      <div className="flex flex-col justify-center items-center h-full -mt-14">
        <h2 className="font-futura-bold text-5xl">
          {getCityFromRoute(history.location.pathname)}
        </h2>

        <div className="text-center pt-14">
          <span className="font-futura-medium text-md text-gray-hover">
            objednávka cez tel. č.
          </span>
          <h1 className="font-futura-bold text-6xl text-blue">
            +421 911 000 000
          </h1>
        </div>

        <div className="text-center text-5xl font-futura-bold pt-14">
          <span className="pr-14">
            Po - Pia
          </span>
          <span className="">
            12:00 - 17:00
          </span>
        </div>

        <div className="text-center max-w-paragraph text-3xl font-rustico-regular pt-14">
          <p>
            Pri prebraní liekov alebo nákupu <span className="text-blue">majte ochranné rúško</span>
          </p>
          <p>
            <span className="text-green">(</span>Ideálne aj rukavice<span className="text-green">)</span>
          </p>
        </div>

        <div className="text-center pt-14">
          <span className="font-futura-medium text-md text-gray-hover">
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