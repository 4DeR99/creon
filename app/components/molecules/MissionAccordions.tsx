'use client';
import React from 'react';
import Profitability from 'assets/icons/profitability.svg';
import Transparent from 'assets/icons/transparent.svg';
import Launching from 'assets/icons/launching.svg';
import Limitless from 'assets/icons/limitless.svg';
import Accordion, { AccordionItem } from 'components/atoms/Accordion';
import Seperator from 'components/atoms/Seperator';

interface Mission {
  title1: string;
  title2: string;
  description: string;
  icon: any;
}

function MissionAccorions() {
  const missions: Mission[] = [
    {
      title1: 'Profitability and',
      title2: 'Growth',
      description:
        'At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.',
      icon: Profitability,
    },
    {
      title1: 'Transparent & Fair Decentralized',
      title2: 'Earnings',
      description:
        'At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.',
      icon: Transparent,
    },
    {
      title1: 'Launching the',
      title2: 'future',
      description:
        'At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.',
      icon: Launching,
    },
    {
      title1: 'Limitless Possiblities of AI',
      title2: '& Crypto',
      description:
        'At Creon, we deliver a unique opportunity to benefit from a real AI-based business that generates profits. We believe that through our solutions, every investor will be able to reap the benefits of the latest achievements in the field of artificial intelligence.',
      icon: Limitless,
    },
  ];
  return (
    <Accordion className="flex flex-col w-full xl:w-[455px] 2xl:w-[552px] gap-8">
      {missions.map((mission, index) => (
        <div className="flex flex-col gap-8" key={index}>
          <AccordionItem
            title1={mission.title1}
            title2={mission.title2}
            icon={mission.icon}
            className="hover:cursor-pointer">
            {mission.description}
          </AccordionItem>
          <Seperator />
        </div>
      ))}
    </Accordion>
  );
}

export default MissionAccorions;
