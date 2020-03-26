import Headline from './Headline';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollableSection from 'react-update-url-on-scroll';

const Section = props =>
  <div
    id={props.id ? props.id : ''}
    className={`relative w-screen h-screen overflow-hidden p-5 sm:p-0 xs:p-0 ${props.fixedBackground ? '' : 'bg-scroll bg-no-repeat bg-cover'}`}
    style={{ backgroundImage: props.backgroundPath ? `url(${props.backgroundPath})` : 'none'}}
  >
    {props.uniqueLayout ? (
      <React.Fragment>
        {props.children}
      </React.Fragment>
    ) : (
      <ScrollableSection hash={props.id ? props.id : ''}>
        <div className="grid grid-rows-4 h-full overflow-hidden">
          <div className="row-span-1">
            <Headline text={props.title}/>
          </div>
          <div className="row-span-3">
            {props.children}
          </div>
        </div>
      </ScrollableSection>
    )}
  </div>;

Section.propTypes = {
  uniqueLayout: PropTypes.bool,
  title: PropTypes.string,
  backgroundPath: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  id: PropTypes.string,
  fixedBackground: PropTypes.bool,
}

export default Section;