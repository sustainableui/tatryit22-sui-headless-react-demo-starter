import Logo from './Logo';
import React from 'react';
import { SUPPORTERS } from '../../../../../config/supporters';

const Supporters = () =>
  <React.Fragment>
    <div className="row-span-1">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="font-rustico-regular text-5xl sm:text-4xl xs:text-4xl text-center xs:mt-5 sm:mt-5 md:pt-10 lg:mt-5 xl:mt-7 xs:mb-5 sm:mb-5 md:pb-10 lg:mb-5 xl:mb-7">
          PodPorili nás
      </h1>
      </div>
    </div>
    {SUPPORTERS.map((row, rowIndex) => (
      <div className="row-span-1">
        <div className="xl:flex xl:flex-row xl:items-center xl:justify-center">
          {SUPPORTERS[rowIndex].map((supporter, supporterIndex) => (
            <Logo
              key={`supporter-${supporterIndex}`}
              href={supporter[0]}
              alt={supporter[1]}
              logoPath={supporter[2]}
              className={supporter[3]}
            />
          ))}
        </div>
      </div>
    ))}
  </React.Fragment>;

export default Supporters;