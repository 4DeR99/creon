import React from 'react';

interface HexaIconProps {
  clicked: boolean;
  className?: string;
  children: React.ReactNode;
}

function HexaIcon({ clicked, className, children }: HexaIconProps) {
  return (
    <div
      className={`relative flex items-center justify-center w-[100px] h-[114px] ${className}`}>
      <OuterBorder className="absolute top-0" />
      <InnerBorder
        color={clicked ? '#FFF' : '#13171D'}
        className="absolute top-[19.87px] left-[16px]"
      />
      <Background
        color={clicked ? '#13171D' : '#FFF'}
        className="absolute top-[26px] left-[22px] z-10"
      />
      <div className="z-20">{children}</div>
    </div>
  );
}

interface props {
  color: string;
  className?: string;
}

function Background({ className, color }: props) {
  return (
    <svg
      width="56"
      height="62"
      viewBox="0 0 56 62"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <path
        opacity={color == '#FFF' ? 0.1 : 1}
        d="M0 19.0366C0 16.8543 1.18486 14.8441 3.0941 13.7872L25.0941 1.60862C26.9021 0.607766 29.0979 0.607766 30.9059 1.60862L52.9059 13.7872C54.8151 14.8441 56 16.8543 56 19.0366V42.9634C56 45.1457 54.8151 47.1559 52.9059 48.2128L30.9059 60.3914C29.0979 61.3922 26.9021 61.3922 25.0941 60.3914L3.0941 48.2128C1.18486 47.1559 0 45.1457 0 42.9634V19.0366Z"
      />
    </svg>
  );
}

function InnerBorder({ color, className }: props) {
  return (
    <svg
      width="68"
      height="76"
      viewBox="0 0 68 76"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0 22.5204C0 20.3467 1.1756 18.343 3.07307 17.2827L31.0731 1.63563C32.892 0.619181 35.108 0.619184 36.9269 1.63564L64.9269 17.2827C66.8244 18.343 68 20.3467 68 22.5204V53.4796C68 55.6533 66.8244 57.657 64.9269 58.7173L36.9269 74.3644C35.108 75.3808 32.892 75.3808 31.0731 74.3644L3.07307 58.7173C1.1756 57.657 0 55.6533 0 53.4796V22.5204Z" />
    </svg>
  );
}

function OuterBorder({ className }: { className?: string }) {
  return (
    <svg
      width="100"
      height="114"
      viewBox="0 0 100 114"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.0288 93.4964L6.69545 89.3164L6.94305 88.882L3.27639 86.792C1.55983 85.8136 0.5 83.9896 0.5 82.0137V77.8448H0V69.5069H0.5V61.169H0V52.831H0.5V44.4931H0V36.1552H0.5V31.9863C0.5 30.0104 1.55983 28.1864 3.27638 27.208L6.94305 25.118L6.69545 24.6836L14.0288 20.5036L14.2764 20.938L21.6097 16.758L21.3621 16.3236L28.6954 12.1436L28.9431 12.578L36.2764 8.39798L36.0288 7.96359L43.3621 3.78359L43.6097 4.21798L47.2764 2.12798C48.9646 1.16568 51.0354 1.16568 52.7236 2.12798L56.3903 4.21798L56.6379 3.78359L63.9712 7.96359L63.7236 8.39798L71.0569 12.578L71.3046 12.1436L78.6379 16.3236L78.3903 16.758L85.7236 20.938L85.9712 20.5036L93.3046 24.6836L93.0569 25.118L96.7236 27.208C98.4402 28.1864 99.5 30.0104 99.5 31.9863V36.1552H100V44.4931H99.5V52.831H100V61.169H99.5V69.5069H100V77.8448H99.5V82.0137C99.5 83.9896 98.4402 85.8136 96.7236 86.792L93.057 88.882L93.3046 89.3164L85.9712 93.4964L85.7236 93.062L78.3903 97.242L78.6379 97.6764L71.3046 101.856L71.0569 101.422L63.7236 105.602L63.9712 106.036L56.6379 110.216L56.3903 109.782L52.7236 111.872C51.0354 112.834 48.9646 112.834 47.2764 111.872L43.6097 109.782L43.3621 110.216L36.0288 106.036L36.2764 105.602L28.9431 101.422L28.6954 101.856L21.3621 97.6764L21.6097 97.242L14.2764 93.062L14.0288 93.4964Z"
        stroke="url(#paint0_linear_92_51)"
        stroke-dasharray="8 8"
      />
      <defs>
        <linearGradient
          id="paint0_linear_92_51"
          x1="7.45058e-07"
          y1="57"
          x2="100"
          y2="57"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#3D8BFF" />
          <stop offset="1" stop-color="#AB23FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default HexaIcon;
