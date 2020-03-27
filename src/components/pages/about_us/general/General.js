import { ROUTES, SECTION_IDS } from '../../../../config/routes';

import Arrow from '../../../common/navigation/Arrow';
import Logo from './Logo';
import React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';
import Text from './Text';

const General = () =>
  <ScrollableSection hash={SECTION_IDS.O_NAS}>
    <div className="h-full">
      <div className="grid grid-rows-2 h-full overflow-hidden">
        <div className="row-span-1">
          <Logo />
        </div>
        <div className="row-span-1">
          <Text />
        </div>
      </div>
      <Arrow
        to={ROUTES.O_NAS_HASH}
        back
        color="blue"
      />
      <Arrow
        to={ROUTES.TEAM}
        scroll
        color="blue"
      />
    </div>
  </ScrollableSection>;

export default General;