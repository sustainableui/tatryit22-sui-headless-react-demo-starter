import { Link } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';
import React from 'react';

const Circle = () =>
  <svg className="xl:hidden lg:hidden md:hidden absolute top-0 left-0 bg-transparent">
    <defs>
      <filter id="logoshadow" x="-40%" y="-40%" width="180%" height="180%" filterUnits="userSpaceOnUse">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="5" dy="5" result="offsetblur" />
        <feOffset dx="-5" dy="-5" result="offsetblur" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
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