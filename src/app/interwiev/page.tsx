import React from 'react';
import { InterwievBtns } from '@/widgets/interwiev-btns/InterwievBtns';
import { InterwievVideoList } from '@/widgets/interwiev-video-list/InterwievVideoList';

export default function Page() {

  return (
    <section className='w-full h-full overflow-hidden bg-[#F2F3F5] flex flex-col absolute top-0 sm:pt-[64px] pt-[45px] z-[-1]'>
      <InterwievVideoList />
      <InterwievBtns />
    </section>
  );
};