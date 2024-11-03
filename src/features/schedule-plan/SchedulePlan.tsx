import Image from 'next/image';
import React from 'react';

export const SchedulePlan = () => {
  return (
    <div className="mt-[44px]">
      <h5 className="mb-[24px] text-[17px] font-bold">План</h5>
      <div className="flex flex-col gap-y-[15px]">
        <div className="p-[9px_0px_9px_7px] bg-[#F3F7FF] rounded-[6px_0px_0px_6px] flex relative items-center">
          <div className="flex">
            <Image src={'/workspace/dashboard/user-decor-img-1.png'} alt='user-decor-img-1' width={28} height={28} quality={100} className='rounded-full' />
            <Image src={'/workspace/dashboard/user-decor-img-2.png'} alt='user-decor-img-2' width={28} height={28} quality={100} className='rounded-full ml-[-3px]' />
            <Image src={'/workspace/dashboard/user-decor-img-3.png'} alt='user-decor-img-3' width={28} height={28} quality={100} className='rounded-full ml-[-3px]' />
          </div>
          <p className='text-black text-opacity-70 text-[14px] font-bold ml-[20px]'>12:00 <span className={`text-opacity-100 ${'text-[#3BA55D]'}`}>-</span> 12:00</p>
          <div className="w-[4px] h-full bg-[#3BA55D] absolute top-0 right-0"></div>
        </div>

        <div className="p-[9px_0px_9px_7px] bg-[#F3F7FF] rounded-[6px_0px_0px_6px] flex relative items-center">
          <div className="flex">
            <Image src={'/workspace/dashboard/user-decor-img-1.png'} alt='user-decor-img-1' width={28} height={28} quality={100} className='rounded-full' />
            <Image src={'/workspace/dashboard/user-decor-img-2.png'} alt='user-decor-img-2' width={28} height={28} quality={100} className='rounded-full ml-[-3px]' />
            <Image src={'/workspace/dashboard/user-decor-img-3.png'} alt='user-decor-img-3' width={28} height={28} quality={100} className='rounded-full ml-[-3px]' />
          </div>
          <p className='text-black text-opacity-70 text-[14px] font-bold ml-[20px]'>12:00 <span className={`text-opacity-100 ${'text-[#5765F2]'}`}>-</span> 12:00</p>
          <div className="w-[4px] h-full bg-[#5765F2] absolute top-0 right-0"></div>
        </div>
      </div>
    </div>
  );
};