import React from 'react';
import Socials from './Socials';
import Image from 'next/image';
import Niftables from 'assets/icons/niftables.svg';

function Footer() {
  return (
    <div className="w-full h-[84px] flex justify-center pt-[15px]">
      <div className="w-[90%] md:w-[70%] lg:w-[750px] xl:w-[1075px] 2xl:w-[1450px] flex justify-between">
        <div className="flex gap-[90px] h-fit">
          <span className="text-[16px] font-satoshi">
            © Creon 2023. All rights reserved.
          </span>
          <Socials />
        </div>
        <div className="flex items-center justify-center gap-1.5 h-fit">
          <span className="font-satoshi text-[16px]">Powered by</span>
          <Image src={Niftables} alt="Niftables" width={101} height={18} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
