import React from 'react';

interface IProps {
  title: string
  lvl: number
}

export const SkillLvl: React.FC<IProps> = ({title, lvl}) => {
  return (
    <li>
      <h6 className='text-[#46494E] sm:text-[24px] text-[18px] md:text-start text-center font-normal mb-[15px]'>{title}</h6>
      <div className='bg-[#F6F6F7] w-full h-[16px] rounded-[50px] overflow-hidden'>
        <div style={{width: `${lvl}%`}} className={`bg-green-light h-full rounded-[50px]`}></div>
      </div>
    </li>
  );
};