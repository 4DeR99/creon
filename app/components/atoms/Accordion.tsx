import { createContext, useContext, useRef, useEffect, useState } from 'react';
import ChevronDown from 'assets/icons/chevron-down.svg';

interface contextType {
  selected: string;
  setSelected: (value: string) => void;
}

const AccordianContext = createContext<contextType>({
  selected: '',
  setSelected: () => {},
});

interface AccordianProps {
  children: React.ReactNode;
  value: any;
  onChange: (value: any) => void;
}

export default function Accordian({
  children,
  value,
  onChange,
  ...props
}: AccordianProps) {
  const [selected, setSelected] = useState<string>(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

interface AccordianItemProps {
  children: React.ReactNode;
  value: any;
  trigger: React.ReactNode;
}

export function AccordianItem({
  children,
  value,
  trigger,
  ...props
}: AccordianItemProps) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;

  const ref = useRef<HTMLDivElement>(null);

  return (
    <li className="border-b bg-white" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium">
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}>
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
