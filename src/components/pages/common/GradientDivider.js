import React from 'react';

const GradientDivider = () => {
  return (
    <div
      className="absolute bottom-0 left-0 w-screen h-2"
      style={{ backgroundImage: 'linear-gradient(to right, #2cebad, #2e66ff, #2cebad)'}}
    />
  );
};

export default GradientDivider;