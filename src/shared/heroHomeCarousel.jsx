'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles


const HeroHomeCarousel = () => {
  return (
    <Swiper
      autoplay={{
        delay: 1000, // Time between slides in milliseconds
        disableOnInteraction: false, // Keep autoplay running even after user interaction
      }}
      loop={true} // Enable looping
      slidesPerView={1} // Show one slide at a time
      spaceBetween={30} // Space between slides in pixels
      
    >
      <SwiperSlide>
        {/* <img src="/assets/image1.jpg" alt="Slide 1" /> */}
        h1
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src="/assets/image2.jpg" alt="Slide 2" /> */}
        h2
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src="/assets/image3.jpg" alt="Slide 3" /> */}
        h3
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroHomeCarousel;