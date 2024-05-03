import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="border-[#13171D] border-[1px] rounded-md px-[18px] pt-[12px] pb-[16px]">
      {children}
    </div>
  );
}

export default Card;
