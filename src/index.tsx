import './index.css';
import './assets/css/main.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from 'react-router-dom';
import { SuiProvider } from '@sustainableui/sui-headless-react';
import { SuiDisplayModes } from '@sustainableui/sui-headless-react/src/base/types';
import App from './App';
import history from './history';
import Button from './components/elements/Button';
import Headline from './components/elements/Headline';

const container = document.getElementById('root');
const root = createRoot(container);

function LoaderComponent({ onLocalizationCancel }) {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <Headline text="Poloha sa načítava..." />
      <Button text="Zobraziť mierne UI" onClick={onLocalizationCancel} />
    </div>
  );
}

function SwitchComponent({ displayMode, onDisplayModeSelect }) {
  function handleDisplayModeSelect(displayMode: SuiDisplayModes) {
    return () => onDisplayModeSelect(displayMode);
  }

  return (
    <div className="flex justify-center">
      <Button
        text="Nízke"
        disabled={displayMode === SuiDisplayModes.Low}
        color="green"
        onClick={handleDisplayModeSelect(SuiDisplayModes.Low)}
      />
      <Button
        text="Mierne"
        disabled={displayMode === SuiDisplayModes.Moderate}
        onClick={handleDisplayModeSelect(SuiDisplayModes.Moderate)}
      />
      <Button
        text="Vysoké"
        disabled={displayMode === SuiDisplayModes.High}
        onClick={handleDisplayModeSelect(SuiDisplayModes.High)}
      />
    </div>
  );
}

root.render(
  <Router history={history}>
    <SuiProvider
      api={process.env.REACT_APP_CARBON_AWARE_API}
      LoaderComponent={LoaderComponent}
      SwitchComponent={SwitchComponent}>
      <App />
    </SuiProvider>
  </Router>
);
