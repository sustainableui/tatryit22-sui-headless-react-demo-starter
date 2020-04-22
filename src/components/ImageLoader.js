import React, { useEffect, useState } from 'react';

import Loader from './common/Loader';
import PropTypes from 'prop-types';

const ImageLoader = props => {
  const [loadedImages, setLoadedImages] = useState(props.imagePaths.map(() => false));

  const areAllImagesLoaded = loadedImages.filter(loadedImage => loadedImage === true).length === loadedImages.length;

  useEffect(() => {
    if (areAllImagesLoaded) {
      props.onLoad();
    }
  });

  return (
    <Loader>
      {props.imagePaths.map((imagePath, i) => (
        <img
          key={`imageloader-image-${i}`}
          alt=""
          src={imagePath}
          onLoad={() => setLoadedImages([
            ...loadedImages.slice(0, i),
            true,
            ...loadedImages.slice(i + 1)
          ])}
        />
      ))}
    </Loader>
  );
};

ImageLoader.propTypes = {
  imagePaths: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default ImageLoader;