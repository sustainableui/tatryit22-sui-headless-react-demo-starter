import Feature from './Feature';
import React from 'react';

const features = [{
    elm: 
      <span>
        Služba zabezpečená dobrovoľníkmi označenými odznakmi
      </span>,
    classNames: ["block", null, null]
  }, {
    elm:
      <span>
        Vyberieme <span className="text-blue uppercase">lieky</span> na základe receptu
      </span>,
    classNames: ["xl:hidden lg:hidden", "md:hidden sm:hidden xs:hidden", null]
  }, {
    elm:
      <span>
        <span className="text-blue">Prísne</span> hygienické opatrenia
      </span>,
    classNames: ["md:hidden lg:hidden xl:hidden", "hidden md:block", "md:hidden sm:hidden xs:hidden"]
  }, {
    elm:
      <span>
        Objednávka <span className="text-blue">deň dopredu</span>
      </span>,
    classNames: ["md:hidden", "hidden md:block", null]
  }, {
  elm:
      <span>
        Zabezpečíme <span className="text-blue uppercase">nákup</span> základných potravín (max. 10 položiek)
      </span>,
    classNames: ["xl:hidden lg:hidden", "md:hidden sm:hidden xs:hidden", null]
  }, {
  elm:
      <span>
        Platba až pri prebraní
      </span>,
    classNames: ["md:hidden lg:hidden xl:hidden", "hidden md:block", "md:hidden sm:hidden xs:hidden"]
  }];

const Features = () =>
  <div className="grid grid-cols-8 font-futura-medium text-lg text-center pt-10">
    <div />
    <div className="col-span-2 md:col-span-3 sm:col-span-6 xs:col-span-6 pl-4 pr-4">
      {features.map((feature, i) => feature.classNames[0] && (
        <Feature key={i} className={feature.classNames[0]}>
          {feature.elm}
        </Feature>
      ))}
    </div>
    <div className="col-span-2 md:col-span-3 sm:hidden xs:hidden pl-4 pr-4">
      {features.map((feature, i) => feature.classNames[1] && (
        <Feature key={i} className={feature.classNames[1]}>
          {feature.elm}
        </Feature>
      ))}
    </div>
    <div className="md:hidden sm:hidden xs:hidden col-span-2 pl-4 pr-4">
      {features.map((feature, i) => feature.classNames[2] && (
        <Feature key={i} className={feature.classNames[2]}>
          {feature.elm}
        </Feature>
      ))}
    </div>
    <div />
  </div>;
  
export default Features;