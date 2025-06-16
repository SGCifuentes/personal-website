import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

const HomePage: React.FC = () => {
  return (
    <main className='bg-slate-900 py-6'>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  );
};

export default HomePage;
