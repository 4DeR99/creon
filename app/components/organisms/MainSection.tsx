import React from 'react';
import LargeTitle from 'components/atoms/LargeTitle';
import Seperator from 'components/atoms/Seperator';
import SmallTitle from 'components/atoms/SmallTitle';
import MainBackground from 'components/molecules/MainBackground';

function MainSection() {
  const largTitle = `The world's first platform for Tokenizing \n AI blockchain projects`;
  const smallTitle =
    'Hold the Creon Pass NFT and earn passive income from AI Tools';

  return (
    <div className="min-h-screen flex flex-col items-center justify-end">
      <MainBackground />
      <div className="flex flex-col items-start gap-10 text-primaryText mx-auto mb-[25vh] lg:mb-[10vh] z-20 h-full">
        <LargeTitle title={largTitle} className="xl:pr-[8rem] pt-1" />
        <div className="flex flex-col gap-3">
          <Seperator color="bg-white bg-gradient-to-r from-primary to-secondary" />
          <SmallTitle
            title={smallTitle}
            className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          />
          <Seperator color="bg-white bg-gradient-to-r from-primary to-secondary" />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
