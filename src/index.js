import './index.css';
import './assets/css/main.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from 'react-router-dom';
import App from './App';
import history from './history';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router history={history}>
    <App />
  </Router>
);
