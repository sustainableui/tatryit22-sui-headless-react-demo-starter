import React, { ReactElement } from 'react';

import backgroundPath from '../../../assets/images/backgrounds/pattern_elements.svg';

interface SectionProps {
  title: string;
  children: ReactElement[];
}

function Section({ title, children }: SectionProps) {
  return (
    <div
      className="relative bg-scroll bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundPath})` }}>
      <div className="grid grid-rows-8">
        <div className="row-span-2 sm:row-span-1 xs:row-span-1">
          <div className="text-center break-normal p-16 md:pt-32 lg:pt-36 xl:pt-40">
            <h1 className="font-rustico-regular text-5xl sm:text-4xl xs:text-4xl">{title}</h1>
          </div>
        </div>
        <div
          className={
            'row-span-6 sm:row-span-7 xs:row-span-7 xs:pl-7 xs:pr-7 sm:pl-20 sm:pr-20 md:pl-16 md:pr-16 lg:pl-20 lg:pr-20 xl:pl-24 xl:pr-24 xs:pb-20 sm:pb-20 md:pb-32 lg:pb-36 xl:pb-40'
          }>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Section;
