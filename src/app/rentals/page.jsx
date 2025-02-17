'use client'
import React from 'react'
import rent1Img from '../../../public/assets/img/rent1.png'
import rent2Img from '../../../public/assets/img/rent2.png'
import rent3Img from '../../../public/assets/img/rent3.png'
import { motion } from 'framer-motion';
import { Button, ButtonLinkOrange } from '@/shared/ButtonLink'
import Image from 'next/image'
import HeroComponent from '@/components/HeroComponent';
import heroImg from '../../../public/assets/img/services.png'
import  planImg from '../../../public/assets/img/planNextEvent.png'

export const rentalData = [
    {
        id: 1,
        image: rent1Img,
        title: "Crockeries",
        price: '20,303',
        btnText: 'rent now'
    },
    {
        id: 2,
        image: rent2Img,
        title: "Sashes",
        price: '20,039',
        btnText: 'rent now'
    },
    {
        id: 3,
        image: rent3Img,
        title: 'Magazine Photo booth',
        price: '400,303',
        btnText: 'rent now'
    },
    {
        id: 4,
        image: rent3Img,
        title: 'Magazine Photo booth',
        price: '400,303',
        btnText: 'rent now'
    },
    {
        id: 5,
        image: rent2Img,
        title: 'Magazine Photo booth',
        price: '400,303',
        btnText: 'rent now'
    },
    {
        id: 6,
        image: rent1Img,
        title: 'Magazine Photo booth',
        price: '400,303',
        btnText: 'rent now'
    }
]

const page = () => {
  return (
    <>
        <section>
            <HeroComponent title={'Rentals'} image={heroImg}/>
        </section>
        <section id='rentals'className='px-5 md:px-10 lg:px-20 py-40 bg-lightgray'>
            <h1 className="text-2xl lg:text-4xl  font-bold mb-4 py-5">Rentals  </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    rentalData.map((item) => {
                        return (
                            <div key={item.id} className='h-[70vh] gap-4 rounded-lg overflow-hidden bg-white'>
                                <motion.div
                                    whileHover={{ scale: 1.05 }} 
                                    transition={{ type: "keyframes", stiffness: 300 }} 
                                    className='bg-white border h-2/3'>
                                    <Image src={item.image} alt='rental' className='h-full w-full object-cover rounded-lg'/>
                                </motion.div>
                                <div className='h-full px-3 '>
                                    <h2 className='text-lg font-semibold py-2'>{item.title}</h2>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-neutral'>${item.price}</p>
                                        <div className='capitalize'>
                                            <Button name={item.btnText}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        {/* next event */}
        <section className=' py-40 h-full'>
            {/* <div className='flex h-full items-center'> */}
                <div className='flex flex-col md:flex-row w-full h-full justify-between'>  
                    <div className='h-[70vh] w-full md:w-1/2 bg-primary/10 p-5 md:p-10 lg:p-20 flex flex-col justify-center space-y-5'>
                        <p className='text-4xl font-semibold tracking-widest leading-snug'>Ready to Plan Your Next Event?</p>
                        <p className='text-neutral'>Let’s make it extraordinary. Connect with us today!</p>
                        <ButtonLinkOrange href={`#`} name={'Book a Call'}/>
                    </div>

                    <div className='px-5 md:px-10 lg:px-20 flex justify-center items-center w-full md:w-1/2 h-[70vh] relative'>
                        {/* <span className='absolute inset-0 bg-darkgray/30 -z-10'></span> */} heelorkrrk-0gr00
                        <Image src={planImg} alt="ticket" width={500} height={500} className=" w-full h-full object-cover absolute inset-0"/>
                    </div>
                </div>
            {/* </div> */}
        </section> 
    </>
  )
}

export default page