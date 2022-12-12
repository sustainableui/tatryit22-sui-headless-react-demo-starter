import React, { useState } from 'react';

import ImageLoader from './ImageLoader';
import OpacityEaseIn from './common/OpacityEaseIn';
import PropTypes from 'prop-types';
import generalBackgroundPath from '../assets/images/backgrounds/pattern_elements.svg';
import heroBackgroundPath from '../assets/images/backgrounds/hero.svg';

const Container = props => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  return (
    <React.Fragment>
      <OpacityEaseIn perform={imagesLoaded}>
        {props.children}
      </OpacityEaseIn>
      {!imagesLoaded && (
        <ImageLoader
          imagePaths={[heroBackgroundPath, generalBackgroundPath]}
          onLoad={() => setImagesLoaded(true)}
        />
      )}
    </React.Fragment>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
}

export default Container;
