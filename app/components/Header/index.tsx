import Link from 'next/link';
import MobileMenu from './MobileMenu.client';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/about' },
  { name: 'Articles', href: '/about' },
  { name: 'Contact', href: '/about' }
];

export default function Header() {
  return (
    <div className='relative w-full h-14'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          aria-label='Global'
          className='flex items-center justify-between py-6'
        >
          <div className='flex lg:flex-1'>
            <Link href='/' className='-m-1.5 p-1.5 text-slate-100'>
              <p>Sebastian Gonzalez</p>
            </Link>
          </div>

          <MobileMenu navigation={navigation} />

          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm/6 font-semibold text-sky-400'
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'></div>
        </nav>
      </header>
    </div>
  );
}
