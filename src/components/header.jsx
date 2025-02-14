'use client'

import AnimatedLink from '@/shared/AnimatedLink'
import Logo from '@/shared/logo'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-cente items-center h-20 w-full bg-darkgray text-white px-20 mx-auto'>
        <div className='h-14 w-14 flex items-center '>
            <Logo />
        </div>
        <div className='flex justify-end w-full'>
            <ul className='flex items-center gap-8'>
                <li>
                    {/* <Link href={'#'}>Services</Link> */}
                    <AnimatedLink href={'#'} text='Services' />
                </li>
                <li>
                    <Link href={'#'}>Rentals</Link>
                </li>
                <li>
                <Link href={'#'}>About Us</Link>
                </li>
                <li>
                <Link href={'#'}>Conact Us</Link>
                </li>
                <li>
                <Link href={'#'}>Wedding Fair '25</Link>
                </li>
                <li className=''>
                    <Link href={'#'} className='bg-primary text-white p-3 rounded'>Book a call</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header