'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Pagination } from 'swiper/modules';
import { ProImages, ProImages2 } from '@/constants';
import Image from 'next/image';

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

const TeamSlider = () => {
  return (
    <div className='w-1/2 md:w-40%'>
        <Swiper
        breakpoints={{
            700: {
                slidesPerView: 1,
                spaceBetween: 15,
            }
        }}
        freeMode={true}
        pagination={{clickable: true}}
        modules={[FreeMode, Pagination]}>
            <SwiperSlide className='mb-14' key={1}>
                <div className='grid grid-cols-2 gap-4 px-10'>
                    {
                        ProImages.map((img, idx) => ( 
                            <div className='relative h-[240px] group' key={`${img.src}${idx}`}>
                                <Image
                                src={img.src}
                                alt="teammate"
                                width={280}
                                height={280}
                                className='w-full h-full object-cover rounded-md'/>
                                <div className='absolute cursor-pointer inset-0 bg-gradient-to-r from-[#903A24]  to-[#FFEBBA] opacity-0 group-hover:opacity-70 transition-opacity duration-200'/>
                                <div className='cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200 text-white md:text-lg'>
                                    Подробнее
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </SwiperSlide>
            <SwiperSlide className='mb-14' key={2}>
                <div className='grid grid-cols-2 gap-4 px-10'>
                    {
                        ProImages2.map((img, idx) => ( 
                            <div className='relative group h-[240px]' key={`${img.src}${idx}`}>
                                <Image
                                src={img.src}
                                alt="teammate"
                                width={280}
                                height={280}
                                className='w-full h-full object-cover rounded-md'/>
                                <div className='absolute cursor-pointer inset-0 bg-gradient-to-r from-[#903A24] via-[#9E9E4D] to-[#FFEBBA] opacity-0 group-hover:opacity-70 transition-opacity duration-200'/>
                                <div className='cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200 text-white md:text-lg'>
                                    Подробнее
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default TeamSlider