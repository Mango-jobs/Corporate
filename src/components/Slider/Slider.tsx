import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from './slider.module.scss'

const Slider = ({slides}) => {
  return (
     <div className={styles.slides}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((item:any, id:number) => {
          return <SwiperSlide className={styles.img} key={id}><GatsbyImage  image = {item.gatsbyImageData} alt ={item.title}/> </SwiperSlide>
        })}
      </Swiper>
    </div>
  )
}

export default Slider