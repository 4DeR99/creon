import React from 'react';

interface SmallTitleProps {
  children?: React.ReactNode;
  title: string;
  className?: string;
}

function SmallTitle({ title, className, children }: SmallTitleProps) {
  if (children)
    return (
      <h2
        className={`leading-[1.3] font-satoshiBold text-[18px] md:text-[22px] ${className}`}>
        {children}
      </h2>
    );

  return (
    <h2
      className={`leading-[1.3] font-satoshiBold text-[18px] md:text-[22px] ${className}`}>
      {title}
    </h2>
  );
}

export default SmallTitle;
