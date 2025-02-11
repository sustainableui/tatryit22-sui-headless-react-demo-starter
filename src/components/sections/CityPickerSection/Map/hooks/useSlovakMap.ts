import { useMemo } from 'react';
import { geoBounds, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';

const Slovakia = {
  arcs: [[-650, -1256, 1256, -955, 1257]],
  type: 'Polygon',
  properties: {
    name: 'Slovakia'
  },
  id: '703'
};

interface UseSlovakMapProps {
  projection: {
    center: (_: number[]) => void;
    scale: (_: number) => void;
    translate: (_: number[]) => void;
  };
  width: number;
  height: number;
  topologyData: {};
}

function useSlovakMap({ topologyData, projection, width, height }: UseSlovakMapProps) {
  return useMemo(() => {
    let mapFeature = feature(topologyData, Slovakia);
    let mapBounds = geoPath().bounds(mapFeature);
    let scale =
      30 /
      Math.max(
        (mapBounds[1][0] - mapBounds[0][0]) / width,
        (mapBounds[1][1] - mapBounds[0][1]) / height
      );
    mapBounds = geoBounds(mapFeature);
    projection.center([
      (mapBounds[1][0] + mapBounds[0][0]) / 2,
      (mapBounds[1][1] + mapBounds[0][1]) / 2
    ]);
    projection.scale(scale);
    projection.translate([width / 2, height / 2]);
    return mapFeature;
  }, [topologyData, projection, height, width]);
}

export default useSlovakMap;
