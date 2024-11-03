'use client'
import { CatalogItem } from '@/features/catalog-item/CatalogItem';
import { useGetHeightContainer } from '@/shared/hooks/useGetSizeContainer';
import React, { useRef } from 'react';

const list = [
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: true},
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: false},
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: true},
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: false},
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: true},
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: false},
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: true},
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: false},
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: true},
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: false},
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: true},
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: false},
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: true},
  {imgSrc: '/workspace/analytics/list-item-img.png', title: 'Marilyn Garcia', text: 'UI UX Designer', commentValue: 13, online: false},
]

export const CatalogList = () => {
  const ref = useRef<HTMLDivElement>(null)
  const {height} = useGetHeightContainer(ref)

  return (
    <div ref={ref} className='sm:mt-[20px] mt-[10px] w-full'>
      <ul style={{maxHeight: height}} className={`w-full pb-[150px] h-full grid 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-[10px] overflow-y-auto rounded-[6px]`}>
        {list.map((item, index) => (
          <CatalogItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};