import MediumTitle from 'components/atoms/MediumTitle';
import Image from 'next/image';
import React from 'react';

export interface MoreItemProps {
  title: string;
  description: string;
  image: string;
}

function MoreItem({ title, description, image }: MoreItemProps) {
  return (
    <div className="flex justify-between flex-col xl:flex-row w-[80%] sm:w-[453px] h-fit xl:w-[1250px] 2xl:w-[1440px] xl:h-[302px] bg-[#13171D99] rounded-md">
      <div className=" xl:w-[797px] 2xl:w-[987px] flex flex-col p-5 2xl:p-10 gap-4">
        <MediumTitle title="none">
          <span className="text-[25px] xl:text-[38px]">{title}</span>
        </MediumTitle>
        <p className="leading-[1.3] text-white font-satoshi text-[15px] xl:text-[18px]">
          {description}
        </p>
      </div>
      <div className=" w-full sm:w-[453px] rounded-b-md xl:rounded-r-md overflow-hidden">
        <Image src={image} alt="more" width={453} height={302} />
      </div>
    </div>
  );
}

export default MoreItem;
