import { SkillLvl } from '@/shared/ui/skill-lvl/SkillLvl';
import { TitleH4 } from '@/shared/ui/title-h4/TitleH4';
import React from 'react';

export const ResumeSkill = () => {
  const skillLvlList = [
    {title: 'UI UX Design', lvl: 95},
    {title: 'Graphics Design', lvl: 20},
    {title: 'HTML', lvl: 80},
  ]

  return (
    <div>
      <TitleH4>Навыки</TitleH4>
      <ul className='flex flex-col gap-y-[25px]'>
        {skillLvlList.map(({title, lvl}, index) => (
          <SkillLvl key={index} title={title} lvl={lvl} />
        ))}
      </ul>
    </div>
  );
};