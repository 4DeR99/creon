import React, { useState } from 'react';

interface ButtonProps {
  title: string;
  width?: string;
  height?: string;
  border?: string;
  backGroundColor?: string;
  hoverBackGroundColor?: string;
  onClick: () => void;
}

function Button({
  title,
  width,
  height,
  border,
  backGroundColor,
  hoverBackGroundColor,
  onClick,
}: ButtonProps) {
  const className = `relative overflow-hidden group rounded-[6px] font-satoshiBold text-[18px] ${width} ${height} ${border} ${backGroundColor} ${hoverBackGroundColor} hover:border-none transition duration-500`;

  return (
    <button className={className} onClick={() => onclick}>
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
