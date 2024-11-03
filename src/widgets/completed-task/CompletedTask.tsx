'use client'
import { calculateHeightPercent } from '@/shared/lib/calculateHeightPercent';
import { CompletedTaskProgress } from '@/shared/ui/completed-task-progress/CompletedTaskProgress';
import React from 'react';

const taskList = [
  {completed: 150, planned: 100, data: '23-7-2024'},
  {completed: 10, planned: 10, data: '23-7-2024'},
  {completed: 10, planned: 5, data: '23-7-2024'},
  {completed: 150, planned: 100, data: '23-7-2024'},
]

export const CompletedTask = () => {
  return (
    <div className="bg-white sm:min-h-[503px] min-h-[300px] min-w-[55%] rounded-10px md:p-[35px_38px_40px] p-[20px_20px] flex flex-col gap-y-[10%] justify-between rounded-[10px]">
      <h5 className='font-bold sm:text-[24px] text-[18px]'>Выполненные задачи</h5>
      <div className="w-full h-full flex justify-between">
        {taskList.map((taskItem, index) => {
          const {completedHeightPercent, totalHeightPercent} = calculateHeightPercent(taskItem);
          let color = '#154CB9'

          if(index === 0) {
            color = '#154CB9'
          }

          if(index === 1) {
            color = '#7D53D1'
          }

          if(index === 2) {
            color = '#C356B2'
          }

          if(index === 3) {
            color = '#F2B329'
          }

          return (
            <div key={index} className="flex flex-col h-full w-fit">
              <div className="sm:h-[250px] h-[130px] md:w-[125px] sm:w-[90px] w-[50px] flex justify-between">
                <CompletedTaskProgress color={color} heightValue={completedHeightPercent} />
                <CompletedTaskProgress color={color} heightValue={totalHeightPercent} taskPlaned />
              </div>
              <div className="md:mt-[35px] sm:mt-[20px] mt-[10px] text-center text-black text-opacity-70">
                <p className='font-[700] md:text-[28px] sm:text-[20px] text-[14px]'>{taskItem.completed}/{taskItem.planned}</p>
                <p className='md:text-[14px] sm:text-[12px] text-[10px]'>23-7-2024</p>
              </div>
            </div>
          )})
        }
      </div>
    </div>
  );
};