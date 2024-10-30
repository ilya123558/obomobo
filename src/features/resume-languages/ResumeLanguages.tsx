import { SkillLvl } from '@/shared/ui/skill-lvl/SkillLvl';
import { TitleH4 } from '@/shared/ui/title-h4/TitleH4';
import React from 'react';

export const ResumeLanguages = () => {
  const skillLvlList = [
    {title: 'English', lvl: 80},
    {title: 'Russia', lvl: 30},
    {title: 'Hindi', lvl: 95},
  ]

  return (
    <div className='md:mt-[50px] mt-[80px]'>
      <TitleH4>Языки</TitleH4>
      <ul className='flex flex-col gap-y-[25px]'>
        {skillLvlList.map(({title, lvl}, index) => (
          <SkillLvl key={index} title={title} lvl={lvl} />
        ))}
      </ul>
    </div>
  );
};