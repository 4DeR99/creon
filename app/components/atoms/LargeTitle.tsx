import React from 'react';

interface LargeTitleProps {
  title: string;
  className?: string;
}

function LargeTitle({ title, className }: LargeTitleProps) {
  return (
    <h1
      className={`leading-[1.1] font-monument text-[25px] md:text-[38px] lg:text-[50px] xl:text-[68px] uppercase ${className}`}>
      {title}
    </h1>
  );
}

export default LargeTitle;
