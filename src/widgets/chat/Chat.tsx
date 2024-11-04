'use client'
import { SendMessageChat } from '@/entities/divice-manager/ui/send-message-chat/SendMessageChat';
import { ChatItemInterlocutor } from '@/features/chat-item-interlocutor/ChatItemInterlocutor';
import { useGetHeightContainer } from '@/shared/hooks/useGetSizeContainer';
import { UserChatStatus } from '@/shared/ui/user-chat-status/UserChatStatus';
import React, { useRef } from 'react';

interface IProps {
  setActiveComponentValue: (activeComponentValue: 'chat' | 'profile' | 'profile-list') => void
}

export const Chat: React.FC<IProps> = ({setActiveComponentValue}) => {
  const refContainer = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)

  const { height: heightContainer } = useGetHeightContainer(refContainer)
  const { height } = useGetHeightContainer(ref)

  const chatList = [
    {
      isHelloMessage: true,
      status: 'online' as 'online' | 'offline',
      imgSrc: '/device-manager/chat-img.png',
      title: 'Taskia jannat iva',
      text: 'I hope this message finds you well. It’s been a little while since we last caught up, and I’ve been thinking about you. How have things been on your end? I genuinely want to know how you’re doing, ',
      time: '12:08'
    },
    {
      isRead: true,
      status: 'online' as 'online' | 'offline',
      imgSrc: '/device-manager/chat-img.png',
      title: 'Taskia jannat iva',
      text: 'Hi How are you?',
      time: '12:08'
    },
    {
      isRead: false,
      status: 'online' as 'online' | 'offline',
      imgSrc: '/device-manager/chat-img.png',
      title: 'Taskia jannat iva',
      audioFileUrl: '/audio.mp3',
      time: '12:08'
    }
  ]

  const handleClick = () => {
    setActiveComponentValue('profile')
  }

  return (
    <div style={{height: heightContainer}} ref={refContainer} className='w-full h-full col-span-3 bg-white md:rounded-[10px] rounded-[10px_0px_0px_10px] relative overflow-hidden'>
      <div className="flex items-center justify-between border-b-[1px] border-[#ECEEF0] p-[12px_14px]">
        <div className="w-full">
          <UserChatStatus handleClick={handleClick} imgSrc={'/device-manager/chat-img.png'} size={32} status='online'>Taskia jannat iva</UserChatStatus>
        </div>
      </div>
      <div ref={ref} className="overflow-hidden">
        <ul style={{height: height - 80}} className="flex flex-col gap-y-[14px] p-[14px] overflow-y-auto scroll-decor">
          {chatList.map((chatItem, index) => (
            <ChatItemInterlocutor key={index} {...chatItem} />
          ))}
        </ul>
      </div>
      <SendMessageChat />
    </div>
  );
};