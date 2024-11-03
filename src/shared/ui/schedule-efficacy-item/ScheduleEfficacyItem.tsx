'use client'
import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

interface IProps {
  title: string
  value: number
  color: string
}

export const ScheduleEfficacyItem: React.FC<IProps> = ({title, value, color}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
      const timeout = setTimeout(() => {
          setDisplayValue(value);
      }, 500);

      return () => clearTimeout(timeout);
  }, [value]); 

  return (
    <div className="w-fit font-bold">
      <div className="sm:w-[74px] sm:h-[74px] w-[60px] h-[60px] relative">
        <CircularProgressbar
          value={displayValue}
          strokeWidth={7}
          styles={buildStyles({
            pathColor: color,
            textColor: '#000',
            trailColor: "#F3F7FF",
            strokeLinecap: 'round',
            pathTransition: 'ease 0.5s'
          })}
        />
        <div className="text-center absolute w-full h-full flex items-center justify-center sm:text-[14px] text-[12px] top-0">
          <div className="">
            <p>{value}%</p>
          </div>
        </div>
      </div>
      <div className="sm:mt-[10px] mt-[5px] sm:text-[17px] text-[14px] text-center">
        {title}
      </div>
    </div>
  );
};