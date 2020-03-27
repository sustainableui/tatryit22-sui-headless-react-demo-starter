import Arrow from '../../../common/navigation/Arrow';
import Logo from './Logo';
import { ROUTES } from '../../../../config/routes';
import React from 'react';
import Text from './Text';

const General = () =>
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
  </div>;

export default General;