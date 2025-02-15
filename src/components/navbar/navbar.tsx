import Link from 'next/link'
import React from 'react'
import MobileMenu from '../mobileMenu/mobileMenu'
import Image from 'next/image'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  return (
    <div className='h-24 flex items-center justify-between'>
      {/* LOGO */}
      <div className='md:hidden lg:block w-[20%]'>
        <Link href={'/'} className='font-bold text-xl text-blue-600'>BLOG SOCIAL</Link>
      </div>
      {/* LINKS DIV */}
      <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
        <div className='flex gap-6 text-gray-500'>
          <Link href='/' className='flex gap-2 items-center'>
            <Image src='/home.png' alt='homepage icon' width={16} height={16} className='w-4 h-4'/>
            Homepage
          </Link>
          <Link href='/' className='flex gap-2 items-center'>
            <Image src='/friends.png' alt='friends icon' width={16} height={16} className='w-4 h-4'/>
            Friends
          </Link>
          <Link href='/' className='flex gap-2 items-center'>
            <Image src='/stories.png' alt='stories icon' width={16} height={16} className='w-4 h-4'/>
            Stories
          </Link>
        </div>
        {/* SEACH BAR INPUT */}
        <div className='hidden xl:flex p-2 bg-slate-100 items-center rounded-xl'>
          <input type="text" placeholder='search...' className='bg-transparent outline-none' />
          <Image src="/search.png" alt="search icon" width={14} height={14}/>
        </div>
      </div>
      {/* AUTHENTICATION SECTION */}
      <div className='w-[30%] flex items-center gap-6 xl:gap-8 justify-end'>
        <ClerkLoading>
          <div className="flex items-center justify-center">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-black"
              role="status">
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className='cursor-pointer'>
              <Image src="/people.png" alt="people icon" width={24} height={24}/>
            </div>
            <div className='cursor-pointer'>
              <Image src="/messages.png" alt="messages icon" width={20} height={20}/>
            </div>
            <div className='cursor-pointer'>
              <Image src="/notifications.png" alt="notifications icon" width={20} height={20}/>
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className='flex items-center gap-2 text-sm'>
              <Image src="/login.png" alt="login icon" width={20} height={20}/>
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
}
