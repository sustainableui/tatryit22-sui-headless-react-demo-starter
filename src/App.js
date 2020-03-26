import { Redirect, Route, Switch } from 'react-router-dom';

import AboutUsPage from './components/pages/about_us';
import CityPickerPage from './components/pages/CityPicker';
import Container from './components/Container';
import MainPage from './components/pages/main';
import NeedHelpPage from './components/pages/NeedHelp';
import { ROUTES } from './config/routes';
import React from 'react';
import WannaHelpPage from './components/pages/WannaHelp';

const App = () =>
  <Container>
    <Switch>
      <Route exact path={ROUTES.DOMOV}>
        <MainPage />
      </Route>
      <Route path={ROUTES.VYBER_MESTA}>
        <CityPickerPage />
      </Route>
      <Route path={ROUTES.MESTO}>
        <NeedHelpPage />
      </Route>
      <Route path={ROUTES.CHCEM_POMOCT}>
        <WannaHelpPage />
      </Route>
      <Route path={ROUTES.O_NAS}>
        <AboutUsPage />
      </Route>
      <Route path={ROUTES.NOT_FOUND}>
        <Redirect to={ROUTES.DOMOV} />
      </Route>
    </Switch>
  </Container>;

export default App;
