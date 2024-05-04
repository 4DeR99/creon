import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import LargeTitle from 'components/atoms/LargeTitle';
import MediumTitle from 'components/atoms/SmallTitle';
import Seperator from 'components/atoms/Seperator';
import Image from 'next/image';
import React from 'react';

function CreonPassDetails() {
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
    <div className="flex flex-col items-start gap-8 py-4 ">
      <LargeTitle title={largeTitle} />
      <Seperator />
      <MediumTitle
        title={mediumTitle}
        className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      />
      <div className="flex justify-between w-full">
        <div className="flex-col">
          <div className="flex flex-col items-start gap-2 mt-[8px]">
            {creonPassItems.map((item, index) => (
              <Card key={index}>
                <span className="font-satoshi text-[18px]">{item}</span>
              </Card>
            ))}
          </div>
          <Button
            title="Buy Creon Pass"
            height="h-[54px]"
            width="w-full lg:w-[453px]"
            backGroundColor="bg-gradient-to-r from-primary to-secondary"
            hoverBackGroundColor="hover:to-primary"
            className="mt-[4rem]"
          />
        </div>
        <Image
          src="/images/creonPass.png"
          alt="creonPass"
          width={408}
          height={408}
          className="hidden xl:flex 2xl:hidden"
        />
      </div>
    </div>
  );
}

export default CreonPassDetails;
