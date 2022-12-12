import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AboutUsPage from './components/pages/about_us';
import CityPickerPage from './components/pages/city_picker/CityPicker';
import Container from './components/Container';
import MainPage from './components/pages/main';
import NeedHelpPage from './components/pages/need_help/NeedHelp';
import { ROUTES } from './config/routes';
import WannaHelpPage from './components/pages/wanna_help/WannaHelp';

const App = () => {
  return (
    <Container>
      <Switch>
        <Route
          exact
          path={ROUTES.DOMOV}
          component={MainPage}
        />
        <Route
          path={ROUTES.VYBERTE_VASE_MESTO}
          component={CityPickerPage}
        />
        <Route
          path={ROUTES.POTREBUJEM_POMOC}
          component={NeedHelpPage}
        />
        <Route
          path={ROUTES.CHCEM_POMOCT}
          component={WannaHelpPage}
        />
        <Route
          path={ROUTES.O_NAS}
          component={AboutUsPage}
        />
        <Redirect
          from={ROUTES.VYBERTE_VASE_MESTO_OLD}
          to={ROUTES.VYBERTE_VASE_MESTO}
        />,
        <Route
          path={ROUTES.POTREBUJEM_POMOC_OLD}
          render={(routeProps) => (
            <Redirect
              to={`${ROUTES.POTREBUJEM_POMOC_BASE}${routeProps.location.pathname}`}
            />
          )}
        />
        <Redirect
          from={ROUTES.POTREBUJEM_POMOC_BASE}
          to={ROUTES.VYBERTE_VASE_MESTO}
        />,
        <Route path={ROUTES.NOT_FOUND}>
          <Redirect to={ROUTES.DOMOV}/>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
