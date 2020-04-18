import Arrow from '../../common/Arrow';
import Logo from './Logo';
import { ROUTES } from '../../../../config/routes';
import React from 'react';
import Text from './Text';

const General = () =>
  <React.Fragment>
    <div className="grid grid-rows-2 lg:grid-rows-3 md:grid-rows-3 sm:grid-rows-4 xs:grid-rows-4">
      <div className="row-span-1">
        <Logo />
      </div>
      <div className="row-span-1 lg:row-span-2 md:row-span-2 sm:row-span-3 xs:row-span-3">
        <Text />
      </div>
    </div>
    <Arrow
      to={ROUTES.O_NAS_HASH}
      back
      color="blue"
    />
    <Arrow
      to={ROUTES.TEAM_HASH}
      scroll
      withDivider
      color="blue"
    />
  </React.Fragment>;

export default General;