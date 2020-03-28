import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AboutUsPage from './components/pages/about_us';
import CityPickerPage from './components/pages/city_picker/CityPicker';
import Container from './components/Container';
import MainPage from './components/pages/main';
import NeedHelpPage from './components/pages/need_help/NeedHelp';
import { ROUTES } from './config/routes';
import WannaHelpPage from './components/pages/wanna_help/WannaHelp';
import { configureAnchors } from 'react-update-url-on-scroll'
import history from './history';
import { setDocumentTitleFromRoute } from './utils/routesUtils';

const App = () => {
  useEffect(() => {
    configureAnchors({
      keepLastAnchorHash: true,
      offset: 70,
      scrollBehaviour: 'instant',
      onSectionEnter: newState => {
        const newRoute = `${history.location.pathname}#${newState.hash}`;
        history.replace(newRoute);
        setDocumentTitleFromRoute(newRoute);
      },
    })
  }, []);

  return (
    <Container>
      <Switch>
        <Route exact path={ROUTES.DOMOV}>
          <MainPage />
        </Route>
        <Route path={ROUTES.VYBERTE_VASE_MESTO}>
          <CityPickerPage />
        </Route>
        <Route path={ROUTES.POTREBUJEM_POMOC}>
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
    </Container>
  );
}

export default App;
