import React from 'react';
import Stat from './Stat';

const Stats = () => (
  <div className="xl:grid xl:grid-cols-5 lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 sm:grid sm:grid-cols-3 min-h-2/5-screen xs:h-auto pt-16 pb-16 xs:pb-6 sm:pb-10 sm:pt-10">
    <div className="col-span-1 md:hidden sm:hidden xs:hidden" />
    <div className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 xs:pb-10">
      <Stat
        countDuration={4}
        countStart={1}
        countEnd={70}
        text="krát sme Pomohli"
        signVisible
      />
    </div>
    <div className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 xs:pb-10">
      <Stat
        countDuration={3}
        countStart={1}
        countEnd={15}
        text="zaPojených dobrovoľníkov"
      />
    </div>
    <div className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 xs:pb-10">
      <Stat
        countDuration={3}
        countStart={1}
        countEnd={4}
        text="Pokryté mestá"
      />
    </div>
    <div className="col-span-1 md:hidden sm:hidden xs:hidden" />
  </div>
);

export default Stats;