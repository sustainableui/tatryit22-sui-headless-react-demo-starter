import Feature from './Feature';
import React from 'react';

const Features = () =>
  <div className="row-span-2">
    <div className="grid grid-cols-8 h-full font-futura-medium text-lg text-center">
      <div />
      <div className="col-span-2 pl-4 pr-4">
        <Feature>
          Služba zabezpečená dobrovoľníkmi označenými odznakmi
        </Feature>
        <Feature>
          Objednávka <span className="text-blue">deň dopredu</span>
        </Feature>
      </div>
      <div className="col-span-2 pl-4 pr-4">
        <Feature>
          Vyberieme <span className="text-blue uppercase">lieky</span> na základe receptu
        </Feature>
        <Feature>
          Zabezpečíme <span className="text-blue uppercase">nákup</span> základných potravín (max. 10 položiek)
        </Feature>
      </div>
      <div className="col-span-2 pl-4 pr-4">
        <Feature>
          <span className="text-blue">Prísne</span> hygienické opatrenia
        </Feature>
        <Feature>
          Platba až pri prebraní
        </Feature>
      </div>
      <div />
    </div>
  </div>;
  
export default Features;