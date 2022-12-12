import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import CityPicker from "./components/CityPicker";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={CityPicker} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
