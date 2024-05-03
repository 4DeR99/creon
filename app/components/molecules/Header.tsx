'use client';
import React from 'react';
import Image from 'next/image';
import Logo from 'assets/icons/logo.svg';
import HeaderItem from 'components/atoms/HeaderItem';
import Button from 'components/atoms/Button';

function Header() {
  const headerItems = [
    { title: 'Creon Pass', active: true },
    { title: 'Token', active: false },
    { title: 'AI Revenue', active: false },
    { title: 'AI Launchpad', active: false },
  ];

  return (
    <div className="z-50 w-full py-[30px] px-[50px] flex items-center justify-between absolute top-0">
      <Image src={Logo} alt="hamid" />
      <div className="flex gap-[58px] items-center">
        <div className="flex gap-10">
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
          hoverBackGroundColor="hover:bg-primary"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default Header;
