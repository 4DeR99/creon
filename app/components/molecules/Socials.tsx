import React from 'react';
import Image from 'next/image';
import Telegram from 'assets/icons/telegram.svg';
import Discord from 'assets/icons/discord.svg';
import Twitter from 'assets/icons/twitter.svg';

function Socials({ className }: { className?: string }) {
  return (
    <div className={`flex gap-2.5 ${className}`}>
      <ImageContainer>
        <Image src={Telegram} alt="telegram" width={13.33} height={12.44} />
      </ImageContainer>
      <ImageContainer>
        <Image src={Discord} alt="discord" width={15.06} height={12.24} />
      </ImageContainer>
      <ImageContainer>
        <Image src={Twitter} alt="twitter" width={14.67} height={12} />
      </ImageContainer>
    </div>
  );
}

function ImageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[34px] h-[34px] rounded-full border-white border-[2px] flex items-center justify-center hover:bg-primary hover:border-primary transition duration-300">
      {children}
    </div>
  );
}

export default Socials;
