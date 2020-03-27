import Arrow from '../../common/navigation/Arrow';
import { ROUTES } from '../../../config/routes';
import React from 'react';
import { ReactComponent as SVGBlackElementsLogo } from '../../../assets/images/logo/black_elements.svg';

const General = () =>
  <div className="h-full">
    <div className="grid grid-rows-2 h-full overflow-hidden">
      <div className="row-span-1">
        <div className="flex flex-col justify-center items-center h-full">
          <SVGBlackElementsLogo className="w-56" />
        </div>
      </div>
      <div className="row-span-1">
        <div className="flex flex-col justify-start items-center h-full">
          <p className="font-futura-medium text-center text-lg max-w-paragraph">
            Sme partia študentov z Popradu, ktorá sa zomkla v tomto náročnom období a prichádzame k vám so študentsko-občianskou iniciatívou Poďme si pomáhať! Našim cieľom je podať pomocnú ruku, tým najohrozenejším v našej spoločnosti v súvislosti s novovzniknutou situáciou u nás, ale aj všade vo svete, vírusom Covid-19. Podporuje nás občianská iniciatíva Poďme sa rozprávať a iné subjekty, za čo im patrí veľké poďakovanie. Chceme pomôcť takouto formou zvládnuť tento spoločenský problém.
            </p>
        </div>
      </div>
    </div>
    <Arrow
      to={ROUTES.O_NAS_HASH}
      back
      color="blue"
    />
    <Arrow
      to={ROUTES.TEAM}
      scroll
      color="blue"
    />
  </div>;

export default General;