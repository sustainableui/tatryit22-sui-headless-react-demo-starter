import BistrikMuchaProfileImagePath from '../../../../assets/images/people/bystrik_mucha.png';
import Logo from './Logo';
import Profile from '../common/profile/Profile';
import React from 'react';

const Graphic = () => 
  <div className="flex flex-col justify-end items-center h-full">
    <div>
      <Logo />
      <Profile
        imagePath={BistrikMuchaProfileImagePath}
        name="Bystrík Mucha"
        description="Zakladateľ OI Poďme sa rozprávať"
        className="md:block md:mx-auto sm:block sm:mx-auto xs:block xs:mx-auto"
      />
    </div>
  </div>;

export default Graphic;