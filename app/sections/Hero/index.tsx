'use client';

import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = (
    <h1
      className='m-0 mb-6 ml-1 text-emerald-300 font-sfMono max-[480px]:mb-4 max-[480px]:ml-0.5'
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
      I’m a frontend engineer specializing in building exceptional digital
      experiences. Currently, I’m focused on building accessible, human-centered
      products at{' '}
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
    <p className='mt-24 text-4xl text-stone-100 leading-snug animate-pulse'>
      Soon more about me, my projects and my journey. Stay tuned!
    </p>
  );

  const items = [one, two, three, four, five];

  return (
    <section className='flex justify-center flex-col items-start min-h-screen h-screen p-0'>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames='fadeup' timeout={2000}>
              <div key={i} style={{ transitionDelay: `${i + 1}00ms` }}>
                {item}
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </section>
  );
};

export default Hero;
