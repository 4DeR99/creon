import CreonPassDetails from 'components/molecules/CreonPassDetails';
import Image from 'next/image';
import React from 'react';

function CreonPass() {
  return (
    <div className="w-[90%] md:w-[70%] lg:w-[750px] xl:w-[1075px] 2xl:w-[1450px] min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-11 ">
        <CreonPassDetails />
        <div className="2xl:flex w-full hidden">
          <Image
            src="/images/creonPass.png"
            alt="creonPass"
            width={808}
            height={808}
          />
        </div>
      </div>
    </div>
  );
}

export default CreonPass;
