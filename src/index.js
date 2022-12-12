import "./index.css";
import "./assets/css/main.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "react-router-dom";
import { SuiProvider } from '@sustainableui/sui-headless-react';
import App from "./App";
import history from "./history";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router history={history}>
    <SuiProvider api="/api" LoaderComponent={() => null} SwitchComponent={() => null}>
      <App />
    </SuiProvider>
  </Router>
);
