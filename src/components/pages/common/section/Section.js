import Headline from './Headline';
import PropTypes from 'prop-types';
import React from 'react';

const Section = (props) => {
  const defaultLayout = !props.customLayout ? (
    <div className="grid grid-rows-8">
      <div className="row-span-2 sm:row-span-1 xs:row-span-1">
        <Headline text={props.title} />
      </div>
      <div
        className={`row-span-6 sm:row-span-7 xs:row-span-7 xs:pl-7 xs:pr-7 sm:pl-20 sm:pr-20 md:pl-16 md:pr-16 lg:pl-20 lg:pr-20 xl:pl-24 xl:pr-24 ${
          props.noBottom ? '' : 'xs:pb-20 sm:pb-20 md:pb-32 lg:pb-36 xl:pb-40'
        }`}
      >
        {props.children}
      </div>
    </div>
  ) : null;

  return (
    <div
      className={`relative w-screen bg-scroll bg-no-repeat bg-cover ${
        props.backgroundPositionClass ? props.backgroundPositionClass : 'bg-center'
      } ${props.fullscreen ? 'min-h-screen' : ''}`}
      style={{ backgroundImage: `url(${props.backgroundPath})` }}
    >
      {props.customLayout ? (
        <React.Fragment>{props.children}</React.Fragment>
      ) : (
        <React.Fragment>{defaultLayout}</React.Fragment>
      )}
    </div>
  );
};

Section.propTypes = {
  customLayout: PropTypes.bool,
  fullscreen: PropTypes.bool,
  title: PropTypes.string,
  backgroundPath: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  noBottom: PropTypes.bool,
  backgroundPositionClass: PropTypes.oneOf(['bg-top', 'bg-bottom'])
};

export default Section;
