import ExitButton from './ExitButton';
import Items from './Items';
import Overlay from './Overlay';
import PropTypes from 'prop-types';
import React from 'react';

const Sidebar = props =>
  <div className={props.hidden ? 'hidden' : ''}>
    <Overlay onClick={props.onToggle}/>
    <div className="absolute right-0 top-0 w-1/5 min-w-sidebar sm:w-screen xs:w-screen bg-white z-50 h-full">
      <ExitButton onClick={props.onToggle}/>
      <Items onClick={props.onToggle}/>
    </div>
  </div>;

Sidebar.propTypes = {
  hidden: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}

export default Sidebar;