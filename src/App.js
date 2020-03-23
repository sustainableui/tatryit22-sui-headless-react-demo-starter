import React, { useState } from 'react';

import Container from './components/Container';
import CovidChat from './components/CovidChat';
import Navigation from './components/navigation/Navigation';
import Sidebar from './components/sidebar/Sidebar';
import Tab from './components/common/Tab';

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
      <Tab />
      <CovidChat visible={hiddenSidebar}/>
    </Container>
  );
}

export default App;
