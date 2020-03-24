import React from 'react';
import headlineUnderlinePath from '../../../../assets/images/headline_underline.svg';

const Headline = () =>
  <div className="flex flex-col justify-center items-center">
    <p className="font-rustico-regular xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl break-words text-center capitalize xl:-mb-6 xl:mt-6 lg:-mb-5 lg:mt-5 md:-mb-4 md:mt-4 sm:-mb-3 sm:mt-3 xs:-mb-2 xs:mt-2">
      donáška <span className="text-green">potravín</span> a <span className="text-green">liekov</span>
    </p>
    <p className="relative font-rustico-regular xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl break-words text-center capitalize">
      pre <span className="text-blue">seniorov</span> a <span className="text-blue">chorých</span> <span style={{ backgroundImage: `url(${headlineUnderlinePath})` }} className="bg-no-repeat xs:bg-fit-xs-ul xs:bg-bottom-xs-ul sm:bg-fit-sm-ul sm:bg-bottom-sm-ul md:bg-fit-md-ul md:bg-bottom-md-ul lg:bg-fit-lg-ul lg:bg-bottom-lg-ul xl:bg-fit-xl-ul xl:bg-bottom-xl-ul xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">zdarma</span>
    </p>
  </div>;

export default Headline;