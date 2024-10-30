'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Skeleton } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import './SpecialistCard.scss'


interface IProps {
  sliderImageList: string[]
  userImg: string
  name: string
  rating: string | number
  text: string
  price: number
}

export const SpecialistCard: React.FC<IProps> = (props) => {
  const [render, setRender] = useState(false)
  const [imgWidth, setImgWidth] = useState(400)
  const prevBtnRef = useRef<HTMLButtonElement>(null)
  const nextBtnRef = useRef<HTMLButtonElement>(null)
  const refContainer = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if(refContainer.current){
      setImgWidth(refContainer.current.offsetWidth)
    }
  }, [refContainer.current])

  useEffect(() => {
    setRender(!render)
  }, [prevBtnRef.current, nextBtnRef.current])

  return (
    <li ref={refContainer} className={`w-full rounded-[10px] overflow-hidden relative specialist-card__wrapper`}>
      <div className="relative">
        <div className="">
          <button ref={prevBtnRef} className={`rounded-full hover:scale-105 transition-all will-change-transform active:scale-90 bg-white cursor-pointer absolute left-[10px] top-[50%] translate-y-[-50%] flex items-center justify-center z-10 h-[20px] w-[20px]`}>
            <svg width="8" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.44364 6.59894C4.47342 6.62493 4.49704 6.65578 4.51315 6.68974C4.52927 6.72369 4.53756 6.76008 4.53756 6.79684C4.53756 6.83359 4.52927 6.86998 4.51315 6.90393C4.49704 6.93789 4.47342 6.96874 4.44364 6.99473C4.41387 7.02072 4.37852 7.04133 4.33961 7.05539C4.30071 7.06946 4.25901 7.0767 4.2169 7.0767C4.1748 7.0767 4.1331 7.06946 4.0942 7.05539C4.05529 7.04133 4.01994 7.02072 3.99017 6.99473L0.785398 4.19767C0.755601 4.17169 0.731963 4.14084 0.715835 4.10689C0.699708 4.07293 0.691406 4.03653 0.691406 3.99977C0.691406 3.96302 0.699708 3.92662 0.715835 3.89266C0.731963 3.85871 0.755601 3.82786 0.785398 3.80188L3.99017 1.00482C4.0503 0.952337 4.13186 0.922852 4.2169 0.922852C4.30195 0.922852 4.38351 0.952337 4.44364 1.00482C4.50378 1.05731 4.53756 1.12849 4.53756 1.20271C4.53756 1.27694 4.50378 1.34812 4.44364 1.40061L1.46521 3.99977L4.44364 6.59894Z" fill="black"/>
            </svg>
          </button>
          <button ref={nextBtnRef} className={`rounded-full hover:scale-105 transition-all will-change-transform active:scale-90 bg-white cursor-pointer absolute right-[10px] top-[50%] translate-y-[-50%] flex items-center justify-center z-10 h-[20px] w-[20px]`}>
            <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.556358 6.59894C0.526582 6.62493 0.502963 6.65578 0.486849 6.68974C0.470735 6.72369 0.46244 6.76008 0.46244 6.79684C0.46244 6.83359 0.470735 6.86998 0.486849 6.90393C0.502963 6.93789 0.526582 6.96874 0.556358 6.99473C0.586133 7.02072 0.621482 7.04133 0.660386 7.05539C0.69929 7.06946 0.740986 7.0767 0.783096 7.0767C0.825205 7.0767 0.866901 7.06946 0.905805 7.05539C0.944709 7.04133 0.980057 7.02072 1.00983 6.99473L4.2146 4.19767C4.2444 4.17169 4.26804 4.14084 4.28416 4.10689C4.30029 4.07293 4.30859 4.03653 4.30859 3.99977C4.30859 3.96302 4.30029 3.92662 4.28416 3.89266C4.26804 3.85871 4.2444 3.82786 4.2146 3.80188L1.00983 1.00482C0.949698 0.952337 0.868139 0.922852 0.783096 0.922852C0.698052 0.922852 0.616493 0.952337 0.556358 1.00482C0.496223 1.05731 0.46244 1.12849 0.46244 1.20271C0.46244 1.27694 0.496223 1.34812 0.556358 1.40061L3.53479 3.99977L0.556358 6.59894Z" fill="black"/>
            </svg>
          </button>
        </div>
        {prevBtnRef.current && nextBtnRef.current 
          ? (
            <Swiper
              spaceBetween={0}
              slidesPerView={'auto'}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: prevBtnRef.current,
                nextEl: nextBtnRef.current,
              }}
              modules={[Navigation, Pagination]}
              className='!p-0 !m-0'
            >
              {props.sliderImageList.map((src, index) => (
                <SwiperSlide key={index} className='w-full !flex !items-center'>
                  <Image src={src} alt='specialist-card-img' width={262} height={194} quality={100} className='w-full' />
                </SwiperSlide>
              ))}
            </Swiper>
          )
          : (
            <Skeleton variant="rectangular" width={imgWidth} height={imgWidth * 0.74} />
          )
        }
      </div>
      <div className="sm:p-[10px_12px] p-[7px_8px] flex flex-col justify-between">
        <div> 
          <div className="mb-[6px] flex items-center justify-between">
            <div className="flex items-center">
              <Image src={props.userImg} alt='specialist-user-img' width={33} height={33} quality={100} className='rounded-full sm:w-[33px] sm:h-[33px] w-[20px] h-[20px]' />
              <h6 className='sm:ml-[8px] ml-[5px] sm:text-[14px] text-[11px] text-nowrap'>{props.name}</h6>
            </div>
            <div className="flex items-center">
              <svg className='sm:w-[14px] sm:h-[14px] w-[9px] h-[9px]' width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.52447 0.463524C6.67415 0.00286841 7.32585 0.00286996 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z" fill="#FE9800"/>
              </svg>
              <p className='sm:text-[14px] text-[11px] sm:ml-[3px] ml-[2px] leading-[1px]'>{props.rating}</p>
            </div>
          </div>
          <p className='text-black text-opacity-50 sm:text-[14px] text-[10px] sm:pb-[40px] pb-[30px]'>{props.text}</p>
        </div>
        <p className='sm:text-[24px] text-[14px] font-medium absolute bottom-[12px] left-[10px]'>${props.price}</p>
      </div>
    </li>
  );
};