import React, { useState } from 'react';

import CovidChat from './components/CovidChat';
import Navigation from './components/navigation/Navigation';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  const [hiddenSidebar, setHiddenSidebar] = useState(true);

  return (
    <div>
      <Navigation
        onSidebarToggle={() => setHiddenSidebar(!hiddenSidebar)}
      />
      <Sidebar
        hidden={hiddenSidebar}
        onToggle={() => setHiddenSidebar(!hiddenSidebar)}
      />
      <CovidChat />
    </div>
  );
}

export default App;
