'use client'
import { DMMenu } from '@/features/dm-menu/DMMenu';
import { useGetHeightContainer } from '@/shared/hooks/useGetSizeContainer';
import { Chat } from '@/widgets/chat/Chat';
import { DMControlPanel } from '@/widgets/dm-control-panel/DMControlPanel';
import { MiniResume } from '@/widgets/mini-resume/MiniResume';
import { ProfileList } from '@/widgets/profile-list/ProfileList';
import React, { useRef, useState } from 'react';

export default function Page() {
  const [activeComponentValue, setActiveComponentValue] = useState<"chat" | "profile" | "profile-list">('chat')
  const containerRef = useRef<HTMLDivElement>(null)
  const { height } = useGetHeightContainer(containerRef)

  return (
    <section className='bg-[#F5F6F7] w-screen absolute top-0 z-[-1] overflow-hidden'>
      <div className="sm:mt-[64px] mt-[43px] h-full">
        <DMControlPanel />
        <div ref={containerRef} style={{height}} className="md:hidden relative overflow-hidden">
          <DMMenu activeComponentValue={activeComponentValue} setActiveComponentValue={setActiveComponentValue} />
          <div className={`transition-all duration-500 absolute top-0 left-0 w-full h-full ${activeComponentValue === 'profile-list' ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
            <ProfileList setActiveComponentValue={setActiveComponentValue} />
          </div>
          <div className={`transition-all duration-500 absolute top-0 left-0 w-full h-full ${activeComponentValue === 'chat' ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
            <Chat setActiveComponentValue={setActiveComponentValue} />
          </div>
          <div className={`transition-all duration-500 absolute top-0 left-0 w-full h-full ${activeComponentValue === 'profile' ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
            <MiniResume setActiveComponentValue={setActiveComponentValue} />
          </div>
          </div>
        <div className="md:grid hidden grid-cols-3 w-full gap-x-[15px] h-full overflow-hidden relative">
          <ProfileList setActiveComponentValue={setActiveComponentValue} />
          <Chat setActiveComponentValue={setActiveComponentValue} />
          <MiniResume setActiveComponentValue={setActiveComponentValue} />
        </div>
      </div>
    </section>
  );
};