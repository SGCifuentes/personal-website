import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Experience = () => {
  return (
    <div className='relative text-slate-400 pt-10 flex flex-col gap-4 py-2'>
      <div className='sticky py-4 top-0 bg-slate-900 bg-opacity-90 border-b-[1px] border-b-slate-200 px-36 max-[1080px]:px-44 max-[768px]:px-12 max-[480px]:px-6'>
        <b className='text-slate-200 text-sm'>EXPERIENCE</b>
      </div>
      <div className='flex flex-col gap-10 py-4 px-36 max-[1080px]:px-24 max-[768px]:px-12 max-[480px]:px-6'>
        <div className='flex flex-col gap-2'>
          <span className='text-sm'>2022 - Present</span>
          <Link
            href={'https://www.globant.com/'}
            target='_blank'
            className='flex gap-1 items-center text-slate-200 hover:text-emerald-400 transition-colors duration-100'
          >
            <b>
              Semi Senior Adv Webui Developer - Globant{' '}
              <ArrowUpRightIcon height={14} width={14} className='inline' />
            </b>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            animi corporis enim vero soluta blanditiis nisi, id repudiandae
            recusandae, eaque nostrum quasi et rem, inventore fugit cum ipsa.
            Fugit, temporibus?
          </p>
          <div className='flex flex-wrap gap-2 text-xs'>
            <div className='rounded-3xl bg-emerald-900 bg-opacity-65 text-emerald-200 px-4 py-1'>
              <b>Next.js</b>
            </div>
            <div className='rounded-3xl bg-emerald-900 bg-opacity-65 text-emerald-200 px-4 py-1'>
              <b>TypeScript</b>
            </div>
            <div className='rounded-3xl bg-emerald-900 bg-opacity-65 text-emerald-200 px-4 py-1'>
              <b>React</b>
            </div>
            <div className='rounded-3xl bg-emerald-900 bg-opacity-65 text-emerald-200 px-4 py-1'>
              <b>Micro-frontends</b>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-sm'>2022 - Present</span>

          <Link
            href={'https://www.globant.com/'}
            target='_blank'
            className='flex gap-1 items-center text-slate-200 hover:text-emerald-400 transition-colors duration-100'
          >
            <b>
              Front-end developer - Freelance{' '}
              <ArrowUpRightIcon height={14} width={14} className='inline' />
            </b>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            animi corporis enim vero soluta blanditiis nisi, id repudiandae
            recusandae, eaque nostrum quasi et rem, inventore fugit cum ipsa.
            Fugit, temporibus?
          </p>
          <div className='flex flex-wrap gap-2 text-xs'>
            <div className='rounded-3xl bg-emerald-900 bg-opacity-65 text-emerald-200 px-4 py-1'>
              <b>JavaScript</b>
            </div>
            <div className='rounded-3xl bg-emerald-900 bg-opacity-65 text-emerald-200 px-4 py-1'>
              <b>Css</b>
            </div>
            <div className='rounded-3xl bg-emerald-900 bg-opacity-65 text-emerald-200 px-4 py-1'>
              <b>Figma</b>
            </div>
            <div className='rounded-3xl bg-emerald-900 bg-opacity-65 text-emerald-200 px-4 py-1'>
              <b>React</b>
            </div>
            <div className='rounded-3xl bg-emerald-900 bg-opacity-65 text-emerald-200 px-4 py-1'>
              <b>JQury</b>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <span className='text-sm '>2021 - 2022</span>
          <Link
            href={'https://www.iuvity.com/es/'}
            target='_blank'
            className='flex gap-1 items-center text-slate-200 hover:text-emerald-400 transition-colors duration-100'
          >
            <b>
              Junior Front-end developer - Iuvity - Pagalo{' '}
              <ArrowUpRightIcon height={14} width={14} className='inline' />
            </b>
          </Link>
          <p>
            Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Fugiat
            animi corporis enim vero soluta blanditiis nisi, id repudiandae
            recusandae, eaque nostrum quasi et rem, inventore fugit cum ipsa.
            Fugit, temporibus?
          </p>
          <div className='flex flex-wrap gap-2 text-xs'>
            <div className='rounded-3xl bg-emerald-900 bg-opacity-65 text-emerald-200 px-4 py-1'>
              <b>React</b>
            </div>
            <div className='rounded-3xl bg-emerald-900 bg-opacity-65 text-emerald-200 px-4 py-1'>
              <b>TypeScript</b>
            </div>
            <div className='rounded-3xl bg-emerald-900 bg-opacity-65 text-emerald-200 px-4 py-1'>
              <b>Storybook</b>
            </div>
            <div className='rounded-3xl bg-emerald-900 bg-opacity-65 text-emerald-200 px-4 py-1'>
              <b>Testing library</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
