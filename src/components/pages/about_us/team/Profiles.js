import Profile from './profile/Profile';
import React from 'react';
import SamuelMuchaProfileImagePath from '../../../../assets/images/people/samuel_mucha.png';
import SamuelPitonakProfileImagePath from '../../../../assets/images/people/samuel_pitonak.png';
import TimotejMuchaProfileImagePath from '../../../../assets/images/people/timotej_mucha.png';

const Profiles = () => 
  <div className="flex flex-col justify-center items-center h-full">
    <div>
      <Profile
        imagePath={SamuelPitonakProfileImagePath}
        name="Samuel Pitoňák"
        description="IT Študent"
      />
      <Profile
        imagePath={TimotejMuchaProfileImagePath}
        name="Timotej Mucha"
        description="Zakladateľ iniciatívy, Študent LF"
      />
      <Profile
        imagePath={SamuelMuchaProfileImagePath}
        name="Samuel Mucha"
        description="Študent, Graphic Designer"
      />
    </div>
  </div>;

export default Profiles;