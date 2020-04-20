import CookieConsent, { Cookies } from 'react-cookie-consent';
import React, { useState } from 'react';

import { ACCEPT_COOKIES_KEY } from '../config';
import { BUTTONS } from '../config/transitions';
import CovidChat from './CovidChat';
import ImageLoader from './ImageLoader';
import Navigation from './Navigation';
import OpacityEaseIn from './common/OpacityEaseIn';
import PropTypes from 'prop-types';
import generalBackgroundPath from '../assets/images/backgrounds/pattern_elements.svg';
import heroBackgroundPath from '../assets/images/backgrounds/hero.svg';

const Container = props => {
  const [hiddenSidebar, setHiddenSidebar] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(Cookies.get(ACCEPT_COOKIES_KEY));
  
  return (
    <React.Fragment>
      <Navigation
        hiddenSidebar={hiddenSidebar}
        onSidebarToggle={() => setHiddenSidebar(!hiddenSidebar)}
      />
      <OpacityEaseIn perform={imagesLoaded}>
        {props.children}
      </OpacityEaseIn>
      {!imagesLoaded && (
        <ImageLoader
          imagePaths={[heroBackgroundPath, generalBackgroundPath]}
          onLoad={() => setImagesLoaded(true)}
        />
      )}
      {cookiesAccepted && <CovidChat visible={hiddenSidebar} />}
      <CookieConsent
        buttonText="Prijať"
        cookieName={ACCEPT_COOKIES_KEY}
        acceptOnScroll={true}
        onAccept={() => setCookiesAccepted(true)}
        disableStyles={true}
        containerClasses="fixed bottom-0 left-0 w-screen bg-blue z-50 h-14 sm:h-10 xs:h-10 pl-5 pr-5"
        contentClasses="text-white text-left xl:text-center font-futura-medium xl:text-lg lg:text-lg md:text-md sm:text-sm xs:text-sm align-middle leading-14 sm:leading-3 xs:leading-3 xl:max-w-full max-w-3/4 sm:pt-2 sm:pb-2 xs:pt-2 xs:pb-2"
        buttonClasses={`${BUTTONS} font-futura-bold absolute bottom-0 right-0 h-full px-5 text-white bg-green hover:bg-white hover:text-green mr-4 sm:mr-0 xs:mr-0 xl:text-lg lg:text-lg md:text-md sm:text-sm xs:text-sm`}
      >
        Prehliadaním webu vyjadrujete súhlas s používaním súborov cookies.
      </CookieConsent>
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