'use client'
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TitleH6 } from '@/shared/ui/title-h6/TitleH6';

interface IProps {
  photoList: string[]
}

export const MiniResumePhotoSlider: React.FC<IProps> = ({photoList}) => {

  return (
    <div className="">
      <TitleH6 className='mb-[10px]'>Фотографии <span className='font-extralight'>19</span></TitleH6>
      <Swiper
        spaceBetween={7}
        slidesPerView={'auto'}
        className=' !overflow-visible cursor-grab active:cursor-grabbing'
      >
        {photoList.map((src, index) => (
        <SwiperSlide key={index} className='max-w-fit'>
          <div className={`w-[50px] h-[50px] cursor-pointer select-none active:cursor-grabbing active:scale-95 transition-all rounded-[2px]`}>
            <Image src={src} alt='resume-slider-image' height={50} width={50} quality={100} />
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};