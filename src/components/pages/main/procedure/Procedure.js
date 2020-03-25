import { Link } from 'react-router-dom';
import React from 'react';
import Step from './Step';

const Procedure = () =>
  <div className="grid grid-rows-5 min-h-full">
    <div className="row-span-4 sm:-mt-6 xs:-mt-6">
      <div className="grid grid-cols-10 h-full">
        <div className="col-span-1"/>
        <div className="col-span-4 sm:col-span-8 xs:col-span-8 flex flex-col justify-start Steps-center">
          <ol className="font-futura-medium text-lg text-left">
            <Step number={1}>
              Kliknite na tlačidlo <Link className="text-green underline hover:text-black">Pomôžte mi</Link> a kontaktujte nás na <span className="text-blue">telefónne číslo</span> príslušné k vášmu mestu, alebo nám pošlite <span className="text-blue">elektronický formulár</span>
            </Step>
            <Step number={2}>
              Definujte produkty, ktoré potrebujete
            </Step>
            <Step number={3}>
              Z príslušného tel. č. dostanete <span className="text-blue">telefonicky</span> alebo <span className="text-blue">SMS správou</span> informáciu a dobrovoľníkovi (<span className="text-blue">meno a priezvisko</span>), Ktorý nákup či lieky doručí
            </Step>
            <Step number={4}>
              Po jeho príchode sa Vám preukáže <span className="text-blue">občianskym preukazom</span> (Ak náhodou zabudne, pokojne ho k  preukázaním sa vyzvite)
            </Step>
            <Step number={5}>
              Naši dobrovoľníci budú mať vždy na viditeľnom mieste pripnutý <span className="text-blue">odznak <span className="uppercase">poďme si pomáhať</span></span>!
            </Step>
            <Step number={6} className="md:hidden lg:hidden xl:hidden">
              V prípade Vyzdvihnutia liekov poskytnite dobrovoľníkovi <span className="text-blue capitalize">kartičku poistenca</span> a <span className="text-blue capitalize">Recept</span> na daný liek
            </Step>
            <Step number={7} className="md:hidden lg:hidden xl:hidden">
              Nakúpime za vás / Vyzdvihneme lieky
            </Step>
            <Step number={8} className="md:hidden lg:hidden xl:hidden">
              Odovzdáme vám nákup / lieky
            </Step>
            <Step number={9} className="md:hidden lg:hidden xl:hidden">
              Nákup / lieky si preberiete <span className="text-blue">pred</span> vchodom do domu alebo bytovky
            </Step>
            <Step number={10} className="md:hidden lg:hidden xl:hidden">
              Uhradíte platbu za nákup / lieky (vždy vám poskytneme <span className="text-blue">nákupný bloček</span>)
            </Step>
            <Step number={11} className="md:hidden lg:hidden xl:hidden">
              Chráňte sa a budte zodpovedný
            </Step>
          </ol>
        </div>
        <div className="col-span-4 flex flex-col justify-start Steps-center sm:hidden xs:hidden">
          <ol className="font-futura-medium text-lg text-left">
            <Step number={6}>
              V prípade Vyzdvihnutia liekov poskytnite dobrovoľníkovi <span className="text-blue capitalize">kartičku poistenca</span> a <span className="text-blue capitalize">Recept</span> na daný liek
          </Step>
            <Step number={7}>
              Nakúpime za vás / Vyzdvihneme lieky
          </Step>
            <Step number={8}>
              Odovzdáme vám nákup / lieky
          </Step>
            <Step number={9}>
              Nákup / lieky si preberiete <span className="text-blue">pred</span> vchodom do domu alebo bytovky
          </Step>
            <Step number={10}>
              Uhradíte platbu za nákup / lieky (vždy vám poskytneme <span className="text-blue">nákupný bloček</span>)
          </Step>
            <Step number={11}>
              Chráňte sa a budte zodpovedný
          </Step>
          </ol>
        </div>
        <div className="col-span-1" />
      </div>
    </div>
    <div />
  </div>;

export default Procedure;