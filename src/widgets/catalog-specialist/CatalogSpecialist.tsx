'use client'
import { SpecialistList } from '@/features/specialist-list/SpecialistList';
import { Container } from '@/shared/ui/container/Container';
import React, { useEffect, useState } from 'react';

const specialistList = [
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this messa sdokf ms;ldfm lsdmf lskdmf; lskdfm;lk ge finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this messa sdokf ms;ldfm lsdmf lskdmf; lskdfm;lk ge finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this messa sdokf ms;ldfm lsdmf lskdmf; lskdfm;lk ge finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
  {
    sliderImageList: ['/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png', '/catalog/specialist/specialist-card-img.png'],
    userImg: '/catalog/specialist/specialist-user-img.png',
    name: 'Taskia jannat',
    rating: 4.8,
    text: 'Example, I hope this message finds you well. It’s been a little while since we last caught up, ',
    price: 536
  },
]

export const CatalogSpecialist = () => {
  const maxPageItem = 10
  const [list, setList] = useState<{
    sliderImageList: string[]
    userImg: string
    name: string
    rating: string | number
    text: string
    price: number
  }[]>([])
  const [page, setPage] = useState(1)

  const handleMoreBtnClick = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    const result = specialistList.filter((_, index) => index < (maxPageItem * page))
    setList(result)
  }, [page])

  return (
    <div className='lg:pt-[25px] pt-[15px] mx-[2%]'>
      <SpecialistList list={list} />
      {!(specialistList.length < (page * maxPageItem)) && (
        <div className="flex justify-center">
          <button onClick={handleMoreBtnClick} className='rounded-[50px] bg-[#F5F6F7] p-[7px_56px] will-change-transform transition-all active:scale-95 hover:scale-105 text-[14px] mb-[30px]'>
            Больше
          </button>
        </div>
      )}
    </div>
  );
};