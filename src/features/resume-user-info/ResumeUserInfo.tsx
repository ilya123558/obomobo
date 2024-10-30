import Image from 'next/image';
import React from 'react';
import style from './ResumeUserInfo.module.scss'
import { Container } from '@/shared/ui/container/Container';

export const ResumeUserInfo = () => {
  return (
    <Container>
      <div className='w-full lg:mt-[80px] mt-[20px] flex items-center md:flex-row flex-col md:text-start text-center'>
        <div className={`rounded-full flex items-center justify-center w-fit h-fit p-[4px] ${style.img_container}`}>
          <Image src={'/user/resume/profile-img.png'} alt='profile-img' width={177} height={177} quality={100} className='rounded-full lg:w-[177px] lg:h-[177px] w-[140px] h-[140px]' />
        </div>
        <div className="lg:ml-[80px] md:ml-[40px]">
          <h4 className='lg:text-[54px] text-[30px] font-medium lg:leading-[78px]'>Taskia jannat iva</h4>
          <p className='text-[#758195] lg:text-[36px] text-[20px]'>UI UX Designer</p>
        </div>
      </div>
    </Container>
  );
};