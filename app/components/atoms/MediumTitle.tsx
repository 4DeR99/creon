import React from 'react';

interface MediumTitleProps {
  title: string;
  className?: string;
}

function MediumTitle({ title, className }: MediumTitleProps) {
  return (
    <h2
      className={`leading-[1.3] font-monument text-[25px] md:text-[38px] ${className}`}>
      {title}
    </h2>
  );
}

export default MediumTitle;
