'use client'
import React, {Fragment, useEffect, useState} from 'react'
import { motion } from 'framer';
import  aboutImg from '../../../public/assets/img/wedpage.png'
import  thumbnail from '../../../public/assets/img/thumbnail.png'
import { ButtonLinkOrange } from '@/shared/ButtonLink';

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import  display1 from '../../../public/assets/img/local-cuisiness.png'
import  display2 from '../../../public/assets/img/after-party-banger.png'
import  display3 from '../../../public/assets/img/red-carpet.png'
import  display4 from '../../../public/assets/img/exp4.png'
import  display5 from '../../../public/assets/img/exp5.png'
import  display6 from '../../../public/assets/img/exp6.png'
import { CiCalendar } from 'react-icons/ci';
import  frame1 from '../../../public/assets/img/h1.png'
import  frame2 from '../../../public/assets/img/h2.png'
import  frame3 from '../../../public/assets/img/h3.png'
import  frame4 from '../../../public/assets/img/h4.png'
import  frame5 from '../../../public/assets/img/h5.png'
import  frame6 from '../../../public/assets/img/h6.png'
import  hero1 from '../../../public/assets/img/webp1.png'
import  hero2 from '../../../public/assets/img/webp2.png'
import  hero3 from '../../../public/assets/img/webp3.png'
import { fadeIn } from '@/shared/GlobalAnimation';
import { FaPoundSign } from "react-icons/fa";
import  timeIcon from '../../../public/assets/img/time-icon.png'
import  mapIcon from '../../../public/assets/img/map-icon.png'
import  calendarIcon from '../../../public/assets/img/calendar-icon.png'
import VideoPage from '@/components/Video';

const slides = [
    {
        id: 1,
        image: display1,
        text: 'Local/International Cuisines'
    },
    {
        id: 2,
        image: display2,
        text: 'After Party (The Banger)'
    },
    {
        id: 3,
        image: display3,
        text: 'Red Carpet '
    },
    {
        id: 4,
        image: display4,
        text: 'Celebrity Quest Appearance  '
    },
    {
        id: 5,
        image: display5,
        text: 'Prized Games and Contest  '
    },
    {
        id: 6,
        image: display6,
        text: 'Traditional Props Photo Booth  '
    }
]

const data = [
    {
        id: 1,
        name: 'The Wedding Fair 2025',
        image: '/assets/img/wedpix.png',
        amount: '150',
        title: 'Event Details',
        description: "In us for an exclusive wedding event featuring top vendors, bridal fashion, and expert planners. Secure your spot today!",
        link: '#',
        startDate: '20-01-2025',
        endDate: '28-02-2025'
    }
]

 const heroDisplay = [
    {id: 1, image: hero1},
    {id: 2, image: hero2},
    {id: 3, image: hero3},
]
const page = () => {
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
          setTimeout(() => setIsVisible(true), 300)
      });

      

  return (
    <>
        {/* hero section */}
        {/* <section
            className='relative h-[90vh] bg-homeBg bg-cover bg-no-repeat bg-center z-50'>
            
            <span className='bg-darkgray/40 absolute inset-0 -z-10'></span>

            <span className='absolute inset-0 -z-20'>
                <Image src={aboutImg} alt={'hero-image'} className='h-full w-full object-cover'/>
            </span>

            <motion.div
                initial={{ x: "-100%", opacity: 0 }} 
                animate={{ x: isVisible ? "0%" : "-100%", opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='text-white flex justify-center h-full flex-col space-y-10 pl-5 lg:pl-20'
                >
                <p className='text-2xl sm:text-3xl md:text-5xl font-bold font-serif'>
                    Experience the Ultimate Wedding <br /> Showcase at Wedding Fair '25
                </p>
                <p className='text-lg md:text-2xl'>
                    Join us for an exclusive wedding event featuring top vendors, <br /> bridal fashion, and expert planners. Secure your spot today
                </p>
                <div className='flex space-x-4'>
                    <ButtonLinkOrange href={"#"} name={'Get A Ticket Now'}/>
                </div>
            </motion.div>

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
                    
                </ScrollTo>
            </div>


        </section> */}

        <section>
            <div className="w-full relative z-50">
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: isVisible ? "0%" : "-100%", opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className='text-white absolute top-0 z-10 flex justify-center h-full flex-col space-y-10 pl-5 lg:pl-20'
                    >
                    <p className='text-2xl sm:text-3xl md:text-5xl font-bold font-serif'>
                        Experience the Ultimate Wedding <br /> Showcase at Wedding Fair '25
                    </p>
                    <p className='text-lg md:text-2xl'>
                        Join us for an exclusive wedding event featuring top vendors, <br /> bridal fashion, and expert planners. Secure your spot today
                    </p>
                    <div className='flex space-x-4'>
                        <ButtonLinkOrange href={"#"} name={'Get A Ticket Now'}/>
                    </div>
                </motion.div>
                <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={20} 
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }} 
                navigation 
                loop={true} 
                className="mySwiper"


                >
                    {
                        heroDisplay.map((slide, index) => (
                            <SwiperSlide key={index}>
                                < div className=" h-[70vh] md:h-[90vh] relative overflow-hidden text-center justify-center items-center flex flex-col">
                                <span className='bg-linear-to-r bg-darkgray/20 absolute inset-0 z-10'></span>
                                    
                                    <Image src={slide.image} alt={'image'} className='h-full w-full object-cover'/>
                                
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>

        <motion.section  
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ amount: 0.3 }} 
            // variants={fadeInVariants}
            {...{ ...fadeIn, transition: { delay: 0.5 } }}   
            className='px-5 md:px-10 lg:px-20 py-10 md:py-30' id='about'>
            <div className='flex flex-col md:flex-row justify-center mx-auto gap-10'>
                <div className='space-y-4 md:w-1/2'>
                    <h1 className="text-2xl lg:text-4xl  font-bold mb-4 py-5 font-serif">What's this About</h1>
                    <p className=' sm:text-lg lg:text-2xl leading-8 py-5 ld:text-start text-neutral'>
                    PartyWithOTH is a premier event management and rental service dedicated to turning your special moments into extraordinary experiences. With a passion for creativity and attention to detail, we bring visions to life—whether it’s an elegant wedding, a corporate gathering, or a lively celebration
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <div className='w-auto h-[60vh] rounded-lg'>
                        <Image src={aboutImg} alt='about' className='h-full w-full object-cover rounded-lg'/>
                    </div>
                </div>
            </div>
        </motion.section>

        <motion.section 
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ amount: 0.3 }} 
            // variants={fadeInVariants}  
            {...{ ...fadeIn, transition: { delay: 0.5 } }} 
            id='video' className='px-5 md:px-10 lg:px-20 py-10 md:py-30'>
            {/* <Image src={thumbnail} alt={'video-image'} className='h-full w-full object-cover'/> */}
            <VideoPage/>
        </motion.section>

        <motion.section 
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ amount: 0.3 }} 
            // variants={fadeInVariants} 
            {...{ ...fadeIn, transition: { delay: 0.5 } }}  
            className='px-5 md:px-10 lg:px-20 py-10 md:py-30'>
            <h1 className="text-2xl lg:text-4xl  font-bold mb-4 py-5">What to Expect? </h1>
            <div className="w-full">
            <Swiper
               modules={[Autoplay, Pagination, Navigation]}
               slidesPerView={1} // Show 3 cards at a time
               breakpoints={{
                640: { slidesPerView: 1 }, 
                1024: { slidesPerView: 3 },
                }}
               spaceBetween={20} 
               autoplay={{
                 delay: 3000, 
                 disableOnInteraction: false,
               }}
               pagination={{ clickable: true }} 
               navigation 
               loop={true} 
               className="mySwiper"


            >
                {
                    slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            < div className=" h-[60vh overflow-hidden rounded-lg text-center justify-center items-center border border-gray-100/80 flex flex-col">
                                
                                <p className="text-2xl lg:text-4xl font-bold h-[35vh] md:h-[50vh] w-full overflow-hidden rounded-lg">
                                
                                <Image src={slide.image} alt={'image'} className='h-full w-full object-cover rounded-lg'/>
                                
                                </p>
                                <p className=" py-4 text-base md:text-xl flex font-semibold text-neutral h-[10vh]">{slide.text}</p>
                            
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </motion.section>

        <motion.section 
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ amount: 0.3 }} 
            // variants={fadeInVariants} 

            {...{ ...fadeIn, transition: { delay: 0.5 } }}  
            >
            <div className='flex h-full md:h-[90vh] items-center'>
                {
                    data.map((item) => (
                        <div key={item.id} className='flex flex-col md:flex-row w-full h-full justify-between'>
                            <div className=' px-5 md:px-10 lg:px-20 flex justify-center items-center h-[40vh] md:h-full w-full md:w-1/2 relative z-50'>
                                <span className='absolute inset-0 bg-darkgray/30 -z-10'></span>
                                    <Image src={item.image} alt="ticket" width={500} height={500} className="rounded w-full h-full object-cover absolute inset-0 -z-20"/>
                                <p className='text-2xl md:text-[3rem] font-bold text-white py-10'>The Wedding Fair ‘25</p>
                            </div>
                            <div className='w-full md:w-1/2 bg-[#F5E6CA] p-5 md:p-10 lg:p-20 flex flex-col justify-center space-y-5'>
                                <p className='text-4xl font-semibold tracking-widest leading-snug text-neutral'>{item.title}</p>
                                <p className="text-neutral text-lg">{item.description}</p>
                                <div className='flex text-darkgray/70 text-base gap-2'>
                                    <span className='flex items-center gap-1'>
                                        {/* <CiCalendar className='text-primary '/> */}
                                        <Image src={calendarIcon} alt="ticket" width={500} height={500} className="rounded w-6 h-6 ml-2"/>
                                        March 19, 2025
                                    </span>
                                    <span className='flex items-center gap-1'>
                                        {/* <CiCalendar className='text-primary '/> */}
                                        <Image src={timeIcon} alt="ticket" width={500} height={500} className="rounded w-6 h-6 ml-2"/>
                                        8:00 am - 5:00pm
                                    </span>
                
                                </div>
                                <span className='flex items-center gap-1 text-darkgray/70 text-base'>
                                    
                                    <Image src={mapIcon} alt="ticket" width={500} height={500} className="rounded w-6 h-6 ml-2"/>
                                    To be disclose
                                </span>
            
                                <div className='flex items-center gap-4 justify-between py-5'>
                                    <p className='flex items-center text-neutral'><FaPoundSign />{item.amount}</p>
                                    <ButtonLinkOrange href={`${item.link}`} name={'Get a ticket'}/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </motion.section>

        {/*  */}
        {/* about us */}
        <motion.section
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ amount: 0.3 }} 
        // variants={fadeInVariants}
        {...{ ...fadeIn, transition: { delay: 0.5 } }}   
         className='px-5 md:px-10 lg:px-20 py-10 md:py-30 bg-lightgray' id=''>
            <div className='flex flex-col md:flex-row justify-center items-center mx-auto gap-10'>
                <div className='space-y-4 md:w-1/2'>
                    <h1 className="text-2xl lg:text-4xl text-[#2C2C2C] font-bold mb-4 py-5">The Wedding Fair '24 Highlights </h1>
                    {/* <div className='flex gap-4'>
                        <div className='flex flex-col gap-4'>
                            <Image src={frame1} alt='frame' className='h-full w-full'/>
                            <Image src={frame2} alt='frame' className='h-full w-full'/>
                        </div>
                        <div className='h-full w-auto'>
                            <Image src={frame3} alt='frame' className='h-full w-full'/>
                        </div>
                    </div> */}
                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-4 w-1/2 h-[60vh] sm:h-[90vh]'>
                            <span className='h-1/2 rounded-lg overflow-hidden'>
                                <Image src={frame1} alt='frame' className='h-full w-full object-cover rounded-lg'/>
                            </span>
                            <span className='h-2/3 rounded-lg overflow-hidden'>
                                <Image src={frame2} alt='frame' className='h-full w-full object-cover rounded-lg'/>
                            </span>
                        </div>
                        <div className='w-1/2 h-[60vh] sm:h-[85vh] rounded-lg overflow-hidden'>
                            <Image src={frame3} alt='frame' className='h-full w-full object-cover rounded-lg'/>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <div className='flex gap-4'>
                        <div className='flex flex-col gap-4 w-1/2 h-[60vh] sm:h-[90vh]'>
                            <span className='h-1/2 rounded-lg overflow-hidden'>
                                <Image src={frame4} alt='frame' className='h-full w-full object-cover rounded-lg'/>
                            </span>
                            <span className='h-2/3 rounded-lg overflow-hidden'>
                                <Image src={frame5} alt='frame' className='h-full w-full object-cover rounded-lg'/>
                            </span>
                        </div>
                        <div className='w-1/2 h-[60vh] sm:h-[85vh] rounded-lg overflow-hidden'>
                            <Image src={frame6} alt='frame' className='h-full w-full object-cover rounded-lg'/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    </>
  )
}

export default page