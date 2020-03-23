import { Link } from 'react-router-dom';
import React from 'react';
import { ReactComponent as SVGBlackLogo } from '../assets/images/logo/black.svg';
import { ReactComponent as SVGElementsBlackLogo } from '../assets/images/logo/black_elements.svg';
import { ReactComponent as SVGMenuIcon } from '../assets/icons/menu.svg';

const Navigation = () =>
  <nav className="absolute w-full grid grid-cols-9 bg-white shadow-xl h-24 text-lg font-rustico text-center xs:grid-cols-2 xs:bg-transparent xs:shadow-none xs:h-20 sm:grid-cols-2 sm:bg-transparent sm:shadow-none sm:h-20 md:h-16 md:text-sm lg:h-20 lg:text-base">
    <div className="col-span-2 flex flex-columns justify-start sm:col-span-1 pl-10 lg:pl-8 md:pl-6 sm:pl-8 xs:pl-8 xs:col-span-1">
      <SVGElementsBlackLogo className="w-20 lg:w-16 md:w-12 sm:hidden xs:hidden" />
      <SVGBlackLogo className="w-20 xl:hidden lg:hidden md:hidden sm:w-16 xs:w-16"/>
    </div>
    <Link to="#" className="sm:hidden xs:hidden leading-24 lg:leading-20 md:leading-16 align-middle focus:text-blue text-black hover:text-gray-hover">
      O službe
    </Link>
    <Link to="#" className="sm:hidden xs:hidden leading-24 lg:leading-20 md:leading-16 align-middle focus:text-blue text-black hover:text-gray-hover">
      PostuP
    </Link>
    <Link to="#" className="sm:hidden xs:hidden">
      <button className="focus:outline-none h-full w-full bg-green hover:bg-transparent text-black hover:text-green">
        <span className="inline-block max-w-3/4 break-normal">Potrebujem Pomoc</span>
      </button>
    </Link>
    <Link to="#" className="sm:hidden xs:hidden">
      <button className="focus:outline-none h-full w-full bg-blue hover:bg-transparent text-white hover:text-blue">
        <span className="inline-block max-w-1/2 break-normal">Chcem Pomôcť</span>
      </button>
    </Link>
    <Link to="#" className="sm:hidden xs:hidden leading-24 lg:leading-20 md:leading-16 align-middle focus:text-blue text-black hover:text-gray-hover">
      Kontakt
    </Link>
    <div className="col-span-2 sm:col-span-1 xs:col-span-1 flex flex-columns justify-end pr-10 lg:pr-8 md:pr-6 sm:pr-8 xs:pr-8">
      <SVGMenuIcon className="w-8 lg:w-6 md:w-4 sm:w-6 xs:w-6" />
    </div>
  </nav>;

export default Navigation;