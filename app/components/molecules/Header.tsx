import React from 'react';
import Image from 'next/image';
import Logo from 'assets/icons/logo.svg';
import HeaderItem from 'components/atoms/HeaderItem';

function Header() {
  const headerItems = [
    { title: 'Creon Pass', soon: false },
    { title: 'Token', soon: true },
    { title: 'AI Revenue', soon: true },
    { title: 'AI Lunchpad', soon: true },
  ];

  return (
    <div className="w-full py-[30px] px-[50px] flex items-center justify-between border-[1px]">
      <Image src={Logo} alt="hamid" />
      <div className="flex gap-10">
        {headerItems.map((item, index) => (
          <HeaderItem key={index} title={item.title} soon={item.soon} />
        ))}
      </div>
    </div>
  );
}

export default Header;
