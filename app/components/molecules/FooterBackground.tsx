import React from 'react';
import Image from 'next/image';

function FooterBackground() {
  return (
    <div className="w-full h-screen absolute bottom-0">
      <video
        src="/videos/footerBackground.mp4"
        autoPlay
        loop
        muted
        className="z-10 object-cover h-full w-full"
      />
      <div className="bg-gradient-to-t from-primary to-secondary absolute bottom-0 z-20 w-full h-full mix-blend-soft-light" />
      <div className="w-full h-full absolute bottom-0">
        <Image
          src="/images/darkShape.svg"
          alt="niftables"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default FooterBackground;
