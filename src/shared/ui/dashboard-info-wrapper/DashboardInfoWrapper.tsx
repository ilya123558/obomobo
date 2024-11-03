import React from 'react';
import style from './DashboardInfoWrapper.module.scss'
import Image from 'next/image';

interface IProps {
  title: string
  withUsersIcon?: boolean
  countValue: string
}

export const DashboardInfoWrapper: React.FC<IProps> = ({title, withUsersIcon, countValue}) => {
  return (
    <div className={`${style.wrapper} 2xl:h-[133px] sm:h-[100px] h-fit text-nowrap rounded-[6px] bg-white font-medium 2xl:text-[22px] xl:text-[18px] sm:text-[14px] text-[12px] flex flex-col sm:items-start items-center justify-between 2xl:p-[19px_0px_17px_21px] sm:p-[15px_0px_14px_16px] p-[7px_5px]`}>
      <h6 className='sm:my-[0px] my-[5px]'>{title}</h6>
      {withUsersIcon && (
        <div className="flex">
          <Image src={'/workspace/dashboard/user-decor-img-1.png'} alt='user-decor-img-1' width={16} height={16} quality={100} className='rounded-full' />
          <Image src={'/workspace/dashboard/user-decor-img-2.png'} alt='user-decor-img-2' width={16} height={16} quality={100} className='rounded-full ml-[-3px]' />
          <Image src={'/workspace/dashboard/user-decor-img-3.png'} alt='user-decor-img-3' width={16} height={16} quality={100} className='rounded-full ml-[-3px]' />
          <Image src={'/workspace/dashboard/user-decor-img-4.png'} alt='user-decor-img-4' width={16} height={16} quality={100} className='rounded-full ml-[-3px]' />
          <Image src={'/workspace/dashboard/user-decor-img-5.png'} alt='user-decor-img-5' width={16} height={16} quality={100} className='rounded-full ml-[-3px]' />
        </div>
      )}
      <p className='text-black text-opacity-[0.8] mt-[10px]'>{countValue}</p>
    </div>
  );
};