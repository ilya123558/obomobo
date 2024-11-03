import { getWeekArray } from '@/shared/lib/getWeekArray';
import React from 'react';

interface IProps {
  activeIndexCol: number | null
  taskListLength?: number
  withoutTitleBlock?: boolean
}

export const EmptyTableRow: React.FC<IProps> = ({activeIndexCol, taskListLength, withoutTitleBlock}) => {
  const arr = getWeekArray(0)

  if(withoutTitleBlock && taskListLength) {
    return (
      <>
        {Array(taskListLength).fill(null).map((_, index) => (
          <div key={index} className="grid grid-cols-7 2xl:h-[70px] lg:h-[60px] sm:h-[50px] h-[40px]">
            {arr.map((_, index) => (
              <div key={index} className="h-full border-r-[1px] border-b-[1px] border-black border-opacity-15 flex items-center text-[17px] text-black text-opacity-50"></div>
            ))}
          </div>
        ))}
        {taskListLength && Array(taskListLength).fill(null).map((_, index) => (
          <div key={index} className="grid grid-cols-7 2xl:h-[70px] lg:h-[60px] sm:h-[50px] h-[40px]">
            {arr.map((_, index) => (
              <div key={index} className="h-full border-r-[1px] border-b-[1px] border-black border-opacity-15 flex items-center text-[17px] text-black text-opacity-50"></div>
            ))}
          </div>
        ))}
      </>
    )
  }

  if(withoutTitleBlock) {
    return (
      <div className="grid grid-cols-7 2xl:h-[70px] lg:h-[60px] sm:h-[50px] h-[40px]">
        {arr.map((_, index) => (
          <div key={index} className="h-full border-r-[1px] border-b-[1px] border-black border-opacity-15 flex items-center text-[17px] text-black text-opacity-50"></div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-7 bg-inherit relative 2xl:h-[70px] lg:h-[60px] sm:h-[50px] h-[40px]">
      {arr.map((_, index) => {
        return (
          <div key={index} className={`h-full border-r-[1px] border-b-[1px] border-black border-opacity-15 ${activeIndexCol === index ? 'bg-[#FFD6B9]': ''}`}></div>
        )
      })}
        
    </div>
  );
};