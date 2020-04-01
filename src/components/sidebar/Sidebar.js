import ExitButton from './ExitButton';
import Menu from '../menu/Menu';
import PropTypes from 'prop-types';
import React from 'react';
import { TRANSFORM } from '../../config/transitions';

const Sidebar = props =>
  <React.Fragment>
    <div className={`${TRANSFORM} fixed right-0 top-0 bg-white z-50 w-1/5 min-w-sidebar sm:w-screen sm:min-w-full xs:w-screen xs:min-w-full h-full transform ${props.hidden ? 'translate-x-full' : 'translate-x-0 shadow-2xl-sheer'}`}>
      <ExitButton onClick={props.onToggle}/>
      <Menu inSidebar onSidebarToggle={props.onToggle} />
    </div>
  </React.Fragment>;

Sidebar.propTypes = {
  hidden: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default Sidebar;