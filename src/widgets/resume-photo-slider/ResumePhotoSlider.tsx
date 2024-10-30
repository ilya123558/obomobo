'use client'
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container } from '@/shared/ui/container/Container';
import { TitleH4 } from '@/shared/ui/title-h4/TitleH4';

export const ResumePhotoSlider = () => {
  const photoList = [
    '/user/resume/resume-slider-image.png',
    '/user/resume/resume-slider-image.png',
    '/user/resume/resume-slider-image.png',
    '/user/resume/resume-slider-image.png',
    '/user/resume/resume-slider-image.png',
    '/user/resume/resume-slider-image.png',
    '/user/resume/resume-slider-image.png',
    '/user/resume/resume-slider-image.png',
    '/user/resume/resume-slider-image.png',
    '/user/resume/resume-slider-image.png',
    '/user/resume/resume-slider-image.png',
    '/user/resume/resume-slider-image.png',
    '/user/resume/resume-slider-image.png'
  ]

  return (
    <div className="overflow-x-hidden mt-[66px]">
      <Container>
        <TitleH4>Фотографии</TitleH4>
        <Swiper
          spaceBetween={20}
          slidesPerView={'auto'}
          className=' !overflow-visible cursor-grab active:cursor-grabbing'
        >
          {photoList.map((src, index) => (
          <SwiperSlide key={index} className='max-w-fit'>
            <div className={`w-[140px] h-[140px] cursor-pointer select-none active:cursor-grabbing active:scale-95 transition-all rounded-[5px]`}>
              <Image src={src} alt='resume-slider-image' height={140} width={140} quality={100} />
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};