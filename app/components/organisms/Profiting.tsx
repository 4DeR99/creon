import Seperator from 'components/atoms/Seperator';
import ProfitingDescription from 'components/molecules/ProfitingDescription';
import ProfitingHeaders from 'components/molecules/ProfitingHeaders';
import Image from 'next/image';
import React from 'react';

function Profiting() {
  return (
    <div className="flex flex-col items-start gap-20 mx-auto min-h-screen">
      <ProfitingHeaders />
      <div className="flex flex-col xl:flex-row gap-10 w-full">
        <Image
          src="/images/profiting.png"
          width={947}
          height={485}
          alt="Profiting"
          className="rounded-md xl:w-[600px] xl:h-[307px] 2xl:w-[947px] 2xl:h-[485px]"
        />
        <div className="flex gap-8 flex-col xl:flex-row">
          <Seperator vertical={true} className="hidden xl:flex" />
          <Seperator className="xl:hidden flex" />
          <ProfitingDescription />
          <Seperator vertical={true} className="hidden xl:flex" />
          <Seperator className="xl:hidden flex" />
        </div>
      </div>
    </div>
  );
}

export default Profiting;