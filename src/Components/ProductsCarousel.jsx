import React, { useRef, useState } from 'react'
import ProductCard from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';


const productsArr = [
    {
        image: 'https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240',
        rating: 4.6,
        reviews: 3.8,
        title: '256GB Deep Purple 5G W',
        price_disc: 4633,
        price_orig: 5999,
        stock: 8,
        badge: 'Sale'
    },
    {
        image: 'https://f.nooncdn.com/p/v1669724765/N40633047A_1.jpg?format=avif&width=240',
        rating: 4.5,
        reviews: 7.7,
        title: 'Sony PlayStation 5 Console',
        price_disc: 1840,
        price_orig: 3999,
        stock: 12,
        badge: 'Best Seller'
    },
    {
        image: 'https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg?format=avif&width=240',
        rating: 3.1,
        reviews: 11.6,
        title: 'Call Smartwatch With Repl',
        price_disc: 19.5,
        price_orig: 22.4,
        stock: 12,
        badge: 'Best Seller'
    },
    {
        image: 'https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg?format=avif&width=240',
        rating: 3.6,
        reviews: 3.4,
        title: 'Double Touch Liquid Lip C',
        price_disc: 59.5,
        price_orig: 67.5,
        stock: 11,
        badge: 'Sale'
    },
    {
        image: 'https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg?format=avif&width=240',
        rating: 2.2,
        reviews: 3.1,
        title: 'Apple iPhone 11 White',
        price_disc: 1200,
        price_orig: 3900,
        stock: 12,
        badge: ''
    },
    {
        image: 'https://f.nooncdn.com/p/v1686132049/N53347167A_1.jpg?format=avif&width=240',
        rating: 2.1,
        reviews: 22.1,
        title: '256GB Deep Purple 5G W',
        price_disc: 3600,
        price_orig: 3900,
        stock: 1,
        badge: 'Price Beat'
    },
    {
        image: 'https://f.nooncdn.com/p/v1686205684/N50867004A_1.jpg?format=avif&width=240',
        rating: 2.1,
        reviews: 3.1,
        title: 'Generation) 10.2-Inch, 64G',
        price_disc: 3199,
        price_orig: 3299,
        stock: 23,
        badge: 'Best Seller'
    },
    {
        image: 'https://f.nooncdn.com/p/v1687430456/N52953363A_1.jpg?format=avif&width=240',
        rating: 4.2,
        reviews: 3.1,
        title: 'SIM Awesome Grey 8GB R',
        price_disc: 1399,
        price_orig: 1499,
        stock: 9,
        badge: 'Sale'
    },
    {
        image: 'https://f.nooncdn.com/p/v1669221709/N30107462A_1.jpg?format=avif&width=240',
        rating: 3.1,
        reviews: 38,
        title: 'Theft Auto V - Action & Sh',
        price_disc: 56.99,
        price_orig: 79.99,
        stock: 32,
        badge: ''
    },
    {
        image: 'https://f.nooncdn.com/p/v1662647998/N53348815A_1.jpg?format=avif&width=240',
        rating: 5.0,
        reviews: 3.8,
        title: 'Apple AirPods Pro (2nd',
        price_disc: 699,
        price_orig: 999,
        stock: 11,
        badge: 'Sale'
    },
    {
        image: 'https://f.nooncdn.com/p/v1635445545/N48441984A_1.jpg?format=avif&width=240',
        rating: 3.1,
        reviews: 8,
        title: 'Colourful Bracelet Beads ',
        price_disc: 16.99,
        price_orig: 19.99,
        stock: 222,
        badge: 'Sale'
    },
    {
        image: 'https://f.nooncdn.com/p/v1685605423/N37619548A_2.jpg?format=avif&width=240',
        rating: 3.9,
        reviews: 3.1,
        title: 'Lotion 120ml',
        price_disc: 169.9,
        price_orig: 199.9,
        stock: 211,
        badge: 'Best Seller'
    },
]
const ProductsCarousel = () => {
  return (
    <div className='pcarousel-outer'>
        <h2>Recommended for you</h2>
        <div className='productCardOuter'>
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >

        {productsArr.map((current_obj, index)=> {
            return <>
            <SwiperSlide>
            <ProductCard card_data={current_obj} key={index} />
            </SwiperSlide>
            </>
        })}
        </Swiper>
        </div>
      
    </div>
  )
}

export default ProductsCarousel
