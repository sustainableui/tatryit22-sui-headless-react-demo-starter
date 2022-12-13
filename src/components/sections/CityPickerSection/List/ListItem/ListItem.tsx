import React from 'react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

interface CityPickerListItemProps {
  text: string;
  index: number;
  isHovered: boolean;
  onMouse: (isHovered: boolean, index: number) => void;
}

function ListItem({ text, index, isHovered, onMouse }: CityPickerListItemProps) {
  function handleMouse(isHovered: boolean) {
    return () => onMouse(isHovered, index);
  }

  return (
    <Link to="#">
      <div
        onMouseEnter={handleMouse(true)}
        onMouseLeave={handleMouse(false)}
        className={cns(
          { 'shadow-2xl-sheer': isHovered, 'shadow-xl-sheer': !isHovered },
          'transition-colors duration-500 ease-in-out inline-block sm:block xs:block w-full max-w-full p-1 mt-10 sm:mt-4 xs:mt-4 font-futura-medium text-blue text-4xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-2xl text-center'
        )}
        style={
          isHovered
            ? {
                backgroundImage:
                  'linear-gradient(to right, rgba(44,235,173, 1), rgba(46,102,255, 1))'
              }
            : {}
        }>
        <div
          className={`transition-colors duration-500 ease-in-out bg-white hover:text-green pl-10 pr-10 pt-8 pb-8 sm:pl-5 sm:pr-5 sm:pt-3 sm:pb-3 xs:pl-5 xs:pr-5 xs:pt-2 xs:pb-2`}>
          {text}
        </div>
      </div>
    </Link>
  );
}

export default ListItem;
