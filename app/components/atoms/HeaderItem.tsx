import React from 'react';

interface HeaderItemProps {
  title: string;
  soon?: boolean;
}

function HeaderItem({ title, soon }: HeaderItemProps) {
  return (
    <div className="flex items-start">
      <span className="font-satoshiBold text-[18px]">{title}</span>
      {soon && (
        <span className="text-[10px] font-satoshiBold text-purple ml-1 px-1 self-start bg-black rounded-[100px]">
          SOON
        </span>
      )}
    </div>
  );
}

export default HeaderItem;
