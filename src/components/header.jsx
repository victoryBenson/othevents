'use client'

import AnimatedLink from '@/shared/AnimatedLink'
import Logo from '@/shared/logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import {motion} from 'framer-motion'

const Header = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // For hover effect
    const pathname = usePathname();

    const navLinks = [
        {
            name: 'Services',
            path: '/services'
        },
        {
            name: 'Rentals',
            path: '/rentals'
        },
        {
            name: 'About Us',
            path: '/about-us'
        },
        {
            name: 'Contact Us',
            path: '/contact-us'
        },{
            name: "Wedding Fair '25",
            path: '/wedding-page'
        }
    ]

  return (
    <div className='flex justify-between items-center h-20 w-full bg-darkgray text-white px-20 mx-auto'>
        <div className='h-16 w-16 flex items-center'>
            <Link href={'/'} >
                <Logo />
            </Link>
        </div>


        <div className=''>
            <ul className='flex items-center gap-8'>
                {
                    navLinks.map((link, index) => {
                        return (
                            <Link key={index} href={link.path} className='relative'>
                                <motion.div
                                        className={`text-lg ${
                                        pathname === link.path ? "text-primary" : "text-lightgray"
                                        }`}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            {link.name}
                                            {/* Hover animation */}
                                            {hoveredIndex === index && (
                                            <motion.div
                                                layoutId="hover-underline"
                                                className="absolute left-0 right-0 h-1 bg-primary"
                                                style={{ bottom: -2 }}
                                                initial={{ opacity: 0, scaleX: 0 }}
                                                animate={{ opacity: 1, scaleX: 1 }}
                                                exit={{ opacity: 0, scaleX: 0 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                            )}

                                            {/* Active state */}
                                            {pathname === link.path && (
                                            <motion.div
                                                layoutId="active-underline"
                                                className="absolute left-0 right-0 h-1 bg-primary"
                                                style={{ bottom: -2 }}
                                                initial={false}
                                                animate={{ opacity: 1, scaleX: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            )}
                                            
                                        </motion.div>
                                    </Link>
                                )
                            })
                        }
                    </ul>
        </div>

        <div className=''>
            <Link href={'#'} className='bg-primary text-white p-3 rounded'>Book a call</Link>
        </div>
    </div>
  )
}

export default Header