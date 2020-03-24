import { Redirect, Route, Switch } from 'react-router-dom';

import Container from './components/Container';
import MainPage from './components/pages/main';
import { ROUTES } from './config/routes';
import React from 'react';

const App = () =>
  <Container>
    <Switch>
      <Route exact path={ROUTES.DOMOV}>
        <MainPage />
      </Route>
      <Route path={ROUTES.MESTA}>
        <MainPage />
      </Route>
      <Route path={ROUTES.MESTO}>
        <MainPage />
      </Route>
      <Route path={ROUTES.POVINNOSTI_DOBROVOLNIKA}>
        <MainPage />
      </Route>
      <Route path={ROUTES.O_NAS}>
        <MainPage />
      </Route>
      <Route path={ROUTES.NOT_FOUND}>
        <Redirect to={ROUTES.DOMOV} />
      </Route>
    </Switch>
  </Container>;

export default App;
