'use client';
import { usePathname } from 'next/navigation';
// import { Email, Footer, Head, Loader, Nav, Social } from '@components';
import React, { useEffect, useState } from 'react';
import Nav from '../Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);

  return (
    <>
      {/* <Head /> */}

      <div id='root'>
        {/* {isLoading && isHome ? (
          // <Loader finishLoading={() => setIsLoading(false)} />
        ) : ( */}
        <div className='flex flex-col min-h-screen'>
          {/* <Nav isHome={isHome} /> */}
          {/* <Nav isHome={isHome} />
            <Social isHome={isHome} />
            <Email isHome={isHome} /> */}

          <div id='content'>
            {children}
            {/* <Footer /> */}
          </div>
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Layout;
