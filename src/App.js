import CovidChat from './components/common/CovidChat';
import Header from './components/header/Header';
import Map from './components/map/Map';
import React from 'react';
import Tab from './components/tabs/Tab';

const App = () =>
  <div className="overflow-hidden">
    <Header />
    <Tab>
      <Map />
    </Tab>
    <CovidChat />
  </div>;

export default App;
