import { ROUTES, SECTION_IDS } from '../../../config/routes';
import React, { useEffect } from 'react';

import General from './General';
import Lead from './Lead';
import Section from '../../common/section/Section';
import Team from './team/Team';
import backgroundPath from '../../../assets/images/backgrounds/pattern_more_elements.svg';
import { setDocumentTitleFromRoute } from '../../../utils/routesUtils';

const AboutUs = () => {
  useEffect(() => {
    setDocumentTitleFromRoute(ROUTES.O_NAS);
  }, []);

  const GeneralSection = (
    <Section
      id={SECTION_IDS.O_NAS}
      backgroundPath={backgroundPath}
      title="O nás"
    >
      <General />
    </Section>
  );

  const TeamSection = (
    <Section
      id={SECTION_IDS.TEAM}
      backgroundPath={backgroundPath}
      uniqueLayout
    >
      <Team />
    </Section>
  );

  const LeadSection = (
    <Section
      id={SECTION_IDS.PODME_SA_ROZPRAVAT}
      backgroundPath={backgroundPath}
      uniqueLayout
    >
      <Lead />
    </Section>
  );

  return (
    <React.Fragment>
      {GeneralSection}
      {TeamSection}
      {LeadSection}
    </React.Fragment>
  );
};

export default AboutUs;