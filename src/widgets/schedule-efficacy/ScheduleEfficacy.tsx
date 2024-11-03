import React from 'react';
import { ScheduleEfficacyItem } from '@/shared/ui/schedule-efficacy-item/ScheduleEfficacyItem';

export const ScheduleEfficacy = () => {
  const efficacyList = [
    {title: 'A', value: 77},
    {title: 'B', value: 36},
    {title: 'C', value: 88},
    {title: 'D', value: 33},
  ]

  const getIndex = (index: number) => {
    if(index > 3) {
      return getIndex(index - 4)
    }

    return index
  }

  return (
    <div className="mt-[44px]">
      <h5 className="mb-[24px] text-[17px] font-bold">Эффективность</h5>
      <div className='grid grid-cols-4 gap-y-[15px]'>
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
            <ScheduleEfficacyItem key={index} title={title} value={value} color={color} />
          )
        })}
      </div>
    </div>
  );
};