import React from 'react';

interface LargeTitleProps {
  children?: React.ReactNode;
  title: string;
  className?: string;
}

function LargeTitle({ title, className, children }: LargeTitleProps) {
  if (children) return (
    <h1
      className={`leading-[1.1] font-monument text-[28px] md:text-[38px] lg:text-[50px] xl:text-[68px] uppercase ${className}`}>
      {children}
    </h1>
  );

  return (
    <h1
      className={`leading-[1.1] font-monument text-[28px] md:text-[38px] lg:text-[50px] xl:text-[68px] uppercase ${className}`}>
      {title}
    </h1>
  );
}

export default LargeTitle;
