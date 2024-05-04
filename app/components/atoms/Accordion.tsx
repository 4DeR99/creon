import { useRef, useEffect, useState } from 'react';

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Accordion({ children, className }: AccordionProps) {
  return <ul className={className}>{children}</ul>;
}

interface AccordionItemProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionItem({ children, className }: AccordionItemProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <li className={`border-b ${className}`}>
      <header
        role="button"
        onClick={() => setIsSelected(isSelected ? false : true)}
        className="flex justify-between items-center p-4 font-medium">
        hamid
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: isSelected ? ref.current?.offsetHeight || 0 : 0 }}>
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
