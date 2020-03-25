import Headline from './Headline';
import PropTypes from 'prop-types';
import React from 'react';

const Section = props =>
  <div
    id={props.id}
    className={`w-screen h-screen overflow-hidden p-5 ${props.fixedBackground ? '' : 'bg-scroll bg-no-repeat bg-cover'}`}
    style={{ backgroundImage: props.backgroundPath ? `url(${props.backgroundPath})` : 'none'}}
  >
    {props.uniqueLayout ? (
      <React.Fragment>
        {props.children}
      </React.Fragment>
    ) : (
      <div className = "grid grid-rows-4 h-full overflow-hidden">
        <div className="row-span-1">
          <Headline text={props.title}/>
        </div>
        <div className={`row-span-3 ${props.scrollable ? 'h-auto min-h-screen overflow-y-visible' : ''}`}>
          {props.children}
        </div>
      </div>
    )}
  </div>;

Section.propTypes = {
  uniqueLayout: PropTypes.bool,
  title: PropTypes.string,
  backgroundPath: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  id: PropTypes.string.isRequired,
  scrollable: PropTypes.bool,
  fixedBackground: PropTypes.bool,
}

export default Section;