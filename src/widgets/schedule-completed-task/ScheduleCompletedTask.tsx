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

export const ScheduleCompletedTask = () => {
  return (
    <div className="mt-[74px]">
      <h5 className="mb-[24px] text-[17px] font-bold">Выполненные задачи</h5>
      <div className="w-full flex justify-between h-[200px]">
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
              <div className="h-[70%] sm:w-[68px] w-[40px] flex justify-between">
                <CompletedTaskProgress color={color} heightValue={completedHeightPercent} />
                <CompletedTaskProgress color={color} heightValue={totalHeightPercent} taskPlaned />
              </div>
              <div className="sm:mt-[18px] mt-[10px] text-center text-black text-opacity-70">
                <p className='font-[700] sm:text-[17px] text-[12px]'>{taskItem.completed}/{taskItem.planned}</p>
                <p className='sm:text-[10px] text-[8px]'>23-7-2024</p>
              </div>
            </div>
          )})
        }
      </div>
    </div>
  );
};