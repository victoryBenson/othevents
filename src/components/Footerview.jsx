import { ButtonLinkOrange } from '@/shared/ButtonLink'
import Logo from '@/shared/logo'
import React from 'react'

const Footerview = () => {
  return (
    <div className='bg-darkgray lg:h-[40vh] flex justify-center items-center border-t'>
        <div className='flex justify-around text-white w-full items-center '>
            <Logo/>
            {/* <div>About us</div> */}
            <div className='flex flex-col gap-4'>
                <span>About us</span>
                <span>Services</span>
                <span>Event Planning</span>
                <span>Rental Services</span>
            </div>
            <div className='flex flex-col gap-4'>
                <span>Contact us</span>
                <span>Email: <i>user@gmail.com</i></span>
                <span>Phone: <i>+2340 -669494859</i></span>
            </div>
            <div>
                <ButtonLinkOrange href={'#'} name={'Book a Call'}/>
            </div>
        </div>
    </div>
  )
}

export default Footerview