import Logo from './Logo';
import Menu from './Menu';
import React from 'react';

const Header = () =>
  <div className="absolute w-screen bg-blue h-32">
    <div className="grid grid-cols-5 h-full">
      <div className="col-span-1">
        <Logo />
      </div>
      <div className="col-span-3">
        <Menu />
      </div>
    </div>
  </div>;

export default Header;