import Image from 'next/image';
import React from 'react';

export const HeaderProfile = () => {
  return (
    <div className='sm:w-[36px] sm:h-[36px] w-[25px] h-[25px] overflow-hidden rounded-full cursor-pointer sm:ml-[13px] ml-[7px]'>
      <Image src={'/header/profile.png'} alt='profile' height={36} width={36} quality={100} className='sm:w-[36px] sm:h-[36px] w-[25px] h-[25px]' />
    </div>
  );
};