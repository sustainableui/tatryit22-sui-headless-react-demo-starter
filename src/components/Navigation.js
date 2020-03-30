import Menu from './menu/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import Sidebar from './sidebar/Sidebar';

const Navigation = props => {
  return (
    <React.Fragment>
      <Menu onSidebarToggle={props.onSidebarToggle} />
      <Sidebar
        hidden={props.hiddenSidebar}
        onToggle={props.onSidebarToggle}
      />
    </React.Fragment>
  );
};

Navigation.propTypes = {
  hiddenSidebar: PropTypes.bool.isRequired,
  onSidebarToggle: PropTypes.func.isRequired,
};

export default Navigation;