'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from 'assets/icons/logo.svg';
import HeaderItem from 'components/atoms/HeaderItem';
import Button from 'components/atoms/Button';
import Seperator from 'components/atoms/Seperator';
import Socials from './Socials';

const headerItems = [
  { title: 'Creon Pass', active: true },
  { title: 'Token', active: false },
  { title: 'AI Revenue', active: false },
  { title: 'AI Launchpad', active: false },
];

function Header() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleCloseDrawer = () => {
    setIsOpened(false);
  };

  return (
    <>
      <DrawerMenu isOpened={isOpened} closeDrawer={handleCloseDrawer} />
      <div className="z-50 w-full py-[30px] px-[50px] flex items-center justify-between absolute top-0">
        <Image src={Logo} alt="hamid" />
        <div className="lg:gap-[35px] xl:gap-[58px] items-center hidden lg:flex">
          <div className="flex  gap-4 xl:gap-10">
            {headerItems.map((item, index) => (
              <HeaderItem key={index} title={item.title} active={item.active} />
            ))}
          </div>
          <Button
            title="Connect"
            width="w-[132px]"
            height="h-[44px]"
            border="border-[2px] border-white"
            backGroundColor=""
            hoverBackGroundColor="hover:bg-primary hover:border-primary"
            onClick={() => {}}
          />
        </div>
        <button
          className="w-[34px] h-[34px] flex flex-col justify-evenly lg:hidden"
          onClick={() => setIsOpened(true)}>
          <div className="w-[34px] h-[2px] bg-white rounded-full"></div>
          <div className="w-[34px] h-[2px] bg-white rounded-full"></div>
          <div className="w-[34px] h-[2px] bg-white rounded-full"></div>
        </button>
      </div>
    </>
  );
}

interface DrawerMenuProps {
  isOpened: boolean;
  closeDrawer: () => void;
}

function DrawerMenu({ isOpened, closeDrawer }: DrawerMenuProps) {
  return (
    <div
      className={`${isOpened ? 'w-full' : 'w-0'} transition-all duration-0 h-screen flex lg:hidden fixed right-0 top-0 overflow-hidden z-[60]`}>
      <div className="grow blur-effect" />
      <div className="w-[45%] min-w-[200px] max-w-[300px] bg-black flex flex-col items-end justify-start pt-10">
        <div className="flex gap-[15px] mx-auto mb-10">
          <Button
            title="Connect"
            width="w-[110px]"
            height="h-[38px]"
            border="border-[2px] border-white"
            backGroundColor="text-[16px] font-satoshi"
            hoverBackGroundColor="hover:bg-primary hover:border-primary"
            onClick={() => {}}
          />
          <Button
            title="🗙"
            width="w-[38px]"
            height="h-[38px]"
            backGroundColor="bg-primary"
            hoverBackGroundColor="hover:bg-primary hover:border-primary"
            onClick={() => closeDrawer()}
          />
        </div>
        <div className="w-[80%] min-w-[181.5px] flex flex-col gap-[18px]">
          <Seperator />
          {headerItems.map((item, index) => (
            <>
              <HeaderItem key={index} title={item.title} active={item.active} />
              <Seperator />
            </>
          ))}
        </div>
        <div className="grow" />
        <Socials className="w-[80%] min-w-[181.5px] mb-[3rem]" />
      </div>
    </div>
  );
}

export default Header;
