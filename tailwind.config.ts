import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        inconsolata: ['var(--font-inconsolata)', 'monospace']
      }
    }
  },
  plugins: []
};
export default config;
