import React from 'react';

const About = () => {
  return (
    <div className='relative text-slate-400 pt-10 flex flex-col gap-4'>
      <div className='sticky py-4 top-0 bg-slate-900 bg-opacity-90 border-b-[1px] border-b-slate-300 px-36 max-[1080px]:px-24 max-[768px]:px-12 max-[480px]:px-6'>
        <b className='text-slate-200 text-sm'>ABOUT</b>
      </div>
      <div className='flex flex-col gap-4 px-36 max-[1080px]:px-24 max-[768px]:px-12 max-[480px]:px-6'>
        <p>
          I’m a Web UI Developer passionate about performance, intuitive user
          experiences, and building web applications that feel fast, seamless,
          and uniquely delightful. I thrive at the intersection of creativity
          and structure—crafting interfaces that are not only robust and
          scalable, but also pleasant to use and visually engaging.
        </p>
        <p>
          Currently, I work as a Semi-Senior Advanced Web UI Developer at
          Globant, where I’ve contributed to large-scale projects in the
          education and public health sectors. My focus has been on building
          scalable interfaces using Next.js, TypeScript, Firebase, and TanStack
          Query. One of the projects I’m most proud of is designing a custom
          design system and component library to standardize the look and feel
          across an entire platform—laying the groundwork for future rebranding
          efforts with clean, token-driven styles.
        </p>
        <p>
          Outside of my day-to-day work, I mentor junior developers within
          Globant, helping them build solid front-end foundations and grow into
          confident contributors. I also take on freelance projects, creating
          performant landing pages and UI components for startups and small
          teams.
        </p>
        <p>
          I see development as a blend of logic and creativity—something I also
          express through music, painting, and even cooking. Whether it’s
          composing clean code, sketching UI ideas, or refining a recipe, I
          enjoy turning structure into something expressive, intuitive, and
          meaningful.
        </p>
      </div>
    </div>
  );
};

export default About;
