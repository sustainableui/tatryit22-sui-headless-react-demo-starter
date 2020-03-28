import React, { useState } from 'react';

import CovidChat from './CovidChat';
import Menu from './common/menu/Menu';
import PropTypes from 'prop-types';
import Sidebar from './sidebar/Sidebar';

const Container = props => {
  const [hiddenSidebar, setHiddenSidebar] = useState(true);
  
  return (
    <div className="overflow-hidden">
      <Menu onSidebarToggle={() => setHiddenSidebar(!hiddenSidebar)} />
      <Sidebar
        hidden={hiddenSidebar}
        onToggle={() => setHiddenSidebar(!hiddenSidebar)}
      />
      {props.children}
      <CovidChat visible={hiddenSidebar} />
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
}

export default Container;