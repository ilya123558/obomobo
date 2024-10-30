import { TitleH4 } from '@/shared/ui/title-h4/TitleH4';
import React from 'react';

export const ResumeWorkExperience = () => {
  const workExperienceList = [
    {
      position: "Senior UX Designer", 
      description: 'LLC "Kontur" (www.kontur.com), St. Petersburg Area of activity of the company: rg-services, Development of logo and corporate identity, Design of POS materials: Design of'
    }
  ]

  return (
    <div className='md:mt-[50px] mt-[80px]'>
      <TitleH4>Опыт работы</TitleH4>
      <ul className='flex flex-col gap-y-[25px]'>
        {workExperienceList.map(({position, description}, index) => (
          <li key={index} className='md:text-start text-center'>
            <h5 className='text-green-opasity sm:text-[17px] text-[14px] font-medium mb-[10px]'>{position}</h5>
            <p className='text-[#46494E] sm:text-[17px] text-[14px] font-normal mb-[10px]'>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};