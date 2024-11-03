'use client'
import { calculateDaysBetween, TDay } from '@/shared/lib/calculateDaysBetween';
import { calculateDaysSince } from '@/shared/lib/calculateDaysSince';
import { getWeekArray } from '@/shared/lib/getWeekArray';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface IProps {
  activeIndexCol: number | null
  title: string, 
  dayStart: string, 
  timeStart: string, 
  dayEnd: string, 
  timeEnd: string
  progress: number
  colorFrom: string
  colorTo: string
  containerColor: string
}

export const ScheduleTableRow: React.FC<IProps> = ({activeIndexCol, dayEnd, dayStart, timeEnd, timeStart, title, progress, colorFrom, colorTo, containerColor}) => {
  const arr = getWeekArray(0)
  const startHours = timeStart.split(':')[0]
  const endHours = timeEnd.split(':')[0]

  const [hourWidthValue, setHourWidthValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const updateHourWidth = () => {
    if (ref.current) {
      const value = (ref.current.clientWidth / 7) / 24;
      setHourWidthValue(value);
    }
  };

  useEffect(() => {
    updateHourWidth();

    window.addEventListener('resize', updateHourWidth);

    return () => {
      window.removeEventListener('resize', updateHourWidth);
    };
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-7 bg-inherit relative 2xl:h-[70px] lg:h-[60px] sm:h-[50px] h-[40px]">
      {/* <div ref={ref} className="h-full bg-inherit border-r-[1px] border-b-[1px] relative z-10 col-span-3 border-black border-opacity-15 pl-[25px] flex items-center text-[17px] text-black text-opacity-50">{title}</div> */}
      {arr.map((_, index) => {
        return (
          <div key={index} className={`h-full border-r-[1px] border-b-[1px] border-black border-opacity-15 ${activeIndexCol === index ? 'bg-[#FFD6B9]': ''}`}></div>
        )
      })}
        <div style={{
            width: `${((24 *  hourWidthValue) * calculateDaysBetween(dayStart, dayEnd)) + ((Number(endHours) - Number(startHours)) * hourWidthValue)}px`,
            marginLeft: `${((Number(startHours) ) * hourWidthValue) + (hourWidthValue * 24 * 2) + (-(calculateDaysSince(dayStart)) * 24 * hourWidthValue)}px`
          }} 
          className="absolute h-full flex items-center"
        >
          <div style={{backgroundColor: containerColor}} className="h-[80%] w-full rounded-[50px] overflow-hidden text-white relative">
            <div style={{width: `${progress}%`, backgroundImage: `linear-gradient(to right, ${colorFrom}, ${colorTo})`}} className="h-full rounded-[50px] p-[0px_20px_0px_10px] bg-blue-600 flex items-center justify-between">
              {progress > 40 && (
                <>
                  <div className="flex items-center lg:gap-x-[11px] gap-x-[6px]">
                    <div className="flex">
                      <Image src={'/workspace/dashboard/user-decor-img-1.png'} alt='user-decor-img-1' width={30} height={30} quality={100} className='rounded-full lg:w-[30px] lg:h-[30px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]' />
                      <Image src={'/workspace/dashboard/user-decor-img-2.png'} alt='user-decor-img-2' width={30} height={30} quality={100} className='rounded-full sm:ml-[-6px] ml-[-3px] lg:w-[30px] lg:h-[30px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]' />
                      <Image src={'/workspace/dashboard/user-decor-img-3.png'} alt='user-decor-img-3' width={30} height={30} quality={100} className='rounded-full sm:ml-[-6px] ml-[-3px] lg:w-[30px] lg:h-[30px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]' />
                    </div>
                    <div className="w-[1px] sm:h-[17px] h-[12px] bg-white bg-opacity-25"></div>
                    <div className="lg:text-[10px] md:text-[8px] text-[6px] font-bold">{timeStart} PM</div>
                  </div>
                  <div className="lg:text-[17px] md:text-[14px] sm:text-[12px] text-[10px] font-extrabold">{progress}%</div>
                </>
              )}
              {progress <= 40 && (
                <div className='flex justify-between w-full items-center flex-nowrap absolute'>
                  <div className="lg:text-[17px] md:text-[14px] sm:text-[12px] text-[10px] font-extrabold text-nowrap">{progress}%</div>
                </div>
              )}
            </div>
          </div>
        </div>
    </div>
  );
};