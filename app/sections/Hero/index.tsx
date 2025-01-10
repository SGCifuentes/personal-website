'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = (
    <h1
      className='m-0 mb-6 ml-1 text-emerald-300 font-inconsolata max-[480px]:mb-4 max-[480px]:ml-0.5'
      style={{ fontSize: 'clamp(14px, 5vw, 16px)' }}
    >
      Hi, my name is
    </h1>
  );
  const two = (
    <h2
      className='m-0 text-stone-300 leading-tight font-semibold'
      style={{ fontSize: 'clamp(32px, 8vw, 80px)' }}
    >
      Sebastian Gonzalez.
    </h2>
  );
  const three = (
    <h3
      className='m-0 text-stone-400 leading-none mt-1 font-semibold'
      style={{ fontSize: 'clamp(32px, 8vw, 80px)' }}
    >
      I love to create unique webpages.
    </h3>
  );
  const four = (
    <p className='mt-4 max-w-xl text-lg text-stone-400 leading-snug sm:text-xl'>
      I’m a frontend engineer specializing in building exceptional experiences,
      with the best practices and focused in bring the best experience for the
      user. Currently, I’m current working at{' '}
      <a
        href='https://globant.com/'
        target='_blank'
        rel='noreferrer'
        className='text-emerald-300 transition-colors'
      >
        Globant
      </a>
      .
    </p>
  );
  const five = (
    <p className='mt-24 text-4xl text-stone-100 leading-snug animate-bounce'>
      Soon more about me, my projects and my journey. Stay tuned!
    </p>
  );

  const items = [one, two, three, four, five];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  const itemVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  return (
    <section className='flex justify-center flex-col items-start min-h-screen h-screen p-0'>
      {isMounted && (
        <motion.ol variants={container} initial='hidden' animate='show'>
          {items.map((item, i) => {
            return (
              <motion.li key={i} variants={itemVariant}>
                {item}
              </motion.li>
            );
          })}
        </motion.ol>
      )}
    </section>
  );
};

export default Hero;
