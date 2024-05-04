import React from 'react';

interface MediumTitleProps {
  children?: React.ReactNode;
  title: string;
  className?: string;
}

function MediumTitle({ title, className, children }: MediumTitleProps) {
  if (children)
    return (
      <h2
        className={`leading-[1.3] font-monument text-[25px] md:text-[38px] uppercase ${className}`}>
        {children}
      </h2>
    );

  return (
    <h2
      className={`leading-[1.3] font-monument text-[25px] md:text-[38px] uppercase ${className}`}>
      {title}
    </h2>
  );
}

export default MediumTitle;
