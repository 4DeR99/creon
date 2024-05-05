'use client';
import React from 'react';

interface ButtonProps {
  title: string;
  width?: string;
  children?: React.ReactNode;
  height?: string;
  border?: string;
  backGroundColor?: string;
  hoverBackGroundColor?: string;
  onClick: () => void;
  className?: string;
}

function Button({
  title,
  width,
  height,
  border,
  children,
  backGroundColor,
  hoverBackGroundColor,
  onClick,
  className,
}: ButtonProps) {
  const styleName = `relative overflow-hidden group rounded-[6px] font-satoshiBold text-[18px] ${width} ${height} ${border} ${backGroundColor} ${hoverBackGroundColor} transition duration-500 ${className}`;

  if (children) {
    return (
      <button className={styleName} onClick={() => onClick()}>
        <span className="absolute top-0 left-0 w-full h-full flex justify-center ease-in-out items-center text-white transition duration-[400ms] group-hover:translate-y-[-80%]">
          {children}
        </span>
        <span className="absolute top-[80%] left-0 w-full h-full flex justify-center items-center ease-in-out text-white transition duration-[400ms] group-hover:translate-y-[-80%]">
          {children}
        </span>
      </button>
    );
  }

  return (
    <button className={styleName} onClick={() => onClick()}>
      <span className="absolute top-0 left-0 w-full h-full flex justify-center ease-in-out items-center text-white transition duration-[400ms] group-hover:translate-y-[-80%]">
        {title}
      </span>
      <span className="absolute top-[80%] left-0 w-full h-full flex justify-center items-center ease-in-out text-white transition duration-[400ms] group-hover:translate-y-[-80%]">
        {title}
      </span>
    </button>
  );
}

export default Button;
