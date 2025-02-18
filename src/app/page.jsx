'use client'

import HeroHomeCarousel from '@/shared/heroHomeCarousel';
import React, {Fragment, useEffect, useState} from 'react'
import { motion } from 'framer';
import { Link as ScrollTo } from "react-scroll";
import { AiOutlineDown } from "react-icons/ai";
import Image from 'next/image';
import icon from '../../public/assets/img/services_icon.png'
import frame1 from '../../public/assets/img/frame1.png'
import frame2 from '../../public/assets/img/frame2.png'
import frame3 from '../../public/assets/img/frame3.png'
import { ButtonLinkOrange, ButtonLinkWhite } from '@/shared/ButtonLink';
import SplitScreenCarousel from '@/components/OurExpertiseCarousel';
import contactImg from '../../public/assets/img/contact.png'
import Bookticket from '@/components/Bookticket';

export const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const HeroHome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);



  return (
    <Fragment>
        {/* hero section */}
        <section
            className='relative h-[90vh] bg-homeBg bg-cover bg-no-repeat bg-center z-50'>
            
            <span className='bg-darkgray/40 absolute inset-0 -z-10'></span>

            <motion.div
                initial={{ x: "-100%", opacity: 0 }} 
                animate={{ x: isVisible ? "0%" : "-100%", opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='text-white flex justify-center h-full flex-col space-y-6 pl-5 lg:pl-20'
                >
                <p className='text-2xl md:text-4xl font-bold'>
                Make Every Event Unforgettable, <br /> with PartyWithOTH!
                </p>
                <p className='text-lg'>From elegant weddings to corporate galas, we bring your vision to life.</p>
                <div className='flex space-x-4'>
                    <ButtonLinkOrange href={"#"} name={'Book A Call'}/>
                    <ButtonLinkWhite href={"#"} name={'Explore Rentals'}/>
                </div>
            </motion.div>

            {/* scroll top */}
            <div className='absolute rounded-full w-10 h-10 inset-0 right-0 left-0 bg-white hidden'>
                <ScrollTo
                    to="about"
                    offset={0}
                    delay={0}
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="absolute bottom-[ top-40 inset-0  w-auto inline-block -translate-x-1/2 cursor-pointer"
                >
                    <AiOutlineDown className=' p-3 rounded-full' />
                </ScrollTo>
            </div>

            {/* carousel */}
            <div className='hidden'>
                <HeroHomeCarousel/>
            </div>

        </section>

        {/* about us */}
        <motion.section  className='px-5 md:px-10 lg:px-20 py-40' id='about'>
            <motion.div  
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }} 
                variants={fadeInVariants} 
                className='flex flex-col lg:flex-row justify-center items-center mx-auto gap-10'>
                <div className='space-y-4 md:w-1/2'>
                    <p className='text-2xl md:text-4xl font-bold'>At PartyWithOTH</p>
                    <Image src={icon} alt='serviceicon'/>
                    <p className='text-lg py-5 text-justify ld:text-start'>we specialize in curating exceptional events and offering premium rentals. Whether you're planning a wedding, birthday, or corporate event, we handle the details so you can enjoy the moment.</p>
                    <ButtonLinkOrange href='#' name={'Learn more'}/>
                </div>
                <div className='md:w-1/2'>
                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-4'>
                            <Image src={frame1} alt='frame' className='h-full w-full'/>
                            <Image src={frame2} alt='frame' className='h-full w-full'/>
                        </div>
                        <div className='h-full w-auto'>
                            <Image src={frame3} alt='frame' className='h-full w-full'/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.section>

        {/* our expertise */}
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }} 
            variants={fadeInVariants} 
            className='px-5 md:px-10 lg:px-20 py-40 bg-lightgray'
            >
            <h1 className="text-2xl lg:text-4xl  font-bold mb-4 py-5">
                Our Expertise
            </h1>
            <SplitScreenCarousel/>
        </motion.section>

        {/* book ticket */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }} 
            variants={fadeInVariants} 
            className=' pt-40'>

           <Bookticket/>
           
        </motion.section>

        {/* contact us */}
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }} 
            variants={fadeInVariants} 
            className='h-full md:min-h-[90vh] bg-darkgray overflow-hidden p-5 md:p-10 lg:p-20'>
            <p className='text-2xl pb-6 lg:pb-16 text-white md:text-4xl font-bold '>Will You love to reach out to us?</p>
            <div className=' h-full flex flex-col lg:flex-row justify-center items-center mx-auto gap-20 '>
                <div className='md:w-1/2 '>
                    <div className='min:h-[50vh] w-full overflow-hidden'>
                        <Image src={contactImg} alt='contact' className='w-full h-full object-cover'/>
                    </div>
                </div>

                <div className='space-y-4  md:w-1/2 '>
                    <p className='text-white text-lg md:text-2xl'>Tell us what you have in mind</p>
                    <form className='space-y-5'>
                        <div>
                            <label htmlFor=""></label>
                            <input className='border border-primary p-3 w-full rounded' type="text" placeholder='Enter your name' />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input className='border border-primary p-3 w-full rounded' type="text" placeholder='Enter your email' />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <textarea className='border border-primary p-3 w-full h-full rounded' rows={5} cols={5} name="" id="" placeholder='How do you want us to help you?'></textarea>
                        </div>
                        <div>
                            <ButtonLinkWhite href={'#'} name={'Get Intouch'}/>
                        </div>
                    </form>
                </div>
            </div>
        </motion.section>

    </Fragment>
  )
}

export default HeroHome;