import { useState } from 'react';

const INITIAL_HIGHLIGHTED_CITY_INDEX = -1;

function useCityHighlight(): {
  highlightedCityIndex: number;
  handleCityHighlight: (isHovered: boolean, cityIndex: number) => void;
} {
  const [highlightedCityIndex, setHighlightedCityIndex] = useState(INITIAL_HIGHLIGHTED_CITY_INDEX);

  const handleCityHighlight = (isHovered, cityIndex) => {
    if (isHovered) {
      setHighlightedCityIndex(cityIndex);
    } else {
      setHighlightedCityIndex(INITIAL_HIGHLIGHTED_CITY_INDEX);
    }
  };

  return { highlightedCityIndex, handleCityHighlight };
}

export default useCityHighlight;
