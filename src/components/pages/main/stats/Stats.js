import React from 'react';
import Stat from './Stat';
import { stats } from '../../../../config/stats';

const Stats = () => (
  <div className="xl:grid xl:grid-cols-5 lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 sm:grid sm:grid-cols-3 min-h-2/5-screen xs:h-auto pt-16 pb-16 xs:pb-6 sm:pb-10 sm:pt-10">
    <div className="col-span-1 md:hidden sm:hidden xs:hidden" />
    {stats.map((stat, i) => (
      <div
        key={`stats-stat-${i}`}
        className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 xs:pb-10"
      >
        <Stat
          countDuration={stat.duration}
          countStart={stat.countStart}
          countEnd={stat.countEnd}
          text={stat.text}
          signVisible={stat.signVisible}
        />
      </div>
    ))}
    <div className="col-span-1 md:hidden sm:hidden xs:hidden" />
  </div>
);

export default Stats;