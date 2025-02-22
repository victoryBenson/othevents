import { ButtonLinkOrange } from '@/shared/ButtonLink'
import Logo from '@/shared/logo'
import Link from 'next/link'
import React from 'react'
import CalendlyPopup from './CalendlyEmbed'

const Footerview = () => {
  return (
    <div className='bg-darkgray lg:h-[40vh] flex justify-center items-center border-t border-lightgray p-5'>
        <div className='flex flex-wrap gap-5 justify-around text-white w-full items-center space-y-4'>
            <Logo/>
            {/* <div>About us</div> */}
            <div className='flex flex-col gap-4'>
                <Link href="about-us">About us</Link>
                <Link href="services">Services</Link>
                <Link href="wedding-page">Event Planning</Link>
                <Link href="rentals">Rental Services</Link>
            </div>
            <div className='flex flex-col gap-4'>
                <span>Contact us</span>
                <span>Email: <i className="text-lightgray">Info@eventbbyoth.com</i></span>
                <span>Phone: <i className="text-lightgray">+447884603969</i></span>
            </div>
            <div>
                {/* <ButtonLinkOrange href={'#'} name={'Book a Call'}/> */}
                <CalendlyPopup title="Book a Call"/>
            </div>
        </div>
    </div>
  )
}

export default Footerview