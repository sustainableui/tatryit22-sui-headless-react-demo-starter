import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import CityPickerPage from './components/pages/city_picker/CityPicker';
import Container from './components/Container';
import { ROUTES } from './config/routes';

const App = () => {
  return (
    <Container>
      <Switch>
        <Route
          exact
          path={ROUTES.DOMOV}
          component={CityPickerPage}
        />
        <Route path={ROUTES.NOT_FOUND}>
          <Redirect to={ROUTES.DOMOV}/>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
