'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import style from './JobSlider.module.scss'
import 'swiper/css';

export const JobSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const jobList = ['UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer','UI/UX Designer']

  return (
    <div className='bg-[#F5F6F7] md:h-[64px] h-[40px] flex items-center'>
      <div className="w-screen">
        <div className="relative 2xl:mx-[4%] lmx-[5%] sm:mx-[6%] mx-[10%]">
          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            navigation={{
              prevEl: '.job-slider_prev_btn',
              nextEl: '.job-slider_next_btn',
            }}
            modules={[Navigation]}
          >
            {jobList.map((title, index) => (
              <SwiperSlide key={index} className='max-w-fit !flex !items-center'>
                <button className="md:p-[8px_15px] p-[5px_10px] select-none rounded-[6px] bg-white text-[#758195] md:text-[14px] text-[11px] cursor-pointer will-change-transform transition-all active:scale-95">{title}</button>
              </SwiperSlide>
            ))}
          </Swiper>
          <button ref={prevRef} className={`${style.btn} flex items-center justify-center bg-white job-slider_prev_btn absolute md:w-[24px] md:h-[24px] w-[18px] h-[18px] rounded-[2px] md:left-[-38px] left-[-28px] top-[50%] translate-y-[-50%] z-[10] cursor-pointer`}>
            <svg className='md:w-[6px] w-[5px] md:h-[10px] h-[8px]' width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.717325 5.27789L4.71688 9.20497C4.75404 9.24146 4.79815 9.2704 4.84671 9.29014C4.89526 9.30989 4.94729 9.32005 4.99985 9.32005C5.0524 9.32005 5.10444 9.30989 5.15299 9.29014C5.20154 9.2704 5.24566 9.24146 5.28282 9.20497C5.31998 9.16848 5.34945 9.12517 5.36956 9.07749C5.38967 9.02982 5.40002 8.97873 5.40002 8.92713C5.40002 8.87553 5.38967 8.82443 5.36956 8.77676C5.34945 8.72909 5.31998 8.68577 5.28282 8.64929L1.56573 5.00005L5.28282 1.35082C5.35786 1.27713 5.40002 1.17719 5.40002 1.07298C5.40002 0.968769 5.35786 0.868827 5.28282 0.795139C5.20777 0.721451 5.10598 0.680054 4.99985 0.680054C4.89371 0.680054 4.79193 0.721451 4.71688 0.795139L0.717325 4.72221C0.680139 4.75868 0.650638 4.802 0.630511 4.84967C0.610384 4.89734 0.600024 4.94845 0.600024 5.00005C0.600024 5.05166 0.610384 5.10276 0.630511 5.15044C0.650638 5.19811 0.680139 5.24142 0.717325 5.27789Z" fill="black"/>
            </svg>
          </button>
          <button ref={nextRef} className={`${style.btn} flex items-center justify-center bg-white job-slider_next_btn absolute md:w-[24px] md:h-[24px] w-[18px] h-[18px] rounded-[2px] md:right-[-38px] right-[-28px] top-[50%] translate-y-[-50%] z-[10] cursor-pointer`}>
            <svg className='md:w-[6px] w-[5px] md:h-[10px] h-[8px]' width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.28267 5.27789L1.28312 9.20497C1.24596 9.24146 1.20185 9.2704 1.15329 9.29014C1.10474 9.30989 1.05271 9.32005 1.00015 9.32005C0.947601 9.32005 0.895564 9.30989 0.847012 9.29014C0.79846 9.2704 0.754345 9.24146 0.717185 9.20497C0.680025 9.16848 0.650548 9.12517 0.630437 9.07749C0.610326 9.02982 0.599976 8.97873 0.599976 8.92713C0.599976 8.87553 0.610326 8.82443 0.630437 8.77676C0.650548 8.72909 0.680025 8.68577 0.717185 8.64929L4.43427 5.00005L0.717185 1.35082C0.642137 1.27713 0.599976 1.17719 0.599976 1.07298C0.599976 0.968769 0.642137 0.868827 0.717185 0.795139C0.792233 0.721451 0.89402 0.680054 1.00015 0.680054C1.10629 0.680054 1.20807 0.721451 1.28312 0.795139L5.28267 4.72221C5.31986 4.75868 5.34936 4.802 5.36949 4.84967C5.38962 4.89734 5.39998 4.94845 5.39998 5.00005C5.39998 5.05166 5.38962 5.10276 5.36949 5.15044C5.34936 5.19811 5.31986 5.24142 5.28267 5.27789Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};