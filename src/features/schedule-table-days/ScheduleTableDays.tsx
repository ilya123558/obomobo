import React from 'react';

interface IProps {
  list: {title: string, day: number}[]
  isEmpty?: boolean
}

export const ScheduleTableDays: React.FC<IProps> = ({list, isEmpty}) => {
  if(isEmpty) {
    return <div className="w-full 2xl:h-[70px] lg:h-[60px] sm:h-[50px] h-[40px] border-b-[1px] border-black border-opacity-15"></div>
  }

  return (
    <div className="grid grid-cols-7 2xl:h-[70px] lg:h-[60px] sm:h-[50px] h-[40px] lg:text-[14px] md:text-[12px] text-[10px]">
      {
        list.map(({title, day}, index) => (
          <div key={index} className="h-full w-full flex flex-col text-center border-b-[1px] border-black border-opacity-15">
            <p className="2xl:mt-[18px] xl:mt-[16px] lg:mt-[12px] md:mt-[10px] sm:mt-[8px] mt-[5px] text-black text-opacity-50">{title}</p>
            <p className="">{day}</p>
          </div>
        ))
      }
    </div>
  );
};