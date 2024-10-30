import { SpecialistCard } from '@/entities/specialist/ui/specialist-card/SpecialistCard';
import React from 'react';

interface IProps {
  list: {
    sliderImageList: string[]
    userImg: string
    name: string
    rating: string | number
    text: string
    price: number
  }[]
}

export const SpecialistList: React.FC<IProps> = ({list}) => {
  return (
    <ul className='grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-[20px] gap-[10px] mb-[32px]'>
      {list.map((specialistItem, index) => (
        <SpecialistCard key={index} {...specialistItem} />
      ))}
    </ul>
  );
};