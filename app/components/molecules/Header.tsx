'use client';
import React from 'react';
import Image from 'next/image';
import Logo from 'assets/icons/logo.svg';
import HeaderItem from 'components/atoms/HeaderItem';
import Button from 'components/atoms/Button';

function Header() {
  const headerItems = [
    { title: 'Creon Pass', soon: false },
    { title: 'Token', soon: true },
    { title: 'AI Revenue', soon: true },
    { title: 'AI Lunchpad', soon: true },
  ];

  return (
    <div className="w-full py-[30px] px-[50px] flex items-center justify-between">
      <Image src={Logo} alt="hamid" />
      <div className="flex gap-[58px] items-center">
        <div className="flex gap-10">
          {headerItems.map((item, index) => (
            <HeaderItem key={index} title={item.title} soon={item.soon} />
          ))}
        </div>
        <Button
          title="Connect"
          width="w-[132px]"
          height="h-[44px]"
          border="border-[2px] border-[#fff]"
          backGroundColor=""
          hoverBackGroundColor="hover:bg-blue"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default Header;
