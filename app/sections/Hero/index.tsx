import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='flex justify-center flex-col gap-2 items-start py-10 px-36 max-[1080px]:px-24 max-[768px]:px-12 max-[480px]:px-6'>
      <h1 className='text-slate-100 text-4xl'>Sebastian Gonzalez C</h1>
      <h2 className='text-slate-100 text-xl'>Front-end developer</h2>
      <p className='text-slate-400'>
        My goal is to <b>write maintainable, clean </b> and{' '}
        <b>understandable code </b> was enjoyable.
      </p>
      <div className='flex w-full gap-4 text-slate-300 mt-4'>
        <Link
          href='https://github.com/SGCifuentes/'
          target='_blank'
          className='opacity-60 hover:opacity-100 transition-opacity duration-100'
        >
          <Image src='/assets/github.png' alt='github' height={20} width={20} />
        </Link>
        <Link href='https://www.linkedin.com/in/sgcifuentes/' target='_blank'>
          <Image
            src='/assets/linkedin.png'
            alt='github'
            height={20}
            width={20}
            className='opacity-60 hover:opacity-100 transition-opacity duration-100'
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
