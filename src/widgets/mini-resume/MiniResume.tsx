'use client'
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import style from './MiniResume.module.scss'
import { Button } from '@/shared/ui/button/Button';
import { TitleH6 } from '@/shared/ui/title-h6/TitleH6';
import { MiniResumeList } from '@/features/mini-resume-list/MiniResumeList';
import { MiniResumePhotoSlider } from '../mini-resume-photo-slider/MiniResumePhotoSlider';
import { useGetHeightContainer } from '@/shared/hooks/useGetSizeContainer';

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
const citiesList = ['Balashikha', 'Bogorodsky', 'Vlasikha', 'Volokolamsk', 'Voskresensk', 'Balashikha', 'Bogorodsky', 'Vlasikha', 'Volokolamsk', 'Voskresensk']

interface IProps {
  setActiveComponentValue: (activeComponentValue: 'chat' | 'profile' | 'profile-list') => void
}

export const MiniResume: React.FC<IProps> = ({setActiveComponentValue}) => {
  const [showMoreCities, setShowMoreCities] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { height } = useGetHeightContainer(ref)

  const handleContact = () => {
    setActiveComponentValue('chat')
  }

  return (
    <div className='bg-white md:rounded-[10px_0px_0px_10px] rounded-[10px_0px_0px_10px] overflow-hidden'>
      <div ref={ref} style={{height}} className='overflow-x-hidden overflow-y-auto scroll-decor pb-[20px]'>
        <div className="p-[19px_15px_0px]">
          <div className='w-full flex items-center md:flex-row flex-col md:text-start text-center mb-[30px]'>
            <div className={`rounded-full flex items-center justify-center w-fit h-fit p-[4px] md:mr-[17px] ${style.img_container}`}>
              <Image src={'/user/resume/profile-img.png'} alt='profile-img' width={143} height={143} quality={100} className='rounded-full h-[143px] w-[143px]' />
            </div>
            <div className="flex flex-col md:items-start items-center text-[14px]">
              <h4 className='text-[24px] font-semibold mb-[8px]'>Taskia jannat iva</h4>
              <p className='text-[#758195] text-[12px] mb-[10px]'>Yesterday at 12:23 PM</p>
              <div className="mb-[14px] text-[14px] flex items-center gap-x-[4px]">
                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0245 0.463526C10.1741 0.00287056 10.8259 0.00286996 10.9755 0.463525L12.9697 6.60081C13.0366 6.80682 13.2286 6.9463 13.4452 6.9463H19.8983C20.3827 6.9463 20.5841 7.56611 20.1922 7.85081L14.9715 11.6439C14.7963 11.7712 14.7229 11.9969 14.7899 12.2029L16.784 18.3402C16.9337 18.8008 16.4064 19.1839 16.0146 18.8992L10.7939 15.1061C10.6186 14.9788 10.3814 14.9788 10.2061 15.1061L4.98542 18.8992C4.59356 19.1839 4.06632 18.8008 4.216 18.3402L6.21012 12.2029C6.27706 11.9969 6.20373 11.7712 6.02849 11.6439L0.8078 7.85081C0.415943 7.56611 0.61733 6.9463 1.10169 6.9463H7.55482C7.77143 6.9463 7.96341 6.80682 8.03035 6.60081L10.0245 0.463526Z" fill="#FE9800"/>
                </svg>
                <p className='font-medium'>4.8</p>
                <p>(262)</p>
              </div>
              <Button handleClick={handleContact} className='bg-green text-white text-[12px] font-semibold p-[5px_36px] rounded-[6px]'>Контакт</Button>
            </div>
          </div>

          <div className="flex flex-col text-[12px] mb-[15px]">
            <TitleH6>Выезд к клиенту</TitleH6>
            <p className='sm:w-[378px] w-[300px] text-black text-opacity-50 m-[5px_0px]'>
              {citiesList.filter((_, index) => showMoreCities ? true : index < 5).map((item, index) => (
                <span key={index}>{item}, </span>
              ))}
            </p>
            {!showMoreCities && <Button handleClick={() => setShowMoreCities(true)} className='underline text-green font-bold'>Показать больше</Button>}
          </div>

          <div className="mb-[15px]">
            <TitleH6>О себе</TitleH6>
            <p className='text-[12px] text-black text-opacity-70 mt-[5px]'>
              Hello! I have been repairing refrigerators, washing machines, and dishwashers for almost 20 years.
              I have worked for Bosch and Liebherr service centers for 10 of those years. My goal is a satisfied customer.
              I provide guarantees for my work for up to 24 months, and I give discounts to families with many children, 
              disabled people, and pensioners. I come to you for repairs on the date we have agreed upon. 
              I am a decent and honest craftsman who values ​​his reputation! Contact me, we will always come to an agreement.
            </p>
          </div>

          <div className="mb-[15px]">
            <TitleH6 className='mb-[10px]'>Образование</TitleH6>
            <MiniResumeList list={['Refrigeration Repair Engineersince 1997 (27 years)', 'Washing machine, dryer, dishwasher repair techniciansince 2001 (23 years)']} />
          </div>

          <div className="mb-[15px]">
            <TitleH6 className='mb-[10px]'>Опыт</TitleH6>
            <MiniResumeList list={['Bosch Service Centersince 2000 (24 years)', 'Liebherr Service Centersince 2000 (24 years)', 'On service since 2024']} />
          </div>

          <div className={`mb-[15px]`}>
            <MiniResumePhotoSlider photoList={photoList} />
          </div>

          <div>
            <TitleH6 className='mb-[10px]'>Опыт</TitleH6>
            <MiniResumeList byAgreement list={['Bosch Service Centersince 2000 (24 years)', 'Liebherr Service Centersince 2000 (24 years)', 'On service since 2024']} />
          </div>
        </div>
      </div>
    </div>
  )
}