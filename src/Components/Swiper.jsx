import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/slide-21.jpg'
import slide2 from '../assets/slide-22.png'
import slide3 from '../assets/slide-23.png'
import slide4 from '../assets/slide-24.png'
import slide5 from '../assets/slide-25.png'
import slide6 from '../assets/slide-26.gif'
import slide7 from '../assets/slide-27.png'
import slide8 from '../assets/slide-28.png'
import sidebanner from '../assets/square-banner.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
// import required modules
import { Pagination } from 'swiper/modules';

function SwiperDef() {
  return (
    <>
    <div className='swiper-div'>
         <Swiper
        pagination={{
          type: 'bullets',
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} /></SwiperSlide>
        <SwiperSlide><img src={slide2} /></SwiperSlide>
        <SwiperSlide><img src={slide3} /></SwiperSlide>
        <SwiperSlide><img src={slide4} /></SwiperSlide>
        <SwiperSlide><img src={slide5} /></SwiperSlide>
        <SwiperSlide><img src={slide6} /></SwiperSlide>
        <SwiperSlide><img src={slide7} /></SwiperSlide>
        <SwiperSlide><img src={slide8} /></SwiperSlide>
      </Swiper>
      <div className='sidebanner'>
        <a href="#">
            <img src={sidebanner} />
        </a>
      </div>
      </div>
    </>
  );
}
export default SwiperDef
