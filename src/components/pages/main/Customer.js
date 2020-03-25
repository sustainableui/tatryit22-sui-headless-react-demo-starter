import React from 'react';
import Section from '../../common/section/Section';
import backgroundPath from '../../../assets/images/backgrounds/pattern_elements_green.svg';

const Customer = () =>
  <Section
    id="potrebujem-pomoc"
    backgroundPath={backgroundPath}
  >
    <div className="grid grid-rows-6 h-full overflow-hidden">
      <div className="row-span-2"/>
      <div className="flex flex-col justify-center items-center text-6xl font-rustico-regular">
        <h1 className="-mb-1">Potrebujem</h1>
        <h1 className="-mt-1">Pomoc</h1>
      </div>
      <div className="flex flex-col justify-center items-center text-2xl font-futura-medium">
        <p className="max-w-sm-paragraph capitalize text-center">
          Ak ste starší, zdravotne postihnutý alebo človek v núdzi, radi vám pomôžeme s vašim nákupom alebo donáškou liekov. Stačí nás kontaktovať.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="bg-blue text-white hover:bg-blue-hover text-lg font-futura-bold py-2 px-8 inline-flex items-center">
          Pomôžte mi
        </button>
      </div>
      <div />
    </div>
  </Section>;

export default Customer;