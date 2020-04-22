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
  <div className="grid xl:grid-cols-10 lg:grid-cols-10 md:grid-cols-6 sm:grid-cols-6 xs:grid-cols-6 font-futura-medium text-lg text-center xs:mt-20 sm:mt-20 md:mt-16 lg:mt-20 xl:mt-24">
    <div className="xl:col-span-2 lg:col-span-2 md:hidden sm:hidden xs:hidden" />
    <div className="col-span-2 md:col-span-3 sm:col-span-6 xs:col-span-6 ml-4 mr-4">
      {features.map((feature, i) => feature.classNames[0] && (
        <Feature key={`aboutservice-feature-${i}-col-1`} className={feature.classNames[0]}>
          {feature.elm}
        </Feature>
      ))}
    </div>
    <div className="col-span-2 md:col-span-3 sm:hidden xs:hidden ml-4 mr-4">
      {features.map((feature, i) => feature.classNames[1] && (
        <Feature key={`aboutservice-feature-${i}-col-2`} className={feature.classNames[1]}>
          {feature.elm}
        </Feature>
      ))}
    </div>
    <div className="col-span-2 md:hidden sm:hidden xs:hidden ml-4 mr-4">
      {features.map((feature, i) => feature.classNames[2] && (
        <Feature key={`aboutservice-feature-${i}-col-3`} className={feature.classNames[2]}>
          {feature.elm}
        </Feature>
      ))}
    </div>
    <div className="xl:col-span-2 lg:col-span-2 md:hidden sm:hidden xs:hidden" />
  </div>;
  
export default Features;