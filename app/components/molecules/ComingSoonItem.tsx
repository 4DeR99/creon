import MediumTitle from 'components/atoms/MediumTitle';
import SmallTitle from 'components/atoms/SmallTitle';
import Image from 'next/image';
import React from 'react';

export interface ComingSoonItemProps {
  mediumTitle: string;
  smallTitle: string;
  description: string;
  image: any;
}

function ComingSoonItem({
  mediumTitle,
  smallTitle,
  description,
  image,
}: ComingSoonItemProps) {
  return (
    <div className="relative group flex flex-col w-full h-[600px] sm:w-[453px] lg:h-[659px] rounded-md bg-[#13171D99] items-center">
      <div className="absolute -top-[9px] right-[30px] font-satoshiBold px-2 text-[12px] text-black bg-white rounded-full">
        COMING SOON
      </div>
      <div className="flex flex-col gap-2 w-[86.75%] h-[90px] mt-5 md:my-[30px]">
        <MediumTitle title={mediumTitle} className="text-white w-full" />
        <SmallTitle
          title={smallTitle}
          className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary w-full"
        />
      </div>
      <div className="w-[90%] sm:w-[423px] sm:h-[234px] rounded-r-md overflow-hidden my-6 lg:my-7 self-start">
        <Image
          src={image}
          alt="coming-soon"
          width={423}
          height={234}
          className="w-full self-start group-hover:scale-[1.15] transition-transform duration-500 ease-in-out"
        />
      </div>
      <p className="leading-[1.3] text-white font-satoshi text-[18px] w-[86%]">
        {description}
      </p>
    </div>
  );
}

export default ComingSoonItem;
