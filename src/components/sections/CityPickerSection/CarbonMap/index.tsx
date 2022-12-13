import React from 'react';
import { withSui } from '@sustainableui/sui-headless-react';

const LowCarbonMap = () => null;

const ModerateCarbonMap = React.lazy(() => import('./ModerateCarbonMap'));

const HighCarbonMap = React.lazy(() => import('./HighCarbonMap'));

export default withSui([LowCarbonMap, ModerateCarbonMap, HighCarbonMap]);
