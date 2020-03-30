import React, { useState } from 'react';

import CovidChat from './CovidChat';
import ImageLoader from './imageLoader/ImageLoader';
import Navigation from './Navigation';
import OpacityEaseIn from './OpacityEaseIn';
import PropTypes from 'prop-types';
import generalBackgroundPath from '../assets/images/backgrounds/pattern_elements.svg';
import heroBackgroundPath from '../assets/images/backgrounds/hero.svg';

const Container = props => {
  const [hiddenSidebar, setHiddenSidebar] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  return (
    <React.Fragment>
      <Navigation
        hiddenSidebar={hiddenSidebar}
        onSidebarToggle={() => setHiddenSidebar(!hiddenSidebar)}
      />
      <OpacityEaseIn imagesLoaded={imagesLoaded}>
        {props.children}
      </OpacityEaseIn>
      {!imagesLoaded && (
        <ImageLoader
          imagePaths={[heroBackgroundPath, generalBackgroundPath]}
          onLoad={() => setImagesLoaded(true)}
        />
      )}
      <CovidChat visible={hiddenSidebar} />
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