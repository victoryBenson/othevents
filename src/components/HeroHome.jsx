import HeroHomeCarousel from '@/shared/heroHomeCarousel';
import Link from 'next/link';
import React from 'react'

const HeroHome = () => {
  return (
    <div className='relative mx-auto flex flex-col justify-center items-start pl-10 h-[90vh] bg-homeBg bg-cover bg-no-repeat bg-center'>
        <span className='bg-darkgray/50 absolute inset-0 z-10'></span>
      <div className='text-white flex justify-start items-start flex-col space-y-4 z-10'>
        <p className='text-4xl font-bold'>
          Make Every Event Unforgettable ,<br /> with PartyWithOTH!
        </p>
        <p className='text-lg'>From elegant weddings to corporate galas, we bring your vision to life.</p>
        <p className='flex space-x-4'>
          <Link href={'#'} className='p-3 bg-primary text-white rounded'>Book A Call</Link>
          <Link href={'#'} className='p-3 bg-white text-primary border-primary rounded'>Explore Rentals</Link>
        </p>
      </div>
        {/* <HeroHomeCarousel/> */}
    </div>
  )
}

export default HeroHome;