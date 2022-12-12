import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import IndexPage from './pages';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
