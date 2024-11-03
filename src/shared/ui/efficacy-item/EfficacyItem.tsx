'use client'
import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

interface IProps {
  title: string
  value: number
  color: string
}

export const EfficacyItem: React.FC<IProps> = ({title, value, color}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
      const timeout = setTimeout(() => {
          setDisplayValue(value);
      }, 500);

      return () => clearTimeout(timeout);
  }, [value]); 

  return (
    <div className="w-fit font-bold">
      <div className="lg:w-[97px] lg:h-[97px] md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] relative">
        <CircularProgressbar
          value={displayValue}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: color,
            textColor: '#000',
            trailColor: "#F3F7FF",
            strokeLinecap: 'round',
            pathTransition: 'ease 0.5s'
          })}
        />
        <div className="text-center absolute w-full h-full flex items-center justify-center md:text-[14px] sm:text-[12px] text-[8px] top-0">
          <div className="">
            <p>{value}%</p>
          </div>
        </div>
      </div>
      <div className="md:mt-[20px] sm:mt-[10px] mt-[6px] md:text-[24px] sm:text-[18px] text-[12px] text-center">
        {title}
      </div>
    </div>
  );
};