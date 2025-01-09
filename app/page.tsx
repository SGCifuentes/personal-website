import React from 'react';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import localFont from 'next/font/local';

export const Calibre = localFont({
  src: [
    {
      path: './fonts/Calibre/Calibre-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/Calibre/Calibre-LightItalic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: './fonts/Calibre/Calibre-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Calibre/Calibre-MediumItalic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: './fonts/Calibre/Calibre-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Calibre/Calibre-RegularItalic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/Calibre/Calibre-Semibold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/Calibre/Calibre-SemiboldItalic.woff2',
      weight: '600',
      style: 'italic'
    }
  ],
  variable: '--font-calibre'
});

export const SFMono = localFont({
  src: [
    {
      path: './fonts/SFMono/SFMono-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/SFMono/SFMono-MediumItalic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: './fonts/SFMono/SFMono-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/SFMono/SFMono-RegularItalic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/SFMono/SFMono-Semibold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/SFMono/SFMono-SemiboldItalic.woff2',
      weight: '600',
      style: 'italic'
    }
  ],
  variable: '--font-SFMono'
});

const HomePage: React.FC = () => {
  return (
    <Layout>
      <main
        className={`py-0 px-36 max-[1080px]:px-24 max-[768px]:px-12 max-[480px]:px-6 ${Calibre.variable} ${SFMono.variable}`}
      >
        <Hero />
      </main>
    </Layout>
  );
};

export default HomePage;
