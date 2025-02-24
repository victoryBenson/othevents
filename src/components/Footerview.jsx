'use client'
import { ButtonLinkOrange } from '@/shared/ButtonLink'
import Logo from '@/shared/logo'
import Link from 'next/link'
import React from 'react'
import CalendlyPopup from './CalendlyEmbed'
import { IoMdArrowUp } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from 'react-icons/fa6'
import ScrollToTop from './ScrollToTop'
const Footerview = () => {
  return (
    <div className='bg-darkgray lg:h-[40v border-t border-grey p-5'>
        <div className='flex flex-wrap gap-5 justify-between text-white w-full items-center space-y-4'>
            <Logo/>
            
            <div className='flex flex-col gap-4'>
                <p className="font-semibold uppercase">Nav Menu</p>
                <Link href="about-us">About us</Link>
                <Link href="services">Services</Link>
                <Link href="wedding-page">Event Planning</Link>
                <Link href="rentals">Rental Services</Link>
            </div>
            <div className='flex flex-col gap-4'>
                <span className>Contact us</span>
                <span className='text-grey text-sm '>Email</span>
                <span>Info@eventbbyoth.com</span>
                <span className='text-grey text-sm'>Phone</span>
                <span>+447884603969</span>
            </div>
            <div>
                {/* <ButtonLinkOrange href={'#'} name={'Book a Call'}/> */}
                <CalendlyPopup title="Book a Call"/>
            </div>
        </div>

        <div className='flex text-white justify-between py-5'>
            <div>
                {/* <IoMdArrowUp className="bg-primary rounded-full p-2" size={40} /> */}
                <ScrollToTop/>
            </div>
            <div className='flex gap-8'>
                <a href="https://www.instagram.com/partywith_oth/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram className='bg-white text-darkgray rounded-full p-2' size={40}/>
                </a>
                <BsFillSendFill className='bg-white text-darkgray rounded-full p-2' size={40}/>
                <FaFacebookF className='bg-white text-darkgray rounded-full p-2' size={40}/>
            </div>
        </div>

        <div className="flex text-[#808080] justify-between border-t border-[#808080] pt-5">
            <span>© 2023 — Copyright</span>
            <span>Powered By Treendit</span>
        </div>
    </div>
  )
}

export default Footerview