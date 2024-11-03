'use client'
import React from 'react';
import { EfficacyItem } from '@/shared/ui/efficacy-item/EfficacyItem';

export const Efficacy = () => {
  const efficacyList = [
    {title: 'A', value: 77},
    {title: 'B', value: 36},
    {title: 'C', value: 88},
    {title: 'D', value: 33},
    {title: 'E', value: 77},
    {title: 'F', value: 36},
    {title: 'G', value: 88},
    {title: 'H', value: 33}
  ]

  const getIndex = (index: number) => {
    if(index > 3) {
      return getIndex(index - 4)
    }

    return index
  }

  return (
    <div className="bg-white md:h-[503px] sm:h-[350px] h-[250px] w-full rounded-10px md:p-[35px_38px_40px] p-[20px_20px] flex flex-col 2xl:gap-y-[10%] sm:gap-y-[40px] gap-y-[20px] rounded-[10px]">
      <h5 className='font-bold sm:text-[24px] text-[18px]'>Эффективность</h5>
      <div className="grid grid-cols-4 md:gap-y-[30px] gap-y-[20px]">
        {efficacyList.map(({title, value}, i) => {
          let color = '#5765F2'
          let index = getIndex(i)

          if(index === 0) {
            color = '#5765F2'
          }

          if(index === 1) {
            color = '#7B55BA'
          }

          if(index === 2) {
            color = '#CC62B8'
          }

          if(index === 3) {
            color = '#E4B030'
          }

          return (
            <EfficacyItem key={index} title={title} value={value} color={color} />
          )
        })}
      </div>
    </div>
  );
};