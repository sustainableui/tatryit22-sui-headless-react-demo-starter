import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Container from './components/Container';
import CovidChat from './components/CovidChat';
import MainPage from './components/pages/main';
import Navigation from './components/navigation/Navigation';
import Sidebar from './components/sidebar/Sidebar';
import { cities } from './config/cities';

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
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/mesta">
          <MainPage />
        </Route>
        <Route path={[...cities.map(city => city.route)]}>
          <MainPage />
        </Route>
        <Route path="/povinnosti-dobrovolnika">
          <MainPage />
        </Route>
        <Route path="/o-nas">
          <MainPage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <CovidChat visible={hiddenSidebar}/>
    </Container>
  );
}

export default App;
