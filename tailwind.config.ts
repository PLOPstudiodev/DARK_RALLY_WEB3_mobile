import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        headerHeight: '195px'
      },
      colors: {
        primary: '#ff3016',
        secondary: '#757575',
        terciary: '#413b43',
        fourth: '#131014',
        fifth: {
          '100': '#f2a900',
          '200': '#e8a301'
        }
      }
    },
  },
  plugins: [],
};
export default config;
