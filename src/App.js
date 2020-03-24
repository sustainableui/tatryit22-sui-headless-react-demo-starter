import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Container from './components/Container';
import CovidChat from './components/CovidChat';
import MainPage from './components/pages/main';
import Navigation from './components/navigation/Navigation';
import { ROUTES } from './config/routes';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  const [hiddenSidebar, setHiddenSidebar] = useState(true);

  return (
    <Container>
      <Navigation
        onSidebarToggle={() => setHiddenSidebar(!hiddenSidebar)}
      />
      <Sidebar
        hidden={hiddenSidebar}
        onToggle={() => setHiddenSidebar(!hiddenSidebar)}
      />
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
      <CovidChat visible={hiddenSidebar}/>
    </Container>
  );
}

export default App;
