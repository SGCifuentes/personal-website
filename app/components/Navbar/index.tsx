import React, { useEffect, useState } from 'react';

import { navLinks } from './links';
import Link from 'next/link';
import Menu from './Menu';

interface NavProps {
  isHome?: boolean;
}

const Nav: React.FC<NavProps> = ({ isHome = false }) => {
  const [, setIsMounted] = useState(!isHome);
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const timeout = isHome ? 100 : 0;
  const IconHex = () => (
    <svg
      id='hex'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      viewBox='0 0 84 96'
    >
      <title>Hexagon</title>
      <g transform='translate(-8.000000, -2.000000)'>
        <g transform='translate(11.000000, 5.000000)'>
          <polygon
            stroke='currentColor'
            strokeWidth='5'
            strokeLinecap='round'
            strokeLinejoin='round'
            points='39 0 0 22 0 67 39 90 78 68 78 23'
            fill='currentColor'
          />
        </g>
      </g>
    </svg>
  );

  const IconLogo = () => (
    <svg
      id='logo'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      viewBox='0 0 84 96'
    >
      <title>Logo</title>
      <g transform='translate(-8.000000, -2.000000)'>
        <g transform='translate(11.000000, 5.000000)'>
          <polygon
            id='Shape'
            stroke='currentColor'
            strokeWidth='5'
            strokeLinecap='round'
            strokeLinejoin='round'
            points='39 0 0 22 0 67 39 90 78 68 78 23'
          />
          <path
            d='M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z'
            fill='currentColor'
          />
        </g>
      </g>
    </svg>
  );
  const Logo = (
    <div className='logo flex items-center'>
      {isHome ? (
        <Link href='/' aria-label='home'>
          <div className='hex-container'>
            <IconHex />
          </div>
          <div className='logo-container'>
            <IconLogo />
          </div>
        </Link>
      ) : (
        <Link href='/' aria-label='home'>
          <div className='hex-container'>
            <IconHex />
          </div>
          <div className='logo-container'>
            <IconLogo />
          </div>
        </Link>
      )}
    </div>
  );

  const ResumeLink = (
    <Link
      href='/resume.pdf'
      target='_blank'
      rel='noopener noreferrer'
      className='resume-button px-3 py-2 text-center bg-green-500 text-white rounded-md hover:bg-green-700'
    >
      Resume
    </Link>
  );

  return (
    <header
      className={`fixed top-0 z-11 w-full h-[var(--nav-height)] bg-gray-800 backdrop-filter backdrop-blur-10 transition-all duration-300 ${
        !scrolledToTop && 'shadow-md shadow-gray-700'
      }`}
    >
      <nav className='flex items-center justify-between px-4 py-2 md:px-8'>
        {Logo}
        <div className='hidden md:flex'>
          <ul className='flex space-x-4 text-gray-300'>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i} className='hover:text-white'>
                  <Link href={url}>{name}</Link>
                </li>
              ))}
          </ul>
          {ResumeLink}
        </div>
        <Menu />
      </nav>
    </header>
  );
};

export default Nav;
