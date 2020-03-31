import Headline from './Headline';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';

const Section = props => {
  const defaultLayout = !props.customLayout ? (
    <div className="grid grid-rows-8">
      <div className="row-span-2 sm:row-span-1 xs:row-span-1">
        <Headline text={props.title} />
      </div>
      <div className="row-span-6 sm:row-span-7 xs:row-span-7 xs:ml-7 xs:mr-7 xs:mb-7 sm:ml-20 sm:mr-20 sm:mb-20 md:ml-16 md:mr-16 md:mb-16 lg:ml-20 lg:mr-20 lg:mb-20 xl:ml-24 xl:mr-24 xl:mb-24">
        {props.children}
      </div>
    </div>
  ) : null;

  return (
    <div
      id={props.id ? props.id : ''}
      className="relative min-h-screen w-screen bg-scroll bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${props.backgroundPath})`}}
    >
      {props.customLayout ? (
        <React.Fragment>
          {props.children}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {props.id ? (
            <ScrollableSection hash={props.id}>
              {defaultLayout}
            </ScrollableSection>
          ) : (
            <React.Fragment>
              {defaultLayout}
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
  );
}

Section.propTypes = {
  customLayout: PropTypes.bool,
  title: PropTypes.string,
  backgroundPath: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  id: PropTypes.string,
}

export default Section;