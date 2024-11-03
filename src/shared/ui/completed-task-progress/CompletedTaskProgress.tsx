'use client'
import React, { useEffect, useState } from 'react';

interface IProps {
  heightValue: string | number
  color: string
  taskPlaned?: boolean
}

export const CompletedTaskProgress: React.FC<IProps> = ({color, heightValue, taskPlaned}) => {
  const [height, setHeight] = useState<number | string>(taskPlaned ? 100: 50);

  useEffect(() => {
      const timeout = setTimeout(() => {
        setHeight(heightValue);
      }, 500);

      return () => clearTimeout(timeout);
  }, [heightValue]); 

  return (
    <div className="h-full w-[45%] flex items-end">
      <div style={{height: `${height}%`, background: color}} className={`w-full rounded-[50px] duration-700 transition-all ease-out ${taskPlaned ? 'opacity-25' : ''}`}></div>
    </div>
  );
};