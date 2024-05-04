import React from 'react';

function MainBackground() {
  return (
    <div className="w-full h-full absolute top-0">
      <video
        src="/videos/mainBackgroundVideo.mp4"
        autoPlay
        loop
        muted
        className=" z-10 object-cover h-full w-full"
      />
      <div className="bg-gradient-to-t from-black via-primary/[47%] to-secondary/[99%] absolute top-0 z-20 w-full h-full mix-blend-soft-light" />
    </div>
  );
}

export default MainBackground;
