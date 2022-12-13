import React from 'react';

interface HeadlineProps {
  text: string;
}

function Headline({ text }: HeadlineProps) {
  return (
    <div className="text-center break-normal p-16 md:pt-32 lg:pt-36 xl:pt-40">
      <h1 className="font-rustico-regular text-5xl sm:text-4xl xs:text-4xl">{text}</h1>
    </div>
  );
}

export default Headline;
