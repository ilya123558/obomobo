import Image from 'next/image';
import React, { PropsWithChildren } from 'react';

interface IProps {
  size: number
  status: 'online' | 'offline'
  imgSrc: string
  classNameWrapper?: string
  classNameImage?: string
  classNameStatus?: string
  handleClick: () => void
}

export const UserChatStatus: React.FC<PropsWithChildren<IProps>> = ({size, status, children, imgSrc, classNameImage, classNameStatus, classNameWrapper, handleClick}) => {
  return (
    <div className={`flex items-center ${classNameWrapper ? classNameWrapper : ''}`}>
      <div onClick={handleClick} className="relative">
        <Image src={imgSrc} alt='chat-img' width={size} height={size} quality={100} className={`rounded-full ${classNameImage ? classNameImage : ''}`} />
        <div className={`absolute w-[7px] h-[7px] rounded-full  border-[1px] border-white bottom-[1px] right-[1px] ${status === 'online' ? 'bg-green': 'bg-gray-400'} ${classNameStatus ? classNameStatus : ''}`}></div>
      </div>
      <h6 className='text-[14px] ml-[10px]'>{children}</h6>
    </div>
  );
};