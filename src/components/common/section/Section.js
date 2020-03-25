import PropTypes from 'prop-types';
import React from 'react';

const Section = props =>
  <div
    id={props.id}
    className={`w-screen h-screen overflow-hidden bg-scroll bg-no-repeat bg-cover ${props.scrollable ? 'h-auto min-h-screen overflow-y-visible' : ''}`}
    style={{ backgroundImage: props.backgroundPath ? `url(${props.backgroundPath})` : 'none'}}
  >
    {props.children}
  </div>;

Section.propTypes = {
  backgroundPath: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  id: PropTypes.string.isRequired,
  scrollable: PropTypes.bool,
}

export default Section;