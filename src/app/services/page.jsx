'use client'
import HeroComponent from '@/components/HeroComponent';
import React, { useState } from 'react';
import heroImg from '../../../public/assets/img/services.png';
import { Link as ScrollTo } from "react-scroll";
import { AiOutlineDown } from 'react-icons/ai';
import aboutImg from '../../../public/assets/img/about-us.png'
import Image from 'next/image';
import frame1 from '../../../public/assets/img/weddinplanning.png'
import frame2 from '../../../public/assets/img/custom-events.png';
import frame3 from '../../../public/assets/img/birthday-party.png';
import  frame4 from '../../../public/assets/img/coporate-events.png'
import  planImg from '../../../public/assets/img/planNextEvent.png'
import { motion, AnimatePresence} from "framer-motion";
import { Button, ButtonLinkOrange, ButtonLinkWhite } from '@/shared/ButtonLink';
import ModalComponent from '@/components/ModalComponent';
import rent1Img from '../../../public/assets/img/rent1.png'
import rent2Img from '../../../public/assets/img/rent2.png'
import rent3Img from '../../../public/assets/img/rent3.png'
import Bookticket from '@/components/Bookticket';
import { fadeInVariants } from '../page';



const MotionImage = motion(Image); 

const data = [
    {
        id: 1,
        image: frame1,
        btnText: 'Wedding Planning',
        details: [
            {
                title: 'Wedding Planning',
                description: 'Our wedding planning service takes the stress out of your big day. From venue selection to day-of coordination, we ensure every detail is flawless so you can focus on celebrating ',
                subTitle: ' What’s Included?',
                list: [
                    'Planning & Coordination – We handle scheduling, budgeting, and logistics.',
                    "Venue & Vendor Selection – Helping you find the perfect location and reliable vendors.",
                    "Theme & Decor Styling – Bringing your vision to life with expert design.",
                    " Entertainment & Catering – Coordinating music, food, and drinks for a seamless experience.",
                    "On-Site Management – Our team ensures everything runs smoothly on the day of your event."
                ]
            }
        ]

    },
    {
        id: 2,
        image: frame2,
        btnText: 'Wedding Planning',
        details: [
            {
                title: 'Wedding Planning',
                description: 'Our wedding planning service takes the stress out of your big day. From venue selection to day-of coordination, we ensure every detail is flawless so you can focus on celebrating ',
                subTitle: ' What’s Included?',
                list: [
                    'Planning & Coordination – We handle scheduling, budgeting, and logistics.',
                    "Venue & Vendor Selection – Helping you find the perfect location and reliable vendors.",
                    "Theme & Decor Styling – Bringing your vision to life with expert design.",
                    " Entertainment & Catering – Coordinating music, food, and drinks for a seamless experience.",
                    "On-Site Management – Our team ensures everything runs smoothly on the day of your event."
                ]
            }
        ]

    },
    {
        id: 3,
        image: frame3,
        btnText: 'Wedding Planning',
        details: [
            {
                title: 'Wedding Planning',
                description: 'Our wedding planning service takes the stress out of your big day. From venue selection to day-of coordination, we ensure every detail is flawless so you can focus on celebrating ',
                subTitle: ' What’s Included?',
                list: [
                    'Planning & Coordination – We handle scheduling, budgeting, and logistics.',
                    "Venue & Vendor Selection – Helping you find the perfect location and reliable vendors.",
                    "Theme & Decor Styling – Bringing your vision to life with expert design.",
                    " Entertainment & Catering – Coordinating music, food, and drinks for a seamless experience.",
                    "On-Site Management – Our team ensures everything runs smoothly on the day of your event."
                ]
            }
        ]

    },
    {
        id: 4,
        image: frame4,
        btnText: 'Wedding Planning',
        details: {
                title: 'Wedding Planning',
                description: 'Our wedding planning service takes the stress out of your big day. From venue selection to day-of coordination, we ensure every detail is flawless so you can focus on celebrating ',
                subTitle: ' What’s Included?',
                list: [
                    'Planning & Coordination – We handle scheduling, budgeting, and logistics.',
                    "Venue & Vendor Selection – Helping you find the perfect location and reliable vendors.",
                    "Theme & Decor Styling – Bringing your vision to life with expert design.",
                    " Entertainment & Catering – Coordinating music, food, and drinks for a seamless experience.",
                    "On-Site Management – Our team ensures everything runs smoothly on the day of your event."
                ]
        }
    },
]

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
    }
]

const Service = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [openModal, setOpenModal] = useState(false)
    console.log(selectedCard)

    const handleModal = (card) => {
        setSelectedCard(card);
        setOpenModal(true);
    };
  
    const closeModal = () => {
        setSelectedCard(null);
        setOpenModal(false);
    };

  return (
    <div className='min-h-screen'>
       <section >
            <HeroComponent title={'Bringing Your Dream Events to Life'} image={heroImg}/>
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
       </section>

       <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }} 
            variants={fadeInVariants}  
            className='px-5 md:px-10 lg:px-20 py-40' id='about'>
            <div className='flex flex-col lg:flex-row justify-center items-center mx-auto gap-10'>
                <div className='space-y-4 md:w-1/2'>
                    <p className=' sm:text-lg lg:text-2xl leading-8 py-5 ld:text-start text-neutral'>
                        At PartyWithOTH, we specialize in crafting unforgettable events, handling every detail so you can enjoy the moment. From weddings to corporate functions, our expert team ensures seamless planning and execution.
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
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }} 
            variants={fadeInVariants} 
            id='services' 
            className='px-5 md:px-10 lg:px-20 py-40 '>
            <h1 className="text-2xl lg:text-4xl  font-bold mb-4 py-5">Our Event Management Services  </h1>
            <div className='flex justify-center items-center'>
                <div className='grid  grid-cols-1 sm:grid-cols-2 w-full gap-8'>
                    {
                        data.map((item) => {
                            return (
                                <motion.div   onClick={() => handleModal(item)} whileHover={{ scale: 1.05 }}  transition={{ type: "keyframes", stiffness: 300 }}  key={item.id} className='h-80 rounded-lg relative overflow-hidden z-50 flex justify-center items-center'>
                                    <span className='overflow-hidden absolute -z-10 inset-0'>
                                        <MotionImage 
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.5 }}
                                         src={item.image} alt='image-' className='h-full w-full object-cover rounded-lg'/>
                                    </span>
        
                                    <div>
                                        <button className='p-3 bg-white text-primary border-primary rounded '>{item.btnText}</button>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>

            {/* modal */}
            <ModalComponent isOpen={openModal} onClose={closeModal}>
                {selectedCard ? (
                <div className='flex '>
                    <div className='w-1/2 relative'>
                        <span className='overflow-hidden absolute -z-10 inset-0'>
                            <MotionImage 
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.5 }}
                                src={selectedCard.image} alt='image-' className='h-full w-full object-cover rounded-lg'/>
                        </span>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-xl font-bold py-2'>{selectedCard.details.title}</p>
                        <p className='text-neutral py-2'>{selectedCard.details.description}</p>
                        <p className='font-semibold py-2'>{selectedCard.details.title}</p>
                        <ul className='list-disc px-5 text-neutral text-sm'>
                            {
                                selectedCard?.details.list?.map((item, index) => {
                                    return <li key={index} >{item}</li>
                                })
                            }
                        </ul>
                        <div className='flex justify-end my-2'>
                            <ButtonLinkOrange name={'Book a Call'} link={'#'}/>
                        </div>
                    </div>
                </div>
                    
                ):
                <p>No card selected</p>  
            }
            </ModalComponent>
        </motion.section>

            {/* rental */}
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }} 
            variants={fadeInVariants} 
            id='rentals'className='px-5 md:px-10 lg:px-20 py-40 bg-lightgray'>
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
        </motion.section>

        {/* next event */}
        <motion.section 
        initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }} 
                    variants={fadeInVariants} 
         className=' pt-40 h-full'>
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
        </motion.section>

    </div>
  )
}

export default Service;