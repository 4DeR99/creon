import React from 'react';

interface HeaderItemProps {
  title: string;
  active?: boolean;
}

function HeaderItem({ title, active }: HeaderItemProps) {
  return (
    <button
      className={`flex items-start ${active ? 'hover:text-primary transition duration-500 ' : ''}`}
      disabled={!active}
      onClick={() => {}}>
      <span className="font-satoshiBold text-[18px]">{title}</span>
      {!active && (
        <span className="text-[10px] font-satoshiBold text-secondary ml-1 px-1 self-start bg-black rounded-[100px]">
          SOON
        </span>
      )}
    </button>
  );
}

export default HeaderItem;
