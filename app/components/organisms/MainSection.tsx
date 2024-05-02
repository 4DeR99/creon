import React from 'react';
import Image from 'next/image';
import backgroundImage from 'images/mainBackground.png';

function MainSection() {
  return (
    <div className="min-h-screen flex">
      <Image
        src="/images/mainBackground.png"
        alt="background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute top-0 z-10"
      />
      <div className="text-primaryText text-4xl z-20">zozozozooz</div>
    </div>
  );
}

export default MainSection;
