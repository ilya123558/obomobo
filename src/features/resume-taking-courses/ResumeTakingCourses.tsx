import { TitleH4 } from '@/shared/ui/title-h4/TitleH4';
import React from 'react';

export const ResumeTakingCourses = () => {
  const takingCoursesList = [
    {ageFrom: 2014, ageTo: 2016, title: 'UI UX Design'},
    {ageFrom: 2014, ageTo: 2016, title: 'WordPress'},
  ]

  return (
    <div className='md:mt-[50px] sm:mt-[80px] mt-[40px]'>
      <TitleH4>Пройденые курсы</TitleH4>
      <ul className='flex flex-col gap-y-[25px] md:items-start items-center'>
        {takingCoursesList.map(({ageFrom, ageTo, title}, index) => (
          <li key={index} className='sm:max-w-[350px] max-w-[300px] md:text-start text-center sm:text-[24px] text-[18px]'>
            <h5 className='text-green font-normal sm:mb-[10px] mb-[5px]'>{ageFrom}-{ageTo}</h5>
            <p className='text-[#46494E] font-normal'>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};