import React from 'react';
import Section from '../../common/section/Section';
import backgroundPath from '../../../assets/images/backgrounds/pattern_elements_blue.svg';

const Volunteer = () =>
  <Section
    id="chcem-pomoct"
    backgroundPath={backgroundPath}
  >
    <div className="grid grid-rows-6 h-full overflow-hidden">
      <div className="row-span-2" />
      <div className="flex flex-col justify-center items-center text-6xl font-rustico-regular text-white">
        <h1 className="-mb-1">Chcem</h1>
        <h1 className="-mt-1">Pomôcť</h1>
      </div>
      <div className="flex flex-col justify-center items-center text-2xl font-futura-medium">
        <p className="max-w-sm-paragraph capitalize text-center text-white">
          Ak si študent alebo jednoducho hocikto kto chce pomôcť dobrej veci, vyplň formulár pre dobrovoľníka a pridaj sa k nám!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="bg-green text-black hover:bg-green-hover text-lg font-futura-bold py-2 px-8 inline-flex items-center">
          Viac
        </button>
      </div>
      <div />
    </div>
  </Section>;

export default Volunteer;