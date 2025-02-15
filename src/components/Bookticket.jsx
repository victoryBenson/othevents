import { ButtonLinkOrange } from '@/shared/ButtonLink'
import Image from 'next/image'
import React from 'react'
import { CiCalendar } from "react-icons/ci";

const data = [
    {
        id: 1,
        // icon: <CiCalendar />,
        name: 'The Wedding Fair 2025',
        image: '/assets/img/ticket-img.png',
        amount: '$150',
        description: 'Experience the Ultimate Wedding Showcase at Wedding Fair 2025',
        link: '#',
        startDate: '20-01-2025',
        endDate: '28-02-2025'
    }
]

const Bookticket = () => {
  return (
    <>
        <div className='flex h-full md:h-[90vh] items-center'>
            {
                data.map((item) => (
                    <div key={item.id} className='flex flex-col md:flex-row w-full h-full justify-between'>
                        <div className='px-5 md:px-10 lg:px-20 flex justify-center items-center h-full w-full md:w-1/2 relative z-50'>
                            <span className='absolute inset-0 bg-darkgray/30 -z-10'></span>
                                <Image src={item.image} alt="ticket" width={500} height={500} className="rounded w-full h-full object-cover absolute inset-0 -z-20"/>
                            <p className='text-2xl md:text-[3rem] font-bold text-white py-10'>The Wedding Fair ‘25</p>
                        </div>
                        <div className='w-full md:w-1/2 bg-primary/10 p-5 md:p-10 lg:p-20 flex flex-col justify-center space-y-5'>
                            <div className='flex text-darkgray/70 text-sm gap-2'>
                                <span className='flex items-center '><CiCalendar className='text-primary '/>{item.startDate}</span>-
                                <span>{item.endDate}</span>
                            </div>
                            <p className='text-4xl font-semibold tracking-widest leading-snug'>{item.description}</p>
                            <div className='flex items-center gap-4 justify-around py-5'>
                                <p>{item.amount}</p>
                                <ButtonLinkOrange href={`${item.link}`} name={'Book a ticket'}/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Bookticket