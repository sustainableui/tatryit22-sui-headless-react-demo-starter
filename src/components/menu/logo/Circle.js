import { Link } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';
import React from 'react';

const Circle = () =>
  <svg className="xl:hidden lg:hidden md:hidden absolute top-0 left-0 bg-transparent">
    <defs>
      
      <filter id="logoshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
        <feOffset dx="2" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.20" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <Link to={ROUTES.DOMOV}>
      <circle
        filter="url(#logoshadow)"
        cx="20"
        cy="20"
        r="60"
        className="fill-white"
      />
    </Link>
  </svg>;

export default Circle;