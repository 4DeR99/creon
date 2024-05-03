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
  lenght = lenght ?? (vertical ? `h-full w-[${size}]` : 'w-full h-[${size}]');

  return <div className={`${lenght} ${color}`} />;
}

export default Seperator;
