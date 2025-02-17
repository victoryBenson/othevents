'use client'

import AnimatedLink from '@/shared/AnimatedLink'
import Logo from '@/shared/logo'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-cente items-center h-20 w-full bg-darkgray text-white px-20 mx-auto'>
        <div className='h-14 w-14 flex items-center '>
            <Link href={'/'}>
                <Logo />
            </Link>
        </div>
        <div className='flex justify-end w-full'>
            <ul className='flex items-center gap-8'>
                <li>
                    {/* <Link href={'#'}>Services</Link> */}
                    <AnimatedLink href={'services'} text='Services' />
                </li>
                <li>
                    {/* <Link hreef={'#'}>Rentals</Link> */}
                    <AnimatedLink href={'rentals'} text='Rentals' />
                </li>
                <li>
                {/* <Link href={'#'}>About Us</Link> */}
                    <AnimatedLink href={'about-us'} text='About Us' />
                </li>
                <li>
                {/* <Link href={'#'}>Conact Us</Link> */}
                    <AnimatedLink href={'contact-us'} text='Contact Us' />
                </li>
                <li>
                {/* <Link href={'#'}>Wedding Fair '25</Link> */}
                    <AnimatedLink href={'wedding-page'} text="Wedding Fair '25" />
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