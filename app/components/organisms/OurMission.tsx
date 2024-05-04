import MediumTitle from 'components/atoms/MediumTitle';
import React from 'react';

function OurMission() {
  const title1 =
    'Our vision is to support the innovation of AI blockchain projects';
  const title2 = 'while prioritizing communities and democratizing profits';

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex gap-20">
        <MediumTitle title="our mission" className="w-[690px]">
          <span>{title1}</span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {title2}
          </span>
        </MediumTitle>
      </div>
    </div>
  );
}

export default OurMission;
