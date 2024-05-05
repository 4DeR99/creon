'use client';
import React from 'react';
import Socials from './Socials';
import Image from 'next/image';
import Niftables from 'assets/icons/niftables.svg';

function Footer() {
  return (
    <div className="w-full h-[84px] flex justify-center pt-[15px]">
      <div className="w-[90%] md:w-[70%] lg:w-[750px] xl:w-[1075px] 2xl:w-[1450px] flex flex-col gap-4 sm:gap-0 sm:flex-row justify-start sm:justify-between">
        <div className="flex items-center gap-[90px] h-fit">
          <span className="text-[16px] font-satoshi">
            © Creon 2023. All rights reserved.
          </span>
          <Socials className="hidden lg:flex" />
        </div>
        <div className="group flex items-center justify-end gap-1.5 h-fit">
          <span className="font-satoshi text-[16px]">Powered by</span>
          <span className="font-monument text-[16px] uppercase group-hover:text-primary transition duration-300">
            Niftables
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
