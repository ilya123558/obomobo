import { TitleH4 } from '@/shared/ui/title-h4/TitleH4';
import React from 'react';

export const ResumeEducation = () => {
  const educationList = [
    {ageFrom: 2014, ageTo: 2016, qualification: 'Bachelor Degree in Computer Science', universityName: 'University name'},
    {ageFrom: 2014, ageTo: 2016, qualification: 'Bachelor Degree in Computer Science', universityName: 'University name'}
  ]

  return (
    <div className='md:mt-[50px] sm:mt-[80px] mt-[40px]'>
      <TitleH4>Образование</TitleH4>
      <ul className='flex flex-col md:items-start items-center gap-y-[25px]'>
        {educationList.map(({ageFrom, ageTo, qualification, universityName}, index) => (
          <li key={index} className='max-w-[300px] sm:max-w-[350px] md:text-start text-center'>
            <h5 className='text-green-opasity sm:text-[24px] text-[14px] font-normal sm:mb-[10px] mb-[5px]'>{ageFrom}-{ageTo}</h5>
            <p className='text-[#46494E] sm:text-[24px] text-[14px] font-normal sm:mb-[10px] mb-[5px]'>{qualification}</p>
            <p className='sm:text-[17px] text-[12px] font-extralight'>{universityName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};