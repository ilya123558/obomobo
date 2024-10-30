import { AudioPlayer } from '@/shared/ui/audio-player/AudioPlayer';
import { UserChatStatus } from '@/shared/ui/user-chat-status/UserChatStatus';
import React from 'react';

interface IProps {
  isRead?: boolean
  isHelloMessage?: boolean
  status: 'online' | 'offline'
  imgSrc: string
  title: string
  text?: string
  audioFileUrl?: string
  time: string
}

export const ChatItemInterlocutor: React.FC<IProps> = ({status, imgSrc, isRead, isHelloMessage, text, audioFileUrl, time, title}) => {
  return (
    <li className='flex flex-col sm:text-[14px] text-[12px]'>
      <div className="flex items-center mb-[10px]">
        <UserChatStatus handleClick={() => {}} imgSrc={imgSrc} size={26} status={status}>{title}</UserChatStatus>
        {!isHelloMessage && (
          <div className="m-[0px_6px]">
            {isRead && (
              <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8711 0.761787L3.83137 7.89773C3.79051 7.93919 3.74199 7.97209 3.68857 7.99453C3.63516 8.01698 3.57791 8.02853 3.52009 8.02853C3.46227 8.02853 3.40501 8.01698 3.3516 7.99453C3.29819 7.97209 3.24966 7.93919 3.2088 7.89773L0.128939 4.77575C0.0463807 4.69207 0 4.57856 0 4.46021C0 4.34186 0.0463807 4.22835 0.128939 4.14467C0.211497 4.06098 0.32347 4.01397 0.440225 4.01397C0.55698 4.01397 0.668953 4.06098 0.751511 4.14467L3.52009 6.95166L10.2485 0.130702C10.331 0.0470146 10.443 -8.81786e-10 10.5598 0C10.6765 8.81786e-10 10.7885 0.0470146 10.8711 0.130702C10.9536 0.214389 11 0.327893 11 0.446244C11 0.564596 10.9536 0.6781 10.8711 0.761787Z" fill="#15950C"/>
              </svg>
            )}
            {!isRead && (
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="5.5" r="5" stroke="#15950C"/>
              </svg>
            )}
          </div>
        )}
        <p className={`text-opacity-50 text-black ${!isHelloMessage ? '': 'ml-[10px]'}`}>{time}</p>
      </div>
      {text && (<div className="sm:max-w-[320px] max-w-[280px] w-fit sm:p-[8px_12px] p-[6px_10px] border-[1px] border-black border-opacity-15 rounded-[0px_10px_10px_10px]">
        <p className="">{text}</p>
      </div>)}
      {audioFileUrl && <AudioPlayer audioFileUrl={audioFileUrl} />}
    </li>
  );
};