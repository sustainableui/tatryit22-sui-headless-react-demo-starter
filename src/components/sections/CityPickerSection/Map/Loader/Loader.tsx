import React from 'react';

interface LoaderProps {
  projection: (coordinates: number[]) => number[];
}

function Loader({ projection }: LoaderProps) {
  return (
    <text
      className="font-rustico-regular fill-blue text-3xl"
      textAnchor="middle"
      x={projection([19.4724, 48.6832])[0] - 22}
      y={projection([19.4724, 48.6832])[1] + 50}>
      MaPa sa načítava..
    </text>
  );
}

export default Loader;
