'use client';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

interface MobileMenuProps {
  navigation: {
    name: string;
    href: string;
  }[];
}

export default function MobileMenu({ navigation }: MobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className='flex lg:hidden'>
        <button
          type='button'
          onClick={() => setMobileMenuOpen(true)}
          className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-sky-300'
          aria-expanded={mobileMenuOpen}
        >
          <span className='sr-only'>Open main menu</span>
          <Bars3Icon aria-hidden='true' className='size-6' />
        </button>
      </div>

      <Dialog
        as='div'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-50' />
        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='#' className='-m-1.5 p-1.5 text-slate-100'>
              <span className='sr-only'>Your Company</span>
              <p>Sebastian Gonzalez</p>
            </Link>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-sky-500'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='size-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-sky-400 hover:bg-slate-900'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className='flex flex-col text-sky-300 mt-10'>
              <Link href='' className=''>
                🏴󠁧󠁢󠁥󠁮󠁧󠁿 English
              </Link>
              <Link href='' className=''>
                &#x1F1EA;&#x1F1F8; Spanish
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
