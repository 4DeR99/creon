import React from 'react';
import Image from 'next/image';
import LargeTitle from 'components/atoms/LargeTitle';
import Seperator from 'components/atoms/Seperator';
import MediumTitle from 'components/atoms/MediumTitle';

function MainSection() {
  const largTitle = `The world's first platform for Tokenizing \n AI blockchain projects`;
  const mediumTitle =
    'Hold the Creon Pass NFT and earn passive income from AI Tools';

  return (
    <div className="min-h-screen flex flex-col items-center justify-end">
      <Image
        src="/images/mainBackground.png"
        alt="background"
        layout="fill"
        objectPosition="center"
        className="absolute top-0 z-10 object-cover"
      />
      <div className="w-[80%] md:w-[70%] lg:w-[750px] xl:w-[1075px] 2xl:w-[1450px] flex flex-col items-start gap-10 text-primaryText mx-auto mb-[25vh] lg:mb-[10vh] z-20 h-full">
        <LargeTitle title={largTitle} className="xl:pr-[8rem] pt-1" />
        <div className="flex flex-col gap-3">
          <Seperator color="bg-white bg-gradient-to-r from-primary to-secondary" />
          <MediumTitle
            title={mediumTitle}
            className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          />
          <Seperator color="bg-white bg-gradient-to-r from-primary to-secondary" />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
