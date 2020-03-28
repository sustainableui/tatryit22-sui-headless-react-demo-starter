import Item from './Item';
import React from 'react';

const List = () =>
  <ol className="font-futura-medium text-3xl md:text-2xl sm:text-xl xs:text-xl text-center">
    <Item text="Nosiť ochranné rúško a rukavice" />
    <Item text="Umývať si a dezinfikovať si ruky" />
    <Item text="Nedotýkať sa tváre" />
    <Item text="Vyhýbať sa chorým ľuďom" />
    <Item text="Chrániť sa a byť zodpovedný" />
  </ol>;

export default List;