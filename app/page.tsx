import React from 'react';
import Layout from './components/Layout';
import Hero from './sections/Hero';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <main
        className={`py-0 px-36 max-[1080px]:px-24 max-[768px]:px-12 max-[480px]:px-6 `}
      >
        <Hero />
      </main>
    </Layout>
  );
};

export default HomePage;
