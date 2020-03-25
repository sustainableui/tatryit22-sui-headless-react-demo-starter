import Headline from '../../../common/section/Headline';
import List from './list/List';
import React from 'react';

const Procedure = () =>
  <div className="grid grid-rows-8 min-h-full">
    <div className="row-span-2" />
    <Headline
      text="PostuP"
      className="pt-32 sm:pt-10 xs:pt-10"
    />
    <List />
    <div />
  </div>;

export default Procedure;