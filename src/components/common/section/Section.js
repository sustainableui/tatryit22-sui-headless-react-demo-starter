import Headline from './Headline';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';

const Section = props => {
  const defaultLayout = !props.customLayout ? (
    <div className="grid grid-rows-4 h-full overflow-hidden">
      <div className="row-span-1">
        <Headline text={props.title} />
      </div>
      <div className="row-span-3">
        {props.children}
      </div>
    </div>
  ) : null;

  return (
    <div
      id={props.id ? props.id : ''}
      className="relative w-screen h-screen overflow-hidden p-5 sm:p-0 xs:p-0 bg-scroll bg-no-repeat bg-cover"
      style={{ backgroundImage: props.backgroundPath ? `url(${props.backgroundPath})` : 'none' }}
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