import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#3D8BFF',
      secondary: '#AB23FF',
      primaryText: '#fff',
      ...colors,
    },
    fontFamily: {
      monument: ['MonumentExtended-Regular', 'sans-serif'],
      satoshi: ['Satoshi-Regular', 'sans-serif'],
      satoshiBold: ['Satoshi-Bold', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
