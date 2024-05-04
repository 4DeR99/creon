import Image from 'next/image';
import React from 'react';

interface CreonVideoProps {
  width: number;
  height: number;
  className?: string;
}

function CreonVideo({ width, height, className }: CreonVideoProps) {
  return (
    <div className={`relative h-full overflow-hidden ${className}`}>
      <video
        src="/videos/creonPass.mp4"
        autoPlay
        loop
        muted
        width={width}
        height={height}
      />
      <div className="absolute top-0 w-full h-full bg-gradient-to-t from-[#3d8bff70] to-secondary mix-blend-soft-light z-10" />
      {/* give the video some black blur effect on all sides */}
      <div className="absolute top-0 w-full h-full">
        <Image
          src="/images/darkEffect.svg"
          alt="Creon Video"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
}

export default CreonVideo;
