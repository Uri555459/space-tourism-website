import React, { memo, useMemo } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { PageBg, Image } from '../components'

import 'swiper/css'
import 'swiper/css/pagination'

import data from '../data.json'
const { crew } = data

export const Crew = memo(() => {
  useMemo(() => crew, [])

  // const params = {
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     renderBullet: (index, className) => {
  //       return '<span class="' + className + '"></span>'
  //     },
  //   },
  // }

  return (
    <div className='crew'>
      <PageBg
        desktop='./assets/crew/background-crew-desktop.jpg'
        tablet='./assets/crew/background-crew-tablet.jpg'
        mobile='./assets/crew/background-crew-mobile.jpg'
      />
      <div className='container'>
        <h1 className='page__title'>
          <span>02</span>
          Meet your crew
        </h1>
        <div className='crew__inner'>
          <Swiper
            // spaceBetween={50}
            modules={[Pagination]}
            // navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            // {...params}
          >
            {crew &&
              crew.map((item) => (
                <SwiperSlide key={item.name}>
                  <div className='slide__inner'>
                    <div className='slide__content'>
                      <div className='slide__suptitle'>{item.role}</div>
                      <h2 className='slide__title'>{item.name}</h2>
                      <p className='slide__desc'>{item.bio}</p>
                    </div>

                    <div className='slide__image'>
                      <Image
                        webp={item.images.webp}
                        png={item.images.png}
                        alt={item.name}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          {/* <div className='swiper-pagination'></div> */}
        </div>
      </div>
    </div>
  )
})
