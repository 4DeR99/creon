import React from 'react';

interface SeperatorProps {
  lenght?: string;
  size?: string;
  vertical?: boolean;
  color?: string;
  className?: string;
}

function Seperator({
  lenght,
  vertical,
  color,
  size,
  className,
}: SeperatorProps) {
  color = color ?? 'border-gray-500';
  size = size ?? '1pxs';
  lenght = lenght ?? '100%';

  const dimentions = vertical
    ? `h-[${lenght}] w-[${size}]`
    : `w-[${lenght}] h-[${size}]`;

  return <div className={`${dimentions} ${color}`} />;
}

export default Seperator;
