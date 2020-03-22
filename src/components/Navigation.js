import { Link } from 'react-router-dom';
import React from 'react';
import { ReactComponent as SVGElementsBlackLogo } from '../assets/images/logo/black_elements.svg';
import { ReactComponent as SVGMenuIcon } from '../assets/icons/menu.svg';

const Navigation = () =>
  <nav className="absolute w-full grid grid-cols-9 bg-white shadow-xl h-24 text-lg font-rustico text-center">
    <div className="col-span-2 flex flex-columns justify-start pl-10">
      <SVGElementsBlackLogo className="w-20"/>
    </div>
    <div>
      <Link to="#" className="leading-24 align-middle focus:text-blue text-black hover:text-gray-hover">
        O službe
      </Link>
    </div>
    <div className="pt-9">
      <Link to="#" className="leading-24 align-middle focus:text-blue text-black hover:text-gray-hover">
        PostuP
      </Link>
    </div>
    <Link to="#">
      <button className="focus:outline-none h-full w-full bg-green hover:bg-transparent text-black hover:text-green">
        <span className="inline-block max-w-3/4 break-normal">Potrebujem Pomoc</span>
      </button>
    </Link>
    <Link to="#">
      <button className="focus:outline-none h-full w-full bg-blue hover:bg-transparent text-white hover:text-blue">
        <span className="inline-block max-w-1/2 break-normal">Chcem Pomôcť</span>
      </button>
    </Link>
    <div className="pt-9">
      <Link to="#" className="leading-24 align-middle focus:text-blue text-black hover:text-gray-hover">
        Kontakt
      </Link>
    </div>
    <div className="col-span-2 flex flex-columns justify-end pr-10">
      <SVGMenuIcon className="w-8" />
    </div>
  </nav>;

export default Navigation;