import React from 'react';

interface SeperatorProps {
  vertical?: boolean;
  color?: string;
  className?: string;
}

function Seperator({ vertical, color, className }: SeperatorProps) {
  color = color ?? 'bg-[#13171D]';
  const dimentions = vertical ? `h-full w-[1px]]` : `h-[1px] w-full`;

  return <div className={`${dimentions} ${color} ${className}`} />;
}

export default Seperator;
