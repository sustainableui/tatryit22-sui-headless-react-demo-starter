import Arrow from '../common/navigation/Arrow';
import Button from '../common/Button';
import { ROUTES } from '../../config/routes';
import React from 'react';
import Section from '../common/section/Section';
import backgroundPath from '../../assets/images/backgrounds/pattern_more_elements.svg';

const WannaHelp = () =>
  <Section
    backgroundPath={backgroundPath}
    title="Chcem Pomôcť"
  >
    <div className="flex flex-col justify-center items-center h-full -mt-14">
      <h2 className="font-futura-bold text-5xl">
        Povinnosti dobrovoľníka
      </h2>

      <ol className="font-futura-medium text-3xl text-center">
        <li className="pt-7">
          Nosiť ochranné rúško a rukavice
        </li>
        <li className="pt-7">
          Umývať si a dezinfikovať si ruky
        </li>
        <li className="pt-7">
          Nedotýkať sa tváre
        </li>
        <li className="pt-7">
          Vyhýbať sa chorým ľuďom
        </li>
        <li className="pt-7">
          Chrániť sa a byť zodpovedný
        </li>
      </ol>

      <div className="text-center pt-14">
        <span className="font-futura-medium text-md text-gray-hover">
          zapoj sa zaslaním formulára
          </span>
        <div className="pt-3">
          <Button
            variant="contained"
            color="blue"
            text="Formulár"
            to={ROUTES.VYBERTE_VASE_MESTO}
            bigger
          />
        </div>
      </div>
    </div>
    <Arrow
      to={ROUTES.CHCEM_POMOCT_HASH}
      back
      color="blue"
    />
  </Section>;

export default WannaHelp;