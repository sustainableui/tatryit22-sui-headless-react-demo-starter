import Header from './components/header/Header';
import React from 'react';
import SlovakiaMap from './components/map/Slovakia';
import Tab from './components/tabs/Tab';

const App = () =>
  <div className="overflow-hidden">
    <Header />
    <Tab>
      <SlovakiaMap />
    </Tab>
    <Tab>

    </Tab>
    <Tab>
    </Tab>
  </div>;

export default App;
