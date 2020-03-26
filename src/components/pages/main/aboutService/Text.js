import React from 'react';

const TextComponent = () =>
  <div className="flex flex-col justify-end md:justify-start items-center font-futura-medium text-lg text-center w-full h-full pb-10 pr-10 pl-10">
    <p className="max-w-paragraph">
      Chceme podať pomocnú ruku tým, ktorí to najviac potrebujú a sú najviac ohrození vírusom Covid-19. Túto službu prinášame pre všetkých starších, zdravotne znevýhodnených a ďalších ľudí v núdzi. Za prísnych hygienických opatrení vám nakúpime alebo prinesieme lieky, až k vám domov. Sme študenti vysokých škôl s podporou občianskej iniciatívy Poďme sa rozprávať.
    </p>
    <p className="max-w-paragraph">
      <span className="text-blue">Služba je zadarmo</span>, platíte len za váš nákup a lieky. Veríme, že vám našou iniciatívou pomôžeme.
    </p>
  </div>;
  
export default TextComponent;