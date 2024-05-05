import MediumTitle from 'components/atoms/MediumTitle';
import MissionAccorions from 'components/molecules/MissionAccordions';
import Image from 'next/image';
import React from 'react';

function OurMission() {
  const title1 =
    'Our vision is to support the innovation of AI blockchain projects';
  const title2 = 'while prioritizing communities and democratizing profits';

  return (
    <div className="relative flex min-h-screen xl:h-screen overflow-hidden items-start justify-center">
      <Image
        src="/images/visionImg.svg"
        alt="mission"
        width={836}
        height={502}
        className="absolute hidden xl:flex bottom-0 left-[-20px] 2xl:left-[125px] z-0"
      />
      <div className="flex flex-col xl:flex-row gap-[50px] xl:gap-[20px] 2xl:gap-[189px] mt-[11vh] z-10">
        <MediumTitle
          title="our mission"
          className="w-full xl:w-[530px] 2xl:w-[690px]">
          <span>{title1}</span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {title2}
          </span>
        </MediumTitle>
        <MissionAccorions />
      </div>
    </div>
  );
}

export default OurMission;
