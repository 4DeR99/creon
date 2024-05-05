import { useRef, useState } from 'react';
import HexaIcon from './HexaIcon';
import Image from 'next/image';
import SmallTitle from './SmallTitle';
import Chevron from 'assets/icons/chevron-down.svg';

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Accordion({ children, className }: AccordionProps) {
  return <ul className={className}>{children}</ul>;
}

interface AccordionItemProps {
  children: React.ReactNode;
  title1: string;
  title2: string;
  icon: any;
  className?: string;
}

export function AccordionItem({
  children,
  title1,
  title2,
  icon,
  className,
}: AccordionItemProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <li className={className}>
      <div
        onClick={() => setIsSelected(isSelected ? false : true)}
        className="flex justify-between gap-[30px] items-center">
        <div className="flex flex-row gap-[30px] items-center">
          <HexaIcon clicked={isSelected}>
            <Image src={icon} alt="hamid" width={26} height={26} />
          </HexaIcon>
          <SmallTitle
            title="title"
            className={`w-[130px] sm:w-fit sm:max-w-[280px] 2xl:max-w-[400px] ${isSelected ? '' : 'hover:text-primary transition duration-200'}`}>
            <span>{title1}</span>
            <br />
            <span>{title2}</span>
          </SmallTitle>
        </div>
        <Image
          src={Chevron}
          alt="chevron"
          width={16}
          height={16}
          className={`transform transition-transform duration-400 ${
            isSelected ? 'rotate-x' : ''
          }`}
        />
      </div>
      <div
        className="overflow-y-hidden transition-all duration-400 eas-in-out"
        style={{ height: isSelected ? ref.current?.offsetHeight || 0 : 0 }}>
        <div className="font-satoshi text-[18px] ml-[132px]" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
