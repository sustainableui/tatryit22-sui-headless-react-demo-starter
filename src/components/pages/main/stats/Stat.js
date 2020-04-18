import React, { useState } from 'react';

import CountUp from "react-countup";
import PropTypes from 'prop-types';
import VisibilitySensor from "react-visibility-sensor";

const Stat = props => {
  const [animationFired, setAnimationFired] = useState(false);

  const onVisibilitySensorChange = isVisible => {
    if (isVisible && !animationFired) {
      setAnimationFired(true);
    }
  };

  return (
    <div className="font-rustico-regular text-white flex flex-col justify-center items-center h-full">
      <VisibilitySensor onChange={onVisibilitySensorChange}>
        <span className="block text-6xl sm:text-5xl xs:text-5xl">
          {animationFired ? (
            <CountUp
              start={props.countStart}
              end={props.countEnd}
              duration={props.countDuration}
              startOnMount={false}
            />
          ) : (
            <React.Fragment>{props.countStart}</React.Fragment>
          )}
          {props.signVisible && <span className="text-green">+</span>}
        </span>
      </VisibilitySensor>
      <span className="block text-2xl sm:text-xl xs:text-xl max-w-3/4 break-normal text-center">
        {props.text}
      </span>
    </div>
  );
};

Stat.propTypes = {
  countStart: PropTypes.number.isRequired,
  countEnd: PropTypes.number.isRequired,
  countDuration: PropTypes.number.isRequired,
  signVisible: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default Stat;