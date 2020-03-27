import BistrikMuchaProfileImagePath from '../../../../assets/images/people/bystrik_mucha.png';
import Logo from './Logo';
import Profile from '../team/profile/Profile';
import React from 'react';

const Graphic = () => 
  <div className="flex flex-col justify-end items-center h-full">
    <div>
      <Logo />
      <Profile
        imagePath={BistrikMuchaProfileImagePath}
        name="Bistrík Mucha"
        description="Zakladateľ OI Poďme sa rozprávať"
      />
    </div>
  </div>;

export default Graphic;