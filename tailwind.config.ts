import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000',
      blue: '#3D8BFF',
      purple: '#AB23FF',
      primaryText: '#fff',
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
