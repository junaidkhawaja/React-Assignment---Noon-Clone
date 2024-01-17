import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import cat1 from '../assets/cat-1.png'
import cat2 from '../assets/cat-2.png'
import cat3 from '../assets/cat-3.png'
import cat4 from '../assets/cat-4.png'
import cat5 from '../assets/cat-5.png'
import cat6 from '../assets/cat-6.png'
import cat7 from '../assets/cat-7.png'
import cat8 from '../assets/cat-8.png'
import cat9 from '../assets/cat-9.png'
import cat10 from '../assets/cat-10.png'
import cat11 from '../assets/cat-11.png'
import cat12 from '../assets/cat-12.png'
import cat13 from '../assets/cat-13.png'
import cat14 from '../assets/cat-14.png'
import cat15 from '../assets/cat-15.png'
import cat16 from '../assets/cat-16.png'
import cat17 from '../assets/cat-17.png'
import cat18 from '../assets/cat-18.png'
import cat19 from '../assets/cat-19.png'
import cat20 from '../assets/cat-20.png'
import cat21 from '../assets/cat-21.png'
import cat22 from '../assets/cat-22.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';

function SwiperCarousel() {
  return (
    <>
    <div className='swiperCarousel'>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='carouselimage' src={cat1} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat2} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat3} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat4} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat5} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat6} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat7} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat8} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat9} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat10} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat11} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat12} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat13} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat14} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat15} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat16} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat17} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat18} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat19} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat20} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat21} /></SwiperSlide>
        <SwiperSlide><img className='carouselimage' src={cat22} /></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

export default SwiperCarousel