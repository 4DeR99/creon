import React from 'react';

interface MediumTitleProps {
  title: string;
  className?: string;
}

function MediumTitle({ title, className }: MediumTitleProps) {
  return (
    <h2
      className={`leading-[1] font-satoshiBold text-[18px] md:text-[18px] ${className}`}>
      {title}
    </h2>
  );
}

export default MediumTitle;
