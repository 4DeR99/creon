import Card from 'components/atoms/Card';
import LargeTitle from 'components/atoms/LargeTitle';
import MediumTitle from 'components/atoms/MediumTitle';
import Seperator from 'components/atoms/Seperator';
import Image from 'next/image';
import React from 'react';

function CreonPass() {
  const largeTitle = 'creon pass nft';
  const mediumTitle =
    'The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools';
  const creonPassItems = [
    'Pre-launch investment opportunities for upcoming AI projects',
    'Free and early access to Creon built AI projects',
    'Higher allocation limits on the Creon AI Launchpad',
    'Revenue share distribution from Creon built AI projects',
  ];

  return (
    <div className="container w-[80%] md:w-[70%] lg:w-[750px] xl:w-[1075px] 2xl:w-[1850px] min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-start w-[700px] gap-8">
        <LargeTitle title={largeTitle} />
        <Seperator color="bg-[#13171D]" />
        <MediumTitle
          title={mediumTitle}
          className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        />
        <div className="flex flex-col items-start gap-3 mt-[8px]">
          {creonPassItems.map((item, index) => (
            <Card key={index}>
              <span className="font-satoshi text-[18px]">{item}</span>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex h-[808px] w-[808px]">
        <Image
          src="/images/creonPass.png"
          alt="creonPass"
          width={808}
          height={808}
        />
      </div>
    </div>
  );
}

export default CreonPass;
